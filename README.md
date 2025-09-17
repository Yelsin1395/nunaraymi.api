<h1 align="center">Nuna Raymi api</h1>

<p align="center">
  Api in typescript, and use architecture hexagonal
</p>

<!-- <p align="center">
    <a href="https://github.com/AlbertHernandez/hexagonal-architecture-typescript-service-skeleton/actions/workflows/nodejs.yml?branch=main"><img src="https://github.com/AlbertHernandez/hexagonal-architecture-typescript-service-skeleton/actions/workflows/nodejs.yml/badge.svg?branch=main" alt="nodejs"/></a>
</p> -->

## Table of Contents

* [Installing](#installing)
* [Building](#building)
* [Testing](#testing)
* [Linting](#linting)

## Installing

```bash
nvm install 16.0.0
nvm use
```

## Building

```bash
npm run build
```

## Testing

### Jest with Testing Library

```bash
npm run test
```

## Linting

Run the linter

```bash
npm run lint
```

Fix lint issues automatically

```bash
npm run lint:fix
```

Environments variables

```env
APP_SCOPE = "private"
DB_USER_MONGO="broly"
DB_KEY_MONGO="qSSLBZnh9WXDTi7b"
DB_HOST_MONGO="nunaraymi-stg.oxlyfks.mongodb.net"
DB_CONTAINER_NAME_MONGO="default"
LOGTAIL_SOUCE_TOKEN="4f6S6mrwz7m4pjvEVvDfCESV"
LOG_LEVEL="debug"
MEMORY_CACHE_KEY="53c6e74b1bddf4cebbdd747fc20447187202465b84ca03d90a55f69ca2501258"
JWT_SECRET="4b88f59b2ab4df59d3e07f8f31341740bdbc49151c1dace14c997a1f3210da55"
```