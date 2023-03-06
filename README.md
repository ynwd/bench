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
| Bun                                                                                  | 59625.36 | 12487.13 | 85590.62  | 100%     |
| Hyper Express                                                                        | 54458.88 | 15934.35 | 78368.18  | 91%      |
| Deno                                                                                 | 51289.78 | 13585.37 | 75145.79  | 86%      |
| Hono                                                                                 | 45906.95 | 16059.30 | 131217.55 | 77%      |
| Fastro                                                                               | 45352.90 | 16555.94 | 136045.17 | 76%      |
| Fast                                                                                 | 44656.09 | 14723.08 | 65821.58  | 75%      |
| http                                                                                 | 40568.25 | 9669.52  | 50544.90  | 68%      |
| Megalo                                                                               | 40224.79 | 13112.85 | 139850.36 | 67%      |
| Reno                                                                                 | 38131.40 | 8704.73  | 55362.21  | 64%      |
| Alosaur                                                                              | 34081.13 | 7585.07  | 46661.12  | 57%      |
| Node                                                                                 | 33318.89 | 6333.22  | 40259.03  | 56%      |
| Router                                                                               | 28711.24 | 5380.71  | 37331.81  | 48%      |
| Fastify                                                                              | 27879.58 | 6132.71  | 36114.00  | 47%      |
| Aqua                                                                                 | 23750.92 | 4277.23  | 29521.58  | 40%      |
| Oak                                                                                  | 23453.55 | 3894.24  | 30330.70  | 39%      |
| Dinatra                                                                              | 17529.14 | 4224.16  | 41149.68  | 29%      |
| Abc                                                                                  | 17451.99 | 2654.50  | 31400.49  | 29%      |
| Opine                                                                                | 9195.88  | 1271.34  | 12797.99  | 15%      |
| Express                                                                              | 5987.49  | 4330.52  | 135164.21 | 10%      |
| Servest                                                                              | 5554.04  | 5529.16  | 126400.36 | 9%       |
| Acorn                                                                                | 4905.06  | 6304.55  | 95636.84  | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-411da335-e465-4c69-adbf-268445399063) |          |          |           |          |

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
| 17451.99 | 2654.50 | 31400.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14839.61 | 16267.04 | 17926.55 | 19118.52 | 20093.42 | 20538.38 | 21336.21 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4905.06  | 6304.55 | 95636.84 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 87.14 | 2501.37 | 3453.99 | 5713.60 | 9423.93 | 11813.03 | 27098.07 |
| **Latency** | 4ms   | 5ms     | 13ms    | 18ms    | 21ms    | 23ms     | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34081.13 | 7585.07 | 46661.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22213.51 | 33702.74 | 36590.38 | 38702.25 | 40476.74 | 40978.18 | 42263.35 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23750.92 | 4277.23 | 29521.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20372.50 | 22586.16 | 24774.71 | 26176.12 | 27139.60 | 27669.90 | 28503.03 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59625.36 | 12487.13 | 85590.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45868.19 | 49728.63 | 56899.26 | 71811.25 | 76212.83 | 78350.42 | 81984.30 |
| **Latency** | 483µs    | 612µs    | 762µs    | 992µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51289.78 | 13585.37 | 75145.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30710.20 | 46681.14 | 56135.83 | 59699.34 | 63000.25 | 64690.65 | 67713.16 |
| **Latency** | 621µs    | 732µs    | 886µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17529.14 | 4224.16 | 41149.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12725.41 | 16138.71 | 18531.66 | 20116.65 | 20966.64 | 21521.49 | 23216.21 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5987.49  | 4330.52 | 135164.21 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3929.78 | 4343.52 | 6616.61 | 7045.72 | 7359.38 | 7519.24 | 7713.93 |
| **Latency** | 6ms     | 6ms     | 7ms     | 9ms     | 12ms    | 13ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44656.09 | 14723.08 | 65821.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19583.58 | 38215.22 | 51010.60 | 54051.79 | 57546.17 | 60232.39 | 63005.59 |
| **Latency** | 761µs    | 850µs    | 938µs    | 1ms      | 1ms      | 2ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27879.58 | 6132.71 | 36114.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22956.88 | 28101.68 | 29315.14 | 30851.14 | 32197.16 | 32968.17 | 34614.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 45352.90 | 16555.94 | 136045.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16503.93 | 42151.62 | 52550.06 | 54910.32 | 56653.16 | 57819.55 | 59274.90 |
| **Latency** | 786µs    | 851µs    | 927µs    | 1ms      | 1ms      | 1ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 45906.95 | 16059.30 | 131217.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16913.50 | 42678.08 | 53033.98 | 55825.52 | 57647.57 | 58844.62 | 60616.87 |
| **Latency** | 767µs    | 838µs    | 912µs    | 1ms      | 1ms      | 1ms      | 6ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40568.25 | 9669.52 | 50544.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25700.47 | 41405.30 | 44674.69 | 45909.28 | 46980.81 | 47650.98 | 48952.17 |
| **Latency** | 948µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54458.88 | 15934.35 | 78368.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33404.90 | 36880.68 | 58487.59 | 69208.13 | 72728.18 | 74001.29 | 75629.90 |
| **Latency** | 536µs    | 643µs    | 782µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 40224.79 | 13112.85 | 139850.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18766.96 | 35056.97 | 42968.40 | 50038.16 | 52542.91 | 53638.50 | 55099.09 |
| **Latency** | 836µs    | 923µs    | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33318.89 | 6333.22 | 40259.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31462.18 | 33558.30 | 34805.09 | 36123.12 | 37053.59 | 37614.15 | 38502.55 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23453.55 | 3894.24 | 30330.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19247.98 | 23119.14 | 24504.11 | 25599.27 | 26254.55 | 26604.48 | 27344.05 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9195.88  | 1271.34 | 12797.99 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7906.11 | 8635.12 | 9382.71 | 9802.78 | 10327.44 | 10922.90 | 11901.09 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 6ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38131.40 | 8704.73 | 55362.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22605.13 | 39009.24 | 40905.61 | 42499.52 | 44058.22 | 44713.15 | 46137.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28711.24 | 5380.71 | 37331.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22678.02 | 28121.00 | 30359.74 | 31681.92 | 32580.42 | 33111.81 | 33926.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5554.04  | 5529.16 | 126400.36 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2653.79 | 5223.47 | 5901.22 | 6265.45 | 6591.21 | 6822.23 | 7543.38 |
| **Latency** | 7ms     | 7ms     | 8ms     | 9ms     | 13ms    | 15ms    | 27ms    |

---

<p align="center">Generated 2023-03-06T12:28:30.556Z</p>
