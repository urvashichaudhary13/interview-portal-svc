import { checkSchema, validationResult } from 'express-validator';
import { SystemResponse } from './SystemResponse';

const validationHandler = ( validator ) => {
  return [
    checkSchema(validator),
    ( req, res, next ) => {
      const errors = validationResult(req);
      if( !errors.isEmpty() ) {
        next(SystemResponse.badRequestError('', errors.array()));
      }
      next();
    }
  ]
}

export { validationHandler }