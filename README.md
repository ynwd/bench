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
| Hyper Express                                                                        | 80200.51 | 16117.36 | 101146.79 | 100%     |
| Bun                                                                                  | 79837.90 | 9220.01  | 101165.22 | 100%     |
| Deno                                                                                 | 64773.30 | 12001.79 | 90950.74  | 81%      |
| Fast                                                                                 | 54960.38 | 8119.66  | 84905.11  | 69%      |
| Hono                                                                                 | 53518.21 | 6562.86  | 80306.10  | 67%      |
| Fastro                                                                               | 50662.08 | 3882.63  | 81298.52  | 63%      |
| Megalo                                                                               | 48490.72 | 3175.22  | 66281.05  | 60%      |
| Alosaur                                                                              | 46552.25 | 2855.88  | 55920.60  | 58%      |
| http                                                                                 | 43771.23 | 3446.54  | 51131.77  | 55%      |
| Router                                                                               | 42309.24 | 3368.82  | 48535.31  | 53%      |
| Reno                                                                                 | 40775.52 | 2172.20  | 45703.94  | 51%      |
| Aqua                                                                                 | 33867.37 | 3017.72  | 38650.63  | 42%      |
| Oak                                                                                  | 31906.06 | 2973.43  | 38750.69  | 40%      |
| Acorn                                                                                | 30802.48 | 4482.90  | 42681.96  | 38%      |
| Dinatra                                                                              | 18203.93 | 1941.65  | 23013.47  | 23%      |
| Node                                                                                 | 17794.47 | 1597.84  | 25956.77  | 22%      |
| Fastify                                                                              | 16807.99 | 1980.23  | 30048.09  | 21%      |
| Opine                                                                                | 15548.49 | 2227.33  | 20654.15  | 19%      |
| Abc                                                                                  | 14174.42 | 1545.81  | 19672.74  | 18%      |
| Servest                                                                              | 7195.72  | 1329.71  | 10066.87  | 9%       |
| Express                                                                              | 6224.01  | 958.94   | 7896.13   | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-04793ee0-37ff-447c-b104-eb484b509b32) |          |          |           |          |

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
| 14174.42 | 1545.81 | 19672.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12586.88 | 13412.71 | 14208.98 | 15143.72 | 15522.59 | 15823.43 | 18557.89 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30802.48 | 4482.90 | 42681.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24819.84 | 29765.61 | 31228.07 | 31987.70 | 36535.45 | 40317.62 | 41766.61 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46552.25 | 2855.88 | 55920.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44306.19 | 45401.32 | 46444.99 | 47918.45 | 49537.00 | 50524.29 | 52931.94 |
| **Latency** | 917µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33867.37 | 3017.72 | 38650.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32003.18 | 33028.37 | 34333.12 | 35434.06 | 36265.50 | 36878.91 | 37863.69 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 79837.90 | 9220.01 | 101165.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 68020.64 | 72332.09 | 79342.76 | 86662.99 | 93011.77 | 96018.97 | 98742.59 |
| **Latency** | 373µs    | 464µs    | 585µs    | 740µs    | 942µs    | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64773.30 | 12001.79 | 90950.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53207.58 | 54641.62 | 59275.74 | 75396.78 | 83437.44 | 85476.45 | 89352.36 |
| **Latency** | 517µs    | 577µs    | 805µs    | 931µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18203.93 | 1941.65 | 23013.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16502.26 | 17418.75 | 18625.24 | 19435.81 | 19989.70 | 20281.23 | 20751.11 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6224.01  | 958.94 | 7896.13 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4936.67 | 5894.19 | 6388.28 | 6647.65 | 7567.61 | 7737.99 | 7853.05 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 11ms    | 14ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54960.38 | 8119.66 | 84905.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49468.84 | 50319.63 | 51331.67 | 57410.04 | 67409.28 | 74077.52 | 79228.94 |
| **Latency** | 598µs    | 829µs    | 950µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16807.99 | 1980.23 | 30048.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15527.37 | 15933.84 | 17280.96 | 17889.44 | 18176.35 | 18317.36 | 18916.56 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50662.08 | 3882.63 | 81298.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48756.79 | 49520.23 | 50271.57 | 51022.92 | 52034.77 | 55501.13 | 68758.23 |
| **Latency** | 854µs    | 919µs    | 997µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53518.21 | 6562.86 | 80306.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48804.79 | 49715.08 | 50806.10 | 56302.82 | 62632.19 | 66505.47 | 74117.09 |
| **Latency** | 625µs    | 866µs    | 968µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43771.23 | 3446.54 | 51131.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40739.14 | 42491.31 | 44687.93 | 45692.14 | 46364.84 | 46810.59 | 47902.92 |
| **Latency** | 850µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 80200.51 | 16117.36 | 101146.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 57322.77 | 62564.88 | 85244.35 | 94606.52 | 97831.96 | 99086.61 | 100557.04 |
| **Latency** | 368µs    | 456µs    | 568µs    | 743µs    | 945µs    | 1ms      | 1ms       |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48490.72 | 3175.22 | 66281.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46286.02 | 47023.69 | 47924.87 | 49689.85 | 51959.76 | 53966.09 | 57395.02 |
| **Latency** | 875µs    | 961µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17794.47 | 1597.84 | 25956.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16982.24 | 17513.89 | 18055.42 | 18440.18 | 18804.52 | 18956.09 | 19789.34 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31906.06 | 2973.43 | 38750.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31188.02 | 32162.06 | 32520.45 | 32976.28 | 33242.01 | 33386.04 | 33807.78 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15548.49 | 2227.33 | 20654.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13400.02 | 15376.85 | 15930.35 | 16476.77 | 17280.53 | 18488.67 | 19936.51 |
| **Latency** | 1ms      | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40775.52 | 2172.20 | 45703.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38715.97 | 40158.10 | 41180.13 | 41899.62 | 42291.55 | 42786.13 | 44048.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42309.24 | 3368.82 | 48535.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39808.49 | 41180.37 | 43003.47 | 44100.20 | 44949.19 | 45596.69 | 46742.84 |
| **Latency** | 874µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7195.72  | 1329.71 | 10066.87 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5571.03 | 6526.16 | 7389.58 | 7902.09 | 8962.28 | 9122.78 | 9575.62 |
| **Latency** | 5ms     | 6ms     | 6ms     | 7ms     | 8ms     | 9ms     | 12ms    |

---

<p align="center">Generated 2024-06-30T12:22:08.237Z</p>
