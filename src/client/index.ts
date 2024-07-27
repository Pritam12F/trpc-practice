import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

async function main() {
  const allUsers = await trpc.userList.query();
  console.log(allUsers);

  const res2 = await trpc.signUp.mutate({
    email: "pritam@gmail.com",
    password: "123",
  });

  console.log(res2);
}

main();
