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
| Bun                                                                                  | 68678.92 | 11934.12 | 90507.75 | 100%     |
| Hyper Express                                                                        | 68416.00 | 17609.09 | 85330.85 | 100%     |
| Deno                                                                                 | 48294.11 | 10795.85 | 57033.25 | 70%      |
| Fast                                                                                 | 44162.51 | 7988.53  | 49676.91 | 64%      |
| Hono                                                                                 | 43841.45 | 8474.43  | 50800.10 | 64%      |
| http                                                                                 | 43619.89 | 8421.47  | 51876.81 | 64%      |
| Fastro                                                                               | 42087.38 | 8013.76  | 47650.06 | 61%      |
| Node                                                                                 | 41883.82 | 7099.33  | 46052.85 | 61%      |
| Megalo                                                                               | 41196.97 | 8576.04  | 48928.07 | 60%      |
| Reno                                                                                 | 38057.70 | 7023.85  | 52790.75 | 55%      |
| Fastify                                                                              | 36825.78 | 6245.28  | 39744.68 | 54%      |
| Alosaur                                                                              | 34081.64 | 5793.81  | 46896.88 | 50%      |
| Router                                                                               | 28980.27 | 5192.86  | 33473.04 | 42%      |
| Oak                                                                                  | 24372.39 | 3776.49  | 30223.17 | 35%      |
| Aqua                                                                                 | 23768.02 | 3255.34  | 27241.64 | 35%      |
| Dinatra                                                                              | 21295.52 | 4380.40  | 44782.44 | 31%      |
| Abc                                                                                  | 18711.74 | 3122.96  | 23041.09 | 27%      |
| Opine                                                                                | 9794.44  | 1091.02  | 12102.33 | 14%      |
| Express                                                                              | 7668.46  | 1648.20  | 9091.52  | 11%      |
| Servest                                                                              | 6333.46  | 1717.06  | 10112.01 | 9%       |
| Acorn                                                                                | 4589.42  | 5892.70  | 99447.51 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-f0174226-112d-4598-83e3-698e597967ef) |          |          |          |          |

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
| 18711.74 | 3122.96 | 23041.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15822.68 | 17767.57 | 20069.91 | 20406.77 | 20815.27 | 21417.63 | 21996.85 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4589.42  | 5892.70 | 99447.51 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2136.96 | 2716.50 | 3347.93 | 4775.88 | 9521.97 | 11175.71 | 13855.55 |
| **Latency** | 3ms     | 5ms     | 11ms    | 16ms    | 20ms    | 21ms     | 22ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34081.64 | 5793.81 | 46896.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27119.53 | 35152.62 | 36320.23 | 36921.37 | 37310.70 | 37587.68 | 38023.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23768.02 | 3255.34 | 27241.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22202.14 | 23369.95 | 24510.12 | 25234.14 | 26185.57 | 26366.32 | 26662.41 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68678.92 | 11934.12 | 90507.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53850.37 | 58609.12 | 69026.87 | 80145.76 | 81921.90 | 82913.04 | 85747.37 |
| **Latency** | 445µs    | 560µs    | 682µs    | 812µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48294.11 | 10795.85 | 57033.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30038.65 | 43771.00 | 53725.61 | 54335.65 | 54699.91 | 54867.16 | 55225.18 |
| **Latency** | 812µs    | 897µs    | 952µs    | 982µs    | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21295.52 | 4380.40 | 44782.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17805.63 | 20042.01 | 21641.50 | 24103.99 | 25043.08 | 25247.82 | 26229.01 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7668.46  | 1648.20 | 9091.52 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5490.97 | 6125.71 | 8650.92 | 8841.26 | 8954.41 | 9001.23 | 9032.67 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 9ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44162.51 | 7988.53 | 49676.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36648.29 | 43246.55 | 47772.15 | 48105.62 | 48571.42 | 48817.40 | 49216.12 |
| **Latency** | 896µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36825.78 | 6245.28 | 39744.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36827.67 | 37864.25 | 38410.63 | 38914.66 | 39204.45 | 39327.19 | 39509.61 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42087.38 | 8013.76 | 47650.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35529.65 | 41357.01 | 45365.00 | 46047.88 | 46348.11 | 46492.70 | 46816.02 |
| **Latency** | 935µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43841.45 | 8474.43 | 50800.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32620.10 | 41726.00 | 47803.64 | 48282.47 | 48835.04 | 49029.84 | 49371.48 |
| **Latency** | 895µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43619.89 | 8421.47 | 51876.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36565.31 | 43501.14 | 47372.29 | 47849.61 | 48146.52 | 48338.11 | 48614.49 |
| **Latency** | 905µs    | 981µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68416.00 | 17609.09 | 85330.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41532.67 | 44273.79 | 79844.44 | 81975.20 | 82902.52 | 83229.00 | 83807.26 |
| **Latency** | 462µs    | 527µs    | 667µs    | 706µs    | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41196.97 | 8576.04 | 48928.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28316.36 | 38409.36 | 45402.62 | 45909.08 | 46187.15 | 46343.00 | 46738.17 |
| **Latency** | 933µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41883.82 | 7099.33 | 46052.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39487.57 | 42949.29 | 43903.49 | 44501.23 | 45009.79 | 45253.74 | 45633.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24372.39 | 3776.49 | 30223.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22104.00 | 23858.84 | 25773.67 | 26015.18 | 26227.09 | 26458.93 | 27365.96 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9794.44  | 1091.02 | 12102.33 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9301.63 | 9576.19 | 10128.60 | 10201.50 | 10246.21 | 10276.77 | 10987.30 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38057.70 | 7023.85 | 52790.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32413.15 | 39452.02 | 40863.19 | 41147.09 | 41403.87 | 41789.22 | 42293.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28980.27 | 5192.86 | 33473.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20563.45 | 27611.76 | 31533.81 | 31767.10 | 31939.39 | 32117.04 | 32606.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6333.46  | 1717.06 | 10112.01 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4411.10 | 6125.58 | 6920.87 | 7321.28 | 7578.10 | 7825.48 | 9066.91 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 10ms    | 12ms    | 18ms    |

---

<p align="center">Generated 2023-04-25T06:17:02.201Z</p>
