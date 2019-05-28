class SnaxError extends Error {
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      statusCode: this.statusCode
    };
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

module.exports = {
  AlreadyExists,
  BadRequest,
  NotFound,
  General,
  Twitter,
  Steemit,
  Restriction
};
