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
| Deno                                                                                 | 65400.84 | 14499.97 | 75208.39  | 100%     |
| Bun                                                                                  | 61783.89 | 11564.07 | 80570.41  | 94%      |
| Hyper Express                                                                        | 56926.49 | 17052.26 | 77164.42  | 87%      |
| Hono                                                                                 | 56530.81 | 12189.79 | 64540.72  | 86%      |
| Fast                                                                                 | 54063.44 | 14207.46 | 64880.43  | 83%      |
| Fastro                                                                               | 52170.56 | 9646.46  | 58588.80  | 80%      |
| Megalo                                                                               | 52161.70 | 10317.65 | 59392.73  | 80%      |
| Reno                                                                                 | 45421.84 | 5318.64  | 48601.66  | 69%      |
| http                                                                                 | 37325.70 | 8278.45  | 44577.33  | 57%      |
| Node                                                                                 | 35040.59 | 6747.45  | 39042.99  | 54%      |
| Alosaur                                                                              | 29371.71 | 6558.15  | 59594.28  | 45%      |
| Router                                                                               | 26023.46 | 4767.97  | 32131.11  | 40%      |
| Fastify                                                                              | 24879.28 | 10539.17 | 34623.61  | 38%      |
| Aqua                                                                                 | 22548.78 | 3198.78  | 25792.80  | 34%      |
| Oak                                                                                  | 20457.70 | 4245.26  | 76601.67  | 31%      |
| Dinatra                                                                              | 18051.73 | 3590.61  | 37480.98  | 28%      |
| Abc                                                                                  | 16165.65 | 2215.64  | 20491.66  | 25%      |
| Opine                                                                                | 9099.41  | 4608.74  | 128331.69 | 14%      |
| Express                                                                              | 6671.12  | 1297.79  | 10093.57  | 10%      |
| Servest                                                                              | 5509.47  | 1662.61  | 8250.76   | 8%       |
| Acorn                                                                                | 3756.79  | 6012.23  | 85784.31  | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-051ef794-e1fe-4cb4-b233-6df4352af379) |          |          |           |          |

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
| 16165.65 | 2215.64 | 20491.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14900.34 | 15408.05 | 16025.57 | 17682.51 | 18732.65 | 18856.06 | 19156.36 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3756.79  | 6012.23 | 85784.31 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 94.90 | 2015.73 | 2739.93 | 4121.25 | 6822.83 | 8321.24 | 27979.54 |
| **Latency** | 5ms   | 7ms     | 17ms    | 22ms    | 26ms    | 28ms    | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29371.71 | 6558.15 | 59594.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23551.63 | 26017.30 | 32270.01 | 33152.56 | 33515.59 | 33708.79 | 34341.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22548.78 | 3198.78 | 25792.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20786.87 | 21788.94 | 23849.85 | 24335.43 | 24556.71 | 24823.50 | 25333.28 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61783.89 | 11564.07 | 80570.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47110.88 | 51519.05 | 67150.42 | 72141.72 | 73542.72 | 74301.46 | 75852.53 |
| **Latency** | 489µs    | 613µs    | 756µs    | 886µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65400.84 | 14499.97 | 75208.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31390.05 | 68540.72 | 72028.94 | 73234.43 | 73879.05 | 74161.56 | 74725.41 |
| **Latency** | 579µs    | 643µs    | 692µs    | 741µs    | 835µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18051.73 | 3590.61 | 37480.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15424.83 | 16542.68 | 19525.78 | 20105.35 | 20346.92 | 20835.96 | 22677.91 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6671.12  | 1297.79 | 10093.57 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4502.61 | 6853.67 | 7249.52 | 7365.11 | 7439.88 | 7472.79 | 7525.87 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 9ms     | 11ms    | 15ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54063.44 | 14207.46 | 64880.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26709.63 | 52408.41 | 61677.12 | 62927.10 | 63569.97 | 63810.43 | 64262.37 |
| **Latency** | 742µs    | 764µs    | 788µs    | 830µs    | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 24879.28 | 10539.17 | 34623.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11870.18 | 12342.98 | 32484.15 | 33731.44 | 34057.63 | 34190.33 | 34419.69 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      | 4ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52170.56 | 9646.46 | 58588.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34215.32 | 54760.14 | 56150.00 | 56793.17 | 57421.27 | 57717.92 | 58071.45 |
| **Latency** | 834µs    | 856µs    | 877µs    | 902µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56530.81 | 12189.79 | 64540.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27782.84 | 59798.57 | 62205.18 | 63029.90 | 63522.91 | 63755.51 | 64213.70 |
| **Latency** | 730µs    | 759µs    | 786µs    | 833µs    | 978µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37325.70 | 8278.45 | 44577.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25216.16 | 34769.42 | 41598.21 | 42336.71 | 42708.82 | 42934.67 | 43329.43 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56926.49 | 17052.26 | 77164.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34155.70 | 36671.18 | 66256.10 | 72729.88 | 73922.41 | 74419.82 | 75611.17 |
| **Latency** | 515µs    | 607µs    | 753µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52161.70 | 10317.65 | 59392.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31266.63 | 54735.09 | 56833.59 | 57240.12 | 57714.57 | 58058.70 | 58755.66 |
| **Latency** | 823µs    | 844µs    | 866µs    | 892µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35040.59 | 6747.45 | 39042.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33150.43 | 36226.85 | 36895.23 | 37837.88 | 38209.22 | 38401.81 | 38664.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20457.70 | 4245.26 | 76601.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18330.20 | 19370.86 | 21815.93 | 22383.29 | 22767.15 | 23125.00 | 23791.38 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 9099.41  | 4608.74 | 128331.69 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 7702.33 | 8628.06 | 9296.97 | 9675.16 | 9827.58 | 10105.25 | 11275.28 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 6ms      | 11ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45421.84 | 5318.64 | 48601.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45164.65 | 46142.97 | 46529.84 | 47189.72 | 47628.17 | 47916.94 | 48164.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26023.46 | 4767.97 | 32131.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20323.64 | 24602.83 | 28027.47 | 28685.92 | 29479.86 | 29793.15 | 30213.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5509.47  | 1662.61 | 8250.76 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4013.57 | 4609.37 | 6069.50 | 6549.40 | 6807.09 | 7286.15 | 7938.16 |
| **Latency** | 7ms     | 7ms     | 8ms     | 10ms    | 11ms    | 18ms    | 19ms    |

---

<p align="center">Generated 2023-06-03T18:14:47.174Z</p>
