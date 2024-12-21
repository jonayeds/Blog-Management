import { ZodError, ZodIssue } from 'zod';
import { TErrorSource } from '../interface/error';

export const handleZodError = (error: ZodError) => {
  const statusCode = 400;
  const errorSource: TErrorSource = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  return {
    statusCode,
    message: 'Validation Error',
    errorSource,
  };
};
