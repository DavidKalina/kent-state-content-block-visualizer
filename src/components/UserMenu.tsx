import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, User } from "lucide-react";

const UserMenu = ({ onClickSignIn }: { onClickSignIn: () => void }) => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated || !user?.email) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="text-gray-300 hover:text-white hover:bg-[#2a4d8d]"
        onClick={onClickSignIn}
      >
        <User className="h-5 w-5 mr-2" />
        Sign In
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-300 hover:text-white hover:bg-[#2a4d8d] gap-2"
        >
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-blue-600 text-white">
              {user.email.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline">{user.email}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={logout} className="text-red-600 cursor-pointer">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
