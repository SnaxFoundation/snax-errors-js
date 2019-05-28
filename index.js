class SnaxError extends Error {
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
}

class AlreadyExists extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "AlreadyExists";
    this.message = message;
    this.code = 500;
  }
}

class BadRequest extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "BadRequest";
    this.message = message;
    this.code = 400;
  }
}

class NotFound extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "NotFound";
    this.message = message;
    this.code = 404;
  }
}

class General extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "General";
    this.message = message;
    this.code = 500;
  }
}
class Twitter extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "Twitter";
    this.message = message;
    this.code = 500;
  }
}

class Steemit extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "Steemit";
    this.message = message;
    this.code = 500;
  }
}

class Restriction extends SnaxError {
  constructor(message) {
    super(message);
    this.name = "Restriction";
    this.message = message;
    this.code = 500;
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
