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
| Bun                                                                                  | 82883.66 | 10308.76 | 104383.29 | 100%     |
| Hyper Express                                                                        | 82823.13 | 16042.24 | 102622.15 | 100%     |
| Deno                                                                                 | 62111.95 | 10973.93 | 90123.95  | 75%      |
| Fast                                                                                 | 51835.34 | 4593.09  | 80820.62  | 63%      |
| Fastro                                                                               | 50319.72 | 3975.27  | 68190.16  | 61%      |
| Hono                                                                                 | 49670.79 | 3996.79  | 73455.86  | 60%      |
| Megalo                                                                               | 47677.99 | 2966.53  | 59764.39  | 58%      |
| Alosaur                                                                              | 45440.99 | 2930.83  | 56265.74  | 55%      |
| http                                                                                 | 43413.90 | 5164.28  | 50914.23  | 52%      |
| Reno                                                                                 | 41811.20 | 2179.18  | 48220.46  | 50%      |
| Router                                                                               | 39237.32 | 4083.74  | 44550.12  | 47%      |
| Oak                                                                                  | 33424.52 | 2953.66  | 37036.90  | 40%      |
| Aqua                                                                                 | 31323.31 | 3631.77  | 37341.56  | 38%      |
| Node                                                                                 | 17554.74 | 1554.75  | 21126.15  | 21%      |
| Dinatra                                                                              | 16748.44 | 2291.04  | 20342.85  | 20%      |
| Fastify                                                                              | 16550.50 | 1792.90  | 21442.30  | 20%      |
| Abc                                                                                  | 14845.03 | 1668.43  | 19624.22  | 18%      |
| Opine                                                                                | 13772.92 | 2797.65  | 34760.46  | 17%      |
| Servest                                                                              | 6334.51  | 1653.76  | 11471.03  | 8%       |
| Express                                                                              | 6234.59  | 996.21   | 8020.83   | 8%       |
| Acorn                                                                                | 3484.35  | 2556.27  | 16566.73  | 4%       |
| ![Chart](https://quickchart.io/chart/render/sf-560bf4f6-fee1-4552-baaf-610543e2d591) |          |          |           |          |

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
| 14845.03 | 1668.43 | 19624.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13306.39 | 14300.05 | 15129.43 | 15909.03 | 16350.79 | 16587.05 | 17057.53 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3484.35  | 2556.27 | 16566.73 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1694.14 | 2284.30 | 2731.78 | 3819.58 | 4971.23 | 7841.76 | 14951.04 |
| **Latency** | 3ms     | 8ms     | 13ms    | 18ms    | 23ms    | 26ms    | 31ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45440.99 | 2930.83 | 56265.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43186.76 | 44331.82 | 45391.19 | 46529.40 | 48145.06 | 49551.61 | 53937.08 |
| **Latency** | 952µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31323.31 | 3631.77 | 37341.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29416.61 | 30644.85 | 32055.89 | 33192.79 | 33889.42 | 34519.04 | 35676.38 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 82883.66 | 10308.76 | 104383.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 69123.43 | 74514.17 | 83274.43 | 91262.05 | 96796.85 | 99020.86 | 101918.35 |
| **Latency** | 358µs    | 449µs    | 565µs    | 711µs    | 902µs    | 1ms      | 1ms       |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62111.95 | 10973.93 | 90123.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52674.40 | 53937.54 | 56112.59 | 70273.75 | 80141.09 | 83925.04 | 87563.18 |
| **Latency** | 535µs    | 596µs    | 850µs    | 954µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16748.44 | 2291.04 | 20342.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15032.96 | 15914.96 | 17174.01 | 18107.09 | 18892.70 | 19212.20 | 19725.77 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6234.59  | 996.21 | 8020.83 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4749.52 | 5985.40 | 6381.67 | 6689.39 | 7591.07 | 7835.20 | 7962.95 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 11ms    | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51835.34 | 4593.09 | 80820.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48909.58 | 49706.63 | 50611.68 | 52078.47 | 57288.11 | 61540.96 | 68168.35 |
| **Latency** | 792µs    | 903µs    | 985µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16550.50 | 1792.90 | 21442.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15315.34 | 16206.24 | 17049.87 | 17456.43 | 17714.48 | 17832.59 | 18176.71 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50319.72 | 3975.27 | 68190.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47436.50 | 48458.71 | 49504.00 | 51252.65 | 55289.09 | 57714.86 | 62799.63 |
| **Latency** | 832µs    | 926µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49670.79 | 3996.79 | 73455.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47027.45 | 47915.14 | 48825.26 | 50444.81 | 54138.37 | 56970.15 | 62831.82 |
| **Latency** | 847µs    | 938µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43413.90 | 5164.28 | 50914.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40204.68 | 42593.04 | 44789.02 | 46026.96 | 46808.00 | 47325.52 | 49011.71 |
| **Latency** | 842µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 82823.13 | 16042.24 | 102622.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 58217.41 | 68026.20 | 88724.51 | 96633.08 | 99575.94 | 100598.39 | 101738.52 |
| **Latency** | 359µs    | 447µs    | 555µs    | 706µs    | 910µs    | 1ms       | 1ms       |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47677.99 | 2966.53 | 59764.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45605.42 | 46500.05 | 47409.37 | 48631.39 | 50878.93 | 52545.38 | 55539.00 |
| **Latency** | 911µs    | 976µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17554.74 | 1554.75 | 21126.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16760.05 | 17319.77 | 17808.31 | 18182.37 | 18539.18 | 18743.55 | 19476.20 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33424.52 | 2953.66 | 37036.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32901.35 | 33422.92 | 34054.19 | 34343.98 | 34638.04 | 34827.65 | 35133.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13772.92 | 2797.65 | 34760.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11148.21 | 13105.91 | 14129.29 | 14826.06 | 16823.04 | 17691.26 | 18657.78 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41811.20 | 2179.18 | 48220.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40716.93 | 41265.29 | 42018.73 | 42708.38 | 43437.46 | 43933.45 | 45196.20 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39237.32 | 4083.74 | 44550.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36466.73 | 38467.01 | 40301.77 | 41324.76 | 42168.66 | 42751.44 | 43582.92 |
| **Latency** | 912µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6334.51  | 1653.76 | 11471.03 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5073.44 | 5679.78 | 6564.21 | 7090.98 | 8022.92 | 8633.53 | 9378.98 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 9ms     | 11ms    | 15ms    |

---

<p align="center">Generated 2024-03-12T12:20:03.605Z</p>
