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
| Deno                                                                                 | 65912.91 | 14183.83 | 75539.70  | 100%     |
| Hyper Express                                                                        | 60143.46 | 16860.96 | 79073.96  | 91%      |
| Bun                                                                                  | 59899.33 | 12288.87 | 219902.32 | 91%      |
| Fast                                                                                 | 58550.50 | 12254.17 | 66287.33  | 89%      |
| Hono                                                                                 | 56007.08 | 10967.42 | 63697.10  | 85%      |
| Fastro                                                                               | 53189.82 | 8817.24  | 59306.37  | 81%      |
| Megalo                                                                               | 52220.15 | 10100.07 | 59134.69  | 79%      |
| Reno                                                                                 | 42532.93 | 7767.88  | 48414.83  | 65%      |
| http                                                                                 | 37577.78 | 8142.29  | 48062.24  | 57%      |
| Node                                                                                 | 35084.02 | 5651.58  | 38519.88  | 53%      |
| Fastify                                                                              | 32052.33 | 5382.21  | 34904.04  | 49%      |
| Alosaur                                                                              | 29336.79 | 6551.04  | 35154.93  | 45%      |
| Router                                                                               | 26040.54 | 4484.83  | 30193.33  | 40%      |
| Aqua                                                                                 | 21948.14 | 3161.43  | 26112.65  | 33%      |
| Oak                                                                                  | 20401.84 | 4492.91  | 25741.98  | 31%      |
| Dinatra                                                                              | 18088.97 | 3663.47  | 38021.85  | 27%      |
| Abc                                                                                  | 15938.70 | 2454.03  | 19320.99  | 24%      |
| Opine                                                                                | 8982.74  | 5008.98  | 141438.71 | 14%      |
| Express                                                                              | 6537.39  | 1447.62  | 8685.79   | 10%      |
| Servest                                                                              | 5322.52  | 1581.61  | 7993.41   | 8%       |
| Acorn                                                                                | 4498.40  | 7929.91  | 71185.84  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-ad063589-adae-4772-8451-1ffe5ad5857a) |          |          |           |          |

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
| 15938.70 | 2454.03 | 19320.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14317.27 | 15124.57 | 15906.78 | 17692.43 | 18772.25 | 18978.75 | 19191.26 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4498.40  | 7929.91 | 71185.84 |     |

| **Stat**    | 10     | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------ | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 100.00 | 2064.26 | 2671.49 | 3944.16 | 7570.60 | 9017.01 | 47697.41 |
| **Latency** | 5ms    | 7ms     | 17ms    | 22ms    | 27ms    | 29ms    | 31ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29336.79 | 6551.04 | 35154.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22877.88 | 26080.93 | 32122.32 | 33250.16 | 33584.22 | 33788.10 | 34450.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21948.14 | 3161.43 | 26112.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20316.33 | 21102.59 | 22665.82 | 23644.67 | 24152.07 | 24542.92 | 25013.91 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 59899.33 | 12288.87 | 219902.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46715.21 | 50084.12 | 59906.97 | 70715.08 | 72521.43 | 73335.24 | 75222.99 |
| **Latency** | 499µs    | 628µs    | 769µs    | 945µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65912.91 | 14183.83 | 75539.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32139.39 | 68971.43 | 72135.02 | 73267.15 | 73983.05 | 74254.61 | 74944.95 |
| **Latency** | 548µs    | 638µs    | 701µs    | 752µs    | 832µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18088.97 | 3663.47 | 38021.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16078.67 | 16554.80 | 19503.24 | 20018.34 | 20206.02 | 20354.56 | 22220.69 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6537.39  | 1447.62 | 8685.79 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4017.59 | 6471.36 | 7224.58 | 7389.17 | 7493.04 | 7534.71 | 7575.51 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 10ms    | 12ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58550.50 | 12254.17 | 66287.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30241.33 | 62185.90 | 63744.37 | 64467.43 | 64999.20 | 65195.33 | 65659.49 |
| **Latency** | 721µs    | 743µs    | 767µs    | 797µs    | 949µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32052.33 | 5382.21 | 34904.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31162.82 | 32674.69 | 33535.09 | 34189.11 | 34422.06 | 34516.42 | 34678.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53189.82 | 8817.24 | 59306.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42368.01 | 55206.39 | 56177.85 | 57043.11 | 57619.92 | 58070.60 | 58753.21 |
| **Latency** | 831µs    | 852µs    | 875µs    | 900µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56007.08 | 10967.42 | 63697.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35093.21 | 58735.01 | 60605.81 | 61553.73 | 62135.80 | 62453.79 | 63166.71 |
| **Latency** | 758µs    | 780µs    | 803µs    | 839µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37577.78 | 8142.29 | 48062.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25972.41 | 34940.40 | 41689.93 | 42432.18 | 42892.58 | 43305.56 | 43849.43 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60143.46 | 16860.96 | 79073.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36501.31 | 41747.43 | 69224.65 | 74310.11 | 75630.70 | 76183.21 | 77073.68 |
| **Latency** | 499µs    | 584µs    | 738µs    | 827µs    | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52220.15 | 10100.07 | 59134.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33108.81 | 55308.42 | 56300.94 | 56820.28 | 57327.33 | 57716.55 | 58223.95 |
| **Latency** | 826µs    | 849µs    | 873µs    | 901µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35084.02 | 5651.58 | 38519.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34004.63 | 35885.63 | 36445.06 | 37205.52 | 37522.00 | 37683.14 | 37910.47 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20401.84 | 4492.91 | 25741.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18285.23 | 19482.91 | 22296.01 | 22655.93 | 22984.96 | 23424.11 | 24902.30 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 8982.74  | 5008.98 | 141438.71 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 7311.91 | 8488.06 | 9190.96 | 9629.63 | 9797.64 | 10109.98 | 11444.55 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 7ms      | 11ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42532.93 | 7767.88 | 48414.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23056.61 | 44727.06 | 45375.10 | 46026.53 | 46474.58 | 46635.75 | 46983.47 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26040.54 | 4484.83 | 30193.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23295.42 | 24457.37 | 27925.97 | 28358.91 | 28856.08 | 29451.14 | 29827.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5322.52  | 1581.61 | 7993.41 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3801.20 | 4496.99 | 5855.19 | 6264.62 | 6552.45 | 6992.84 | 7379.90 |
| **Latency** | 7ms     | 8ms     | 8ms     | 10ms    | 11ms    | 18ms    | 20ms    |

---

<p align="center">Generated 2023-05-30T12:22:01.095Z</p>
