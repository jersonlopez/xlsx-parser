# xlsx-parser

Project to convert xlsx file in json

> **_NOTE:_** The .env file was uploaded for educational purposes

## Technologies

- Typescript
- Express
- Mongoose

## Prerequisites

- [NodeJS][nodejs]
- [Docker][docker]
- [Docker-compose][docker-compose]

## Steps to run this project

1. Run `npm i` command to install all the dependencies.
2. Let's run this docker-compose command to initialize the app:

    ```sh
    docker compose up
    ```

3. Go to [http://localhost:3000/health][app]

    And now you can interact with the application, and use [this][postman-collection] Postman collection to test the API. On the other hand, In [./data](./data/) folder there is also an Excel test file to test the upload file process

## TO DO

- Create test suites

[nodejs]: https://nodejs.org/en/download/
[docker]: https://www.docker.com/get-started
[docker-compose]: https://docs.docker.com/compose/install/
[app]: http://localhost:3000/health
[postman-collection]: ./data/xlsx-parser.postman_collection.json
