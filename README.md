# Darkvadar API
This application allows you to register, login and get film data and also comment on film data.

# STEPS TO RUN APP
### Step 1: Start up the containers
RUN `docker-compose up -d on the root directory of the project`


### RUN test in docker container
`docker exec -t -i app npm run test`

### Run Migration
`docker exec -t -i app knex migrate:latest`




## View Application logs on Kibana
Logging was implemented with winton and elastic search
[Kibana board](http://localhost:5601/app/kibana#/discover)


#### POSTMAN API Documentation.

