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
| Deno                                                                                 | 66910.23 | 14576.69 | 76375.26  | 100%     |
| Hyper Express                                                                        | 59580.64 | 16585.05 | 75827.98  | 89%      |
| Bun                                                                                  | 58932.05 | 10913.18 | 81589.71  | 88%      |
| Hono                                                                                 | 57171.56 | 12288.25 | 65117.43  | 85%      |
| Fast                                                                                 | 56976.38 | 12894.22 | 65304.43  | 85%      |
| Fastro                                                                               | 52763.40 | 10102.68 | 60610.19  | 79%      |
| Megalo                                                                               | 52488.43 | 11239.28 | 60176.05  | 78%      |
| Reno                                                                                 | 44572.11 | 6951.04  | 49476.86  | 67%      |
| http                                                                                 | 36305.51 | 8396.33  | 46361.04  | 54%      |
| Node                                                                                 | 35014.85 | 5444.14  | 38393.60  | 52%      |
| Fastify                                                                              | 31269.51 | 5161.15  | 33922.77  | 47%      |
| Alosaur                                                                              | 29228.10 | 6413.27  | 37061.94  | 44%      |
| Router                                                                               | 25736.48 | 4363.92  | 30678.78  | 38%      |
| Aqua                                                                                 | 21750.66 | 3482.30  | 26839.46  | 33%      |
| Oak                                                                                  | 20076.55 | 5531.50  | 144927.54 | 30%      |
| Dinatra                                                                              | 17595.79 | 3839.06  | 36742.66  | 26%      |
| Abc                                                                                  | 15922.66 | 2289.73  | 21325.75  | 24%      |
| Opine                                                                                | 8947.45  | 1758.04  | 33968.72  | 13%      |
| Express                                                                              | 6303.02  | 1497.70  | 11623.42  | 9%       |
| Servest                                                                              | 5489.95  | 1689.71  | 9005.91   | 8%       |
| Acorn                                                                                | 3974.23  | 5450.52  | 111607.14 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-8700f520-087d-419a-b457-4f6b357bf768) |          |          |           |          |

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
| 15922.66 | 2289.73 | 21325.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14348.56 | 15230.68 | 15874.77 | 17374.27 | 18341.90 | 18610.12 | 18893.55 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 3974.23  | 5450.52 | 111607.14 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 98.15 | 2051.78 | 2649.69 | 4106.94 | 8004.19 | 9632.40 | 22128.39 |
| **Latency** | 5ms   | 7ms     | 17ms    | 23ms    | 26ms    | 28ms    | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29228.10 | 6413.27 | 37061.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23110.71 | 26312.94 | 32016.68 | 32933.24 | 33426.54 | 33677.12 | 34466.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21750.66 | 3482.30 | 26839.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19495.63 | 21147.63 | 22611.81 | 23558.85 | 24217.83 | 24560.45 | 25044.71 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58932.05 | 10913.18 | 81589.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47601.39 | 50823.49 | 55020.28 | 70633.35 | 73886.84 | 75002.41 | 78100.92 |
| **Latency** | 495µs    | 621µs    | 761µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66910.23 | 14576.69 | 76375.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30392.83 | 70278.33 | 73309.13 | 74328.08 | 74845.79 | 75183.76 | 75806.16 |
| **Latency** | 588µs    | 640µs    | 679µs    | 722µs    | 796µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17595.79 | 3839.06 | 36742.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14220.30 | 16767.85 | 18624.91 | 19549.02 | 20093.39 | 20432.44 | 22942.85 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6303.02  | 1497.70 | 11623.42 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4167.21 | 5398.63 | 7062.73 | 7213.67 | 7295.19 | 7340.43 | 7493.76 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 11ms    | 12ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56976.38 | 12894.22 | 65304.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27520.58 | 59859.07 | 63187.06 | 63920.38 | 64324.94 | 64517.27 | 64804.64 |
| **Latency** | 726µs    | 750µs    | 774µs    | 813µs    | 963µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31269.51 | 5161.15 | 33922.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30422.79 | 32013.62 | 32683.11 | 33201.26 | 33400.47 | 33513.58 | 33757.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52763.40 | 10102.68 | 60610.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34947.46 | 55124.14 | 57050.66 | 57907.98 | 58651.49 | 59111.10 | 60122.71 |
| **Latency** | 817µs    | 840µs    | 862µs    | 888µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57171.56 | 12288.25 | 65117.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32214.08 | 60816.59 | 62531.13 | 63328.30 | 63912.60 | 64105.56 | 64474.53 |
| **Latency** | 737µs    | 758µs    | 781µs    | 815µs    | 952µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36305.51 | 8396.33 | 46361.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23669.99 | 34211.09 | 40725.95 | 41824.12 | 42341.31 | 42575.78 | 43008.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59580.64 | 16585.05 | 75827.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34743.07 | 39325.09 | 69429.01 | 72818.04 | 73889.98 | 74409.13 | 75108.10 |
| **Latency** | 514µs    | 590µs    | 754µs    | 800µs    | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52488.43 | 11239.28 | 60176.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29106.35 | 55018.04 | 57417.69 | 58154.57 | 58732.62 | 59028.22 | 59611.80 |
| **Latency** | 811µs    | 832µs    | 856µs    | 884µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35014.85 | 5444.14 | 38393.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34136.45 | 35771.83 | 36456.43 | 36952.76 | 37311.49 | 37498.54 | 37802.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 20076.55 | 5531.50 | 144927.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17343.62 | 19266.43 | 21062.42 | 22017.85 | 22486.11 | 22912.32 | 25038.06 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8947.45  | 1758.04 | 33968.72 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 7516.64 | 8663.48 | 9251.43 | 9657.11 | 9861.93 | 10055.76 | 11812.52 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 7ms      | 11ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44572.11 | 6951.04 | 49476.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39132.97 | 46123.51 | 46814.41 | 47335.99 | 47856.87 | 48078.26 | 48312.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25736.48 | 4363.92 | 30678.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23009.96 | 24390.45 | 27628.97 | 28091.26 | 28358.94 | 28616.53 | 29445.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5489.95  | 1689.71 | 9005.91 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3754.24 | 4656.58 | 6065.81 | 6571.80 | 6836.71 | 7128.92 | 8048.57 |
| **Latency** | 7ms     | 7ms     | 7ms     | 10ms    | 11ms    | 18ms    | 20ms    |

---

<p align="center">Generated 2023-05-08T18:16:26.929Z</p>
