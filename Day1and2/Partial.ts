type User = {
  name: string;
  age: number;
};

type PartialUser = Partial<User>;

const user1: PartialUser = {
  name: "Ali",
};