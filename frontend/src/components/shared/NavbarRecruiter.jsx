import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { LogOut, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const NavbarRecruiter = () => {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(sessionStorage.getItem("recruiter"));
  

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/loginrecruiter");
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/recruiter/application'>Show Applications</Link></li>
            <li><Link to='/recruiter/companies'>Companies</Link></li>
          </ul>
          {!isLoggedIn ? (
            <div className="flex gap-3">
              <Link to="/loginrecruiter">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signuprecruiter">
                <Button className="bg-[#02367B] hover:bg-[#006CA5]">
                  SignUp
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer w-8 h-8 rounded-full"> {/* Added rounded-full here */}
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="p-4">
                <div className="mb-4">
                  <h4 className="font-medium">Patel MernStack</h4>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div className="flex flex-col gap-3 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link" onClick={handleLogout}>
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarRecruiter;
