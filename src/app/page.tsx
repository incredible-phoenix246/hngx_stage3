"use client";

import { useContext } from "react";
import { UserContext } from "./(userContext)/user";
import ImageContainer from "./(components)/ImageContainer";
import Header from "./(components)/Header";
import Login from "./login/page";

export default function Home() {
  //@ts-ignore
  const { user } = useContext(UserContext);

  return (
    <main className=''>
      {user ? (
        <>
          <Header />
          <ImageContainer />
        </>
      ) : (
        <>
          <Login />
          
        </>
      )}
    </main>
  );
}
