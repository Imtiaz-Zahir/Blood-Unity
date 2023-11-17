type RegisterInput = {
  name: string;
  number: string;
  blood: string;
  division: string;
  district: string;
  upazila: string;
  password: string;
  password_confirm: string;
};

type LoginInput = {
  number: string;
  password: string;
};

type ChangePasswordInput = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export function checkRegisterInput(
  data: RegisterInput,
  callback: (msg: string) => void
) {
  if (
    !(
      data.name &&
      data.number &&
      data.blood &&
      data.division &&
      data.district &&
      data.upazila &&
      data.password &&
      data.password_confirm
    )
  ) {
    callback("Please fill all the fields");
    return false;
  }
  if (data.number.length !== 11) {
    callback("Phone number must be 11 digits");
  }
  if (!isAllDigits(data.number)) {
    callback("Phone number must be digits");
    return false;
  }
  if (data.password !== data.password_confirm) {
    callback("Password and Confirm Password not match");
    return false;
  }

  if (data.password.length < 6 || data.password.length > 20) {
    return "Password must be 6-20 characters";
  } else {
    return true;
  }
}

export function checkLoginInput(
  data: LoginInput,
  callback: (msg: string) => void
) {
  if (!(data.number && data.password)) {
    callback("Please fill all the fields");
    return false;
  } else if (data.number.length !== 11) {
    callback("Phone number must be 11 digits");
    return false;
  } else if (!isAllDigits(data.number)) {
    callback("Phone number must be digits");
    return false;
  } else if (data.password.length < 6 || data.password.length > 20) {
    callback("Password must be 6-20 characters");
    return false;
  } else {
    return true;
  }
}

export function checkChangePassword(
  data: ChangePasswordInput,
  callback: (msg: string) => void
) {
  if (data.newPassword !== data.confirmPassword) {
    callback("Password and Confirm Password not match");
    return false;
  }

  if (data.newPassword.length < 6 || data.newPassword.length > 20) {
    callback("Password must be 6-20 characters");
    return false;
  }
  if (data.oldPassword.length < 6 || data.oldPassword.length > 20) {
    callback("Password must be 6-20 characters");
    return false;
  }
  if (data.confirmPassword.length < 6 || data.confirmPassword.length > 20) {
    callback("Password must be 6-20 characters");
    return false;
  } else {
    return true;
  }
}

function isAllDigits(input: string) {
  const digitPattern = /^[0-9]+$/;

  if (digitPattern.test(input)) {
    return true;
  } else {
    return false;
  }
}
