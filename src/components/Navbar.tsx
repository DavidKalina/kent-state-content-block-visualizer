import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* Spacer div to prevent content from going under fixed navbar */}
      <div className="h-20" />

      {/* Fixed navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Organization Name */}
            <div className="flex-shrink-0">
              <span className="text-white text-2xl font-bold tracking-tight">OEOC</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              <a
                href="/about"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                About
              </a>

              <Button
                variant="default"
                className="gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6"
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
