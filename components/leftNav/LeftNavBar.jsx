import { SidebarLink, Ul } from "./styledLeftNavBar";
import { useRouter } from "next/router";
import { navBarRoutes } from "../../utils/navBarRoutes";
import Link from "next/link";

const Leftnavbar = ({ open, setOpen }) => {
  const { pathname } = useRouter();
  return (
    <Ul open={open} onClick={(e) => e.stopPropagation()}>
      {navBarRoutes.map(({ title, href }) => {
        return (
          <Link key={title} href={href}>
            <SidebarLink
              onClick={() => setOpen(!open)}
              className={
                pathname === href ? "router-link active" : "router-link"
              }
            >
              {title}
            </SidebarLink>
          </Link>
        );
      })}
    </Ul>
  );
};

export default Leftnavbar;
