import Link from "next/link";
import Logo from "./icons/Logo";
import GitHub from "./icons/GitHub";
import {ModeToggle} from './theme-toggle-button'
import { getServerSession } from "next-auth/next"
import UserMenu from "./DropdownMenu";

interface UserProps{
  name: string | undefined
  image: string | undefined
}


async function NavBar() {
  const session = await getServerSession()
  const user:UserProps = session?.user

  return (
    <nav className="flex dark:bg-color2 fixed top-0 w-full items-center justify-between bg-light p-6 px-9">
      <Link className="flex items-center gap-3" href="/">
        <Logo/>
        <span className="text-xl font-semibold text-color4 dark:text-light">Url short</span>
      </Link>
      <ul className="flex gap-5 items-center relative">
        <ModeToggle />
        <li>
              <Link target="_blank" rel="noreferrer" href='https://github.com/OmegaTroy/url-shortener'>
                <GitHub/>
              </Link>
            </li>
        {
          session 
          ? (
            <UserMenu user={user}/>
          )
          : (
            <li>
            <Link className='text-lg font-semibold  p-2 rounded-full bg-color5 text-light' href='/auth'>
              Get Started
            </Link>
        </li>

          )
        }
      </ul>
    </nav>
  );
}

export default NavBar;
