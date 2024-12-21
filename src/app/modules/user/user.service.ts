import { IUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: IUser) => {
  const result = await User.create(payload);
  const { name, email, _id } = result;
  return { name, email, _id };
};

export const UserServices = {
  createUserIntoDB,
};
