import {faker} from '@faker-js/faker'
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return {
    users: Array.from({length: 12}, () => ({
      id: faker.string.uuid(),  
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      email: faker.internet.email(),
      avatar: faker.image.urlPicsumPhotos(),
    }))
  }
}

export default function () {
  const {users} = useLoaderData<typeof loader>()

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
        <li key={user.id}>
          <span>{user.name}</span>
          <img src={user.avatar} alt={user.name} height="200"/>
        </li>
        )
          )}
      </ul>
    </div>
  );
}