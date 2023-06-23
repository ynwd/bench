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
| Hyper Express                                                                        | 42698.38 | 17766.19 | 69355.65  | 100%     |
| Bun                                                                                  | 42226.04 | 12895.34 | 67255.63  | 99%      |
| Deno                                                                                 | 42117.78 | 12824.51 | 58432.70  | 99%      |
| Fast                                                                                 | 39863.09 | 10409.87 | 51316.53  | 93%      |
| Hono                                                                                 | 39648.44 | 9499.33  | 49035.92  | 93%      |
| Megalo                                                                               | 36957.16 | 6438.37  | 45075.26  | 87%      |
| Fastro                                                                               | 36895.19 | 5562.39  | 43551.80  | 86%      |
| Reno                                                                                 | 31061.47 | 4618.41  | 36784.22  | 73%      |
| http                                                                                 | 29258.67 | 7293.22  | 68739.64  | 69%      |
| Alosaur                                                                              | 23288.48 | 6561.91  | 158730.16 | 55%      |
| Aqua                                                                                 | 16865.29 | 3248.97  | 23752.01  | 39%      |
| Node                                                                                 | 15414.66 | 2771.39  | 18600.25  | 36%      |
| Fastify                                                                              | 14595.62 | 2834.00  | 17694.13  | 34%      |
| Oak                                                                                  | 12429.13 | 2549.08  | 23263.32  | 29%      |
| Dinatra                                                                              | 10166.89 | 2196.89  | 15713.13  | 24%      |
| Abc                                                                                  | 8994.08  | 1521.07  | 11672.05  | 21%      |
| Opine                                                                                | 5929.74  | 1034.86  | 13208.76  | 14%      |
| Express                                                                              | 3752.50  | 875.24   | 13613.96  | 9%       |
| Acorn                                                                                | 3721.26  | 4656.56  | 66351.82  | 9%       |
| Servest                                                                              | 3412.12  | 981.35   | 5182.03   | 8%       |
| Router                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-a6df91e2-f6e1-49ef-ab84-dd32c231ae65) |          |          |           |          |

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
| 8994.08  | 1521.07 | 11672.05 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7036.51 | 8338.60 | 9457.79 | 9900.39 | 10312.78 | 10764.06 | 11292.53 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms     | 6ms      | 7ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3721.26  | 4656.56 | 66351.82 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 97.61 | 2072.99 | 2772.56 | 4125.66 | 6404.39 | 11835.71 | 13773.54 |
| **Latency** | 8ms   | 10ms    | 17ms    | 24ms    | 28ms    | 30ms     | 33ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 23288.48 | 6561.91 | 158730.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18071.43 | 21620.31 | 24736.59 | 26057.24 | 27017.55 | 27616.38 | 28848.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16865.29 | 3248.97 | 23752.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13623.28 | 15995.79 | 17527.59 | 18851.62 | 19645.57 | 20109.95 | 20687.72 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42226.04 | 12895.34 | 67255.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26506.88 | 32008.63 | 40758.27 | 54609.80 | 59932.93 | 61346.59 | 63097.14 |
| **Latency** | 608µs    | 766µs    | 947µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42117.78 | 12824.51 | 58432.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19610.39 | 35464.27 | 47317.96 | 51603.08 | 53994.80 | 55013.18 | 56632.82 |
| **Latency** | 812µs    | 877µs    | 975µs    | 1ms      | 1ms      | 2ms      | 4ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10166.89 | 2196.89 | 15713.13 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7369.87 | 9280.72 | 10881.90 | 11520.27 | 12038.53 | 12331.93 | 12986.09 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 6ms      | 7ms      | 12ms     |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 3752.50  | 875.24 | 13613.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2651.76 | 3134.35 | 4107.72 | 4335.12 | 4471.72 | 4544.86 | 4665.84 |
| **Latency** | 11ms    | 11ms    | 11ms    | 14ms    | 17ms    | 18ms    | 24ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39863.09 | 10409.87 | 51316.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19114.32 | 38227.50 | 44318.75 | 46546.98 | 48003.33 | 48704.35 | 50108.49 |
| **Latency** | 948µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14595.62 | 2834.00 | 17694.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12155.42 | 14580.62 | 15374.56 | 16027.24 | 16523.45 | 16762.01 | 17189.38 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 5ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36895.19 | 5562.39 | 43551.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31534.64 | 36150.88 | 38223.06 | 40163.84 | 41294.13 | 41903.33 | 42622.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39648.44 | 9499.33 | 49035.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19545.14 | 39464.99 | 43427.77 | 45500.43 | 46662.97 | 47266.62 | 48226.51 |
| **Latency** | 979µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29258.67 | 7293.22 | 68739.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17494.01 | 27531.59 | 32036.11 | 33793.59 | 34976.49 | 35591.13 | 36350.35 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42698.38 | 17766.19 | 69355.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15926.27 | 26027.84 | 46444.28 | 58843.51 | 63546.90 | 65314.80 | 67648.67 |
| **Latency** | 577µs    | 719µs    | 870µs    | 1ms      | 2ms      | 3ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36957.16 | 6438.37 | 45075.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27653.91 | 36341.91 | 38853.46 | 40813.04 | 42088.54 | 42702.96 | 43540.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15414.66 | 2771.39 | 18600.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13604.75 | 15360.98 | 16203.21 | 16811.12 | 17214.62 | 17437.31 | 17831.02 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 8ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12429.13 | 2549.08 | 23263.32 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9211.34 | 12099.04 | 13102.31 | 13884.27 | 14328.07 | 14542.13 | 15576.53 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      | 9ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5929.74  | 1034.86 | 13208.76 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5012.28 | 5656.30 | 6076.05 | 6433.12 | 6694.33 | 7015.16 | 7892.44 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 9ms     | 11ms    | 16ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31061.47 | 4618.41 | 36784.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27809.84 | 30484.51 | 32101.11 | 33465.31 | 34483.09 | 34929.58 | 35851.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Servest](#servest)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 3412.12  | 981.35 | 5182.03 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2039.61 | 3122.70 | 3715.90 | 4009.74 | 4309.69 | 4472.64 | 4738.32 |
| **Latency** | 12ms    | 12ms    | 13ms    | 16ms    | 20ms    | 24ms    | 28ms    |

---

<p align="center">Generated 2023-06-23T12:23:09.859Z</p>
