# Nordic Frontend (Nextjs/typescript)
This is the Nextjs front end built for the company 'Nordicmade' which is a small team of dedicated WordPress and WooCommerce developers based in Oslo, Norway. They create quality, minimalist, easy-to-use themes that help people on their e-commerce journey (https://www.nordicmade.com/). 


The code is a Nextjs/dotnet replacement for the "savoy" Wordpress app built by Nordicmade for the Austrian, "wwurm winery". My demonstration website is at: http://3.26.70.15/

The same code with different text/photos, which are selected by configuration during build, is used by the Charm Accessories website (2025): https://github.com/mckenzie-mm/charm-access-2025. The Charm Accessories demonstration website is at: http://3.25.102.86/

The app runs on an AWS container service (ECS). This was chosen instead of Kubernetes due to the lower cost. It is currently only on Australian AWS and will be slow to load in Europe/Norway. 

The app separates the backend code from the Nextjs into an independent dotnet service to allow for the possibility of independent frontend and backend scaling if necessary. Although the backend could have been built using nodejs to be consistent with the frontend, current research indicates that dotnet consistently outperforms nodejs in speed tests (google).

The cart uses localstorage as state management is not available on server side rendered pages. The cart is a Nextjs implementation of Steve Griffith's javascript cart (https://www.youtube.com/watch?v=oXtCOiG-7_A).

Screenshots of the website are given below:

<kbd>![alt text](https://github.com/mckenzie-mm/nordic-frontend/blob/main/images-readme-dark/11.png?)<kbd>

<kbd>![alt text](https://github.com/mckenzie-mm/nordic-frontend/blob/main/images-readme-dark/22.png?)<kbd>

<kbd>![alt text](https://github.com/mckenzie-mm/nordic-frontend/blob/main/images-readme-dark/5.png)<kbd>

<kbd>![alt text](https://github.com/mckenzie-mm/nordic-frontend/blob/main/images-readme-dark/6.png)<kbd>

<kbd>![alt text](https://github.com/mckenzie-mm/nordic-frontend/blob/main/images-readme-dark/7.png)<kbd>

<kbd>![alt text](https://github.com/mckenzie-mm/nordic-frontend/blob/main/images-readme-dark/4.png)<kbd>

## Environment variables for Nextjs App

Environment variables for the Nextjs App.

The api endpoint to the dotnet app is defined in the config as:

export const API_ENDPOINT = `http://${HOST}:${PORT}`;

The PORT is 3000 for development and production

1) For development on host machine ".env.development"

    HOST=localhost

2) For building a docker container ".env.production.local"

    HOST=localhost

3) For running of docker container ".env.production"

    HOST=webapi

During the build process, the dotnet app is required to be running 
on the host machine (localhost:3000) for the generation 
of the static pages. Nextjs will use ".env.production.local"
first by default with HOST=localhost.

During running of the container on the docker host, 
Nextjs will use the bridge network.
The env is required to be production (NODE_ENV=production)
with HOST=webapi (the network alias of the dotnet container).


