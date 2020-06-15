## deno-whoami
A whoami module for Deno

https://deno.land/x


## Usage

### cli
    $ deno run --allow-env whoami.ts [OPTION]

### program
    import { whoami } from "./mod.ts";
    await whoami();

#### Options
`--help`  
`--version`  

### Test
    $ deno test --allow-env --allow-run test.ts
