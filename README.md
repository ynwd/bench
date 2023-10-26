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
  - [Megalo](#megalo)
  - [Node](#node)
  - [Oak](#oak)
  - [Opine](#opine)
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
    - [Megalo](#megalo-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Hono                                                                                 | 52095.46 | 10780.45 | 59491.78  | 100%     |
| Fast                                                                                 | 51946.18 | 14489.69 | 63824.30  | 100%     |
| Fastro                                                                               | 51101.11 | 10699.00 | 57903.33  | 98%      |
| Bun                                                                                  | 49383.05 | 11623.06 | 70852.40  | 95%      |
| Deno                                                                                 | 48447.94 | 16811.54 | 69117.30  | 93%      |
| Hyper Express                                                                        | 46304.01 | 11941.77 | 69700.63  | 89%      |
| Reno                                                                                 | 44743.29 | 5079.93  | 48635.48  | 86%      |
| http                                                                                 | 31307.49 | 7680.50  | 65832.54  | 60%      |
| Node                                                                                 | 29129.55 | 5226.51  | 32220.10  | 56%      |
| Fastify                                                                              | 26065.72 | 5329.21  | 29244.11  | 50%      |
| Alosaur                                                                              | 25390.37 | 5729.90  | 32261.76  | 49%      |
| Router                                                                               | 22791.65 | 4731.01  | 29923.56  | 44%      |
| Aqua                                                                                 | 21821.84 | 4374.99  | 67493.90  | 42%      |
| Oak                                                                                  | 19553.46 | 4277.93  | 26060.46  | 38%      |
| Dinatra                                                                              | 16433.41 | 4085.84  | 34884.84  | 32%      |
| Abc                                                                                  | 13281.43 | 4260.01  | 19937.12  | 25%      |
| Acorn                                                                                | 6552.72  | 10226.89 | 113629.91 | 13%      |
| Opine                                                                                | 6353.79  | 7674.70  | 43112.62  | 12%      |
| Express                                                                              | 5431.27  | 1283.75  | 9766.01   | 10%      |
| Servest                                                                              | 5310.78  | 1869.25  | 9050.51   | 10%      |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-abbc8661-e1dc-49ce-97bb-7323b84f3464) |          |          |           |          |

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

## [Megalo](https://github.com/tsar-boomba/megalo)

Deno HTTP server framework focused on speed

## [Node](https://nodejs.org/)

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## [Oak](https://deno.land/x/oak)

A middleware framework for Deno's native HTTP server, Deno Deploy and Node.js
16.5 and later. It also includes a middleware router.

## [Opine](https://deno.land/x/opine)

Fast, minimalist web framework for Deno ported from ExpressJS.

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
| 13281.43 | 4260.01 | 19937.12 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7569.78 | 9036.00 | 15059.46 | 17029.68 | 17617.66 | 18307.31 | 19137.28 |
| **Latency** | 2ms     | 2ms     | 2ms      | 4ms      | 5ms      | 7ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 6552.72  | 10226.89 | 113629.91 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 43.89 | 59.25 | 5753.51 | 8343.55 | 13097.99 | 22365.30 | 51411.24 |
| **Latency** | 6ms   | 8ms   | 20ms    | 26ms    | 31ms     | 33ms     | 37ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25390.37 | 5729.90 | 32261.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19446.06 | 23101.19 | 27774.38 | 28583.71 | 29151.85 | 29585.76 | 30832.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21821.84 | 4374.99 | 67493.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18869.04 | 20510.67 | 23117.08 | 23794.04 | 24377.74 | 24912.92 | 26333.42 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49383.05 | 11623.06 | 70852.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34456.12 | 38609.22 | 48628.67 | 60920.02 | 64717.35 | 66257.61 | 68036.12 |
| **Latency** | 571µs    | 713µs    | 859µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48447.94 | 16811.54 | 69117.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24493.09 | 30728.15 | 54654.05 | 63727.43 | 65729.81 | 66391.55 | 67458.13 |
| **Latency** | 618µs    | 739µs    | 828µs    | 931µs    | 1ms      | 2ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16433.41 | 4085.84 | 34884.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11006.16 | 14720.56 | 17376.62 | 19426.82 | 20479.28 | 20830.05 | 21329.15 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5431.27  | 1283.75 | 9766.01 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3261.91 | 5325.24 | 6044.85 | 6175.78 | 6251.95 | 6284.53 | 6342.11 |
| **Latency** | 7ms     | 8ms     | 8ms     | 8ms     | 12ms    | 15ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51946.18 | 14489.69 | 63824.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23347.39 | 47028.48 | 59808.42 | 61311.99 | 62196.23 | 62733.35 | 63418.99 |
| **Latency** | 726µs    | 771µs    | 831µs    | 887µs    | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26065.72 | 5329.21 | 29244.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23348.10 | 26965.77 | 27871.88 | 28286.97 | 28486.00 | 28569.84 | 28739.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51101.11 | 10699.00 | 57903.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35426.41 | 53568.81 | 55097.78 | 56191.88 | 56801.96 | 57080.74 | 57468.07 |
| **Latency** | 796µs    | 853µs    | 898µs    | 941µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52095.46 | 10780.45 | 59491.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32613.13 | 54984.83 | 56312.57 | 57007.56 | 57612.29 | 57950.08 | 58440.51 |
| **Latency** | 773µs    | 836µs    | 877µs    | 923µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31307.49 | 7680.50 | 65832.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19348.26 | 27801.45 | 35115.17 | 36048.99 | 36623.82 | 37056.01 | 37662.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46304.01 | 11941.77 | 69700.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30887.70 | 34435.09 | 46611.62 | 56212.87 | 62198.53 | 64960.39 | 68133.49 |
| **Latency** | 613µs    | 729µs    | 883µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29129.55 | 5226.51 | 32220.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26756.50 | 29933.64 | 30496.80 | 31343.37 | 31617.44 | 31754.75 | 31992.20 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19553.46 | 4277.93 | 26060.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15109.04 | 18619.83 | 21115.59 | 21794.86 | 22368.39 | 23044.64 | 24923.90 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6353.79  | 7674.70 | 43112.62 |     |

| **Stat**    | 10     | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------ | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 100.76 | 3337.40 | 5183.35 | 6245.63 | 8844.81 | 26011.82 | 43112.62 |
| **Latency** | 7ms    | 8ms     | 10ms    | 12ms    | 16ms    | 23ms     | 35ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44743.29 | 5079.93 | 48635.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44002.97 | 45116.85 | 45916.06 | 46624.69 | 47119.31 | 47308.97 | 47678.98 |
| **Latency** | 962µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22791.65 | 4731.01 | 29923.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17814.63 | 21448.78 | 24704.73 | 25453.06 | 26044.17 | 26785.83 | 27934.01 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5310.78  | 1869.25 | 9050.51 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3008.76 | 4136.88 | 5917.48 | 6615.89 | 6953.99 | 7158.78 | 8749.20 |
| **Latency** | 5ms     | 7ms     | 8ms     | 11ms    | 15ms    | 20ms    | 25ms    |

---

<p align="center">Generated 2023-10-26T18:16:37.171Z</p>
