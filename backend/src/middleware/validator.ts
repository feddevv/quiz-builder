import type { ZodType } from 'zod';
import type { NextFunction, Request, Response } from 'express';

interface Schemas {
  body?: ZodType;
}

export function validate(schemas: Schemas) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (schemas.body) {
      req.body = schemas.body.parse(req.body);
    }

    next();
  };
}
