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
| Deno                                                                                 | 68732.94 | 15996.76 | 81321.68  | 100%     |
| Bun                                                                                  | 65845.21 | 11144.52 | 85982.54  | 96%      |
| Hyper Express                                                                        | 64213.82 | 17822.77 | 83170.91  | 93%      |
| Hono                                                                                 | 59392.58 | 11647.32 | 67568.37  | 86%      |
| Fast                                                                                 | 58919.32 | 13237.65 | 69112.07  | 86%      |
| Megalo                                                                               | 58025.56 | 11078.14 | 65143.27  | 84%      |
| Fastro                                                                               | 55629.78 | 11197.35 | 64604.48  | 81%      |
| Reno                                                                                 | 49142.24 | 7159.12  | 57670.79  | 71%      |
| Node                                                                                 | 40221.22 | 6598.87  | 43725.53  | 59%      |
| http                                                                                 | 38466.47 | 8631.71  | 46003.78  | 56%      |
| Fastify                                                                              | 35448.23 | 6259.85  | 39075.82  | 52%      |
| Alosaur                                                                              | 29608.55 | 6647.72  | 48429.30  | 43%      |
| Router                                                                               | 26817.39 | 5132.44  | 31982.05  | 39%      |
| Oak                                                                                  | 22355.75 | 6189.75  | 156250.00 | 33%      |
| Aqua                                                                                 | 21791.73 | 3388.69  | 28068.37  | 32%      |
| Dinatra                                                                              | 18740.05 | 4104.66  | 39125.30  | 27%      |
| Abc                                                                                  | 16090.64 | 3103.92  | 27510.66  | 23%      |
| Opine                                                                                | 9166.10  | 3010.14  | 45825.31  | 13%      |
| Express                                                                              | 7538.35  | 1516.25  | 10889.16  | 11%      |
| Servest                                                                              | 5869.15  | 1812.89  | 9083.66   | 9%       |
| Acorn                                                                                | 5295.10  | 11566.70 | 142877.55 | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-cd862d21-6577-4495-b857-01000bb428ae) |          |          |           |          |

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
| 16090.64 | 3103.92 | 27510.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10651.47 | 15705.19 | 16639.81 | 17819.39 | 19107.26 | 19464.33 | 20002.96 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 5295.10  | 11566.70 | 142877.55 |     |

| **Stat**    | 10     | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------ | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 100.16 | 2127.82 | 2771.65 | 4126.43 | 8292.81 | 10400.60 | 67682.47 |
| **Latency** | 5ms    | 7ms     | 15ms    | 21ms    | 26ms    | 29ms     | 33ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29608.55 | 6647.72 | 48429.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23913.87 | 26212.84 | 32385.05 | 33500.88 | 34008.16 | 34316.17 | 35061.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21791.73 | 3388.69 | 28068.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20005.66 | 21136.99 | 22612.27 | 23625.54 | 24182.76 | 24534.17 | 25185.54 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65845.21 | 11144.52 | 85982.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52522.36 | 56907.32 | 63953.63 | 76718.93 | 79427.60 | 80741.30 | 82357.44 |
| **Latency** | 462µs    | 585µs    | 698µs    | 843µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68732.94 | 15996.76 | 81321.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32608.18 | 71908.22 | 75933.08 | 77148.56 | 78613.02 | 79604.43 | 80478.31 |
| **Latency** | 566µs    | 616µs    | 647µs    | 696µs    | 800µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18740.05 | 4104.66 | 39125.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15305.85 | 16561.50 | 20591.15 | 21146.60 | 22010.91 | 22342.36 | 23963.25 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7538.35  | 1516.25 | 10889.16 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5137.44 | 7515.77 | 8221.36 | 8433.21 | 8527.19 | 8571.64 | 8629.41 |
| **Latency** | 5ms     | 5ms     | 6ms     | 6ms     | 8ms     | 10ms    | 13ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58919.32 | 13237.65 | 69112.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29854.88 | 60751.54 | 65205.11 | 66475.85 | 67329.52 | 67726.98 | 68413.58 |
| **Latency** | 698µs    | 722µs    | 746µs    | 783µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35448.23 | 6259.85 | 39075.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33911.58 | 36176.35 | 37211.28 | 38036.84 | 38352.56 | 38527.76 | 38784.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55629.78 | 11197.35 | 64604.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30030.59 | 58138.29 | 60663.62 | 61395.08 | 62257.24 | 62751.42 | 63168.58 |
| **Latency** | 768µs    | 787µs    | 806µs    | 832µs    | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59392.58 | 11647.32 | 67568.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36630.10 | 62426.19 | 64236.58 | 65207.06 | 65929.64 | 66222.48 | 66822.85 |
| **Latency** | 710µs    | 734µs    | 757µs    | 793µs    | 959µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38466.47 | 8631.71 | 46003.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26449.81 | 35822.18 | 42280.91 | 44106.19 | 44662.30 | 44987.47 | 45630.57 |
| **Latency** | 976µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64213.82 | 17822.77 | 83170.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37467.07 | 41504.22 | 75034.55 | 78727.60 | 80224.12 | 80829.11 | 82175.75 |
| **Latency** | 477µs    | 554µs    | 690µs    | 753µs    | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58025.56 | 11078.14 | 65143.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35110.54 | 60190.65 | 63093.40 | 63722.50 | 64112.86 | 64262.61 | 64532.94 |
| **Latency** | 744µs    | 763µs    | 783µs    | 810µs    | 954µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40221.22 | 6598.87 | 43725.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39505.29 | 41168.50 | 41948.40 | 42486.83 | 42838.72 | 43001.22 | 43308.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 22355.75 | 6189.75 | 156250.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20457.08 | 21611.24 | 23506.12 | 24121.13 | 24463.72 | 24895.31 | 27221.99 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9166.10  | 3010.14 | 45825.31 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7712.26 | 8551.55 | 9299.68 | 9831.64 | 10214.74 | 10790.78 | 18446.90 |
| **Latency** | 4ms     | 4ms     | 5ms     | 6ms     | 6ms      | 7ms      | 13ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49142.24 | 7159.12 | 57670.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48416.97 | 50416.47 | 51149.89 | 51705.72 | 52268.52 | 52483.68 | 52983.89 |
| **Latency** | 934µs    | 950µs    | 964µs    | 983µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26817.39 | 5132.44 | 31982.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23228.59 | 25703.61 | 28711.60 | 29786.70 | 30170.74 | 30397.79 | 31193.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5869.15  | 1812.89 | 9083.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4333.94 | 5033.88 | 6471.06 | 6947.95 | 7311.27 | 7579.13 | 8783.88 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 10ms    | 17ms    | 19ms    |

---

<p align="center">Generated 2023-05-07T18:14:56.085Z</p>
