import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { whoami } from "./mod.ts";

const p = Deno.run({
  cmd: ["whoami"], 
  stdout: "piped",
  stderr: "piped"
});

let I = await p.status();
let deno_I = await whoami();

const rawOutput = await p.output();

p.close();

Deno.test("env", () => {
  if (!whoami) {
    throw Error("missing module");
  }
});

Deno.test("whoami", function(): void {
  let res = new TextDecoder("utf-8").decode(rawOutput);
  let deno_res = new TextDecoder("utf-8").decode(deno_I);

  assertEquals(res, deno_res);
});
