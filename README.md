# Cutie Hack Frontend

This is a front-end written with React, Typescript, Redux-saga, and Redux saga-slice. The backend [(repository here)](https://github.com/citrushack/CutieHack2020Backend/) is created using [Strapi](https://strapi.io).

## Get started

You must have node and yarn installed.

Clone the repository 

```bash
git clone https://github.com/citrushack/CutieHack2020Frontend.git
cd CutieHack2020Frontend
```

#### Install dependencies and start the server

```bash
# Using yarn
yarn install
yarn develop
```

The server should launch at [http://localhost:3000](http://localhost:3000).
Auth won't work unless you also run the [backend.](https://github.com/citrushack/CutieHack2020Backend/) 
Currently the site just contains a registration form and a way to upload a resume.

#### Tooling information
This app was created with the [react-boilerplate-crea-template](https://github.com/react-boilerplate/react-boilerplate-cra-template). It gives us nice default settings for linting, prettification, and super useful generator scripts (```yarn run generate```). Docs [here](https://cansahin.gitbook.io/react-boilerplate-cra-template/)
