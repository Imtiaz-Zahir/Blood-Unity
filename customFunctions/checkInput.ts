type UserInput = {
  name: any;
  number: any;
  blood: any;
  division: any;
  district: any;
  upazila: any;
  password: any;
  password_confirm: any;
};

export default function checkInput(
  data: UserInput,
  callback: (msg: string) => void
) {
  if (
    !(
      data.name &&
      data.number&&
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
  else if(data.number.length!==11){
    callback("Phone number must be 11 digits")
  }
  else if(!isAllDigits(data.number)){
    callback("Phone number must be digits");
    return false;
  }
  else if (data.password !== data.password_confirm) {
    callback("Password and Confirm Password not match");
    return false;
  }
  else if (data.password.length < 6 || data.password.length > 20) {
    callback("Password must be 6-20 characters");
    return false;
  }else{
    return true;
  }
}

function isAllDigits(input:string) {
  const digitPattern = /^[0-9]+$/;

  if (digitPattern.test(input)) {
      return true;
  } else {
      return false;
  }
}