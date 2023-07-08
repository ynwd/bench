import application from "https://deno.land/x/fastro/server/mod.ts";

const app = new application();

app.get("/", () => "Hello, Bench!");

await app.serve();
