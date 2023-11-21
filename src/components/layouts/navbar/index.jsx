import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const NavbarLayout = () => {
  const { data } = useSession();
  return (
    <nav className="bg-gray-300 border-gray-200 w-full md:px-9">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src="/talenesia.png" alt="talenesia" width={150} height={50} />
        </Link>
        <div className="flex items-center">
          <span className="mr-3 text-gray-900 text-base">
            {data && data.user.username}
          </span>
          {data ? (
            <button
              onClick={() => signOut()}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarLayout;
