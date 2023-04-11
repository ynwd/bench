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
| Bun                                                                                  | 45370.12 | 10698.65 | 64615.48  | 100%     |
| Hyper Express                                                                        | 34688.88 | 13314.33 | 56842.73  | 76%      |
| Deno                                                                                 | 31906.25 | 10125.56 | 47714.81  | 70%      |
| Fast                                                                                 | 29680.14 | 9728.20  | 58419.52  | 65%      |
| http                                                                                 | 28395.99 | 7877.89  | 63056.64  | 63%      |
| Megalo                                                                               | 28372.53 | 8665.20  | 41936.52  | 63%      |
| Hono                                                                                 | 25702.40 | 8007.23  | 43310.81  | 57%      |
| Alosaur                                                                              | 25350.30 | 6115.21  | 48543.35  | 56%      |
| Reno                                                                                 | 24704.73 | 7058.81  | 33933.12  | 54%      |
| Fastro                                                                               | 24042.03 | 8965.39  | 184188.92 | 53%      |
| Router                                                                               | 20459.89 | 4339.89  | 25330.65  | 45%      |
| Aqua                                                                                 | 18082.09 | 3950.63  | 23738.62  | 40%      |
| Node                                                                                 | 15271.70 | 2979.75  | 19313.32  | 34%      |
| Oak                                                                                  | 13104.93 | 3048.07  | 19547.57  | 29%      |
| Fastify                                                                              | 11970.41 | 3467.96  | 20145.85  | 26%      |
| Dinatra                                                                              | 11120.97 | 2329.47  | 20916.64  | 25%      |
| Abc                                                                                  | 9471.58  | 1718.98  | 15595.72  | 21%      |
| Opine                                                                                | 5731.52  | 2602.58  | 57182.27  | 13%      |
| Acorn                                                                                | 3854.65  | 3069.47  | 54899.36  | 8%       |
| Express                                                                              | 3771.70  | 980.18   | 11058.84  | 8%       |
| Servest                                                                              | 3601.16  | 1019.38  | 6959.58   | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-1bbd0794-6631-4f34-9089-910064363c06) |          |          |           |          |

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
| 9471.58  | 1718.98 | 15595.72 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7514.57 | 8822.33 | 10104.34 | 10557.11 | 10841.05 | 11042.62 | 11556.86 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 6ms      | 7ms      | 11ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3854.65  | 3069.47 | 54899.36 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 1900.78 | 2415.55 | 3050.80 | 4298.85 | 7339.33 | 8467.83 | 9543.92 |
| **Latency** | 5ms     | 6ms     | 13ms    | 18ms    | 22ms    | 23ms    | 27ms    |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25350.30 | 6115.21 | 48543.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16180.90 | 22821.40 | 28007.69 | 29331.09 | 30403.97 | 30902.77 | 31892.05 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18082.09 | 3950.63 | 23738.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12053.15 | 16567.82 | 19456.03 | 20800.51 | 21676.96 | 22227.66 | 23021.46 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45370.12 | 10698.65 | 64615.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32497.48 | 37556.70 | 45017.99 | 55335.39 | 59026.54 | 60541.14 | 62284.34 |
| **Latency** | 599µs    | 755µs    | 942µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 31906.25 | 10125.56 | 47714.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17305.70 | 26710.94 | 32298.50 | 41084.37 | 43431.69 | 44318.84 | 46201.21 |
| **Latency** | 945µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 6ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11120.97 | 2329.47 | 20916.64 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8341.96 | 10150.85 | 11432.58 | 12757.18 | 13533.69 | 13861.54 | 14463.98 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 6ms      | 6ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 3771.70  | 980.18 | 11058.84 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2503.91 | 3246.00 | 4136.23 | 4380.16 | 4553.36 | 4629.63 | 4880.68 |
| **Latency** | 10ms    | 11ms    | 11ms    | 13ms    | 17ms    | 20ms    | 26ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29680.14 | 9728.20 | 58419.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13726.49 | 25011.50 | 31505.34 | 37119.29 | 40526.84 | 41844.35 | 44267.76 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11970.41 | 3467.96 | 20145.85 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5782.69 | 10806.43 | 13260.33 | 14426.69 | 14929.11 | 15209.36 | 15606.39 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 6ms      | 7ms      | 13ms     |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 24042.03 | 8965.39 | 184188.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11872.87 | 22681.19 | 26445.74 | 28017.36 | 29811.22 | 30722.35 | 33659.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25702.40 | 8007.23 | 43310.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11751.47 | 22767.93 | 28387.14 | 31472.00 | 33043.94 | 33956.70 | 35344.55 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 7ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28395.99 | 7877.89 | 63056.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16301.95 | 24105.06 | 31960.47 | 34185.81 | 34976.35 | 35325.78 | 36145.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 34688.88 | 13314.33 | 56842.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15962.90 | 22502.07 | 35975.66 | 46088.98 | 52740.61 | 54538.73 | 55976.17 |
| **Latency** | 711µs    | 866µs    | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28372.53 | 8665.20 | 41936.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14702.50 | 24920.07 | 31137.36 | 34327.11 | 36396.08 | 37662.15 | 39283.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15271.70 | 2979.75 | 19313.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11519.35 | 14893.91 | 16323.66 | 16948.47 | 17418.46 | 17656.50 | 18034.44 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13104.93 | 3048.07 | 19547.57 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8532.60 | 11817.84 | 14143.53 | 15300.76 | 15827.53 | 16137.47 | 16771.87 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 5ms      | 6ms      | 8ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5731.52  | 2602.58 | 57182.27 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3659.95 | 5200.10 | 6040.56 | 6476.20 | 6682.79 | 6860.59 | 7956.79 |
| **Latency** | 7ms     | 7ms     | 8ms     | 9ms     | 11ms    | 13ms    | 17ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24704.73 | 7058.81 | 33933.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12984.12 | 22411.88 | 27676.71 | 29336.31 | 30450.55 | 30960.40 | 31849.53 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20459.89 | 4339.89 | 25330.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14412.48 | 18812.20 | 22253.01 | 23203.78 | 23816.43 | 24177.36 | 24902.21 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3601.16  | 1019.38 | 6959.58 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2108.16 | 3364.31 | 3904.65 | 4166.71 | 4502.48 | 4687.75 | 4994.12 |
| **Latency** | 11ms    | 11ms    | 12ms    | 15ms    | 18ms    | 21ms    | 30ms    |

---

<p align="center">Generated 2023-04-11T00:47:55.761Z</p>
