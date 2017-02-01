import * as dotProp from 'dot-prop';
import * as theon from 'theon';

export function bodyValidator<T>(bodyProp: string, test: (value: T) => boolean | void, errorMessage: string) {
  return <theon.Request.Validator>((req, res, next) => {
    if (!test(dotProp.get(req, `body.${bodyProp}`))) {
      return next(new Error(`body validation error: ${errorMessage}`));
    }
    next();
  });
}
