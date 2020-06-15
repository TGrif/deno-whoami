import { encode } from "https://deno.land/std/encoding/utf8.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";

const { env, args } = Deno;

export async function whoami() {
  const arg = parse(args);
  if (arg['help']) {
    console.log(`
      Utilisation : deno run --allow-env whoami.ts [OPTION]...
      Afficher le nom d'utilisateur associé à l'UID effectif actuel.

            --help     afficher l'aide et quitter
            --version  afficher des informations de version et quitter
    `);
    Deno.exit(0);
  } else if (arg['version']) {
    console.log('v.1');
    Deno.exit(0);
  }

  const denoEnv = env.toObject();
  const I: string = denoEnv.USER + '\n' as string;

  return encode(I);
}
