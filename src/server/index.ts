import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { z } from "zod";

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
  signUp: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async (opts) => {
      return {
        token: "1234",
      };
    }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;
