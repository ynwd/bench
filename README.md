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
| Hyper Express                                                                        | 60868.27 | 17281.73 | 78008.05  | 100%     |
| Bun                                                                                  | 59842.99 | 10487.32 | 79328.53  | 98%      |
| Hono                                                                                 | 49993.36 | 14550.39 | 60683.51  | 82%      |
| Megalo                                                                               | 48361.82 | 11370.11 | 67496.82  | 79%      |
| Deno                                                                                 | 47888.49 | 15101.73 | 68984.86  | 79%      |
| Fast                                                                                 | 47093.66 | 14264.03 | 74348.75  | 77%      |
| Fastro                                                                               | 46470.49 | 15828.86 | 59862.01  | 76%      |
| http                                                                                 | 41822.08 | 9608.25  | 49150.29  | 69%      |
| Reno                                                                                 | 39794.35 | 9940.45  | 54298.15  | 65%      |
| Node                                                                                 | 35163.32 | 5028.32  | 39010.14  | 58%      |
| Fastify                                                                              | 31701.40 | 5073.72  | 35633.49  | 52%      |
| Alosaur                                                                              | 30964.49 | 8626.08  | 45477.48  | 51%      |
| Router                                                                               | 30912.30 | 5024.71  | 35157.02  | 51%      |
| Aqua                                                                                 | 24608.93 | 4005.41  | 30805.25  | 40%      |
| Oak                                                                                  | 23577.12 | 3910.45  | 26933.01  | 39%      |
| Dinatra                                                                              | 18321.63 | 3515.37  | 23683.32  | 30%      |
| Abc                                                                                  | 16670.23 | 5775.33  | 177213.91 | 27%      |
| Opine                                                                                | 9861.94  | 1278.05  | 13276.34  | 16%      |
| Express                                                                              | 6428.66  | 1397.38  | 9455.03   | 11%      |
| Servest                                                                              | 5515.50  | 1499.41  | 8077.46   | 9%       |
| Acorn                                                                                | 3956.77  | 3155.44  | 63157.10  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-9a16201d-8bbe-4979-99bb-89639edde096) |          |          |           |          |

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

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 16670.23 | 5775.33 | 177213.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13728.83 | 15664.98 | 16738.83 | 18739.11 | 19301.54 | 19430.93 | 19642.39 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3956.77  | 3155.44 | 63157.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1923.52 | 2474.72 | 2971.54 | 4226.05 | 8320.57 | 10335.92 | 12775.26 |
| **Latency** | 4ms     | 5ms     | 13ms    | 18ms    | 21ms    | 22ms     | 23ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30964.49 | 8626.08 | 45477.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21520.15 | 23132.78 | 36553.36 | 38416.13 | 38860.87 | 39075.60 | 39509.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24608.93 | 4005.41 | 30805.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22020.59 | 23013.08 | 26305.56 | 26597.40 | 26807.46 | 27364.03 | 27981.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59842.99 | 10487.32 | 79328.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48366.85 | 51886.10 | 56246.78 | 71203.94 | 73512.43 | 74366.92 | 75905.31 |
| **Latency** | 497µs    | 630µs    | 757µs    | 944µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47888.49 | 15101.73 | 68984.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25806.70 | 41423.18 | 49062.74 | 61187.65 | 62183.38 | 62777.01 | 64889.53 |
| **Latency** | 636µs    | 771µs    | 890µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18321.63 | 3515.37 | 23683.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14810.51 | 15644.56 | 20011.38 | 20320.72 | 20509.43 | 20665.30 | 21714.57 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6428.66  | 1397.38 | 9455.03 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4153.20 | 6534.76 | 7039.10 | 7204.18 | 7312.36 | 7368.82 | 7444.44 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 10ms    | 12ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47093.66 | 14264.03 | 74348.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24509.80 | 42269.79 | 52832.69 | 58570.27 | 59823.22 | 60403.61 | 61891.50 |
| **Latency** | 740µs    | 800µs    | 876µs    | 991µs    | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31701.40 | 5073.72 | 35633.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31400.94 | 32324.56 | 32967.91 | 33461.90 | 33649.46 | 33735.75 | 33918.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46470.49 | 15828.86 | 59862.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18460.18 | 42151.66 | 54449.27 | 57350.35 | 58225.33 | 58538.04 | 59053.92 |
| **Latency** | 780µs    | 832µs    | 884µs    | 970µs    | 1ms      | 1ms      | 6ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49993.36 | 14550.39 | 60683.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22394.73 | 50125.05 | 56737.15 | 58223.71 | 59010.02 | 59348.08 | 60088.41 |
| **Latency** | 777µs    | 823µs    | 866µs    | 918µs    | 1ms      | 1ms      | 6ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41822.08 | 9608.25 | 49150.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29647.64 | 41909.21 | 46421.15 | 47082.59 | 47535.24 | 47715.80 | 48032.57 |
| **Latency** | 925µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60868.27 | 17281.73 | 78008.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35116.85 | 38677.35 | 71870.22 | 74813.22 | 75940.99 | 76342.81 | 77236.10 |
| **Latency** | 501µs    | 573µs    | 733µs    | 782µs    | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48361.82 | 11370.11 | 67496.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30607.65 | 48685.96 | 53324.52 | 54520.90 | 55230.37 | 55533.87 | 56374.46 |
| **Latency** | 817µs    | 867µs    | 928µs    | 988µs    | 1ms      | 1ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35163.32 | 5028.32 | 39010.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34467.20 | 35624.22 | 36241.68 | 36959.50 | 37246.19 | 37388.99 | 37562.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23577.12 | 3910.45 | 26933.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20260.70 | 23344.12 | 24910.96 | 25490.16 | 26155.02 | 26364.35 | 26648.09 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9861.94  | 1278.05 | 13276.34 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8791.18 | 9508.17 | 10287.97 | 10397.83 | 10530.54 | 10931.53 | 12098.12 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39794.35 | 9940.45 | 54298.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24116.64 | 41307.79 | 44208.41 | 44989.99 | 45568.10 | 46023.01 | 46911.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30912.30 | 5024.71 | 35157.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25886.38 | 31314.09 | 32938.53 | 33261.86 | 33517.68 | 33687.64 | 34118.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5515.50  | 1499.41 | 8077.46 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3214.17 | 5513.89 | 6037.31 | 6352.41 | 6642.11 | 6730.44 | 7524.38 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 13ms    | 24ms    |

---

<p align="center">Generated 2023-03-13T18:18:55.454Z</p>
