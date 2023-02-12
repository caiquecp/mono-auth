import getDb from "./src/repositories/db.js";

const userTable = `
  create table users (
    id integer primary key autoincrement,
    email text not null unique,
    password text not null
  );
`

const main = async () => {
  const db = getDb()
  await db.run(userTable)
  db.close()
}

main()
