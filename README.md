<div align="center">
  <h1><code>bench</code></h1>
  <p>
    <strong>📊 Daily benchmarks of deno & node HTTP frameworks</strong>
  </p>
  <br>
  <p align="center">
    <a alt="Bench" href="https://github.com/denosaurs/bench/actions">
      <img src="https://img.shields.io/github/workflow/status/denosaurs/bench/bench" />
    </a>
  </p>
</div>

# Table of Contents

- [Overview](#overview)
  - [Hello, bench!](#hello-bench)
- [Frameworks](#frameworks)
  - [Abc](#abc)
  - [Acorn](#acorn)
  - [Alosaur](#alosaur)
  - [Aqua](#aqua)
  - [Bun](#bun)
  - [Deno](#deno)
  - [Dinatra](#dinatra)
  - [Express](#express)
  - [Fast](#fast)
  - [Fastify](#fastify)
  - [Fastro](#fastro)
  - [Hono](#hono)
  - [http](#http)
  - [Hyper Express](#hyper-express)
  - [Little](#little)
  - [Megalo](#megalo)
  - [Node](#node)
  - [Oak](#oak)
  - [Opine](#opine)
  - [Peko](#peko)
  - [Reno](#reno)
  - [Router](#router)
  - [Servest](#servest)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Abc](#abc-1)
    - [Acorn](#acorn-1)
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Deno](#deno-1)
    - [Dinatra](#dinatra-1)
    - [Express](#express-1)
    - [Fast](#fast-1)
    - [Fastify](#fastify-1)
    - [Fastro](#fastro-1)
    - [Hono](#hono-1)
    - [http](#http-1)
    - [Hyper Express](#hyper-express-1)
    - [Little](#little-1)
    - [Megalo](#megalo-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Peko](#peko-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Bun                                                                                  | 38395.26 | 10733.57 | 60787.51 | 100%     |
| Hyper Express                                                                        | 38247.88 | 14827.31 | 59448.74 | 100%     |
| http                                                                                 | 29588.53 | 7684.40  | 44052.69 | 77%      |
| Deno                                                                                 | 29271.71 | 9877.82  | 44217.00 | 76%      |
| Fast                                                                                 | 27431.03 | 8860.68  | 43601.95 | 71%      |
| Megalo                                                                               | 26582.86 | 9078.29  | 45513.36 | 69%      |
| Hono                                                                                 | 25574.27 | 8820.01  | 42903.70 | 67%      |
| Fastro                                                                               | 24486.67 | 8431.09  | 49051.97 | 64%      |
| Alosaur                                                                              | 22300.90 | 5667.17  | 40112.98 | 58%      |
| Reno                                                                                 | 21431.19 | 6632.69  | 33392.14 | 56%      |
| Router                                                                               | 20586.10 | 4249.70  | 26521.82 | 54%      |
| Little                                                                               | 17022.81 | 4296.03  | 97451.27 | 44%      |
| Aqua                                                                                 | 16820.72 | 3843.11  | 22436.45 | 44%      |
| Node                                                                                 | 15915.01 | 3700.08  | 22276.50 | 41%      |
| Oak                                                                                  | 14665.12 | 3058.02  | 20782.78 | 38%      |
| Fastify                                                                              | 13837.14 | 3000.12  | 18283.47 | 36%      |
| Dinatra                                                                              | 10606.89 | 2599.83  | 17446.83 | 28%      |
| Abc                                                                                  | 9048.21  | 1984.06  | 14559.17 | 24%      |
| Opine                                                                                | 6249.92  | 1220.20  | 12204.84 | 16%      |
| Acorn                                                                                | 4244.77  | 3418.19  | 46250.11 | 11%      |
| Servest                                                                              | 3682.82  | 2348.91  | 69848.50 | 10%      |
| Express                                                                              | 3578.05  | 1044.50  | 14273.57 | 9%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-b1a1cfa9-0cb2-4094-836d-65ae8e7926cf) |          |          |          |          |

# Frameworks

## [Abc](https://deno.land/x/abc)

A better Deno framework to create web application

## [Acorn](https://deno.land/x/acorn)

A focused RESTful server framework for Deno 🌰🦕

## [Alosaur](https://deno.land/x/alosaur)

Deno web framework with many decorators

## [Aqua](https://deno.land/x/aqua)

A minimal and fast 🏃 web framework for Deno

## [Bun](https://bun.sh/)

Bun is a fast all-in-one JavaScript runtime

## [Deno](https://deno.land/)

A modern runtime for JavaScript and TypeScript

## [Dinatra](https://github.com/syumai/dinatra)

Sinatra like light weight web app framework for deno.

## [Express](https://expressjs.com/)

Fast, unopinionated, minimalist web framework for Node.js

## [Fast](https://deno.land/x/fast)

Small web framework with near-native performance.

## [Fastify](https://www.fastify.io/)

Fast and low overhead web framework, for Node.js

## [Fastro](https://fastro.dev)

Fast and simple web application framework for deno

## [Hono](https://github.com/honojs/hono)

Ultrafast web framework for Cloudflare Workers and Deno. Fast, but not only
fast.

## [http](https://deno.land/std/http)

The deno standard library http server

## [Hyper Express](https://github.com/kartikk221/hyper-express)

High performance Node.js webserver with a simple-to-use API powered by
uWebsockets.js under the hood.

## [Little](https://deno.land/x/little)

A minimalistic connect-like web framework. Automatically works out of the box
with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.

## [Megalo](https://github.com/tsar-boomba/megalo)

Deno HTTP server framework focused on speed

## [Node](https://nodejs.org/)

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## [Oak](https://deno.land/x/oak)

A middleware framework for Deno's native HTTP server, Deno Deploy and Node.js
16.5 and later. It also includes a middleware router.

## [Opine](https://deno.land/x/opine)

Fast, minimalist web framework for Deno ported from ExpressJS.

## [Peko](https://peko.deno.dev)

Featherweight server/router framework + middleware and handler library 🐣

## [Reno](https://deno.land/x/reno)

A thin, testable routing library designed to sit on top of Deno's standard HTTP
module.

## [Router](https://crux.land/router@0.0.12)

The tiny, modern and fast router by the denosaurs for deno and deno deploy. Used
by projects like fresh

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9048.21  | 1984.06 | 14559.17 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6285.76 | 8105.61 | 9715.20 | 10370.34 | 10748.52 | 11029.31 | 11893.05 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 7ms      | 8ms      | 12ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4244.77  | 3418.19 | 46250.11 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 92.78 | 2338.40 | 3280.62 | 5728.96 | 7674.29 | 11899.05 | 15003.75 |
| **Latency** | 6ms   | 7ms     | 13ms    | 19ms    | 24ms    | 26ms     | 31ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22300.90 | 5667.17 | 40112.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12902.12 | 20119.81 | 24685.20 | 26062.49 | 27015.50 | 27525.17 | 28941.59 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      | 7ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16820.72 | 3843.11 | 22436.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11364.60 | 14667.69 | 18114.39 | 19758.36 | 20540.80 | 20981.84 | 21662.04 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38395.26 | 10733.57 | 60787.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24607.25 | 31003.86 | 37894.19 | 47202.10 | 52918.88 | 54772.95 | 57661.22 |
| **Latency** | 674µs    | 853µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29271.71 | 9877.82 | 44217.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12722.06 | 25560.99 | 31252.99 | 37010.90 | 39359.11 | 40441.40 | 42144.87 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 7ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10606.89 | 2599.83 | 17446.83 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7018.31 | 9473.70 | 11124.64 | 12382.88 | 13338.83 | 13703.35 | 14455.50 |
| **Latency** | 3ms     | 3ms     | 4ms      | 4ms      | 6ms      | 7ms      | 11ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3578.05  | 1044.50 | 14273.57 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2324.35 | 2939.88 | 3929.33 | 4283.99 | 4461.09 | 4554.79 | 4773.87 |
| **Latency** | 11ms    | 11ms    | 12ms    | 15ms    | 19ms    | 21ms    | 26ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27431.03 | 8860.68 | 43601.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13970.06 | 23708.64 | 29107.41 | 33800.21 | 37268.14 | 38659.71 | 40351.87 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 7ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13837.14 | 3000.12 | 18283.47 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9745.97 | 13068.68 | 14909.92 | 15704.98 | 16188.63 | 16434.27 | 17018.13 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24486.67 | 8431.09 | 49051.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11971.79 | 20424.94 | 27156.36 | 30442.21 | 32640.45 | 33716.15 | 35774.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25574.27 | 8820.01 | 42903.70 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9876.70 | 22051.75 | 28491.65 | 31962.20 | 33673.63 | 34430.17 | 36341.47 |
| **Latency** | 1ms     | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      | 8ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29588.53 | 7684.40 | 44052.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17643.51 | 26314.16 | 32772.20 | 34851.10 | 35945.36 | 36433.25 | 37652.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38247.88 | 14827.31 | 59448.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15354.15 | 24423.37 | 42803.48 | 51485.06 | 54621.10 | 55615.39 | 57111.21 |
| **Latency** | 690µs    | 846µs    | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17022.81 | 4296.03 | 97451.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12401.44 | 15520.56 | 17976.34 | 19340.13 | 20206.20 | 20606.07 | 21287.40 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26582.86 | 9078.29 | 45513.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10645.42 | 22322.71 | 29910.79 | 33048.81 | 34918.41 | 36005.48 | 38196.28 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      | 7ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15915.01 | 3700.08 | 22276.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10886.97 | 15314.75 | 17112.72 | 18132.75 | 18976.78 | 19487.03 | 20106.89 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14665.12 | 3058.02 | 20782.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10487.67 | 13416.00 | 15742.47 | 16686.83 | 17332.73 | 17677.47 | 18665.34 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6249.92  | 1220.20 | 12204.84 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4889.45 | 5712.78 | 6434.74 | 6929.70 | 7357.44 | 7853.35 | 8598.43 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 10ms    | 14ms    |

### [Peko](#peko)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21431.19 | 6632.69 | 33392.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10038.79 | 17567.59 | 23882.01 | 26325.29 | 27654.62 | 28332.01 | 29748.78 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20586.10 | 4249.70 | 26521.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16026.39 | 18801.31 | 22008.52 | 23293.34 | 24016.72 | 24484.64 | 25303.04 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3682.82  | 2348.91 | 69848.50 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 1775.67 | 3403.08 | 3942.25 | 4305.58 | 4613.46 | 4805.46 | 5311.74 |
| **Latency** | 11ms    | 11ms    | 12ms    | 15ms    | 19ms    | 23ms    | 34ms    |

---

<p align="center">Generated 2023-03-04T03:58:23.248Z</p>
