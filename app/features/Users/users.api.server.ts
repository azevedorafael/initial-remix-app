import { faker } from "@faker-js/faker";

export type User = {
  id:string;
  name: string;
  email: string;
  avatar:string;
}

export async function getUsers(){
  return Array.from({length: 12}, () => ({
    id: faker.string.uuid(),  
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    email: faker.internet.email(),
    avatar: faker.image.urlPicsumPhotos(),
  }))
}