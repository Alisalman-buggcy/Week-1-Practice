type User = {
  id: number;
  name: string;
  password: string;
};

type SafeUser = Omit<User, "password">;

const user3: SafeUser = {
  id: 1,
  name: "Ali",
};