type User = {
  name?: string;
  age?: number;
};

type FullUser = Required<User>;

const user2: FullUser = {
  name: "Ali",
  age: 20,
};