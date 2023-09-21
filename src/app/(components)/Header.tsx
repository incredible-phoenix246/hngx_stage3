"use client";

import { useContext } from "react";
import { UserContext } from "../(userContext)/user";
import { IconPhotoPlus } from "@tabler/icons-react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  //@ts-ignore
  const { user } = useContext(UserContext);

  const logout = () => {
    return signOut(auth);
  };

  return (
    <>
      <div className='w-full h-auto px-[2.7em] py-4 mb-[4em] border-b border-grey-200 flex items-center justify-between'>
        <div className='flex gap-2'>
          <IconPhotoPlus size={20} />
          <span>Drag and Drop Template</span>
        </div>
        <div className=''>
          {user ? (
            <button
              onClick={logout}
              className='px-[3em] py-2 hover:bg-slate-900 transition ease-in-out rounded-md bg-black text-white text-sm'
            >
              Logout Out
            </button>
          ) : (
            <Link href='login'>
              <button className='px-[3em] py-2 hover:bg-slate-900 transition ease-in-out rounded-md bg-black text-white text-sm'>
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
