const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  del
};

function find() {
  return db("users");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

async function del(id) {
  const user = await findById(id);
  await db("users")
    .where("id", "=", id)
    .del();
  return user;
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
