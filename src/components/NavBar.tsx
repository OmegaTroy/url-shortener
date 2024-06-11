import Link from "next/link";
import Logo from "./icons/Logo";
import GitHub from "./icons/GitHub";


const links = [
  {title:"Git", href:"/git", icon: <GitHub/>},
  {title:"Dashboard", href:"/dashboard"},
  {title:"Get Started", href:"/get-started"},
]

function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-gray-900 p-6">
      <Link className="flex items-center gap-3" href="/">
        <Logo/>
        <span className="text-xl font-semibold">Url short</span>
      </Link>
      <ul  className="flex gap-3 items-center">
      {
        links.map((link) => (
        <li key={link.title}>
          <a className='text-lg font-medium hover:text-blue-500' href={link.href}>
            {link.icon || link.title}
          </a>
        </li>
      ))
      }
      </ul>
    </nav>
  );
}

export default NavBar;
