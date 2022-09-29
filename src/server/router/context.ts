import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { getSession } from 'next-auth/react';
import { TRPCError } from '@trpc/server';

export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
  const session = await getSession({ req: opts?.req });
  if (!session) throw new TRPCError({ code: 'UNAUTHORIZED' });
  return { session, req: opts?.req };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

export function createRouter() {
  return trpc.router<Context>();
}
