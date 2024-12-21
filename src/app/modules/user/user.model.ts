import { model, Schema } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import { UserRole } from './user.constant';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<IUser, UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: UserRole,
      default: 'user',
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// hashing password before creating a user
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.salt_rounds));
  next();
});

// clearing password field after saving data into DB
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// statics
userSchema.statics.isUserExists = async function (email: string) {
  return await User.findOne({ email });
};

userSchema.statics.isPasswordCorrect = async function (
  plainPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export const User = model<IUser, UserModel>('User', userSchema);
