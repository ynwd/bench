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
| Deno                                                                                 | 72947.69 | 16315.40 | 82927.69  | 100%     |
| Hyper Express                                                                        | 67346.49 | 17948.81 | 86450.27  | 92%      |
| Bun                                                                                  | 66381.89 | 12949.52 | 89585.66  | 91%      |
| Fast                                                                                 | 62742.79 | 14284.10 | 71950.47  | 86%      |
| Hono                                                                                 | 59553.45 | 14621.69 | 69420.94  | 82%      |
| Fastro                                                                               | 59352.33 | 11329.70 | 66446.65  | 81%      |
| Megalo                                                                               | 57873.75 | 12215.15 | 65049.54  | 79%      |
| Reno                                                                                 | 50148.16 | 5242.19  | 53169.71  | 69%      |
| Node                                                                                 | 42051.52 | 7070.59  | 46019.41  | 58%      |
| http                                                                                 | 41547.47 | 8546.17  | 48077.02  | 57%      |
| Fastify                                                                              | 37777.53 | 6214.37  | 40582.04  | 52%      |
| Alosaur                                                                              | 31911.71 | 6546.43  | 37572.39  | 44%      |
| Router                                                                               | 28587.54 | 4660.46  | 34048.11  | 39%      |
| Aqua                                                                                 | 23256.05 | 3010.95  | 26587.95  | 32%      |
| Oak                                                                                  | 22911.18 | 4666.58  | 29476.84  | 31%      |
| Dinatra                                                                              | 21019.13 | 3980.70  | 44716.79  | 29%      |
| Abc                                                                                  | 17863.98 | 3770.44  | 23288.43  | 24%      |
| Opine                                                                                | 10059.22 | 2779.97  | 50750.51  | 14%      |
| Express                                                                              | 7294.13  | 1693.99  | 10038.65  | 10%      |
| Servest                                                                              | 6242.22  | 1917.52  | 9551.19   | 9%       |
| Acorn                                                                                | 4166.50  | 8679.81  | 149501.66 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-15825158-ac00-4973-b4ff-8ccd23996643) |          |          |           |          |

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
| 17863.98 | 3770.44 | 23288.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11131.11 | 16927.39 | 19151.38 | 20530.14 | 21220.97 | 21521.48 | 22364.25 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4166.50  | 8679.81 | 149501.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1756.16 | 2187.68 | 2802.44 | 4002.44 | 6336.23 | 9798.48 | 13215.03 |
| **Latency** | 4ms     | 7ms     | 15ms    | 21ms    | 25ms    | 26ms    | 28ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31911.71 | 6546.43 | 37572.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26232.61 | 29965.86 | 34819.52 | 35680.74 | 36033.51 | 36388.80 | 37081.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23256.05 | 3010.95 | 26587.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22137.88 | 22702.30 | 24207.27 | 24716.47 | 25057.09 | 25648.36 | 26136.51 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66381.89 | 12949.52 | 89585.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51463.76 | 55412.31 | 63175.85 | 79605.73 | 81270.65 | 82140.18 | 83621.92 |
| **Latency** | 453µs    | 565µs    | 682µs    | 868µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 72947.69 | 16315.40 | 82927.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35566.76 | 77803.95 | 80305.72 | 81111.04 | 81604.89 | 81873.61 | 82306.04 |
| **Latency** | 518µs    | 581µs    | 621µs    | 664µs    | 734µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21019.13 | 3980.70 | 44716.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19377.14 | 20070.87 | 21138.92 | 22965.10 | 24875.15 | 25122.84 | 25716.30 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7294.13  | 1693.99 | 10038.65 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5517.79 | 5702.35 | 8401.44 | 8747.95 | 8843.70 | 8868.21 | 8908.39 |
| **Latency** | 5ms     | 5ms     | 5ms     | 8ms     | 8ms     | 9ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62742.79 | 14284.10 | 71950.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30813.61 | 66765.71 | 69540.58 | 70232.41 | 70599.90 | 70723.61 | 70954.03 |
| **Latency** | 672µs    | 690µs    | 708µs    | 731µs    | 856µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37777.53 | 6214.37 | 40582.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37565.80 | 38741.13 | 39317.76 | 39898.22 | 40119.32 | 40230.23 | 40432.82 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59352.33 | 11329.70 | 66446.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37274.02 | 62413.91 | 64130.29 | 64601.40 | 65107.29 | 65451.98 | 65961.45 |
| **Latency** | 734µs    | 752µs    | 772µs    | 794µs    | 922µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59553.45 | 14621.69 | 69420.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30197.28 | 59024.29 | 67337.47 | 68014.40 | 68517.24 | 68767.67 | 69112.83 |
| **Latency** | 693µs    | 711µs    | 729µs    | 761µs    | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41547.47 | 8546.17 | 48077.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27355.40 | 40530.07 | 45806.03 | 46416.71 | 46919.80 | 47278.57 | 47752.01 |
| **Latency** | 925µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67346.49 | 17948.81 | 86450.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41880.58 | 42900.86 | 79524.79 | 82300.96 | 83265.69 | 83761.03 | 84629.77 |
| **Latency** | 458µs    | 530µs    | 666µs    | 765µs    | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57873.75 | 12215.15 | 65049.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31051.29 | 61055.68 | 63530.36 | 63953.84 | 64186.91 | 64281.40 | 64492.27 |
| **Latency** | 741µs    | 759µs    | 778µs    | 801µs    | 945µs    | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42051.52 | 7070.59 | 46019.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41333.97 | 43265.84 | 43947.98 | 44460.99 | 44940.08 | 45206.41 | 45499.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22911.18 | 4666.58 | 29476.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15804.29 | 22800.49 | 24515.80 | 25305.82 | 26011.49 | 26424.12 | 26838.12 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10059.22 | 2779.97 | 50750.51 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8118.20 | 9640.92 | 10284.60 | 10777.69 | 11606.47 | 11854.76 | 12631.51 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 5ms      | 6ms      | 10ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50148.16 | 5242.19 | 53169.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50214.16 | 50823.98 | 51227.14 | 51643.34 | 52109.53 | 52246.60 | 52523.12 |
| **Latency** | 935µs    | 952µs    | 964µs    | 980µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28587.54 | 4660.46 | 34048.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25714.19 | 27974.83 | 30064.70 | 31009.83 | 31537.57 | 31961.17 | 32439.35 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6242.22  | 1917.52 | 9551.19 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4883.37 | 5440.38 | 6862.53 | 7347.92 | 7761.49 | 8007.86 | 9317.20 |
| **Latency** | 6ms     | 6ms     | 6ms     | 9ms     | 10ms    | 15ms    | 18ms    |

---

<p align="center">Generated 2023-06-13T18:15:36.654Z</p>
