type HttpCode = {
  OK: number;
  CREATED: number;
  BAD_REQUEST: number;
  NOT_FOUND: number;
  UNAUTHORIZED: number;
  FORBIDDEN: number;
  INTERNAL_SERVER_ERROR: number;
  CONFLICT: number;
};

export const httpCode: HttpCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
  CONFLICT: 409,
};
