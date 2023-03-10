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
| Bun                                                                                  | 62200.92 | 11186.82 | 80797.48  | 100%     |
| Hyper Express                                                                        | 60131.93 | 17159.23 | 79169.84  | 97%      |
| Deno                                                                                 | 50177.54 | 13275.49 | 168067.23 | 81%      |
| Hono                                                                                 | 50150.30 | 14803.25 | 62329.95  | 81%      |
| Fastro                                                                               | 48349.77 | 16715.47 | 60101.06  | 78%      |
| Fast                                                                                 | 46733.54 | 14690.05 | 168887.39 | 75%      |
| Megalo                                                                               | 46402.77 | 11888.55 | 57547.06  | 75%      |
| http                                                                                 | 41868.74 | 9542.45  | 53532.62  | 67%      |
| Reno                                                                                 | 38349.75 | 10423.41 | 52109.68  | 62%      |
| Node                                                                                 | 35474.12 | 4788.89  | 38309.05  | 57%      |
| Alosaur                                                                              | 33964.65 | 7913.83  | 39908.33  | 55%      |
| Fastify                                                                              | 30726.04 | 6784.29  | 35139.38  | 49%      |
| Router                                                                               | 29855.47 | 5423.23  | 38844.09  | 48%      |
| Aqua                                                                                 | 24594.33 | 4140.55  | 28961.41  | 40%      |
| Oak                                                                                  | 23026.40 | 3850.12  | 26566.72  | 37%      |
| Dinatra                                                                              | 18402.71 | 3667.06  | 46948.36  | 30%      |
| Abc                                                                                  | 16157.58 | 2942.80  | 25791.40  | 26%      |
| Opine                                                                                | 9995.53  | 5534.99  | 133457.89 | 16%      |
| Express                                                                              | 6601.70  | 1339.73  | 10199.43  | 11%      |
| Servest                                                                              | 5465.08  | 1514.76  | 9471.02   | 9%       |
| Acorn                                                                                | 4111.78  | 3935.63  | 73905.00  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-77847523-554a-4496-b07e-101964a66fdc) |          |          |           |          |

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
| 16157.58 | 2942.80 | 25791.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13126.21 | 15312.41 | 16573.88 | 17960.72 | 19054.35 | 19186.67 | 19370.58 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4111.78  | 3935.63 | 73905.00 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1833.50 | 2513.02 | 3036.19 | 4372.13 | 8471.08 | 10745.07 | 13250.18 |
| **Latency** | 4ms     | 5ms     | 13ms    | 18ms    | 21ms    | 22ms     | 23ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33964.65 | 7913.83 | 39908.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22401.13 | 32212.43 | 38019.20 | 38614.34 | 38915.57 | 39101.18 | 39363.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24594.33 | 4140.55 | 28961.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21910.52 | 22871.94 | 26410.46 | 26686.74 | 26878.44 | 27360.78 | 28151.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62200.92 | 11186.82 | 80797.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48691.40 | 52391.50 | 64316.45 | 73051.96 | 74635.91 | 75299.72 | 77220.52 |
| **Latency** | 484µs    | 607µs    | 746µs    | 882µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 50177.54 | 13275.49 | 168067.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32826.61 | 43167.11 | 53814.02 | 60648.99 | 61507.63 | 62008.30 | 62712.63 |
| **Latency** | 635µs    | 754µs    | 901µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18402.71 | 3667.06 | 46948.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15290.54 | 16062.57 | 20008.42 | 20313.02 | 20532.43 | 20713.90 | 21648.29 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6601.70  | 1339.73 | 10199.43 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4447.10 | 6845.25 | 7231.97 | 7321.24 | 7375.31 | 7404.89 | 7438.91 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 9ms     | 11ms    | 15ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 46733.54 | 14690.05 | 168887.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25210.10 | 40953.38 | 51720.72 | 58191.05 | 59057.97 | 59490.12 | 60613.97 |
| **Latency** | 759µs    | 817µs    | 879µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30726.04 | 6784.29 | 35139.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16253.81 | 32362.48 | 33213.97 | 33729.71 | 33968.30 | 34104.72 | 34734.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48349.77 | 16715.47 | 60101.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18481.15 | 50356.14 | 56036.21 | 57296.30 | 58033.47 | 58520.23 | 59121.92 |
| **Latency** | 798µs    | 838µs    | 875µs    | 921µs    | 992µs    | 1ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50150.30 | 14803.25 | 62329.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22503.53 | 47348.33 | 57135.46 | 59313.47 | 60026.01 | 60330.19 | 61027.50 |
| **Latency** | 727µs    | 787µs    | 861µs    | 943µs    | 1ms      | 1ms      | 6ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41868.74 | 9542.45 | 53532.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29663.49 | 41318.59 | 46381.28 | 47076.06 | 47454.76 | 47636.64 | 48110.60 |
| **Latency** | 929µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60131.93 | 17159.23 | 79169.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35305.87 | 39020.56 | 70047.00 | 74854.11 | 75910.68 | 76442.56 | 77290.83 |
| **Latency** | 503µs    | 576µs    | 734µs    | 813µs    | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46402.77 | 11888.55 | 57547.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28663.51 | 42878.88 | 52357.40 | 53609.46 | 54380.83 | 54801.44 | 55638.65 |
| **Latency** | 829µs    | 882µs    | 947µs    | 1ms      | 1ms      | 1ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35474.12 | 4788.89 | 38309.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34916.64 | 35823.88 | 36548.63 | 37070.30 | 37401.98 | 37562.59 | 37873.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23026.40 | 3850.12 | 26566.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19710.93 | 22704.47 | 24624.64 | 24802.98 | 24936.30 | 25137.23 | 25987.93 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 9995.53  | 5534.99 | 133457.89 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8608.34 | 9405.26 | 10152.48 | 10269.10 | 10496.45 | 11167.51 | 13164.39 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38349.75 | 10423.41 | 52109.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22310.68 | 34766.06 | 43615.22 | 44566.15 | 45297.29 | 45642.06 | 46752.80 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29855.47 | 5423.23 | 38844.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22191.79 | 27642.42 | 32201.57 | 32902.29 | 33358.65 | 33588.98 | 33907.08 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5465.08  | 1514.76 | 9471.02 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3204.81 | 5401.15 | 6034.09 | 6343.44 | 6638.97 | 6714.23 | 6997.04 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 13ms    | 23ms    |

---

<p align="center">Generated 2023-03-10T21:15:44.411Z</p>
