export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,25}$/;

export const validatePassword = (password) => {
  // Check if the password length is between 8 and 25 characters
  if (password.length < 8 || password.length > 25) {
    return false;
  }

  // Check if the password contains at least 1 uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least 1 lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least 1 digit
  if (!/\d/.test(password)) {
    return false;
  }

  // Check if the password contains at least 1 special character
  if (!/[@$!%*?&]/.test(password)) {
    return false;
  }

  return true;
}