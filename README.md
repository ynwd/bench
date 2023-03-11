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
| Bun                                                                                  | 62815.70 | 11013.79 | 89939.72  | 100%     |
| Hyper Express                                                                        | 60367.43 | 16502.88 | 81033.43  | 96%      |
| Deno                                                                                 | 48881.84 | 14796.74 | 75914.61  | 78%      |
| Fast                                                                                 | 47175.81 | 12873.03 | 151515.15 | 75%      |
| Hono                                                                                 | 46419.78 | 14749.92 | 64086.64  | 74%      |
| Fastro                                                                               | 45986.41 | 16040.96 | 63073.40  | 73%      |
| Megalo                                                                               | 43191.59 | 13611.45 | 63402.49  | 69%      |
| http                                                                                 | 38916.50 | 9265.31  | 59070.23  | 62%      |
| Reno                                                                                 | 37487.11 | 8894.17  | 60327.63  | 60%      |
| Alosaur                                                                              | 33130.08 | 8336.65  | 44632.13  | 53%      |
| Node                                                                                 | 31876.95 | 5850.17  | 38465.58  | 51%      |
| Router                                                                               | 26533.90 | 6200.15  | 102558.84 | 42%      |
| Fastify                                                                              | 24740.05 | 8243.91  | 34065.26  | 39%      |
| Aqua                                                                                 | 23396.46 | 5152.07  | 133333.33 | 37%      |
| Oak                                                                                  | 21430.31 | 3492.54  | 36810.08  | 34%      |
| Dinatra                                                                              | 16784.66 | 3614.80  | 33059.71  | 27%      |
| Abc                                                                                  | 13654.73 | 3755.96  | 20040.38  | 22%      |
| Opine                                                                                | 8991.09  | 1347.02  | 14525.14  | 14%      |
| Express                                                                              | 5595.33  | 1357.20  | 11138.88  | 9%       |
| Servest                                                                              | 5023.52  | 1457.01  | 13189.89  | 8%       |
| Acorn                                                                                | 3854.88  | 3127.58  | 62797.35  | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-157f8b55-27eb-41ec-871f-38253829c0ac) |          |          |           |          |

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
| 13654.73 | 3755.96 | 20040.38 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7609.68 | 11114.32 | 15452.97 | 16531.45 | 17049.82 | 17523.84 | 18573.93 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 6ms      | 6ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3854.88  | 3127.58 | 62797.35 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1971.90 | 2422.41 | 2965.52 | 4021.74 | 7603.95 | 9492.39 | 11290.07 |
| **Latency** | 4ms     | 6ms     | 13ms    | 18ms    | 20ms    | 22ms    | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33130.08 | 8336.65 | 44632.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20680.49 | 31255.73 | 35801.89 | 38361.86 | 40497.78 | 41859.14 | 43454.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 23396.46 | 5152.07 | 133333.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19828.91 | 22284.66 | 24106.03 | 25430.71 | 26385.12 | 27103.21 | 28721.84 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62815.70 | 11013.79 | 89939.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49144.40 | 53631.83 | 61437.08 | 72350.90 | 77572.70 | 80368.57 | 85373.02 |
| **Latency** | 477µs    | 593µs    | 740µs    | 898µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48881.84 | 14796.74 | 75914.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30812.37 | 40473.76 | 48382.74 | 60905.14 | 66837.01 | 69752.32 | 73377.24 |
| **Latency** | 589µs    | 716µs    | 888µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16784.66 | 3614.80 | 33059.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12214.87 | 15295.65 | 17419.75 | 19315.14 | 20148.56 | 20628.92 | 22062.33 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5595.33  | 1357.20 | 11138.88 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3418.65 | 5495.20 | 6141.67 | 6335.06 | 6469.44 | 6693.67 | 7373.77 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 14ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 47175.81 | 12873.03 | 151515.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26614.31 | 43132.17 | 52232.08 | 54514.78 | 56524.65 | 57718.42 | 60802.07 |
| **Latency** | 795µs    | 862µs    | 931µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24740.05 | 8243.91 | 34065.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10704.32 | 25019.95 | 28718.15 | 29746.57 | 30649.52 | 31441.99 | 32748.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45986.41 | 16040.96 | 63073.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19353.30 | 43816.83 | 52582.78 | 55239.59 | 57399.42 | 58829.28 | 61391.68 |
| **Latency** | 775µs    | 848µs    | 921µs    | 1ms      | 1ms      | 1ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46419.78 | 14749.92 | 64086.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19506.31 | 42747.71 | 52731.50 | 55603.57 | 58244.70 | 60085.28 | 62123.30 |
| **Latency** | 773µs    | 845µs    | 916µs    | 999µs    | 1ms      | 1ms      | 5ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38916.50 | 9265.31 | 59070.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25400.63 | 39355.73 | 42595.28 | 43739.12 | 45577.23 | 46648.38 | 47685.40 |
| **Latency** | 987µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60367.43 | 16502.88 | 81033.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33886.57 | 41510.20 | 68661.43 | 73008.37 | 75924.06 | 77310.15 | 79137.44 |
| **Latency** | 510µs    | 609µs    | 747µs    | 833µs    | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43191.59 | 13611.45 | 63402.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18404.16 | 37814.77 | 49162.73 | 51814.79 | 54429.12 | 55559.45 | 57234.63 |
| **Latency** | 829µs    | 902µs    | 987µs    | 1ms      | 1ms      | 2ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31876.95 | 5850.17 | 38465.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30559.13 | 31938.16 | 32944.31 | 34238.17 | 35711.60 | 36459.24 | 37389.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21430.31 | 3492.54 | 36810.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17804.18 | 20814.88 | 22349.86 | 23093.38 | 24177.59 | 24726.00 | 25594.06 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8991.09  | 1347.02 | 14525.14 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7722.96 | 8506.50 | 9043.17 | 9671.24 | 10272.49 | 10712.04 | 12253.23 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 6ms      | 6ms      | 9ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37487.11 | 8894.17 | 60327.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23351.45 | 38126.42 | 40642.46 | 41908.27 | 43816.90 | 44835.61 | 45901.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 26533.90 | 6200.15 | 102558.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18107.34 | 24045.70 | 28968.64 | 29728.10 | 30701.08 | 31605.42 | 33042.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5023.52  | 1457.01 | 13189.89 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2619.25 | 5040.98 | 5481.77 | 5787.68 | 6128.43 | 6353.84 | 7137.58 |
| **Latency** | 8ms     | 8ms     | 9ms     | 9ms     | 13ms    | 15ms    | 26ms    |

---

<p align="center">Generated 2023-03-11T00:58:30.793Z</p>
