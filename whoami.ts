import { whoami } from "./mod.ts";

const I = await whoami();
Deno.stdout.write(I);
