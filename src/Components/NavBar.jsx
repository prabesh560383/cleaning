import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h4"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center transition-colors">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center  transition-colors">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center  transition-colors">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center  transition-colors">
          Contact
        </a>
      </Typography>
    </ul>
  );
}
 
export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar 
        className="mx-auto w-full px-3 py-5 bg-transparent border-none shadow-none"
        
            >
      <div className="flex 2xl:w-[90%] h-20  w-4/5 m-auto items-center justify-between text-blue-gray-900 border-none bg-transparent shadow-none">
        <Typography
          as="a"
          href="#"
          variant="h3"
          className="mr-4 cursor-pointer py-1.5"
        >
          Logo Here
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}