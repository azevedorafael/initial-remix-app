import { User } from "@prisma/client";
import type { ActionFunctionArgs } from "@remix-run/node";
import {  redirect } from "@remix-run/node";
import { UserForm } from "~/features/Users/UserForm";
import { createUser } from "~/features/Users/users.api.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  throw new Error("BOOOM")
  await createUser(data as unknown as User)

  return redirect('/users')
}

export default function New() {
  return <UserForm />
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.log(error);
  return <h1>Huston we have a problem!</h1>
}