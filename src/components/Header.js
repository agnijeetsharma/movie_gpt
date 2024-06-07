import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


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
       onAuthStateChanged(auth, (user) => {
         if (user) {
           const { uid, email, displayName,photoURL } = user;
           dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
           navigate("/browse")
         } else {
           dispatch(removeUser());
           navigate("/");
         }
       });
     }, []);
  return (
    <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="not found"
      ></img>

      {user && (
        <div className="flex ">
          <img
            className="w-7 h-6 my-7 mx-5"
            alt="usericon"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          ></img>
          <button onClick={handleSignout}>(Sign Out)</button>
        </div>
      )}
    </div>
  );
};
export default Header;
