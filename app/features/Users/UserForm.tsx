export function UserForm() {
  return <form method="post">
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>
    <div>
      <label htmlFor="email">E-mail</label>
      <input type="email" name="email" id="email" />
    </div>
    <button type="submit">Create</button>
  </form>
}