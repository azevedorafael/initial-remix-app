import { User } from "@prisma/client";
import { Link, Outlet, useLocation } from "@remix-run/react";

interface Props {
  users: User[];
}

export function UsersList({ users }: Props) {
  const location = useLocation();
  const computedLinkTo = location.pathname === '/users/new' ? '../users' : 'new'
  const computedLinkText = location.pathname === '/users/new' ? 'Go Back' : 'New User'

  return (
    <div>
      <h1>Users</h1>
      <Link to={computedLinkTo}>
          {computedLinkText}
        </Link>
      <div>
        <Outlet />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <img src={user.avatar} alt={user.name} height="200" />
          </li>
        )
        )}
      </ul>
    </div>
  )
}