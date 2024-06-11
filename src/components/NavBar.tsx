import Link from "next/link";
import Logo from "./icons/Logo";
import GitHub from "./icons/GitHub";


const links = [
  {title:"Git", href:"https://github.com/OmegaTroy/url-shortener", icon: <GitHub/>},
  {title:"Dashboard", href:"/dashboard"},
  {title:"Get Started", href:"/get-started"},
]
 
function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-color2 p-6">
      <Link className="flex items-center gap-3" href="/">
        <Logo/>
        <span className="text-xl font-semibold text-light">Url short</span>
      </Link>
      <ul  className="flex gap-3 items-center">
      {
        links.map((link) => (
        <li key={link.title}>
          {
            link.title == 'Git' ? (
              <Link target="_blank" rel="noreferrer" className='text-lg font-semibold hover:text-blue-500' href={link.href}>
              {link.icon || link.title}
            </Link>
            ) : (
            <Link className='text-lg font-semibold hover:text-blue-500' href={link.href}>
            {link.icon || link.title}
          </Link>
        )}
        </li>
      ))
      }
      </ul>
    </nav>
  );
}

export default NavBar;
