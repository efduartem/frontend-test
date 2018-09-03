# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Run
* To install all dependecies before run the project excecute in this directory:
```shel
npm install
```
* Remember have running the backend server before test the frontend application.
### Development server

Remember have running the backend server before test the frontend application.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Production Test With Docker  

This [Dockerfile](./Dockerfile) deploy the Angular app with Docker, building it with Node.js as you would do locally, but end up with a thin and efficient Nginx image, with just the compiled code. Ready for production.

#### Prerequisities

In order to run the container you'll need docker installed.  

*  [Windows](https://docs.docker.com/windows/started)

*  [OS X](https://docs.docker.com/mac/started/)

*  [Linux](https://docs.docker.com/linux/started/)

#### Usage

1. Create the image

```shell

docker build -t ingenious-frontend-test:prod .

```  

2. Run the container

```shell

docker run -d -p 8080:80 ingenious-frontend-test:prod

```

3. Navigate to `http://localhost:8080/` and test the application

**_Remember to kill the container when no longer use it.  For that, follow the next steps_**

1. List the running containers

```shell
docker ps
```

2. Find the CONTAINER ID of the ingenious-frontend-test:prod that has the status UP, then run

```shell
docker kill [CONTAINER ID]
``` 

#### Built With

* node:8.11.4

* nginx:1.15