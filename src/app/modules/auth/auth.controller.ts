import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const loginData = req.body;
  const result = await AuthServices.loginUser(loginData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Login Successful',
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
};
