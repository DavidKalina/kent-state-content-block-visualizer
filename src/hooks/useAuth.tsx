import { useState, useEffect } from "react";

interface User {
  email: string;
  name?: string;
  // Add any other user properties you need
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = (email: string, _password: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        try {
          // In a real app, you'd validate credentials here
          const userData: User = {
            email: email,
            name: "Demo User", // You can add more user data here
          };

          // Store in localStorage
          localStorage.setItem("user", JSON.stringify(userData));
          setUser(userData);
          resolve();
        } catch (error) {
          reject(error);
        }
      }, 1500);
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
  };
};
