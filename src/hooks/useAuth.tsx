import { useState, useEffect, useCallback } from "react";

interface User {
  email: string;
  name?: string;
}

export const useAuth = (onSuccess?: () => void) => {
  const getUserFromStorage = useCallback(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
        return null;
      }
    }
    return null;
  }, []);

  const [user, setUser] = useState<User | null>(getUserFromStorage);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  // Listen for both storage events and custom auth-change events
  useEffect(() => {
    const handleAuthChange = () => {
      const userData = getUserFromStorage();
      setUser(userData);
    };

    // Handle storage events from other tabs/windows
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "user") {
        handleAuthChange();
      }
    };

    // Initial check
    handleAuthChange();
    // Simulate initial loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Add event listeners
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("auth-change", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("auth-change", handleAuthChange);
    };
  }, [getUserFromStorage]);

  const login = useCallback(
    async (email: string): Promise<void> => {
      setIsLoginLoading(true);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const userData: User = {
          email,
          name: "Demo User",
        };

        // Update localStorage first
        localStorage.setItem("user", JSON.stringify(userData));

        // Update state
        setUser(userData);

        // Notify other components
        window.dispatchEvent(new Event("auth-change"));

        if (onSuccess) {
          onSuccess();
        }
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      } finally {
        setIsLoginLoading(false);
      }
    },
    [onSuccess]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("auth-change"));
  }, []);

  return {
    user,
    isLoading,
    isLoginLoading,
    isAuthenticated: !!user,
    login,
    logout,
  };
};
