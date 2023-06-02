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
| Deno                                                                                 | 58159.05 | 13276.76 | 68074.62  | 100%     |
| Hyper Express                                                                        | 53157.88 | 14869.62 | 70709.98  | 91%      |
| Bun                                                                                  | 53044.10 | 10443.20 | 68432.58  | 91%      |
| Fast                                                                                 | 48269.64 | 12818.70 | 57723.15  | 83%      |
| Hono                                                                                 | 48194.00 | 11804.73 | 57527.68  | 83%      |
| Fastro                                                                               | 46141.83 | 8059.65  | 53721.37  | 79%      |
| Megalo                                                                               | 45985.12 | 8089.12  | 52227.55  | 79%      |
| Reno                                                                                 | 38787.31 | 3741.11  | 41611.57  | 67%      |
| http                                                                                 | 32363.37 | 7665.73  | 38627.34  | 56%      |
| Node                                                                                 | 29759.51 | 5763.93  | 33831.84  | 51%      |
| Fastify                                                                              | 24765.02 | 6690.48  | 29145.51  | 43%      |
| Alosaur                                                                              | 24159.79 | 6635.84  | 38275.23  | 42%      |
| Router                                                                               | 22727.34 | 4228.39  | 27699.20  | 39%      |
| Aqua                                                                                 | 19372.24 | 2843.77  | 22857.12  | 33%      |
| Oak                                                                                  | 17844.13 | 4001.67  | 79321.01  | 31%      |
| Dinatra                                                                              | 15506.76 | 3236.62  | 29573.11  | 27%      |
| Abc                                                                                  | 11661.07 | 3785.48  | 24942.61  | 20%      |
| Express                                                                              | 5632.83  | 1301.12  | 8842.47   | 10%      |
| Servest                                                                              | 4739.78  | 1442.54  | 7179.62   | 8%       |
| Acorn                                                                                | 4354.50  | 9561.19  | 109404.40 | 7%       |
| Opine                                                                                | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-ee939a27-5c3b-4a39-ab86-230d2c840fee) |          |          |           |          |

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
| 11661.07 | 3785.48 | 24942.61 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7049.50 | 8205.32 | 12313.80 | 15258.31 | 15734.32 | 16498.10 | 17015.73 |
| **Latency** | 3ms     | 3ms     | 3ms      | 5ms      | 6ms      | 6ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4354.50  | 9561.19 | 109404.40 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 94.72 | 1921.62 | 2638.53 | 3863.11 | 6952.03 | 7807.14 | 58278.81 |
| **Latency** | 6ms   | 8ms     | 18ms    | 24ms    | 28ms    | 30ms    | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24159.79 | 6635.84 | 38275.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14313.04 | 20466.74 | 27861.04 | 28915.35 | 29498.28 | 29768.86 | 30503.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19372.24 | 2843.77 | 22857.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17914.17 | 18521.95 | 20506.79 | 20861.66 | 21062.31 | 21232.81 | 21908.86 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53044.10 | 10443.20 | 68432.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39985.19 | 43425.91 | 53600.59 | 63482.87 | 65336.01 | 66123.88 | 67269.60 |
| **Latency** | 563µs    | 699µs    | 852µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58159.05 | 13276.76 | 68074.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28042.77 | 61230.11 | 64030.21 | 65062.33 | 65733.64 | 66022.56 | 67026.00 |
| **Latency** | 671µs    | 731µs    | 774µs    | 827µs    | 925µs    | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15506.76 | 3236.62 | 29573.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12403.11 | 13419.20 | 16915.66 | 17575.89 | 18143.35 | 18354.31 | 19599.99 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5632.83  | 1301.12 | 8842.47 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3431.30 | 5791.69 | 6218.91 | 6319.22 | 6391.73 | 6437.28 | 6624.32 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 11ms    | 14ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48269.64 | 12818.70 | 57723.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23107.65 | 49479.52 | 54806.39 | 55577.32 | 56081.38 | 56342.32 | 57010.89 |
| **Latency** | 825µs    | 855µs    | 893µs    | 955µs    | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24765.02 | 6690.48 | 29145.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10147.40 | 26802.44 | 27670.32 | 28171.60 | 28405.71 | 28545.42 | 28841.27 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46141.83 | 8059.65 | 53721.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32068.76 | 48051.55 | 49111.32 | 49957.93 | 50526.92 | 50826.06 | 51531.96 |
| **Latency** | 948µs    | 973µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48194.00 | 11804.73 | 57527.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22933.28 | 51487.61 | 53895.47 | 54759.75 | 55285.21 | 55582.61 | 56187.75 |
| **Latency** | 850µs    | 877µs    | 905µs    | 952µs    | 1ms      | 2ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32363.37 | 7665.73 | 38627.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21435.39 | 29818.52 | 36020.21 | 36798.33 | 37230.09 | 37470.31 | 38222.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53157.88 | 14869.62 | 70709.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30959.79 | 34553.25 | 61616.70 | 65628.96 | 66932.09 | 67514.03 | 68564.28 |
| **Latency** | 574µs    | 665µs    | 832µs    | 922µs    | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45985.12 | 8089.12 | 52227.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33383.50 | 48190.66 | 49079.57 | 49640.26 | 50319.32 | 50702.37 | 51329.04 |
| **Latency** | 947µs    | 973µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29759.51 | 5763.93 | 33831.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28659.65 | 30719.69 | 31365.58 | 32047.47 | 32346.29 | 32550.17 | 32945.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17844.13 | 4001.67 | 79321.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15403.87 | 17017.95 | 18911.94 | 19507.12 | 20060.55 | 20598.96 | 21311.32 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38787.31 | 3741.11 | 41611.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38196.77 | 39098.19 | 39513.43 | 40219.35 | 40542.21 | 40713.97 | 41096.09 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22727.34 | 4228.39 | 27699.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19904.21 | 21418.97 | 24312.28 | 24815.77 | 25594.03 | 25926.20 | 26546.66 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4739.78  | 1442.54 | 7179.62 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3133.41 | 3837.58 | 5449.39 | 5642.02 | 5720.60 | 5764.34 | 6183.26 |
| **Latency** | 8ms     | 8ms     | 9ms     | 12ms    | 13ms    | 20ms    | 22ms    |

---

<p align="center">Generated 2023-06-02T18:15:45.514Z</p>
