import React, { useState, useEffect, useContext, createContext } from "react";
import { auth, db } from "../adapters/firebase";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (user && user.uid) {
      // get the users document in firestore by their `uid`
      const userRef = db.collection("users").doc(user.uid);
      // subscribe to changes and `setProfile` to latest snapshot on any change to their profile
      userRef.onSnapshot(
        (snapshot) => {
          setProfile(snapshot.data());
        },
        (error) => {
          setProfile({});
          console.error(error);
        }
      );
    } else {
      // user just logged out or not logged in
      setProfile({});
    }
  }, [user]);

  const toggleFavorite = async (contentId) => {
    // TODO : update content item with collection of uid of those who favorite it
    if (user.uid) {
      // get the users document in firestore by their `uid`
      const userRef = db.collection("users").doc(user.uid);
      if (profile && profile.favorites && profile.favorites[contentId]) {
        // if already favorited then we set to null to remove it from firestore
        return userRef.update({
          [`favorites.${contentId}`]: null,
        });
      } else {
        // otherwise we can set it to the current time and use the timestamp as our boolean
        //  and then we can use the timestamp to order their favorites later or do other stuff
        return userRef.update({
          [`favorites.${contentId}`]: Date.now(),
        });
      }
    } else {
      // TODO: we could create a local storage favorites as well for users who haven't signed up yet
    }
  };

  const signIn = (email, password) =>
    auth.signInWithEmailAndPassword(email, password).then((response) => {
      setUser(response.user);
      return response.user;
    });

  const signUp = async (email, password) =>
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (response) => {
        const { uid } = response.user;
        const userRef = db.collection("users").doc(uid);
        await userRef.set({
          added: {},
          email,
          favorites: {},
          signedUp: Date.now(),
          status: "active",
          uid,
        });
        setUser(response.user);
        return response.user;
      });

  const signOut = () =>
    auth.signOut().then(() => {
      setUser(false);
    });

  const sendPasswordResetEmail = (email) =>
    auth.sendPasswordResetEmail(email).then(() => {
      return true;
    });

  const confirmPasswordReset = (code, password) =>
    auth.confirmPasswordReset(code, password).then(() => {
      return true;
    });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    confirmPasswordReset,
    profile,
    sendPasswordResetEmail,
    signIn,
    signUp,
    signOut,
    toggleFavorite,
    user,
  };
}
