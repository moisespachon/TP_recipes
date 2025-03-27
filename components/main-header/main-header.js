import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png"
import classes from "@/components/main-header/main-header.module.css"
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";


const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground/>
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
            <Image src={logo} alt="Logo" priority/>
            NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                  <NavLink href={'/meals'}>Browse Meals</NavLink>
                </li>
                <li>
                  <NavLink href={'/community'}>Foodies community</NavLink>
                </li>
            </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader