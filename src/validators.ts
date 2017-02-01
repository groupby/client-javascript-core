import * as theon from 'theon';

export function bodyValidator<T>(bodyProp: string, test: (value: T) => boolean | void, errorMessage: string) {
  const validate: theon.Request.Validator = (req, res, next) => {
    if (!test(req.body[bodyProp])) {
      return next(new Error(`body validation error: ${errorMessage}`));
    }
    next();
  };
  return validate;
}
