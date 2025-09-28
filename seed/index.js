import { faker } from "@faker-js/faker/locale/pl";
async function postAuthor(url) {
  const body = { name: faker.person.fullName(), email: faker.internet.email() };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return { status: res.status, ok: res.ok, body: await res.text() };
}

for (let i = 0; i < 2000; i++) {
  //   await new Promise((resolve) => setTimeout(resolve, 1));
  const res = await postAuthor("http://localhost:3000/authors");
  console.log(res);
}
