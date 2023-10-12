import { createContext, useContext, useState } from "react";

interface GoogleUser {
  user_metadata: {
    full_name: string;
    avatar_url: string;
  };
  id: string;
  email: string;
}

interface GoogleUserContextType {
  user: GoogleUser | null;
  setUser: React.Dispatch<React.SetStateAction<GoogleUser | null>>;
}

export const GoogleUserContext = createContext<
  GoogleUserContextType | undefined
>(undefined);

export const useGoogleUserContext = () => {
  const context = useContext(GoogleUserContext);
  if (context === undefined) {
    throw new Error(
      "useGoogleUserContext must be used within a GoogleUserContextProvider"
    );
  }
  return context;
};

interface GoogleUserContextProviderProps {
  children: React.ReactNode;
}

export const GoogleUserContextProvider = ({
  children,
}: GoogleUserContextProviderProps) => {
  const [user, setUser] = useState<GoogleUser | null>(null);

  return (
    <GoogleUserContext.Provider value={{ user, setUser }}>
      {children}
    </GoogleUserContext.Provider>
  );
};
