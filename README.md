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
| Hyper Express                                                                        | 68237.91 | 17713.51 | 88710.71  | 100%     |
| Bun                                                                                  | 67280.63 | 12333.06 | 92320.35  | 99%      |
| Deno                                                                                 | 46625.25 | 11255.46 | 55717.86  | 68%      |
| http                                                                                 | 43489.09 | 7356.67  | 48367.13  | 64%      |
| Hono                                                                                 | 43440.75 | 7346.86  | 49327.17  | 64%      |
| Fast                                                                                 | 43408.53 | 7997.38  | 54865.63  | 64%      |
| Node                                                                                 | 42211.05 | 6698.69  | 45818.35  | 62%      |
| Megalo                                                                               | 42135.14 | 7352.86  | 47082.02  | 62%      |
| Fastro                                                                               | 40557.52 | 9191.76  | 57222.18  | 59%      |
| Reno                                                                                 | 38046.63 | 6895.23  | 51975.73  | 56%      |
| Fastify                                                                              | 37613.24 | 5774.62  | 40959.85  | 55%      |
| Alosaur                                                                              | 33590.31 | 6508.22  | 82509.16  | 49%      |
| Router                                                                               | 30153.52 | 3875.59  | 33013.19  | 44%      |
| Oak                                                                                  | 23559.48 | 3639.03  | 28377.44  | 35%      |
| Aqua                                                                                 | 21882.73 | 4313.83  | 30334.60  | 32%      |
| Dinatra                                                                              | 20641.29 | 4499.30  | 42831.02  | 30%      |
| Abc                                                                                  | 18866.76 | 2294.53  | 22120.07  | 28%      |
| Opine                                                                                | 10104.20 | 1255.84  | 13163.10  | 15%      |
| Express                                                                              | 7345.68  | 1636.03  | 8976.85   | 11%      |
| Servest                                                                              | 6410.64  | 1604.38  | 9393.69   | 9%       |
| Acorn                                                                                | 4795.64  | 7454.86  | 138888.89 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-288da647-d836-4465-af09-ce658a9e676a) |          |          |           |          |

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
| 18866.76 | 2294.53 | 22120.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16202.94 | 17942.55 | 19705.35 | 20005.23 | 20477.96 | 21560.46 | 21896.29 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4795.64  | 7454.86 | 138888.89 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2141.46 | 2708.32 | 3426.98 | 4820.42 | 9708.30 | 11384.97 | 14324.59 |
| **Latency** | 3ms     | 4ms     | 11ms    | 16ms    | 20ms    | 20ms     | 22ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33590.31 | 6508.22 | 82509.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27305.73 | 34492.43 | 35981.45 | 36507.62 | 37044.60 | 37333.11 | 37669.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21882.73 | 4313.83 | 30334.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15813.53 | 17807.31 | 24018.02 | 25105.04 | 25896.41 | 26405.88 | 26721.50 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67280.63 | 12333.06 | 92320.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53350.62 | 58553.25 | 64504.58 | 80012.94 | 82141.12 | 83082.02 | 85611.61 |
| **Latency** | 441µs    | 560µs    | 681µs    | 857µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46625.25 | 11255.46 | 55717.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26013.01 | 42496.91 | 52723.73 | 53253.53 | 53646.24 | 53936.68 | 54322.77 |
| **Latency** | 824µs    | 915µs    | 972µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20641.29 | 4499.30 | 42831.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16706.69 | 19993.83 | 21005.68 | 23618.63 | 24715.47 | 24897.12 | 25946.97 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7345.68  | 1636.03 | 8976.85 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5634.09 | 5757.11 | 8393.16 | 8749.62 | 8842.09 | 8870.97 | 8936.29 |
| **Latency** | 5ms     | 5ms     | 5ms     | 8ms     | 8ms     | 9ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43408.53 | 7997.38 | 54865.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36883.76 | 43064.20 | 46707.52 | 47351.17 | 47806.87 | 47983.34 | 48323.41 |
| **Latency** | 910µs    | 984µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37613.24 | 5774.62 | 40959.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37415.00 | 38547.85 | 39014.88 | 39522.58 | 39727.07 | 39841.49 | 40003.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40557.52 | 9191.76 | 57222.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25670.10 | 39068.44 | 44741.20 | 45345.08 | 45890.48 | 46127.35 | 46555.34 |
| **Latency** | 945µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43440.75 | 7346.86 | 49327.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37216.03 | 43021.11 | 46483.87 | 47026.37 | 47534.73 | 47784.16 | 48188.62 |
| **Latency** | 915µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43489.09 | 7356.67 | 48367.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37005.21 | 43596.21 | 46507.91 | 46909.42 | 47463.75 | 47742.13 | 48110.62 |
| **Latency** | 916µs    | 990µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68237.91 | 17713.51 | 88710.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42508.00 | 43615.18 | 80082.76 | 82458.15 | 83418.19 | 83818.05 | 84832.30 |
| **Latency** | 456µs    | 527µs    | 666µs    | 726µs    | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42135.14 | 7352.86 | 47082.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37035.95 | 40637.83 | 45208.63 | 45734.97 | 46082.98 | 46248.22 | 46521.11 |
| **Latency** | 937µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42211.05 | 6698.69 | 45818.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41581.53 | 43149.66 | 43831.15 | 44460.50 | 44943.63 | 45211.70 | 45533.28 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23559.48 | 3639.03 | 28377.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21403.66 | 23414.95 | 24784.69 | 24985.19 | 25276.37 | 25957.99 | 26854.53 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10104.20 | 1255.84 | 13163.10 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9544.80 | 9876.34 | 10483.48 | 10561.35 | 10634.27 | 10709.78 | 11885.81 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 5ms      | 5ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38046.63 | 6895.23 | 51975.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33042.03 | 39267.96 | 40697.76 | 41022.60 | 41590.43 | 41823.87 | 42172.68 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30153.52 | 3875.59 | 33013.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27445.48 | 29829.50 | 31649.12 | 31832.62 | 31974.01 | 32041.97 | 32588.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6410.64  | 1604.38 | 9393.69 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4632.80 | 6063.98 | 6916.78 | 7332.34 | 7600.99 | 7812.84 | 9174.41 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 10ms    | 11ms    | 18ms    |

---

<p align="center">Generated 2023-04-15T00:48:48.186Z</p>
