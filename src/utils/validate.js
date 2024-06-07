export const checkValidateData=(email,password)=>{
  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validPassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
  
  if(!validEmail&&!validPassword){
    return "email and password are not valid";
  }
  else  if(!validEmail){
return "email is not valid"
  }
  else if(!validPassword){
return "password is not valid"
  }
  else{
    return null;
  }
}