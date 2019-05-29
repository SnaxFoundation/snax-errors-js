const { isErrorFromChain, extractCodeError } = require("./helpers");

const mapChainErrorToSnaxError = chainError => {
  const errorMessage = chainError.error.what;

  switch (chainError.error.code) {
    case 3050001:
      return new errors.AlreadyExists(errorMessage);
    case 3080001:
      return new errors.ResourcesUsage(errorMessage);
    case 3080002:
      return new errors.ResourcesUsage(errorMessage);
    case 3080004:
      return new errors.ResourcesUsage(errorMessage);
    case 3081001:
      return new errors.InternalServer(errorMessage);
    case 3050003:
      return new errors.InternalServer(errorMessage);
    case 3050004:
      return new errors.InternalServer(errorMessage);

    default:
      return new errors.InternalServer(errorMessage);
  }
};
class SnaxError extends Error {
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      statusCode: this.statusCode
    };
  }

  static fromJSON(jsonError) {
    if (isErrorFromChain(jsonError)) {
      return mapChainErrorToSnaxError(jsonError);
    }

    return jsonError.name
      ? new errors[jsonError.name](jsonError.message)
      : new errors.General(jsonError.message);
  }
}

class AlreadyExists extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "AlreadyExists";
    this.message = message;
    this.code = 1;
    this.statusCode = 500;
  }
}

class BadRequest extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "BadRequest";
    this.message = message;
    this.code = 2;
    this.statusCode = 400;
  }
}

class NotFound extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "NotFound";
    this.message = message;
    this.code = 3;
    this.statusCode = 404;
  }
}

class General extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "General";
    this.message = message;
    this.code = 4;
    this.statusCode = 500;
  }
}
class Twitter extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "Twitter";
    this.message = message;
    this.code = 5;
    this.statusCode = 500;
  }
}

class Steemit extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "Steemit";
    this.message = message;
    this.code = 6;
    this.statusCode = 500;
  }
}

class Restriction extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "Restriction";
    this.message = message;
    this.code = 7;
    this.statusCode = 500;
  }
}

class InternalServer extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "InternalServer";
    this.message = message;
    this.code = 8;
    this.statusCode = 500;
  }
}

class ResourcesUsage extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "ResourcesUsage";
    this.message = message;
    this.code = 9;
    this.statusCode = 500;
  }
}

const isAlreadyExistsErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new AlreadyExists().code;
};

const isBadRequestErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new BadRequest().code;
};

const isNotFoundErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new NotFound().code;
};

const isGeneralErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new General().code;
};

const isTwitterErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new Twitter().code;
};

const isSteemitErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new Steemit().code;
};

const isRestrictionErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new Restriction().code;
};

const isInternalServerErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new InternalServer().code;
};

const isResourcesUsageErrorType = errorOrCode => {
  return extractCodeError(errorOrCode) === new ResourcesUsage().code;
};

const errors = {
  SnaxError,
  AlreadyExists,
  BadRequest,
  NotFound,
  General,
  Twitter,
  Steemit,
  Restriction,
  InternalServer,
  ResourcesUsage,
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
