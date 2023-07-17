import fastro from "https://deno.land/x/fastro/server/mod.ts";

const f = fastro();

f.get("/", () => "Hello, Bench!");

await f.serve();
