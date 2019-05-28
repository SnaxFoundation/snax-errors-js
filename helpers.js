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

module.exports = {
  isErrorFromChain
};
