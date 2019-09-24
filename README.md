# Workout3

For development, you can set up an `appsettings.[env].json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "mongodb://user:password@localhost:27017"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Debug",
      "System": "Information",
      "Microsoft": "Information"
    }
  },
  "GoogleAuth": {
    "ClientId": "123.apps.googleusercontent.com",
    "ClientSecret": "secret"
  },
  "AdminEmails": "test@example.com;test1@example.com"
}
```

For deployment, you can set up the secrets with environment variables using `docker-compose.yml`:

```yaml
version: "3.4"
services:
  app:
    container_name: workout3
    image: workout3
    ports:
      - 5000:80
    env_file:
      - workout3.env
networks:
  default:
    external:
      name: services
```

With a `workout3.env` file like:

```
AdminEmails=test@example.com;test1@example.com
GoogleAuth:ClientId=123.apps.googleusercontent.com
GoogleAuth:ClientSecret=secret
ConnectionStrings:DefaultConnection=mongodb://user:password@localhost:27017
```

## Template

This is based on the the [Notes](https://github.com/cototal/Notes) project.
I set up a separate branch when starting this project that may be useful as a template for similar projects.