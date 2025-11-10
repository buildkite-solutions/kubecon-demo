# Kubecon Demo Monorepo

This monorepo demonstrates the Buildkite Backstage plugin with multiple services, each with their own Buildkite pipelines.

## Structure

```
kubecon/
├── services/
│   ├── go-hello-world/
│   │   ├── .buildkite/
│   │   │   └── pipeline.yml
│   │   ├── main.go
│   │   ├── main_test.go
│   │   └── catalog-info.yaml
│   ├── python-hello-world/
│   │   ├── .buildkite/
│   │   │   └── pipeline.yml
│   │   ├── app.py
│   │   ├── test_app.py
│   │   └── catalog-info.yaml
│   └── node-hello-world/
│       ├── .buildkite/
│       │   └── pipeline.yml
│       ├── index.js
│       ├── index.test.js
│       └── catalog-info.yaml
└── catalog-info.yaml
```

## Services

### Go Hello World
- **Port**: 8080
- **Language**: Go 1.21
- **Tests**: Native Go testing
- **Location**: `services/go-hello-world`

### Python Hello World
- **Port**: 8081
- **Language**: Python 3.11 with Flask
- **Tests**: pytest
- **Location**: `services/python-hello-world`

### Node.js Hello World
- **Port**: 8082
- **Language**: Node.js 20 with Express
- **Tests**: Jest + Supertest
- **Location**: `services/node-hello-world`

## Backstage Integration

Each service includes a `catalog-info.yaml` file with Buildkite annotations. The root `catalog-info.yaml` references all services for easy import into Backstage.


## Buildkite Pipelines

Each service has its own `.buildkite/pipeline.yml` that includes:
- Dependency installation
- Test execution
- Build/lint steps
