#Base image taken from:https://hub.docker.com/r/cypress/browsers/tags
FROM cypress/browsers:node-22.13.0-chrome-132.0.6834.83-1-ff-134.0.1-edge-131.0.2903.147-1
#Create the folder where our project will be stored
RUN mkdir /cucumberproject
#We make it our workdirectory
WORKDIR /cucumberproject
#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress.env.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm install
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx","cypress","run"]
#With CMD in this case, we can specify more parameters to the last entrypoint.
CMD [""]  

#To build this image just use the following command line(just as an example, use your tag name:version as prefered.):
#docker build -t cucumberproject:1.0 .

#To run an example:
#TAG INSTANCE: docker run -i -t cucumberproject:1.0 cypress run --spec cypress/e2e/features/* --env tags=@mobile
#CHROME INSTANCE: docker run -i -t cucumberproject:1.0 cypress run --spec cypress/e2e/features/* --browser chrome
#FIREFOX INSTANCE: docker run -i -t cucumberproject:1.0 cypress run --spec cypress/e2e/features/* --browser firefox
# Volume config sample for Windows: -v "%cd%":/cucumberproject