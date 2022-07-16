interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}
interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

function getUserType(obj: User | Admin): string {
  return obj.type;
}

const Person1: User = {
  type: "user",
  name: "masai",
  age: 3,
  occupation: "skill building"
}
const Person2: Admin = {
  type: "admin",
  name: "masai",
  age: 3,
  role: "learn new stuff"
}