const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false;
    if (typeof value === 'string' && value.trim().length === 0) return false;
    if (typeof value === 'number' && value.toString().trim().length === 0) return false;
    return true;
  };
  
  let isValidBody = function (body) {
    return Object.keys(body).length > 0;
  };
   let isValidName =/^[a-zA-z]*$/;
   let isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   let isValidMobile = /^[0-9]{10}$/;
  module.exports = { isValid, isValidBody,isValidName,isValidEmail,isValidMobile};
  