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
| Bun                                                                                  | 42317.20 | 8497.71  | 60797.11  | 100%     |
| Hyper Express                                                                        | 41992.20 | 15816.90 | 61861.88  | 99%      |
| Deno                                                                                 | 34731.62 | 9827.75  | 47438.07  | 82%      |
| Fast                                                                                 | 29954.48 | 9232.04  | 56089.00  | 71%      |
| http                                                                                 | 29022.34 | 6630.91  | 45843.13  | 69%      |
| Megalo                                                                               | 28745.62 | 9115.90  | 61086.80  | 68%      |
| Reno                                                                                 | 26830.83 | 7051.25  | 109890.11 | 63%      |
| Fastro                                                                               | 25562.85 | 9021.45  | 40256.16  | 60%      |
| Hono                                                                                 | 25093.44 | 7410.54  | 41393.08  | 59%      |
| Alosaur                                                                              | 23191.12 | 5957.36  | 47619.05  | 55%      |
| Router                                                                               | 20960.04 | 3890.28  | 26052.18  | 50%      |
| Aqua                                                                                 | 17308.38 | 3124.39  | 28377.87  | 41%      |
| Node                                                                                 | 16991.28 | 2933.80  | 20604.31  | 40%      |
| Fastify                                                                              | 14348.91 | 2907.99  | 17853.45  | 34%      |
| Oak                                                                                  | 13043.61 | 2170.89  | 16874.41  | 31%      |
| Dinatra                                                                              | 10798.21 | 2266.19  | 19052.19  | 26%      |
| Abc                                                                                  | 9027.46  | 1521.93  | 12276.90  | 21%      |
| Opine                                                                                | 6121.61  | 1138.83  | 11141.96  | 14%      |
| Express                                                                              | 3917.48  | 991.34   | 13549.21  | 9%       |
| Acorn                                                                                | 3893.90  | 3483.18  | 72333.78  | 9%       |
| Servest                                                                              | 3734.19  | 1046.90  | 8081.47   | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-ff8ee63c-7ea2-4679-b473-ec625e391737) |          |          |           |          |

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
| 9027.46  | 1521.93 | 12276.90 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7042.74 | 8557.15 | 9440.77 | 9918.53 | 10406.43 | 10781.39 | 11290.39 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 6ms      | 7ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3893.90  | 3483.18 | 72333.78 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1810.08 | 2444.69 | 3016.91 | 4943.59 | 7387.40 | 8516.10 | 13860.54 |
| **Latency** | 6ms     | 7ms     | 13ms    | 19ms    | 22ms    | 24ms    | 28ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23191.12 | 5957.36 | 47619.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13606.64 | 22618.28 | 25654.80 | 26769.10 | 27556.75 | 28056.62 | 29016.24 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17308.38 | 3124.39 | 28377.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14022.41 | 16237.14 | 18283.22 | 19182.56 | 19818.51 | 20240.94 | 20863.69 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42317.20 | 8497.71 | 60797.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32533.74 | 36201.71 | 41079.63 | 50253.06 | 53734.61 | 54966.25 | 57353.19 |
| **Latency** | 666µs    | 844µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34731.62 | 9827.75 | 47438.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20355.70 | 29426.10 | 38516.28 | 42115.51 | 43778.20 | 44518.12 | 45988.41 |
| **Latency** | 955µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10798.21 | 2266.19 | 19052.19 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7832.86 | 10123.44 | 11268.12 | 12210.90 | 12870.60 | 13323.10 | 13909.83 |
| **Latency** | 3ms     | 4ms      | 4ms      | 4ms      | 6ms      | 6ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 3917.48  | 991.34 | 13549.21 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2508.42 | 3574.77 | 4246.09 | 4444.06 | 4618.59 | 4701.90 | 4961.10 |
| **Latency** | 10ms    | 11ms    | 11ms    | 12ms    | 16ms    | 19ms    | 25ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29954.48 | 9232.04 | 56089.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16987.54 | 26308.77 | 30418.97 | 37419.21 | 41085.53 | 41975.73 | 43416.65 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 6ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14348.91 | 2907.99 | 17853.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10895.17 | 14609.77 | 15228.53 | 15753.46 | 16233.50 | 16522.70 | 17120.95 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25562.85 | 9021.45 | 40256.16 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9615.17 | 23980.16 | 29159.14 | 31802.66 | 33103.76 | 33823.05 | 35213.67 |
| **Latency** | 1ms     | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25093.44 | 7410.54 | 41393.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12150.32 | 23600.97 | 27783.98 | 29793.95 | 31202.38 | 32077.84 | 33722.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 7ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29022.34 | 6630.91 | 45843.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19245.16 | 27812.87 | 31837.30 | 32930.65 | 33851.22 | 34436.53 | 35505.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41992.20 | 15816.90 | 61861.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16475.18 | 27576.20 | 49126.70 | 55330.55 | 57505.80 | 58522.42 | 60186.04 |
| **Latency** | 648µs    | 777µs    | 953µs    | 1ms      | 2ms      | 3ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28745.62 | 9115.90 | 61086.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11700.39 | 25421.48 | 32525.81 | 34834.58 | 36410.29 | 37512.20 | 39299.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16991.28 | 2933.80 | 20604.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15020.70 | 16921.72 | 17686.01 | 18370.42 | 19048.64 | 19501.22 | 20013.85 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13043.61 | 2170.89 | 16874.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10572.08 | 12541.92 | 13748.74 | 14271.75 | 14709.55 | 15077.29 | 15656.94 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6121.61  | 1138.83 | 11141.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5104.60 | 5720.63 | 6317.19 | 6660.35 | 7051.84 | 7706.61 | 8451.24 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 9ms     | 10ms    | 14ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 26830.83 | 7051.25 | 109890.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16694.34 | 26212.64 | 29108.49 | 30543.12 | 31616.42 | 32236.68 | 33726.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 6ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20960.04 | 3890.28 | 26052.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16352.95 | 20415.84 | 22160.39 | 23172.87 | 23901.72 | 24437.34 | 25156.60 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3734.19  | 1046.90 | 8081.47 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2101.14 | 3571.03 | 4020.10 | 4309.36 | 4633.59 | 4809.79 | 5214.14 |
| **Latency** | 11ms    | 11ms    | 12ms    | 14ms    | 18ms    | 21ms    | 30ms    |

---

<p align="center">Generated 2023-03-22T00:58:57.747Z</p>
