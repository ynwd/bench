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
| Bun                                                                                  | 63872.32 | 10353.12 | 80203.94  | 100%     |
| Hyper Express                                                                        | 59264.19 | 17021.59 | 77409.06  | 93%      |
| Deno                                                                                 | 51511.96 | 14131.38 | 66422.64  | 81%      |
| Fastro                                                                               | 49237.49 | 17591.09 | 61834.64  | 77%      |
| Hono                                                                                 | 49112.95 | 14142.90 | 62800.01  | 77%      |
| Fast                                                                                 | 47662.21 | 13506.01 | 167714.88 | 75%      |
| Megalo                                                                               | 46906.54 | 13361.61 | 160179.40 | 73%      |
| http                                                                                 | 41542.64 | 8444.27  | 47129.13  | 65%      |
| Reno                                                                                 | 40700.15 | 9925.18  | 48251.81  | 64%      |
| Node                                                                                 | 36396.23 | 5390.73  | 39178.79  | 57%      |
| Alosaur                                                                              | 34466.17 | 8194.51  | 170454.55 | 54%      |
| Fastify                                                                              | 29834.83 | 8695.02  | 35522.72  | 47%      |
| Router                                                                               | 28945.08 | 5591.07  | 36779.19  | 45%      |
| Aqua                                                                                 | 24864.42 | 3771.48  | 29535.02  | 39%      |
| Oak                                                                                  | 23089.62 | 3700.24  | 26357.65  | 36%      |
| Dinatra                                                                              | 18641.35 | 3637.14  | 41839.25  | 29%      |
| Abc                                                                                  | 14495.70 | 4261.89  | 20326.23  | 23%      |
| Opine                                                                                | 9808.22  | 1351.63  | 14731.82  | 15%      |
| Express                                                                              | 6896.88  | 1277.99  | 11823.06  | 11%      |
| Servest                                                                              | 5647.81  | 1497.90  | 9829.27   | 9%       |
| Acorn                                                                                | 3918.42  | 2848.42  | 51700.26  | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-7199372a-02f4-4628-bbc8-171351f887ff) |          |          |           |          |

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
| 14495.70 | 4261.89 | 20326.23 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8637.57 | 9659.37 | 16232.63 | 17552.83 | 19071.90 | 19234.74 | 19464.27 |
| **Latency** | 2ms     | 2ms     | 2ms      | 3ms      | 5ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3918.42  | 2848.42 | 51700.26 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2039.00 | 2500.20 | 2991.91 | 4100.28 | 8051.44 | 10231.30 | 12910.96 |
| **Latency** | 4ms     | 5ms     | 13ms    | 18ms    | 21ms    | 22ms     | 23ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 34466.17 | 8194.51 | 170454.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25012.30 | 34454.09 | 37405.31 | 38104.75 | 38688.14 | 38886.82 | 39234.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24864.42 | 3771.48 | 29535.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22309.39 | 23144.46 | 26414.50 | 26651.87 | 26869.62 | 27507.39 | 28075.58 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63872.32 | 10353.12 | 80203.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51120.48 | 53831.60 | 63696.24 | 74615.72 | 76105.38 | 76726.14 | 78109.42 |
| **Latency** | 479µs    | 595µs    | 733µs    | 864µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51511.96 | 14131.38 | 66422.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29201.78 | 44434.24 | 58703.57 | 61804.99 | 62611.50 | 63037.11 | 63739.84 |
| **Latency** | 622µs    | 714µs    | 878µs    | 943µs    | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18641.35 | 3637.14 | 41839.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15616.97 | 16398.88 | 20239.12 | 20518.90 | 20726.96 | 20952.36 | 22448.67 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6896.88  | 1277.99 | 11823.06 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4840.08 | 6970.12 | 7502.48 | 7593.94 | 7660.14 | 7683.60 | 7720.39 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 9ms     | 10ms    | 14ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 47662.21 | 13506.01 | 167714.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29332.00 | 43009.14 | 47700.12 | 58923.13 | 59922.81 | 60719.31 | 61814.37 |
| **Latency** | 741µs    | 802µs    | 878µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29834.83 | 8695.02 | 35522.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12901.29 | 32537.53 | 34018.72 | 34618.36 | 34972.41 | 35100.36 | 35359.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49237.49 | 17591.09 | 61834.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15251.40 | 46511.18 | 57850.34 | 59760.88 | 60429.34 | 60814.58 | 61272.42 |
| **Latency** | 742µs    | 797µs    | 851µs    | 913µs    | 1ms      | 1ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49112.95 | 14142.90 | 62800.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25742.62 | 43463.88 | 54920.90 | 59985.08 | 60851.57 | 61230.88 | 62053.93 |
| **Latency** | 725µs    | 777µs    | 865µs    | 957µs    | 1ms      | 1ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41542.64 | 8444.27 | 47129.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31817.84 | 42229.41 | 45275.63 | 45750.35 | 46020.28 | 46210.93 | 46636.88 |
| **Latency** | 948µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59264.19 | 17021.59 | 77409.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36155.50 | 37663.68 | 69707.81 | 74017.82 | 75255.19 | 75652.20 | 76750.42 |
| **Latency** | 505µs    | 593µs    | 741µs    | 897µs    | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 46906.54 | 13361.61 | 160179.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29401.32 | 41913.41 | 53664.40 | 55128.16 | 55817.35 | 56177.56 | 57087.39 |
| **Latency** | 807µs    | 859µs    | 921µs    | 989µs    | 1ms      | 1ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36396.23 | 5390.73 | 39178.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36226.12 | 37083.11 | 37569.54 | 38088.03 | 38397.96 | 38537.81 | 38841.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23089.62 | 3700.24 | 26357.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20212.94 | 22602.06 | 24590.03 | 24784.89 | 24927.03 | 25072.24 | 25817.76 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9808.22  | 1351.63 | 14731.82 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8574.41 | 9423.92 | 10202.01 | 10327.76 | 10655.09 | 11260.00 | 12569.38 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40700.15 | 9925.18 | 48251.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25291.13 | 42608.53 | 45096.55 | 45758.83 | 46294.95 | 46508.74 | 47140.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28945.08 | 5591.07 | 36779.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20418.91 | 26200.55 | 31617.06 | 32183.57 | 32999.70 | 33220.62 | 33531.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5647.81  | 1497.90 | 9829.27 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3435.74 | 5519.27 | 6145.42 | 6536.94 | 6865.85 | 6940.82 | 7759.08 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 11ms    | 13ms    | 22ms    |

---

<p align="center">Generated 2023-03-19T18:18:31.766Z</p>
