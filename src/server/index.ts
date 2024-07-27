import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const appRouter = router({
  userList: publicProcedure.query(async () => {
    return [
      {
        name: "pritam",
        phone: 1234,
      },
      {
        name: "santu",
        phone: 1234,
      },
    ];
  }),
  updateUser: publicProcedure.mutation(async () => {
    return {
      message: "User updated",
    };
  }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;
