export declare interface User {
  name: string;
  email: string;
  email_verified?: boolean;
  picture: string;
  uid: string;
}

export declare interface Profile {
  user: User;
  token: string;
}
