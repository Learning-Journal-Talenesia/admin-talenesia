import { Roboto } from "next/font/google";
import NavbarLayout from "../navbar";
import { useRouter } from "next/router";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const disableNavbar = ["/auth/login", "/404"];

const AppShell = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <div className={roboto.className}>
      {!disableNavbar.includes(pathname) && <NavbarLayout />}
      {children}
    </div>
  );
};

export default AppShell;
