import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

import {BACKPHOTO,PROFILE}from "../utils/constants"

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const isValidForm = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    seterrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:PROFILE
            
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrorMessage(error);
            });

         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BACKPHOTO}
          alt="not found"
        ></img>
      </div>
      <form
        className=" w-4/12 absolute p-12 mx-auto right-0 left-0 my-36 bg-black rounded-sm opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="p-2 my-2 w-full border-2 border-gray-500 text-white  bg-black rounded-sm opacity-11"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter email Address"
          className="p-2 my-2 w-full border-2 border-gray-500 text-white  bg-black rounded-sm opacity-11"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter password"
          className="p-2 my-2 w-full border-2 border-gray-500  text-white bg-black rounded-sm opacity-11"
        />
        <p className="text-red-600 text-sm ">{errorMessage}</p>
        <button
          className="text-white p-2 my-6 w-full bg-red-600 text-center rounded-sm hover:bg-red-700"
          onClick={isValidForm}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 text-white cursor-pointer hover:underline"
          onClick={toggleSignForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
