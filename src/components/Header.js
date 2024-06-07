import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {LOGO,PROFILE}from "../utils/constants"


const Header = () => {
       const dispatch=useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
      const unsubscribe= onAuthStateChanged(auth, (user) => {
         if (user) {
           const { uid, email, displayName,photoURL } = user;
           dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
           navigate("/browse")
         } else {
                navigate("/");
           dispatch(removeUser());
       }
       });
       return ()=>unsubscribe();
     }, []);
  return (
    <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src={LOGO}
        alt="not found"
      ></img>

      {user && (
        <div className="flex ">
          <img
            className="w-7 h-6 my-7 mx-5"
            alt="usericon"
            src={PROFILE}
          ></img>
          <button onClick={handleSignout}>(Sign Out)</button>
        </div>
      )}
    </div>
  );
};
export default Header;
