
import { QueryClient } from "@tanstack/react-query";
import { env } from "../src/env/server.mjs";

declare global {
  // eslint-disable-next-line no-var
  var queryClient: QueryClient;
}

export const queryClient =
  global.queryClient ||
  new QueryClient();

if (env.NODE_ENV !== "production") {
  global.queryClient = queryClient;
}
