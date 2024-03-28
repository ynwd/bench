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
| Hyper Express                                                                        | 78682.28 | 16376.52 | 100042.81 | 100%     |
| Bun                                                                                  | 78582.52 | 10144.03 | 101659.48 | 100%     |
| Deno                                                                                 | 61244.23 | 10923.74 | 89851.55  | 78%      |
| Fast                                                                                 | 52068.18 | 4507.45  | 76772.52  | 66%      |
| Hono                                                                                 | 51487.43 | 5037.95  | 70590.11  | 65%      |
| Fastro                                                                               | 49741.10 | 3378.63  | 63912.10  | 63%      |
| Megalo                                                                               | 46345.21 | 2629.80  | 58466.57  | 59%      |
| Alosaur                                                                              | 44784.96 | 2682.11  | 61299.17  | 57%      |
| http                                                                                 | 43592.91 | 4670.16  | 51124.61  | 55%      |
| Reno                                                                                 | 40514.42 | 2177.34  | 48840.76  | 51%      |
| Router                                                                               | 38730.64 | 4131.28  | 43733.07  | 49%      |
| Oak                                                                                  | 33365.67 | 2979.56  | 36650.92  | 42%      |
| Aqua                                                                                 | 30814.22 | 3529.24  | 36051.42  | 39%      |
| Node                                                                                 | 17718.38 | 1668.51  | 22214.56  | 23%      |
| Fastify                                                                              | 16639.58 | 1856.65  | 18285.63  | 21%      |
| Dinatra                                                                              | 16061.92 | 2204.06  | 19590.81  | 20%      |
| Abc                                                                                  | 14262.80 | 1689.25  | 20879.03  | 18%      |
| Opine                                                                                | 13314.29 | 2358.66  | 35282.14  | 17%      |
| Servest                                                                              | 6105.80  | 1625.79  | 10899.19  | 8%       |
| Express                                                                              | 6065.74  | 986.62   | 7968.17   | 8%       |
| Acorn                                                                                | 3548.58  | 2472.92  | 15896.52  | 5%       |
| ![Chart](https://quickchart.io/chart/render/sf-61580dd4-aff0-4728-9860-70bd6c94393c) |          |          |           |          |

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
| 14262.80 | 1689.25 | 20879.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12478.78 | 13561.27 | 14567.85 | 15395.74 | 15831.96 | 16031.22 | 16527.70 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3548.58  | 2472.92 | 15896.52 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1796.73 | 2361.39 | 2804.31 | 3760.60 | 4999.69 | 10011.87 | 14547.97 |
| **Latency** | 3ms     | 8ms     | 13ms    | 18ms    | 22ms    | 25ms     | 27ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44784.96 | 2682.11 | 61299.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42776.61 | 43835.03 | 44722.46 | 45722.65 | 47121.25 | 48626.81 | 51432.12 |
| **Latency** | 969µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30814.22 | 3529.24 | 36051.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29100.60 | 30126.67 | 31601.96 | 32583.06 | 33282.05 | 33819.02 | 35026.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 78582.52 | 10144.03 | 101659.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65561.14 | 70118.43 | 77942.14 | 85969.02 | 93029.42 | 95442.81 | 99232.89 |
| **Latency** | 376µs    | 467µs    | 593µs    | 753µs    | 955µs    | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61244.23 | 10923.74 | 89851.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52437.74 | 53528.85 | 55312.52 | 69050.09 | 79238.71 | 83605.54 | 87767.18 |
| **Latency** | 536µs    | 605µs    | 859µs    | 960µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16061.92 | 2204.06 | 19590.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14541.27 | 15363.26 | 16521.96 | 17320.00 | 17914.38 | 18283.44 | 19009.87 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6065.74  | 986.62 | 7968.17 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4631.14 | 5787.30 | 6167.53 | 6508.35 | 7459.10 | 7661.32 | 7809.95 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 10ms    | 11ms    | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52068.18 | 4507.45 | 76772.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48555.69 | 49547.54 | 50717.51 | 54021.12 | 58345.39 | 60814.81 | 65443.51 |
| **Latency** | 716µs    | 894µs    | 982µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16639.58 | 1856.65 | 18285.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15548.10 | 16403.45 | 17094.42 | 17536.08 | 17840.64 | 17954.06 | 18173.73 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49741.10 | 3378.63 | 63912.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47322.04 | 48213.35 | 49128.59 | 50619.57 | 53606.31 | 56007.10 | 60623.35 |
| **Latency** | 853µs    | 934µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51487.43 | 5037.95 | 70590.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47240.73 | 48511.78 | 50201.91 | 54136.45 | 58511.28 | 60567.56 | 64901.10 |
| **Latency** | 676µs    | 900µs    | 998µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43592.91 | 4670.16 | 51124.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40080.02 | 42246.56 | 44937.31 | 46135.50 | 46923.10 | 47559.62 | 48901.35 |
| **Latency** | 846µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 78682.28 | 16376.52 | 100042.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56149.78 | 60604.88 | 83830.10 | 94034.94 | 96936.12 | 98095.92 | 99007.43 |
| **Latency** | 350µs    | 458µs    | 591µs    | 772µs    | 952µs    | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46345.21 | 2629.80 | 58466.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44554.34 | 45350.06 | 46304.83 | 47190.06 | 48631.67 | 49953.52 | 53413.52 |
| **Latency** | 941µs    | 998µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17718.38 | 1668.51 | 22214.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16848.45 | 17404.38 | 18034.49 | 18452.80 | 18733.51 | 19002.36 | 19341.55 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33365.67 | 2979.56 | 36650.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33035.89 | 33452.42 | 34006.35 | 34307.79 | 34578.91 | 34806.59 | 35228.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13314.29 | 2358.66 | 35282.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11113.44 | 13133.18 | 13926.12 | 14341.46 | 14631.68 | 14951.80 | 17503.46 |
| **Latency** | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 4ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40514.42 | 2177.34 | 48840.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38814.23 | 40021.42 | 40842.46 | 41413.39 | 42095.43 | 42723.49 | 44253.71 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38730.64 | 4131.28 | 43733.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36169.10 | 37884.77 | 40001.95 | 40863.09 | 41453.68 | 41929.58 | 42933.37 |
| **Latency** | 924µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6105.80  | 1625.79 | 10899.19 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4741.10 | 5629.32 | 6247.77 | 6960.70 | 7734.65 | 8209.72 | 9356.03 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 10ms    | 12ms    | 15ms    |

---

<p align="center">Generated 2024-03-28T06:17:24.646Z</p>
