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
| Bun                                                                                  | 76300.46 | 10027.33 | 98427.35  | 100%     |
| Hyper Express                                                                        | 75512.17 | 15949.14 | 98012.68  | 99%      |
| Deno                                                                                 | 54388.86 | 7322.82  | 85354.94  | 71%      |
| Fast                                                                                 | 49843.40 | 4929.74  | 77129.26  | 65%      |
| Hono                                                                                 | 47032.21 | 3533.23  | 73493.49  | 62%      |
| Fastro                                                                               | 46440.79 | 2507.51  | 63528.02  | 61%      |
| Megalo                                                                               | 44901.38 | 2508.44  | 57711.38  | 59%      |
| http                                                                                 | 39751.34 | 5655.26  | 47170.04  | 52%      |
| Reno                                                                                 | 39218.81 | 2245.94  | 46454.51  | 51%      |
| Router                                                                               | 35572.18 | 4372.87  | 41696.10  | 47%      |
| Oak                                                                                  | 31676.20 | 2937.76  | 33999.50  | 42%      |
| Aqua                                                                                 | 27799.77 | 3695.50  | 33676.24  | 36%      |
| Node                                                                                 | 16018.25 | 1430.36  | 19544.23  | 21%      |
| Fastify                                                                              | 14801.00 | 1467.06  | 17403.66  | 19%      |
| Dinatra                                                                              | 14550.05 | 2314.06  | 17927.99  | 19%      |
| Abc                                                                                  | 13164.89 | 2267.53  | 20047.45  | 17%      |
| Opine                                                                                | 12753.52 | 2483.20  | 45947.01  | 17%      |
| Acorn                                                                                | 11219.05 | 17594.16 | 102764.36 | 15%      |
| Servest                                                                              | 6308.71  | 1807.82  | 10728.50  | 8%       |
| Express                                                                              | 5908.90  | 995.16   | 7664.42   | 8%       |
| Alosaur                                                                              | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-b37f51b9-5f83-4371-8128-6087c2cf4788) |          |          |           |          |

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
| 13164.89 | 2267.53 | 20047.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10831.25 | 12101.72 | 13061.51 | 13930.94 | 16300.39 | 17345.17 | 19136.04 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 11219.05 | 17594.16 | 102764.36 |     |

| **Stat**    | 10    | 25    | 50      | 75       | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60.55 | 75.85 | 5660.63 | 13442.03 | 25555.88 | 63725.69 | 73417.68 |
| **Latency** | 4ms   | 7ms   | 14ms    | 20ms     | 24ms     | 26ms     | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27799.77 | 3695.50 | 33676.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25220.66 | 26914.27 | 28452.32 | 29870.18 | 30684.34 | 31257.02 | 32350.75 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 76300.46 | 10027.33 | 98427.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63391.62 | 67970.28 | 75458.98 | 84757.62 | 90111.61 | 92342.84 | 95903.54 |
| **Latency** | 386µs    | 480µs    | 609µs    | 780µs    | 980µs    | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54388.86 | 7322.82 | 85354.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50069.58 | 51049.80 | 52150.37 | 53729.30 | 64906.70 | 73503.01 | 81504.06 |
| **Latency** | 620µs    | 846µs    | 942µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14550.05 | 2314.06 | 17927.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12127.88 | 13544.41 | 15258.15 | 15979.41 | 16518.33 | 16808.32 | 17376.22 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 5908.90  | 995.16 | 7664.42 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4347.83 | 5629.01 | 6073.12 | 6323.64 | 7191.69 | 7318.43 | 7462.72 |
| **Latency** | 6ms     | 7ms     | 8ms     | 8ms     | 10ms    | 11ms    | 14ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49843.40 | 4929.74 | 77129.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46616.23 | 47481.87 | 48445.65 | 49998.09 | 56818.05 | 60500.65 | 66818.05 |
| **Latency** | 787µs    | 933µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14801.00 | 1467.06 | 17403.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14348.15 | 14746.41 | 15035.18 | 15339.53 | 15604.19 | 15766.97 | 16264.11 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46440.79 | 2507.51 | 63528.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44803.42 | 45696.85 | 46566.99 | 47460.93 | 48183.46 | 48759.78 | 52266.35 |
| **Latency** | 934µs    | 993µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47032.21 | 3533.23 | 73493.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44628.04 | 45666.92 | 46605.91 | 47807.76 | 50413.63 | 52775.84 | 57700.79 |
| **Latency** | 903µs    | 981µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39751.34 | 5655.26 | 47170.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35803.64 | 38916.05 | 41190.05 | 42623.89 | 43681.01 | 44138.09 | 45487.78 |
| **Latency** | 909µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 75512.17 | 15949.14 | 98012.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54107.37 | 59017.74 | 78505.75 | 90770.50 | 94359.06 | 95921.80 | 96930.22 |
| **Latency** | 377µs    | 477µs    | 601µs    | 812µs    | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44901.38 | 2508.44 | 57711.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43203.74 | 44167.33 | 45134.42 | 45779.74 | 46632.69 | 47340.35 | 51050.20 |
| **Latency** | 970µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16018.25 | 1430.36 | 19544.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15459.29 | 15868.51 | 16252.69 | 16572.36 | 16821.74 | 17027.61 | 17634.53 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31676.20 | 2937.76 | 33999.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31023.38 | 31536.57 | 32221.69 | 32661.98 | 33132.92 | 33307.68 | 33632.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12753.52 | 2483.20 | 45947.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11079.76 | 12502.58 | 13196.27 | 13821.77 | 14235.35 | 14489.46 | 16006.66 |
| **Latency** | 2ms      | 3ms      | 4ms      | 4ms      | 4ms      | 5ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39218.81 | 2245.94 | 46454.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37434.60 | 38670.92 | 39561.24 | 40299.07 | 41015.73 | 41616.70 | 42811.89 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35572.18 | 4372.87 | 41696.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32349.20 | 34665.44 | 36665.56 | 37895.47 | 38784.26 | 39303.90 | 40334.33 |
| **Latency** | 991µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6308.71  | 1807.82 | 10728.50 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4808.25 | 5624.69 | 6614.88 | 7255.52 | 8104.88 | 8652.34 | 9203.03 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 10ms    | 12ms    | 16ms    |

---

<p align="center">Generated 2024-02-03T00:43:11.014Z</p>
