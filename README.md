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
| Bun                                                                                  | 69854.80 | 12235.35 | 89718.97  | 100%     |
| Hyper Express                                                                        | 66648.39 | 17912.30 | 84668.81  | 95%      |
| Deno                                                                                 | 60307.53 | 14388.23 | 181818.18 | 86%      |
| Fast                                                                                 | 56927.14 | 14260.69 | 69673.96  | 81%      |
| Hono                                                                                 | 55695.95 | 16165.53 | 70814.03  | 80%      |
| Fastro                                                                               | 52997.90 | 18667.31 | 149700.60 | 76%      |
| Megalo                                                                               | 50738.76 | 13744.21 | 82718.85  | 73%      |
| http                                                                                 | 46171.99 | 9179.06  | 51892.38  | 66%      |
| Reno                                                                                 | 44078.14 | 10271.75 | 74989.10  | 63%      |
| Node                                                                                 | 40982.09 | 6213.17  | 44174.27  | 59%      |
| Alosaur                                                                              | 38516.55 | 8159.31  | 44394.18  | 55%      |
| Fastify                                                                              | 36775.49 | 5976.47  | 39564.12  | 53%      |
| Router                                                                               | 33270.83 | 5295.95  | 37078.57  | 48%      |
| Oak                                                                                  | 26422.74 | 4874.16  | 71471.97  | 38%      |
| Aqua                                                                                 | 26145.02 | 4046.95  | 34026.56  | 37%      |
| Dinatra                                                                              | 20771.93 | 4438.74  | 42584.72  | 30%      |
| Abc                                                                                  | 18061.31 | 2954.43  | 23301.76  | 26%      |
| Opine                                                                                | 10552.48 | 1358.72  | 14303.63  | 15%      |
| Express                                                                              | 7869.80  | 1579.18  | 9853.03   | 11%      |
| Servest                                                                              | 6223.86  | 1700.28  | 9295.51   | 9%       |
| Acorn                                                                                | 4937.39  | 5052.98  | 78844.66  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-32279c11-eca4-49eb-aa37-933159f12475) |          |          |           |          |

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
| 18061.31 | 2954.43 | 23301.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15713.51 | 16821.58 | 19307.87 | 19714.67 | 19953.76 | 20764.95 | 21617.66 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4937.39  | 5052.98 | 78844.66 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 91.28 | 2609.56 | 3839.27 | 5891.97 | 10191.42 | 12163.17 | 27213.52 |
| **Latency** | 4ms   | 5ms     | 11ms    | 16ms    | 20ms     | 21ms     | 23ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38516.55 | 8159.31 | 44394.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28168.20 | 37876.96 | 42435.72 | 42955.92 | 43249.39 | 43451.29 | 44022.50 |
| **Latency** | 988µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26145.02 | 4046.95 | 34026.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23939.87 | 24479.95 | 27885.63 | 28074.20 | 28211.68 | 28336.41 | 29260.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 69854.80 | 12235.35 | 89718.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54942.93 | 59726.79 | 68882.09 | 82008.12 | 83604.23 | 84271.07 | 85560.71 |
| **Latency** | 435µs    | 546µs    | 664µs    | 805µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 60307.53 | 14388.23 | 181818.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42939.61 | 52355.56 | 67333.77 | 69442.41 | 70357.94 | 70909.83 | 71821.58 |
| **Latency** | 560µs    | 625µs    | 772µs    | 822µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20771.93 | 4438.74 | 42584.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16817.18 | 19796.55 | 21338.23 | 23937.46 | 24817.50 | 25009.30 | 25226.69 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7869.80  | 1579.18 | 9853.03 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5715.50 | 7218.64 | 8664.05 | 8794.38 | 8895.38 | 8932.09 | 8981.66 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56927.14 | 14260.69 | 69673.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37506.39 | 50586.73 | 64724.63 | 65866.30 | 66524.49 | 66925.84 | 67637.23 |
| **Latency** | 680µs    | 722µs    | 765µs    | 822µs    | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36775.49 | 5976.47 | 39564.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37103.37 | 37690.86 | 38227.93 | 38727.52 | 38938.97 | 39043.76 | 39242.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 52997.90 | 18667.31 | 149700.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21264.87 | 48204.73 | 61561.60 | 66309.33 | 67308.80 | 67753.57 | 68417.15 |
| **Latency** | 671µs    | 707µs    | 774µs    | 855µs    | 1ms      | 1ms      | 6ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55695.95 | 16165.53 | 70814.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27142.61 | 49219.24 | 64201.10 | 66028.47 | 67013.46 | 67482.06 | 68090.64 |
| **Latency** | 668µs    | 712µs    | 770µs    | 828µs    | 1ms      | 1ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46171.99 | 9179.06 | 51892.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35400.04 | 47515.28 | 50115.59 | 50705.65 | 51165.40 | 51352.87 | 51672.03 |
| **Latency** | 856µs    | 943µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66648.39 | 17912.30 | 84668.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40269.59 | 42026.13 | 78935.62 | 80875.06 | 81812.36 | 82407.52 | 83501.69 |
| **Latency** | 470µs    | 545µs    | 675µs    | 730µs    | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50738.76 | 13744.21 | 82718.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29074.94 | 45411.45 | 58101.28 | 59103.67 | 59742.95 | 60088.46 | 60788.34 |
| **Latency** | 758µs    | 812µs    | 854µs    | 910µs    | 1ms      | 1ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40982.09 | 6213.17 | 44174.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40865.85 | 41707.56 | 42248.64 | 43095.30 | 43469.61 | 43669.05 | 43986.71 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26422.74 | 4874.16 | 71471.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23103.03 | 25039.25 | 28302.70 | 28576.47 | 28851.33 | 29196.05 | 29850.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10552.48 | 1358.72 | 14303.63 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9804.42 | 10164.19 | 10989.35 | 11100.35 | 11303.63 | 11726.15 | 12632.36 |
| **Latency** | 3ms     | 4ms      | 4ms      | 4ms      | 5ms      | 5ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44078.14 | 10271.75 | 74989.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31068.31 | 42554.27 | 48618.53 | 49501.05 | 50372.09 | 50884.34 | 51676.66 |
| **Latency** | 944µs    | 989µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33270.83 | 5295.95 | 37078.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29111.53 | 33142.01 | 35239.99 | 35626.76 | 36150.56 | 36460.92 | 36830.38 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6223.86  | 1700.28 | 9295.51 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4027.55 | 6155.16 | 6839.61 | 7166.87 | 7430.18 | 7678.50 | 8934.22 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 10ms    | 12ms    | 20ms    |

---

<p align="center">Generated 2023-03-10T15:16:43.859Z</p>
