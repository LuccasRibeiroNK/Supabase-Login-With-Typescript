import { Dispatch, SetStateAction, createContext, useState } from "react";
interface UserMetadata {
  full_name: string;
  avatar_url: string;
}

export type User = {
  id: string;
  email?: string;
  user?: {
    id: string;
    aud: string;
    role: string;
    email?: string;
    confirmed_at: string;
    confirmation_sent_at: string;
    created_at: string;
    updated_at: string;
    user_metadata: UserMetadata;
  };
};

export interface UserContextInterface {
  googleUser: User | null;
  setGoogleUser: Dispatch<SetStateAction<User | null>>;
}

const defaultUserContext = {
  googleUser: null,

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  setGoogleUser: (user: User) => {},
} as UserContextInterface;

export const UserContext = createContext(defaultUserContext);

type UserProvideProps = {
  children: React.ReactNode;
};
export default function UserProvider({ children }: UserProvideProps) {
  const [googleUser, setGoogleUser] = useState<User | null>(null); // set googleUser as null
  return (
    <UserContext.Provider value={{ googleUser, setGoogleUser }}>
      {children}
    </UserContext.Provider>
  );
}
