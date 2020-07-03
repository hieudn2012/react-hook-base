const { EMPTY } = require("./message");

function checkEmail(email) {
  if (!email) return EMPTY;
  return '';
}

function checkPassword(password) {
  if (!password) return EMPTY;
  return '';
}

export {
  checkEmail,
  checkPassword,
}