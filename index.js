const { isErrorFromChain, extractCodeError } = require("./helpers");

const mapChainErrorToSnaxError = chainError => {
  const errorMessage = chainError.error.what;

  switch (chainError.error.code) {
    case 3050001:
      return new errors.AlreadyExistsError(errorMessage);
    case 3080001:
      return new errors.ResourcesUsageError(errorMessage);
    case 3080002:
      return new errors.ResourcesUsageError(errorMessage);
    case 3080004:
      return new errors.ResourcesUsageError(errorMessage);
    case 3081001:
      return new errors.InternalServerError(errorMessage);
    case 3050003:
      return new errors.InternalServerError(errorMessage);
    case 3050004:
      return new errors.InternalServerError(errorMessage);

    default:
      return new errors.InternalServerError(errorMessage);
  }
};
class SnaxError extends Error {
  constructor(message) {
    super(message);
    Object.defineProperty(this, "message", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: message
    });
  }

  static fromJSON(jsonError) {
    if (isErrorFromChain(jsonError)) {
      return mapChainErrorToSnaxError(jsonError);
    }

    return jsonError.name
      ? new errors[jsonError.name](jsonError.message)
      : new errors.GeneralError(jsonError.message);
  }
}

class AlreadyExistsError extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "AlreadyExistsError";
    this.message = message;
    this.code = 1;
    this.statusCode = 500;
  }
}

class BadRequestError extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
    this.message = message;
    this.code = 2;
    this.statusCode = 400;
  }
}

class NotFoundError extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.message = message;
    this.code = 3;
    this.statusCode = 404;
  }
}

class GeneralError extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "GeneralError";
    this.message = message;
    this.code = 4;
    this.statusCode = 500;
  }
}
class TwitterError extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "TwitterError";
    this.message = message;
    this.code = 5;
    this.statusCode = 500;
  }
}

class SteemitError extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "SteemitError";
    this.message = message;
    this.code = 6;
    this.statusCode = 500;
  }
}

class RestrictionError extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "RestrictionError";
    this.message = message;
    this.code = 7;
    this.statusCode = 500;
  }
}

class InternalServerError extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "InternalServerError";
    this.message = message;
    this.code = 8;
    this.statusCode = 500;
  }
}

class ResourcesUsageError extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "ResourcesUsageError";
    this.message = message;
    this.code = 9;
    this.statusCode = 500;
  }
}

const isAlreadyExistsErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new AlreadyExistsError().code;
};

const isBadRequestErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new BadRequestError().code;
};

const isNotFoundErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new NotFoundError().code;
};

const isGeneralErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new GeneralError().code;
};

const isTwitterErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new TwitterError().code;
};

const isSteemitErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new SteemitError().code;
};

const isRestrictionErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new RestrictionError().code;
};

const isInternalServerErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new InternalServerError().code;
};

const isResourcesUsageErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new ResourcesUsageError().code;
};

const errors = {
  SnaxError,
  AlreadyExistsError,
  BadRequestError,
  NotFoundError,
  GeneralError,
  TwitterError,
  SteemitError,
  RestrictionError,
  InternalServerError,
  ResourcesUsageError,
  isAlreadyExistsErrorType,
  isBadRequestErrorType,
  isNotFoundErrorType,
  isGeneralErrorType,
  isTwitterErrorType,
  isSteemitErrorType,
  isRestrictionErrorType,
  isInternalServerErrorType,
  isResourcesUsageErrorType
};

module.exports = errors;
