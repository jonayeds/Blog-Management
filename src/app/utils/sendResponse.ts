import { Response } from 'express';

type ResponseType<T> = {
  statusCode: number;
  success: true;
  message: string;
  data: T;
};

export const sendResponse = <T>(res: Response, data: ResponseType<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};
