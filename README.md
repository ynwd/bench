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
| Bun                                                                                  | 78632.11 | 10255.39 | 101561.83 | 100%     |
| Hyper Express                                                                        | 78370.19 | 15904.72 | 100130.61 | 100%     |
| Deno                                                                                 | 53058.29 | 4356.54  | 85012.43  | 67%      |
| Fast                                                                                 | 50136.30 | 5047.10  | 71123.38  | 64%      |
| Fastro                                                                               | 48809.66 | 4077.92  | 76593.14  | 62%      |
| Hono                                                                                 | 47446.91 | 3454.13  | 63213.93  | 60%      |
| Megalo                                                                               | 45740.94 | 2996.30  | 65923.98  | 58%      |
| Reno                                                                                 | 38671.21 | 2075.06  | 45040.47  | 49%      |
| http                                                                                 | 37662.07 | 3731.64  | 44550.42  | 48%      |
| Router                                                                               | 34770.11 | 3150.53  | 40521.84  | 44%      |
| Alosaur                                                                              | 32894.12 | 3873.12  | 40155.70  | 42%      |
| Aqua                                                                                 | 27928.09 | 2741.49  | 33141.15  | 36%      |
| Oak                                                                                  | 25947.62 | 3589.00  | 30200.88  | 33%      |
| Node                                                                                 | 17330.45 | 1573.53  | 28998.81  | 22%      |
| Fastify                                                                              | 16432.77 | 1633.64  | 19245.69  | 21%      |
| Dinatra                                                                              | 16399.14 | 2150.74  | 23638.11  | 21%      |
| Abc                                                                                  | 15176.90 | 1871.44  | 26864.41  | 19%      |
| Opine                                                                                | 12624.63 | 1921.18  | 17140.83  | 16%      |
| Servest                                                                              | 6852.61  | 1517.35  | 10380.38  | 9%       |
| Express                                                                              | 6282.96  | 999.27   | 8113.31   | 8%       |
| Acorn                                                                                | 5810.63  | 10382.41 | 87392.67  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-36d59390-7dbf-427b-adfb-5882095823ba) |          |          |           |          |

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
| 15176.90 | 1871.44 | 26864.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13561.58 | 14533.07 | 15248.48 | 16228.03 | 16709.13 | 17013.71 | 19516.72 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 5810.63  | 10382.41 | 87392.67 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 84.20 | 2159.99 | 3492.46 | 5810.11 | 11225.74 | 14174.41 | 72841.17 |
| **Latency** | 4ms   | 8ms     | 14ms    | 18ms    | 23ms     | 25ms     | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32894.12 | 3873.12 | 40155.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30521.17 | 32076.57 | 34008.79 | 34845.25 | 35516.50 | 35910.91 | 36811.07 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27928.09 | 2741.49 | 33141.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26378.18 | 27522.03 | 28533.09 | 29237.34 | 29746.93 | 30125.57 | 31058.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 78632.11 | 10255.39 | 101561.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65820.45 | 69942.53 | 77864.67 | 87250.49 | 93512.44 | 95517.37 | 99146.54 |
| **Latency** | 378µs    | 470µs    | 595µs    | 752µs    | 952µs    | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53058.29 | 4356.54 | 85012.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50608.44 | 51519.48 | 52413.60 | 53409.47 | 55100.21 | 58131.87 | 75023.40 |
| **Latency** | 789µs    | 889µs    | 950µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16399.14 | 2150.74 | 23638.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14708.54 | 15596.04 | 16722.88 | 17737.22 | 18451.16 | 18748.76 | 19552.37 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6282.96  | 999.27 | 8113.31 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4918.24 | 5901.29 | 6389.01 | 6739.20 | 7752.83 | 7942.44 | 8063.20 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 10ms    | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50136.30 | 5047.10 | 71123.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46360.15 | 47382.73 | 48361.50 | 51742.35 | 57264.49 | 60552.57 | 66840.24 |
| **Latency** | 714µs    | 965µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16432.77 | 1633.64 | 19245.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15579.55 | 16144.70 | 16715.85 | 17128.46 | 17532.68 | 17747.02 | 18222.60 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48809.66 | 4077.92 | 76593.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46226.08 | 47129.72 | 48084.42 | 49154.13 | 53056.99 | 56951.44 | 62493.11 |
| **Latency** | 893µs    | 985µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47446.91 | 3454.13 | 63213.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45134.56 | 46056.40 | 46816.14 | 48150.86 | 51796.23 | 53820.30 | 58025.92 |
| **Latency** | 937µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37662.07 | 3731.64 | 44550.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35122.07 | 37166.75 | 38572.96 | 39508.39 | 40312.36 | 40729.63 | 41410.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 78370.19 | 15904.72 | 100130.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56122.39 | 61404.27 | 82194.79 | 93190.68 | 96905.32 | 97814.64 | 98884.79 |
| **Latency** | 376µs    | 467µs    | 584µs    | 770µs    | 953µs    | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45740.94 | 2996.30 | 65923.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43826.41 | 44543.45 | 45389.97 | 46580.32 | 48580.32 | 50590.57 | 53257.91 |
| **Latency** | 997µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17330.45 | 1573.53 | 28998.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16800.38 | 17226.53 | 17528.36 | 17863.02 | 18158.09 | 18373.87 | 18970.00 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25947.62 | 3589.00 | 30200.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24178.70 | 25817.00 | 26867.45 | 27599.23 | 28139.24 | 28488.01 | 29368.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12624.63 | 1921.18 | 17140.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10916.40 | 12405.06 | 13094.57 | 13552.39 | 13911.86 | 14486.43 | 15651.74 |
| **Latency** | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38671.21 | 2075.06 | 45040.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36976.28 | 38330.25 | 39137.90 | 39538.98 | 40062.07 | 40309.49 | 41959.81 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34770.11 | 3150.53 | 40521.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32609.95 | 34205.25 | 35519.51 | 36449.49 | 37086.57 | 37480.68 | 38269.38 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6852.61  | 1517.35 | 10380.38 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5205.34 | 6306.18 | 7157.57 | 7666.79 | 8519.74 | 8944.15 | 9457.07 |
| **Latency** | 4ms     | 5ms     | 7ms     | 8ms     | 10ms    | 12ms    | 15ms    |

---

<p align="center">Generated 2023-12-23T06:16:17.095Z</p>
