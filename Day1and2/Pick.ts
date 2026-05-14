type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type PublicUser = Pick<User, "id" | "name" | "email">;

const user4: PublicUser = {
  id: 1,
  name: "Ali",
  email: "ali@test.com",
};