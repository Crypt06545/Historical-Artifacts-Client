import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up a user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).finally(() => {
      setLoading(false);
    });
  };

  // Log in a user
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() => {
      setLoading(false);
    });
  };

  // Google Sign in
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, provider).finally(() => {
      setLoading(false);
    });
  };

  // Log out a user
  const logOut = () => {
    setLoading(true);
    return signOut(auth).finally(() => {
      setLoading(false);
    });
  };

  // Update user profile
  const updateUserProfile = (name, photo) => {
    const user = auth.currentUser;
    if (user) {
      return updateProfile(user, { displayName: name, photoURL: photo });
    }
    return Promise.reject("No user found to update");
  };

  // Observe user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const userInfo = {
    user,
    setUser,
    auth,
    createNewUser,
    logIn,
    googleSignIn,
    logOut,
    updateUserProfile, // Make sure to expose this function
    loading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
