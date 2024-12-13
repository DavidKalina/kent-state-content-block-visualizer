import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const getLinkClassName = (path: string) => {
    const baseClasses = "transition-colors text-sm font-medium relative";
    const isActive = location.pathname === path;

    if (isActive) {
      return `${baseClasses} text-white after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-white`;
    }
    return `${baseClasses} text-gray-300 hover:text-white`;
  };

  return (
    <>
      {/* Spacer div to prevent content from going under fixed navbar */}
      <div className="h-20" />

      {/* Fixed navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#203c73] backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Organization Name */}
            <Link to="/" className="flex-shrink-0">
              <span className="text-white text-xl font-bold tracking-tight">
                Ohio Employee Ownership Center
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              <Link to="/" className={getLinkClassName("/")}>
                Home
              </Link>

              <Button
                variant="default"
                className="gap-2 bg-[#edab20] hover:bg-blue-500 text-white font-medium px-6"
              >
                <Heart className="h-4 w-4" />
                Donate
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
