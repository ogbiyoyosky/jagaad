# Jagaad API

# Name: Emmanuel Ogbiyoyo

This application allows you to get forcast of cities from a third party API.

# STEPS TO RUN APP

### Step 1: Start up the containers

RUN `docker-compose up -d on the root directory of the project`

### RUN test in docker container

`docker exec -t -i app npm run test`

### App Features

- Fetch all cities forecasts for two days
- Set a particular city forecast
- Get forcast for a particular city

### Swagger documentation

[Swagger Documentation](http://localhost:9000/swagger)

## View Application logs on Kibana

Logging was implemented with winton and elastic search
[Kibana board](http://localhost:5601/app/kibana#/discover)

#### POSTMAN API Documentation.
