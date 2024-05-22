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
| Bun                                                                                  | 78681.70 | 9671.65  | 99504.79  | 100%     |
| Hyper Express                                                                        | 78415.25 | 15927.51 | 100701.59 | 100%     |
| Deno                                                                                 | 65504.29 | 11514.83 | 88917.35  | 83%      |
| Fast                                                                                 | 51494.05 | 5536.95  | 78704.11  | 65%      |
| Fastro                                                                               | 50204.02 | 4156.09  | 70522.98  | 64%      |
| Hono                                                                                 | 49311.35 | 3569.72  | 73219.72  | 63%      |
| Megalo                                                                               | 48099.69 | 3553.95  | 62781.75  | 61%      |
| Alosaur                                                                              | 44455.31 | 2594.45  | 52812.38  | 57%      |
| http                                                                                 | 44376.54 | 4877.81  | 53072.00  | 56%      |
| Router                                                                               | 41917.32 | 4383.33  | 49988.32  | 53%      |
| Reno                                                                                 | 40416.82 | 2121.14  | 49658.74  | 51%      |
| Aqua                                                                                 | 33782.42 | 3580.18  | 38423.37  | 43%      |
| Oak                                                                                  | 32949.97 | 3287.71  | 39687.56  | 42%      |
| Node                                                                                 | 17380.34 | 1614.68  | 32424.21  | 22%      |
| Dinatra                                                                              | 17129.16 | 2454.14  | 30761.32  | 22%      |
| Fastify                                                                              | 16366.66 | 1723.32  | 23602.79  | 21%      |
| Opine                                                                                | 15116.23 | 2657.52  | 32867.87  | 19%      |
| Abc                                                                                  | 15056.90 | 1781.55  | 28860.26  | 19%      |
| Servest                                                                              | 6593.68  | 1688.64  | 12360.26  | 8%       |
| Express                                                                              | 6124.57  | 952.86   | 7924.41   | 8%       |
| Acorn                                                                                | 3652.11  | 2576.27  | 17222.88  | 5%       |
| ![Chart](https://quickchart.io/chart/render/sf-10030964-d0e1-43c9-b285-82988190568f) |          |          |           |          |

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
| 15056.90 | 1781.55 | 28860.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13522.21 | 14465.27 | 15169.61 | 15909.65 | 16530.90 | 16854.87 | 19517.06 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3652.11  | 2576.27 | 17222.88 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1870.77 | 2414.05 | 2939.94 | 3816.08 | 5570.50 | 7605.71 | 15708.95 |
| **Latency** | 3ms     | 8ms     | 13ms    | 18ms    | 21ms    | 24ms    | 27ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44455.31 | 2594.45 | 52812.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42949.53 | 43679.47 | 44565.75 | 45338.73 | 46488.43 | 47451.84 | 50404.99 |
| **Latency** | 985µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33782.42 | 3580.18 | 38423.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31862.36 | 32997.49 | 34528.22 | 35620.53 | 36319.45 | 36951.64 | 38039.23 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 78681.70 | 9671.65 | 99504.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66871.58 | 71020.17 | 77520.79 | 86065.56 | 92380.05 | 94846.14 | 96984.90 |
| **Latency** | 378µs    | 470µs    | 593µs    | 751µs    | 952µs    | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65504.29 | 11514.83 | 88917.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52646.80 | 54405.82 | 64406.13 | 75200.71 | 82479.44 | 85290.82 | 87601.62 |
| **Latency** | 527µs    | 573µs    | 765µs    | 931µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17129.16 | 2454.14 | 30761.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15258.05 | 16250.35 | 17537.12 | 18447.77 | 19210.94 | 19553.94 | 21899.93 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6124.57  | 952.86 | 7924.41 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4734.96 | 5913.83 | 6241.26 | 6576.43 | 7273.47 | 7688.20 | 7851.39 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 11ms    | 14ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51494.05 | 5536.95 | 78704.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47980.08 | 49010.52 | 50030.87 | 51297.41 | 58502.32 | 64709.73 | 70924.55 |
| **Latency** | 760µs    | 907µs    | 993µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16366.66 | 1723.32 | 23602.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15438.01 | 16086.57 | 16684.66 | 17139.00 | 17496.85 | 17666.74 | 18078.14 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50204.02 | 4156.09 | 70522.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47469.63 | 48511.76 | 49387.76 | 50781.01 | 55347.07 | 58105.64 | 64389.84 |
| **Latency** | 835µs    | 928µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49311.35 | 3569.72 | 73219.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47335.52 | 48141.71 | 48918.33 | 49731.49 | 51632.41 | 54896.12 | 63888.74 |
| **Latency** | 877µs    | 942µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44376.54 | 4877.81 | 53072.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40418.44 | 43217.28 | 45705.71 | 46705.76 | 48207.06 | 49018.31 | 50579.26 |
| **Latency** | 833µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 78415.25 | 15927.51 | 100701.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56156.39 | 61883.86 | 82538.29 | 93146.18 | 96514.21 | 98107.17 | 99201.58 |
| **Latency** | 364µs    | 464µs    | 583µs    | 772µs    | 963µs    | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48099.69 | 3553.95 | 62781.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45315.43 | 46424.64 | 47523.47 | 49653.40 | 52366.73 | 54333.53 | 57816.79 |
| **Latency** | 864µs    | 967µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17380.34 | 1614.68 | 32424.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16673.76 | 17122.17 | 17502.41 | 17914.05 | 18251.23 | 18505.41 | 21233.69 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32949.97 | 3287.71 | 39687.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32329.56 | 33146.69 | 33506.24 | 34045.30 | 34327.92 | 34537.26 | 34994.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15116.23 | 2657.52 | 32867.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12725.98 | 14818.50 | 15753.63 | 16167.35 | 16702.57 | 18133.36 | 19849.23 |
| **Latency** | 1ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40416.82 | 2121.14 | 49658.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38845.77 | 39926.85 | 40833.17 | 41298.71 | 41880.54 | 42112.42 | 43275.71 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41917.32 | 4383.33 | 49988.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38818.28 | 40803.67 | 42937.09 | 44210.75 | 45259.57 | 45860.39 | 46568.79 |
| **Latency** | 870µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6593.68  | 1688.64 | 12360.26 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4934.63 | 5871.35 | 6728.31 | 7625.19 | 8467.75 | 8968.76 | 9778.93 |
| **Latency** | 5ms     | 6ms     | 7ms     | 8ms     | 9ms     | 11ms    | 14ms    |

---

<p align="center">Generated 2024-05-22T06:18:46.165Z</p>
