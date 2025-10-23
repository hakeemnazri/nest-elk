<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

# NestJS + ELK Stack Integration Examples

Three development approaches to integrate logging:

🔹 **[Filebeat Branch](https://github.com/hakeemnazri/nest-elk/tree/elk-filebeat)** - Logs written to file, Filebeat ships to Logstash, most decoupled approach(Fav)
🔹 **[Logstash Branch](https://github.com/hakeemnazri/nest-elk/tree/logstash-transport)** - Winston logs sent via TCP to Logstash for processing and filtering  
🔹 **[Elasticsearch Branch](https://github.com/hakeemnazri/nest-elk/tree/elasticsearch-transport)** - Direct winston transport to Elasticsearch, no intermediaries

## Compile and run the project

```bash
# Run!
$ docker compose up -d --build

#Test the endpoint:
   curl http://localhost:3000

   Or visit `http://localhost:3000` in your browser

5. View logs in Kibana:
   - Open `http://localhost:5601`
   - Navigate to Discover
   - Create an index pattern for `app-*` (or your configured prefix)
   - You should see logs from the API request
```

## ⚠️ Security Note

This setup is for **development and learning purposes only**. For production use:
- Enable Elasticsearch security
- Add authentication to all services
- Use proper secrets management
- Don't expose ports directly to the internet

## Stay in touch

- Author - [Hakeem Nazri](https://www.threads.com/@_hakeemnazri_)
