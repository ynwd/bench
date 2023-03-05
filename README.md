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
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Bun                                                                                  | 71487.91 | 12112.86 | 94140.95  | 100%     |
| Hyper Express                                                                        | 71354.28 | 17523.72 | 86317.84  | 100%     |
| Deno                                                                                 | 57757.49 | 15073.55 | 76012.05  | 81%      |
| Hono                                                                                 | 55745.11 | 17824.68 | 74101.42  | 78%      |
| Fastro                                                                               | 55503.07 | 19250.88 | 175438.60 | 78%      |
| Megalo                                                                               | 54688.26 | 12044.58 | 66689.35  | 77%      |
| Fast                                                                                 | 54585.91 | 15129.24 | 76083.36  | 76%      |
| http                                                                                 | 48927.39 | 10224.53 | 56552.87  | 68%      |
| Reno                                                                                 | 44468.44 | 10399.33 | 93312.60  | 62%      |
| Node                                                                                 | 40824.29 | 7113.25  | 45001.22  | 57%      |
| Alosaur                                                                              | 38471.47 | 8314.56  | 49062.68  | 54%      |
| Router                                                                               | 33824.83 | 5129.54  | 39347.46  | 47%      |
| Fastify                                                                              | 32988.70 | 10420.45 | 40318.91  | 46%      |
| Little                                                                               | 31285.31 | 4979.77  | 35871.33  | 44%      |
| Oak                                                                                  | 28532.93 | 4609.62  | 33332.97  | 40%      |
| Aqua                                                                                 | 26655.96 | 4427.30  | 31197.85  | 37%      |
| Dinatra                                                                              | 22684.46 | 4469.87  | 47225.32  | 32%      |
| Abc                                                                                  | 16810.99 | 4901.69  | 31956.92  | 24%      |
| Opine                                                                                | 10999.80 | 1324.67  | 13451.06  | 15%      |
| Express                                                                              | 8092.03  | 1396.75  | 11434.06  | 11%      |
| Servest                                                                              | 6661.49  | 1812.02  | 9773.47   | 9%       |
| Acorn                                                                                | 4759.48  | 6995.98  | 148514.85 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-9e859937-0712-4e69-9a38-c013a2d79b8c) |          |          |           |          |

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
| 16810.99 | 4901.69 | 31956.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10554.22 | 11856.41 | 18203.05 | 21448.59 | 21892.87 | 22119.22 | 22350.69 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4759.48  | 6995.98 | 148514.85 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 2146.04 | 2749.31 | 3487.56 | 4770.40 | 10125.77 | 12417.12 | 15102.35 |
| **Latency** | 3ms     | 4ms     | 11ms    | 16ms    | 19ms     | 20ms     | 21ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38471.47 | 8314.56 | 49062.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28964.29 | 37244.12 | 42459.40 | 43098.66 | 43510.94 | 43815.82 | 44237.04 |
| **Latency** | 985µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26655.96 | 4427.30 | 31197.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24000.22 | 25697.76 | 28294.50 | 28748.63 | 29492.22 | 29825.72 | 30083.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 71487.91 | 12112.86 | 94140.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56303.95 | 60410.24 | 73130.73 | 83132.44 | 84756.90 | 85600.87 | 88307.96 |
| **Latency** | 427µs    | 536µs    | 656µs    | 792µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57757.49 | 15073.55 | 76012.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39095.35 | 50224.75 | 58814.05 | 70501.33 | 71365.85 | 71806.23 | 72696.09 |
| **Latency** | 553µs    | 655µs    | 775µs    | 881µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22684.46 | 4469.87 | 47225.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19535.34 | 20335.37 | 24325.77 | 24860.39 | 25490.39 | 26158.72 | 27041.74 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8092.03  | 1396.75 | 11434.06 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6057.97 | 8247.50 | 8725.82 | 8816.74 | 8883.23 | 8923.55 | 8958.94 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54585.91 | 15129.24 | 76083.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32191.81 | 48981.45 | 63121.88 | 66017.81 | 66804.64 | 67209.65 | 68493.09 |
| **Latency** | 671µs    | 719µs    | 768µs    | 848µs    | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 32988.70 | 10420.45 | 40318.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15685.79 | 30533.10 | 38634.75 | 39418.49 | 39632.08 | 39742.49 | 39874.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 55503.07 | 19250.88 | 175438.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21088.12 | 54093.73 | 64612.87 | 66207.23 | 66871.44 | 67214.70 | 67816.87 |
| **Latency** | 688µs    | 725µs    | 758µs    | 801µs    | 870µs    | 1ms      | 6ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55745.11 | 17824.68 | 74101.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22308.91 | 48101.40 | 66000.87 | 68401.99 | 69238.02 | 69636.86 | 70366.79 |
| **Latency** | 629µs    | 681µs    | 750µs    | 820µs    | 1ms      | 2ms      | 4ms      |

### [http](#http)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48927.39 | 10224.53 | 56552.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38400.96 | 49107.99 | 53573.90 | 54029.67 | 54515.77 | 54827.27 | 55229.02 |
| **Latency** | 811µs    | 882µs    | 958µs    | 992µs    | 1ms      | 1ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 71354.28 | 17523.72 | 86317.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42432.36 | 50600.47 | 82307.34 | 83524.16 | 84415.84 | 84811.81 | 85569.32 |
| **Latency** | 453µs    | 509µs    | 658µs    | 678µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31285.31 | 4979.77 | 35871.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28869.26 | 29997.19 | 33444.11 | 33798.98 | 33983.10 | 34291.37 | 34909.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54688.26 | 12044.58 | 66689.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40882.71 | 54300.41 | 59923.92 | 60819.41 | 61411.92 | 61796.97 | 62463.43 |
| **Latency** | 739µs    | 787µs    | 828µs    | 874µs    | 944µs    | 1ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40824.29 | 7113.25 | 45001.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38118.27 | 42448.36 | 42839.38 | 43512.58 | 43757.73 | 43858.73 | 44179.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28532.93 | 4609.62 | 33332.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25868.75 | 27666.56 | 30239.23 | 30513.86 | 30751.94 | 31353.31 | 31901.31 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10999.80 | 1324.67 | 13451.06 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9901.47 | 10619.22 | 11419.07 | 11499.17 | 11599.96 | 12170.04 | 12934.75 |
| **Latency** | 3ms     | 4ms      | 4ms      | 4ms      | 5ms      | 5ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44468.44 | 10399.33 | 93312.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31459.11 | 43567.03 | 49025.12 | 49845.18 | 50612.85 | 51152.16 | 52547.63 |
| **Latency** | 927µs    | 982µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33824.83 | 5129.54 | 39347.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29902.73 | 33051.85 | 35709.59 | 36030.63 | 36713.02 | 36945.89 | 37220.80 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6661.49  | 1812.02 | 9773.47 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4635.88 | 6118.96 | 7321.44 | 7734.43 | 8049.13 | 8249.94 | 8580.73 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 10ms    | 12ms    | 21ms    |

---

<p align="center">Generated 2023-03-05T18:22:46.844Z</p>
