import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { UserForm } from "~/features/Users/UserForm";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  return json(data);
}

export default function New() {
  return <UserForm />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.log(error);
  return <h1>Huston we have a problem!</h1>;
}