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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Deno                                                                                 | 72404.30 | 15433.22 | 81619.25 | 100%     |
| Hyper Express                                                                        | 65765.37 | 17730.75 | 84233.24 | 91%      |
| Bun                                                                                  | 65243.09 | 12165.18 | 87968.25 | 90%      |
| Fast                                                                                 | 63036.37 | 13434.04 | 70880.48 | 87%      |
| Hono                                                                                 | 62130.78 | 12992.76 | 69691.81 | 86%      |
| Fastro                                                                               | 58508.73 | 9868.04  | 66203.72 | 81%      |
| Megalo                                                                               | 58493.80 | 10140.48 | 64458.99 | 81%      |
| Reno                                                                                 | 49235.58 | 6374.46  | 52443.77 | 68%      |
| Node                                                                                 | 41670.08 | 7421.30  | 45721.30 | 58%      |
| http                                                                                 | 39496.28 | 9197.24  | 47986.31 | 55%      |
| Fastify                                                                              | 36205.54 | 7408.81  | 40013.45 | 50%      |
| Alosaur                                                                              | 31935.33 | 6841.52  | 43614.26 | 44%      |
| Router                                                                               | 28055.63 | 4757.23  | 34085.08 | 39%      |
| Oak                                                                                  | 23063.79 | 3953.25  | 27948.65 | 32%      |
| Aqua                                                                                 | 22649.20 | 3459.80  | 26314.85 | 31%      |
| Dinatra                                                                              | 20616.57 | 3658.58  | 29212.68 | 28%      |
| Abc                                                                                  | 15420.92 | 4010.92  | 21918.94 | 21%      |
| Opine                                                                                | 9868.75  | 1486.00  | 12166.62 | 14%      |
| Express                                                                              | 8025.85  | 1356.49  | 10838.75 | 11%      |
| Servest                                                                              | 6330.74  | 1965.00  | 9852.22  | 9%       |
| Acorn                                                                                | 3485.45  | 4015.48  | 74597.27 | 5%       |
| ![Chart](https://quickchart.io/chart/render/sf-cb69f333-7788-47de-8930-8481fa083760) |          |          |          |          |

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
| 15420.92 | 4010.92 | 21918.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10220.82 | 10933.64 | 16899.78 | 18428.45 | 19967.74 | 20982.34 | 21184.95 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3485.45  | 4015.48 | 74597.27 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1808.18 | 2188.35 | 2720.44 | 3819.73 | 5513.44 | 9158.44 | 10889.50 |
| **Latency** | 5ms     | 7ms     | 15ms    | 21ms    | 25ms    | 27ms    | 29ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31935.33 | 6841.52 | 43614.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25932.13 | 29654.20 | 35016.27 | 35831.42 | 36235.41 | 36583.32 | 37296.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22649.20 | 3459.80 | 26314.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21568.28 | 22321.11 | 24008.54 | 24418.80 | 24575.96 | 24708.57 | 25674.50 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65243.09 | 12165.18 | 87968.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51420.86 | 55021.22 | 61542.20 | 78026.97 | 79936.44 | 81033.69 | 83803.83 |
| **Latency** | 456µs    | 580µs    | 694µs    | 901µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 72404.30 | 15433.22 | 81619.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38144.85 | 77138.03 | 79242.15 | 79733.15 | 80157.57 | 80427.00 | 80865.19 |
| **Latency** | 561µs    | 609µs    | 626µs    | 653µs    | 723µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20616.57 | 3658.58 | 29212.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18500.11 | 19403.80 | 21001.81 | 22949.90 | 23900.68 | 24938.82 | 25269.15 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8025.85  | 1356.49 | 10838.75 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5845.81 | 8223.16 | 8661.46 | 8757.86 | 8803.66 | 8823.61 | 8859.68 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 9ms     | 12ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63036.37 | 13434.04 | 70880.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31676.85 | 67226.64 | 69065.34 | 69813.00 | 70115.85 | 70235.02 | 70522.30 |
| **Latency** | 671µs    | 692µs    | 713µs    | 739µs    | 859µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36205.54 | 7408.81 | 40013.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28051.24 | 38037.13 | 38613.75 | 39284.71 | 39513.29 | 39605.79 | 39801.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58508.73 | 9868.04 | 66203.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40910.48 | 61508.01 | 62337.89 | 62847.53 | 63425.13 | 63753.50 | 64140.92 |
| **Latency** | 755µs    | 774µs    | 792µs    | 812µs    | 945µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62130.78 | 12992.76 | 69691.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32138.90 | 66524.35 | 67925.40 | 68411.12 | 69017.75 | 69207.34 | 69515.02 |
| **Latency** | 686µs    | 705µs    | 723µs    | 749µs    | 872µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39496.28 | 9197.24 | 47986.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23727.24 | 38465.64 | 44496.74 | 45415.55 | 45975.66 | 46317.84 | 46780.95 |
| **Latency** | 946µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65765.37 | 17730.75 | 84233.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40713.69 | 42923.44 | 77429.90 | 80712.56 | 81712.76 | 82225.49 | 83115.40 |
| **Latency** | 465µs    | 545µs    | 677µs    | 793µs    | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58493.80 | 10140.48 | 64458.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40525.05 | 61457.01 | 62419.24 | 63258.61 | 63614.78 | 63802.44 | 64036.85 |
| **Latency** | 756µs    | 774µs    | 790µs    | 808µs    | 953µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41670.08 | 7421.30 | 45721.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39157.69 | 43152.52 | 43860.83 | 44456.77 | 44960.56 | 45146.09 | 45444.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23063.79 | 3953.25 | 27948.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21621.55 | 22606.36 | 24518.50 | 25028.33 | 25189.12 | 25471.24 | 26345.85 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9868.75  | 1486.00 | 12166.62 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9301.73 | 9803.88 | 10403.29 | 10520.37 | 10588.17 | 10632.22 | 11331.65 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 5ms      | 6ms      | 9ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49235.58 | 6374.46 | 52443.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49691.22 | 50347.11 | 50753.07 | 51207.97 | 51690.89 | 51879.68 | 52098.30 |
| **Latency** | 944µs    | 961µs    | 971µs    | 986µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28055.63 | 4757.23 | 34085.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24226.79 | 27303.44 | 29907.66 | 30578.37 | 31219.83 | 31580.45 | 32037.29 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6330.74  | 1965.00 | 9852.22 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4908.37 | 5458.22 | 7055.36 | 7484.28 | 8018.52 | 8115.04 | 9624.55 |
| **Latency** | 6ms     | 6ms     | 6ms     | 8ms     | 9ms     | 15ms    | 16ms    |

---

<p align="center">Generated 2023-06-01T01:04:09.721Z</p>
