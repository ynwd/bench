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
| Hyper Express                                                                        | 81163.32 | 15600.94 | 99565.40  | 100%     |
| Bun                                                                                  | 78095.15 | 10059.45 | 102495.38 | 96%      |
| Deno                                                                                 | 66277.61 | 12437.00 | 90320.97  | 82%      |
| Fast                                                                                 | 54896.21 | 8244.20  | 83326.10  | 68%      |
| Hono                                                                                 | 53234.55 | 7821.13  | 80491.60  | 66%      |
| Fastro                                                                               | 52603.49 | 5613.07  | 79278.00  | 65%      |
| Megalo                                                                               | 47620.01 | 2875.17  | 67724.48  | 59%      |
| Alosaur                                                                              | 45241.36 | 2629.43  | 66312.71  | 56%      |
| http                                                                                 | 43979.97 | 3671.35  | 50369.92  | 54%      |
| Router                                                                               | 43162.77 | 3294.78  | 49973.15  | 53%      |
| Reno                                                                                 | 41888.43 | 2370.04  | 46955.16  | 52%      |
| Aqua                                                                                 | 34114.17 | 3157.13  | 39052.89  | 42%      |
| Oak                                                                                  | 32003.32 | 2886.87  | 34202.82  | 39%      |
| Dinatra                                                                              | 17943.96 | 1993.04  | 26153.61  | 22%      |
| Node                                                                                 | 17214.94 | 1458.64  | 25455.15  | 21%      |
| Fastify                                                                              | 16536.87 | 1716.91  | 21522.88  | 20%      |
| Opine                                                                                | 15428.22 | 2206.70  | 20756.27  | 19%      |
| Abc                                                                                  | 15422.16 | 2256.54  | 19967.88  | 19%      |
| Servest                                                                              | 6607.49  | 1397.24  | 10932.71  | 8%       |
| Express                                                                              | 6431.05  | 1001.16  | 8047.62   | 8%       |
| Acorn                                                                                | 4848.51  | 3266.97  | 18023.04  | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-3dd74885-27ca-4a61-a268-fa652eb53132) |          |          |           |          |

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
| 15422.16 | 2256.54 | 19967.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13159.70 | 13962.94 | 15186.83 | 17271.28 | 19029.11 | 19536.03 | 19809.61 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4848.51  | 3266.97 | 18023.04 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2920.92 | 3117.78 | 3763.02 | 4811.78 | 7189.72 | 14100.48 | 16770.01 |
| **Latency** | 3ms     | 3ms     | 10ms    | 14ms    | 16ms    | 18ms     | 19ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45241.36 | 2629.43 | 66312.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43517.38 | 44417.54 | 45259.00 | 45955.65 | 47404.07 | 48421.95 | 51579.97 |
| **Latency** | 972µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34114.17 | 3157.13 | 39052.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31644.83 | 33301.80 | 34701.07 | 35862.19 | 36611.40 | 37233.43 | 38052.70 |
| **Latency** | 998µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 78095.15 | 10059.45 | 102495.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65511.47 | 69967.99 | 77237.51 | 86126.22 | 92512.60 | 95422.25 | 98911.82 |
| **Latency** | 378µs    | 472µs    | 601µs    | 761µs    | 953µs    | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66277.61 | 12437.00 | 90320.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53784.55 | 55024.37 | 63789.17 | 77414.97 | 84314.04 | 86358.31 | 89409.93 |
| **Latency** | 516µs    | 567µs    | 762µs    | 917µs    | 995µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17943.96 | 1993.04 | 26153.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16048.59 | 17117.17 | 18172.92 | 19303.71 | 19847.35 | 20261.97 | 20701.29 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6431.05  | 1001.16 | 8047.62 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4961.39 | 6147.64 | 6576.97 | 6751.11 | 7785.13 | 7918.63 | 8000.30 |
| **Latency** | 6ms     | 7ms     | 7ms     | 7ms     | 9ms     | 10ms    | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54896.21 | 8244.20 | 83326.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49273.50 | 50402.67 | 51320.50 | 56937.02 | 68517.51 | 74034.09 | 80716.72 |
| **Latency** | 600µs    | 825µs    | 950µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16536.87 | 1716.91 | 21522.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15500.34 | 16204.40 | 16972.01 | 17398.53 | 17634.80 | 17787.61 | 18133.19 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52603.49 | 5613.07 | 79278.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48228.51 | 49418.13 | 50710.85 | 55116.57 | 60351.40 | 63850.06 | 70375.78 |
| **Latency** | 658µs    | 883µs    | 979µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53234.55 | 7821.13 | 80491.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47727.49 | 48803.84 | 50044.80 | 55488.67 | 66027.90 | 70234.82 | 76753.82 |
| **Latency** | 613µs    | 861µs    | 977µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43979.97 | 3671.35 | 50369.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40546.07 | 42576.23 | 44807.31 | 46028.72 | 47010.55 | 47539.79 | 49169.93 |
| **Latency** | 846µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 81163.32 | 15600.94 | 99565.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55901.46 | 67886.45 | 87209.08 | 94378.04 | 97051.62 | 97767.10 | 98607.20 |
| **Latency** | 327µs    | 429µs    | 590µs    | 730µs    | 943µs    | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47620.01 | 2875.17 | 67724.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45892.54 | 46686.77 | 47471.54 | 48196.56 | 49721.32 | 51725.56 | 57337.45 |
| **Latency** | 919µs    | 977µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17214.94 | 1458.64 | 25455.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16739.36 | 17100.16 | 17414.76 | 17734.04 | 18000.67 | 18175.84 | 18691.03 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32003.32 | 2886.87 | 34202.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31316.87 | 32201.18 | 32531.01 | 33037.63 | 33300.42 | 33475.11 | 33824.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15428.22 | 2206.70 | 20756.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13155.23 | 15209.22 | 15799.36 | 16327.78 | 16880.05 | 18499.01 | 19734.26 |
| **Latency** | 1ms      | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41888.43 | 2370.04 | 46955.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39989.30 | 41326.45 | 42115.11 | 43005.12 | 43978.58 | 44484.30 | 45677.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43162.77 | 3294.78 | 49973.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40693.25 | 42204.21 | 43758.67 | 44917.26 | 45790.27 | 46303.81 | 47252.00 |
| **Latency** | 858µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6607.49  | 1397.24 | 10932.71 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5251.14 | 5767.13 | 6688.63 | 7353.52 | 8306.42 | 8923.79 | 9671.78 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 9ms     | 9ms     | 13ms    |

---

<p align="center">Generated 2024-06-05T00:47:15.370Z</p>
