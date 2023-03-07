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
| Bun                                                                                  | 59866.29 | 11740.00 | 78746.99  | 100%     |
| Hyper Express                                                                        | 59660.01 | 17569.57 | 82972.81  | 100%     |
| http                                                                                 | 47342.96 | 11606.68 | 70795.21  | 79%      |
| Hono                                                                                 | 46537.09 | 13092.92 | 60729.56  | 78%      |
| Fast                                                                                 | 45373.57 | 13607.79 | 61113.22  | 76%      |
| Deno                                                                                 | 44700.58 | 13433.73 | 62310.96  | 75%      |
| Megalo                                                                               | 44562.14 | 12627.46 | 64221.78  | 74%      |
| Fastro                                                                               | 44283.71 | 14692.92 | 148578.81 | 74%      |
| Reno                                                                                 | 37316.55 | 9654.01  | 47824.72  | 62%      |
| Node                                                                                 | 34333.41 | 6050.01  | 39432.97  | 57%      |
| Alosaur                                                                              | 34184.47 | 7460.91  | 43123.82  | 57%      |
| Router                                                                               | 33103.12 | 6650.93  | 78930.43  | 55%      |
| Fastify                                                                              | 30089.54 | 6085.19  | 34603.33  | 50%      |
| Aqua                                                                                 | 25007.41 | 3888.37  | 37517.74  | 42%      |
| Oak                                                                                  | 23869.07 | 4504.40  | 28526.64  | 40%      |
| Dinatra                                                                              | 19447.01 | 4477.24  | 39513.94  | 32%      |
| Opine                                                                                | 9903.16  | 1438.72  | 13901.76  | 17%      |
| Abc                                                                                  | 7289.54  | 2335.54  | 20625.91  | 12%      |
| Express                                                                              | 6871.56  | 1522.27  | 11613.43  | 11%      |
| Servest                                                                              | 5586.77  | 1703.14  | 9197.97   | 9%       |
| Acorn                                                                                | 4437.01  | 6273.37  | 114416.48 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-52af2262-bb12-41fd-909b-d4656c744da0) |          |          |           |          |

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
| 7289.54  | 2335.54 | 20625.91 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 5000.03 | 6581.19 | 6699.44 | 8742.37 | 9317.69 | 10000.28 | 17656.41 |
| **Latency** | 5ms     | 5ms     | 7ms     | 7ms     | 8ms     | 10ms     | 13ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4437.01  | 6273.37 | 114416.48 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1811.15 | 2419.78 | 3050.79 | 4358.76 | 8588.99 | 10425.45 | 20590.59 |
| **Latency** | 4ms     | 5ms     | 13ms    | 18ms    | 21ms    | 23ms     | 24ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34184.47 | 7460.91 | 43123.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22195.78 | 34629.86 | 37321.33 | 38311.75 | 38776.63 | 39019.76 | 39419.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25007.41 | 3888.37 | 37517.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22056.75 | 24273.99 | 26472.11 | 26815.16 | 27410.97 | 27883.21 | 28326.76 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59866.29 | 11740.00 | 78746.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44235.68 | 48536.42 | 62312.04 | 71175.99 | 73395.36 | 74125.68 | 75225.52 |
| **Latency** | 497µs    | 626µs    | 761µs    | 939µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44700.58 | 13433.73 | 62310.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24685.81 | 39091.69 | 44734.22 | 57140.34 | 58850.75 | 59453.76 | 60328.70 |
| **Latency** | 668µs    | 822µs    | 956µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19447.01 | 4477.24 | 39513.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14531.90 | 16617.31 | 20618.26 | 22000.19 | 23921.90 | 24370.98 | 24859.48 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6871.56  | 1522.27 | 11613.43 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4438.24 | 6933.95 | 7339.68 | 7871.05 | 8002.21 | 8052.64 | 8162.90 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 9ms     | 11ms    | 15ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45373.57 | 13607.79 | 61113.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23168.33 | 40419.66 | 51878.15 | 55614.92 | 56702.63 | 57219.82 | 58891.77 |
| **Latency** | 788µs    | 851µs    | 917µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30089.54 | 6085.19 | 34603.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28033.26 | 31057.34 | 31877.34 | 32534.69 | 32908.15 | 33031.26 | 33324.87 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 44283.71 | 14692.92 | 148578.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18255.63 | 42971.16 | 50344.79 | 52884.93 | 54143.09 | 54834.33 | 60030.10 |
| **Latency** | 852µs    | 904µs    | 952µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46537.09 | 13092.92 | 60729.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20604.67 | 50142.95 | 51541.58 | 52503.62 | 53372.41 | 54013.84 | 58179.72 |
| **Latency** | 883µs    | 918µs    | 959µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [http](#http)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47342.96 | 11606.68 | 70795.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30818.98 | 43621.71 | 53277.13 | 54070.29 | 54567.53 | 54904.81 | 55492.77 |
| **Latency** | 819µs    | 901µs    | 951µs    | 988µs    | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59660.01 | 17569.57 | 82972.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35675.77 | 39045.50 | 68122.95 | 72835.00 | 79548.79 | 80734.47 | 82130.13 |
| **Latency** | 497µs    | 597µs    | 739µs    | 829µs    | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44562.14 | 12627.46 | 64221.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25004.69 | 41510.05 | 50995.59 | 52001.94 | 52727.44 | 53251.01 | 54587.33 |
| **Latency** | 854µs    | 909µs    | 971µs    | 1ms      | 1ms      | 1ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34333.41 | 6050.01 | 39432.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33594.94 | 35143.13 | 35784.35 | 36707.93 | 37208.82 | 37387.76 | 37824.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23869.07 | 4504.40 | 28526.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18675.39 | 22125.17 | 26084.86 | 26296.94 | 26476.87 | 26597.87 | 27524.59 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9903.16  | 1438.72 | 13901.76 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8204.90 | 9402.32 | 10448.65 | 10607.96 | 10728.32 | 11092.31 | 12341.83 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37316.55 | 9654.01 | 47824.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20538.04 | 38636.97 | 41437.31 | 42612.93 | 43518.57 | 43928.45 | 44509.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33103.12 | 6650.93 | 78930.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27167.84 | 30509.67 | 35941.22 | 36665.34 | 37029.14 | 37282.59 | 37787.25 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5586.77  | 1703.14 | 9197.97 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2708.50 | 5551.50 | 6138.16 | 6587.18 | 6883.68 | 7061.67 | 7815.83 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 13ms    | 14ms    | 26ms    |

---

<p align="center">Generated 2023-03-07T03:31:27.735Z</p>
