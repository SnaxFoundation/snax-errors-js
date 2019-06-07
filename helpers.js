const _ = require("lodash");

const isErrorFromChain = error => {
  return (
    error.code &&
    error.message &&
    error.error &&
    error.error.code &&
    error.error.name &&
    error.error.what &&
    error.error.details
  );
};

const extractCodeError = payload => {
  if (_.isObject(payload)) {
    return payload.code || null;
  }

  if (_.isInteger(payload)) {
    return payload;
  }

  return null;
};

module.exports = {
  isErrorFromChain,
  extractCodeError
};
