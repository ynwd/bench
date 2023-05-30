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
| Deno                                                                                 | 64417.59 | 15140.80 | 74473.94  | 100%     |
| Bun                                                                                  | 59462.38 | 11034.79 | 76923.83  | 92%      |
| Hyper Express                                                                        | 57192.44 | 16362.13 | 76159.93  | 89%      |
| Hono                                                                                 | 53427.04 | 13138.81 | 62639.47  | 83%      |
| Fast                                                                                 | 52969.20 | 14881.26 | 64252.04  | 82%      |
| Megalo                                                                               | 52453.88 | 9209.91  | 58797.55  | 81%      |
| Fastro                                                                               | 51347.90 | 9238.00  | 57967.24  | 80%      |
| Reno                                                                                 | 44536.69 | 5133.97  | 47983.02  | 69%      |
| http                                                                                 | 36899.63 | 8711.61  | 47239.57  | 57%      |
| Node                                                                                 | 33272.86 | 7831.33  | 39767.15  | 52%      |
| Fastify                                                                              | 31144.07 | 5394.31  | 33880.29  | 48%      |
| Alosaur                                                                              | 29397.22 | 7308.75  | 146341.46 | 46%      |
| Router                                                                               | 25672.16 | 4494.13  | 30684.07  | 40%      |
| Aqua                                                                                 | 22095.26 | 3257.88  | 25861.97  | 34%      |
| Oak                                                                                  | 20294.95 | 3877.26  | 25520.53  | 32%      |
| Dinatra                                                                              | 17625.10 | 3907.37  | 38387.27  | 27%      |
| Abc                                                                                  | 15810.53 | 2175.89  | 20027.57  | 25%      |
| Opine                                                                                | 8905.41  | 4243.30  | 120481.93 | 14%      |
| Express                                                                              | 6436.24  | 1345.84  | 8968.88   | 10%      |
| Servest                                                                              | 5296.75  | 1633.69  | 8092.71   | 8%       |
| Acorn                                                                                | 4016.02  | 6041.51  | 144669.52 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-14cb40d1-10d6-4480-985b-881db12fc463) |          |          |           |          |

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
| 15810.53 | 2175.89 | 20027.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14063.68 | 15040.16 | 15718.50 | 17217.46 | 17957.35 | 18430.78 | 18743.48 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4016.02  | 6041.51 | 144669.52 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1651.75 | 2071.32 | 2539.57 | 3570.72 | 7942.42 | 10719.62 | 22507.08 |
| **Latency** | 5ms     | 8ms     | 17ms    | 22ms    | 26ms    | 29ms     | 31ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 29397.22 | 7308.75 | 146341.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24130.92 | 26096.55 | 32067.12 | 32927.35 | 33333.04 | 33567.17 | 34088.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22095.26 | 3257.88 | 25861.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20505.33 | 21206.37 | 22903.90 | 23841.49 | 24422.47 | 24786.40 | 25274.14 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59462.38 | 11034.79 | 76923.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45925.83 | 49527.17 | 62820.23 | 69890.14 | 71458.74 | 72106.48 | 73574.36 |
| **Latency** | 502µs    | 628µs    | 777µs    | 947µs    | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64417.59 | 15140.80 | 74473.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29499.10 | 68658.59 | 71331.69 | 72425.31 | 73164.61 | 73513.87 | 74120.28 |
| **Latency** | 608µs    | 659µs    | 692µs    | 741µs    | 842µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17625.10 | 3907.37 | 38387.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15599.18 | 16373.98 | 18870.57 | 19659.96 | 20079.91 | 20480.90 | 21988.10 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6436.24  | 1345.84 | 8968.88 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4238.17 | 6404.07 | 7094.36 | 7220.07 | 7307.01 | 7339.63 | 7403.20 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 10ms    | 11ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52969.20 | 14881.26 | 64252.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26443.89 | 42050.46 | 61807.55 | 62700.94 | 63145.46 | 63336.88 | 63668.68 |
| **Latency** | 740µs    | 763µs    | 787µs    | 835µs    | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31144.07 | 5394.31 | 33880.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30825.58 | 31718.39 | 32603.67 | 33096.30 | 33329.65 | 33457.88 | 33721.05 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51347.90 | 9238.00 | 57967.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36044.90 | 53714.50 | 54804.68 | 55597.85 | 56329.29 | 56716.44 | 57207.43 |
| **Latency** | 849µs    | 872µs    | 895µs    | 922µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53427.04 | 13138.81 | 62639.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26611.09 | 55588.95 | 59959.97 | 60957.25 | 61610.48 | 61930.35 | 62309.35 |
| **Latency** | 759µs    | 783µs    | 809µs    | 857µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36899.63 | 8711.61 | 47239.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24351.55 | 34431.08 | 41331.82 | 42315.94 | 42787.24 | 43093.06 | 43619.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57192.44 | 16362.13 | 76159.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34670.73 | 36554.83 | 66019.80 | 72008.73 | 73256.39 | 73896.59 | 74705.54 |
| **Latency** | 512µs    | 613µs    | 763µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52453.88 | 9209.91 | 58797.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37172.78 | 54969.81 | 56137.54 | 56727.79 | 57293.34 | 57804.06 | 58411.10 |
| **Latency** | 826µs    | 848µs    | 871µs    | 901µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33272.86 | 7831.33 | 39767.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14372.00 | 35440.76 | 36020.17 | 36908.12 | 37362.77 | 37579.29 | 37827.24 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20294.95 | 3877.26 | 25520.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18306.77 | 19226.47 | 21759.22 | 22271.04 | 22651.62 | 23024.05 | 24056.05 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 8905.41  | 4243.30 | 120481.93 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 7189.00 | 8363.12 | 9060.18 | 9596.38 | 9923.53 | 10403.56 | 11342.38 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 7ms      | 11ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44536.69 | 5133.97 | 47983.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44164.91 | 45064.44 | 45496.00 | 46189.61 | 46709.81 | 47027.45 | 47313.71 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25672.16 | 4494.13 | 30684.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22613.11 | 24143.12 | 27701.66 | 28169.02 | 28441.89 | 28617.96 | 29469.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5296.75  | 1633.69 | 8092.71 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3726.16 | 4400.92 | 5843.48 | 6312.62 | 6676.37 | 7125.09 | 7396.50 |
| **Latency** | 7ms     | 8ms     | 8ms     | 10ms    | 11ms    | 19ms    | 21ms    |

---

<p align="center">Generated 2023-05-30T06:16:30.220Z</p>
