interface FName {
  title: string;
  status: boolean;
  id: number;
}

interface FullName {
  firstName: string;
  lastName?: string;
}

interface Person {
  fName: string,
  lName?: string
}

function getName({ fName, lName }: Person): string {
  if (lName) return fName + " " + lName;
  else return fName;
}
let ans = getName({ fName: "anup" })

interface Address {
  houseNumber: number,
  street: string,
  city: string,
  state: string,
  postalCode: number,
  country: string
}


interface PersonDetails {
  phone: number[],
  addresses: string[],
  email?: string,
  firstName: string,
  middleName?: string,
  lastName: string
}
