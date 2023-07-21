import { validationResult } from "express-validator";

const validateDocuments = (res, req, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
};

export { validateDocuments };
