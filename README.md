<!-- markdownlint-disable MD033 MD041 -->
<div align="center">
  <h1><a href="https://conductor.is">Conductor</a></h1>
  <h3>QuickBooks Desktop API for Node.js, TypeScript, and REST</h3>
  <a href="https://npmjs.com/package/conductor-node"><img src="https://img.shields.io/npm/dm/conductor-node.svg?logo=npm" alt="NPM download count"></a>
  <a href="https://npmjs.org/package/conductor-node"><img src="https://img.shields.io/npm/v/conductor-node.svg?logo=npm" alt="Package version"></a>
  <img src="https://img.shields.io/badge/coverage-100%25-brightgreen" alt="Code coverage">
  <img src="https://img.shields.io/badge/CI-passing-brightgreen?logo=github" alt="CI status">
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/conductor-node.svg?color=blue&logo=github" alt="License" /></a>
  <br />
  <br />
  <a href="https://docs.conductor.is/overview/quickstart">Quickstart</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://conductor.is">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://docs.conductor.is">Docs</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://docs.conductor.is/qbd-objects">Examples</a>
  <br />
  <hr />
</div>

## What is Conductor?

Conductor is a TypeScript-first Node.js API for **QuickBooks Desktop** (also known as QuickBooks Enterprise). In just a few lines, get real-time access to fetch, create, or update [_any_ QuickBooks Desktop object type](https://docs.conductor.is/qbd/api#supported-object-types) and receive a fully-typed response. Check out [the documentation](https://docs.conductor.is) to get started.

We also offer a [REST API](https://docs.conductor.is/usage/rest).

Conductor, the company, is building a data integration platform for vertical SaaS companies, starting with QuickBooks Desktop. Our team has spent over a decade building companies, scaling vast software systems, and obsessing over quality.

<!-- markdownlint-disable MD033 -->
<div align="center">
  <a href="https://docs.conductor.is"><img src="https://user-images.githubusercontent.com/170023/213273732-83dd6881-0b36-4787-820b-bd55cdc8444f.jpg" alt="QuickBooks Desktop autocomplete" width="600" /></a>
</div>

## Documentation

1. [Get Started](https://docs.conductor.is/overview/get-started)
2. [Quickstart](https://docs.conductor.is/overview/quickstart)
3. [QuickBooks Desktop APIs](https://docs.conductor.is/qbd/api)
4. [API Reference](https://docs.conductor.is/apis)
5. [Error Handling](https://docs.conductor.is/usage/error-handling)

## Requirements

1. A Conductor API key pair: one secret key, one publishable key. Please [complete this form](https://forms.gle/1LTGXy2Hcyzw6qWa6) to join the beta.
2. Node.js v16 or later.

## Installation

```sh
npm install conductor-node
# or
yarn add conductor-node
```

## Usage

The full API documentation is available [here](https://docs.conductor.is) along with many code examples. The code below is a quickstart example.

```ts
import Conductor from "conductor-node";

const conductor = new Conductor("{{YOUR_SECRET_KEY}}");

async function main() {
  // 1. Create a new EndUser.
  const endUser = await conductor.endUsers.create({
    sourceId: "{{UNIQUE_ID_FROM_YOUR_DB}}",
    email: "{{END_USER_EMAIL}}",
    name: "{{END_USER_NAME}}",
  });
  console.log("Save this EndUser ID to auth future requests:", endUser.id);

  // 2. Create an AuthSession to establish the QuickBooks Desktop connection.
  const authSession = await conductor.authSessions.create({
    publishableKey: "{{YOUR_PUBLISHABLE_KEY}}",
    endUserId: endUser.id,
  });
  console.log("Complete the QuickBooks Desktop auth:", authSession.authFlowUrl);

  // 3. Get a list of all Customers from QuickBooks Desktop for this EndUser.
  const qbdCustomers = await conductor.qbd.customers.query(endUser.id);
  console.log("QuickBooks Desktop customers:", qbdCustomers);
}

main();
```

## More Documentation

Please see our [full documentation site](https://docs.conductor.is) for more docs, guides, and code examples.
