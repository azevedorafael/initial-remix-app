import { PrismaClient, User } from "@prisma/client";
import {faker} from '@faker-js/faker'

const db = new PrismaClient()

// export type User = {
//   id:string;
//   name: string;
//   email: string;
//   avatar:string;
// }

export async function getUsers(){
  // return Array.from({length: 12}, () => ({
  //   id: faker.string.uuid(),  
  //   name: `${faker.person.firstName()} ${faker.person.lastName()}`,
  //   email: faker.internet.email(),
  //   avatar: faker.image.urlPicsumPhotos(),
  // }))

  return db.user.findMany()
}

export async function createUser(user:User) {
  return db.user.create({
    data:{
      ...user,
      avatar: faker.image.urlPlaceholder(),
    }
  }
  )
}