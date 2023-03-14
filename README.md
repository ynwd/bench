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
| Hyper Express                                                                        | 43647.61 | 15083.84 | 59100.02  | 100%     |
| Bun                                                                                  | 41848.19 | 8260.93  | 60893.31  | 96%      |
| Deno                                                                                 | 31288.54 | 8385.41  | 71208.48  | 72%      |
| Fast                                                                                 | 30428.22 | 8454.26  | 46613.49  | 70%      |
| http                                                                                 | 29813.26 | 8013.43  | 126582.28 | 68%      |
| Hono                                                                                 | 29204.81 | 9166.29  | 46349.94  | 67%      |
| Megalo                                                                               | 28138.94 | 8637.92  | 42454.82  | 64%      |
| Fastro                                                                               | 27563.09 | 9608.09  | 120511.26 | 63%      |
| Reno                                                                                 | 25922.38 | 8144.59  | 115131.11 | 59%      |
| Alosaur                                                                              | 22794.61 | 6475.18  | 31126.36  | 52%      |
| Router                                                                               | 21320.71 | 3696.41  | 28407.38  | 49%      |
| Aqua                                                                                 | 18312.99 | 3102.43  | 37809.35  | 42%      |
| Node                                                                                 | 16674.08 | 3135.39  | 20334.31  | 38%      |
| Fastify                                                                              | 15844.12 | 2873.51  | 19681.86  | 36%      |
| Oak                                                                                  | 14977.20 | 2540.77  | 20043.10  | 34%      |
| Dinatra                                                                              | 11180.70 | 2298.32  | 18331.81  | 26%      |
| Abc                                                                                  | 9674.91  | 1497.65  | 11618.51  | 22%      |
| Opine                                                                                | 6388.56  | 3831.36  | 131578.95 | 15%      |
| Acorn                                                                                | 4598.78  | 3549.47  | 20844.34  | 11%      |
| Express                                                                              | 3858.19  | 1410.97  | 34953.81  | 9%       |
| Servest                                                                              | 3787.36  | 983.33   | 6295.42   | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-37ba0653-ef00-4784-8901-33cb392ffe53) |          |          |           |          |

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
| 9674.91  | 1497.65 | 11618.51 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7813.80 | 9324.68 | 10105.82 | 10586.99 | 10973.61 | 11120.87 | 11432.26 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 6ms      | 6ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4598.78  | 3549.47 | 20844.34 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 58.67 | 2187.06 | 3400.77 | 6933.35 | 10171.63 | 10903.12 | 13856.24 |
| **Latency** | 5ms   | 6ms     | 13ms    | 19ms    | 23ms     | 23ms     | 28ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22794.61 | 6475.18 | 31126.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14564.39 | 15992.62 | 26374.85 | 27697.09 | 28406.72 | 28805.67 | 29647.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18312.99 | 3102.43 | 37809.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14943.13 | 17474.55 | 19235.87 | 20034.73 | 20640.72 | 21036.98 | 21830.80 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41848.19 | 8260.93 | 60893.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31725.27 | 35107.18 | 40753.96 | 49920.50 | 52568.78 | 53815.95 | 56312.99 |
| **Latency** | 667µs    | 850µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31288.54 | 8385.41 | 71208.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20558.11 | 29800.49 | 34303.82 | 36054.31 | 37221.58 | 38100.63 | 39388.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 6ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11180.70 | 2298.32 | 18331.81 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8338.33 | 10452.12 | 11549.27 | 12737.91 | 13435.96 | 13776.69 | 14254.59 |
| **Latency** | 3ms     | 4ms      | 4ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3858.19  | 1410.97 | 34953.81 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2759.68 | 3107.76 | 4261.22 | 4444.92 | 4529.93 | 4577.02 | 5051.97 |
| **Latency** | 10ms    | 11ms    | 11ms    | 15ms    | 16ms    | 19ms    | 25ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30428.22 | 8454.26 | 46613.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16900.16 | 27231.43 | 32691.09 | 36332.57 | 38777.03 | 39823.30 | 41017.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15844.12 | 2873.51 | 19681.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14123.54 | 15809.47 | 16549.09 | 17315.35 | 17743.76 | 17958.84 | 18216.89 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 8ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 27563.09 | 9608.09 | 120511.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10859.38 | 26004.59 | 30802.12 | 33627.79 | 34828.78 | 35552.39 | 37370.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29204.81 | 9166.29 | 46349.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10310.79 | 28305.35 | 32848.22 | 34733.86 | 35967.11 | 36527.81 | 37445.55 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 8ms      |

### [http](#http)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 29813.26 | 8013.43 | 126582.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17994.46 | 30149.34 | 32853.92 | 33913.11 | 34606.47 | 35094.65 | 35622.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43647.61 | 15083.84 | 59100.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16290.38 | 33005.50 | 51788.86 | 55005.32 | 56304.88 | 56977.88 | 57922.60 |
| **Latency** | 662µs    | 766µs    | 977µs    | 1ms      | 1ms      | 3ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28138.94 | 8637.92 | 42454.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12812.64 | 25336.30 | 31167.22 | 34204.00 | 36211.13 | 37342.85 | 38616.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16674.08 | 3135.39 | 20334.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13501.04 | 16769.21 | 17546.80 | 18165.71 | 18835.37 | 19200.74 | 19668.02 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14977.20 | 2540.77 | 20043.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12204.36 | 14703.05 | 15779.80 | 16233.72 | 16835.98 | 17203.57 | 17677.83 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 6388.56  | 3831.36 | 131578.95 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5388.44 | 5850.41 | 6376.37 | 6725.40 | 7209.71 | 7771.52 | 8374.20 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 9ms     | 9ms     | 12ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 25922.38 | 8144.59 | 115131.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10551.99 | 25710.60 | 29224.45 | 30520.65 | 31423.66 | 31922.85 | 32708.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21320.71 | 3696.41 | 28407.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17085.04 | 21213.29 | 22452.23 | 23289.82 | 23814.92 | 24174.89 | 24815.81 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 3787.36  | 983.33 | 6295.42 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2337.46 | 3714.85 | 4033.63 | 4299.74 | 4640.48 | 4808.02 | 5100.98 |
| **Latency** | 11ms    | 11ms    | 12ms    | 13ms    | 17ms    | 20ms    | 30ms    |

---

<p align="center">Generated 2023-03-14T03:18:11.685Z</p>
