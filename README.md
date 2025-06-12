# Nordic Frontend (Nextjs/typescript)
This is the Nextjs front end built for the company 'Nordicmade' which is a small team of dedicated WordPress and WooCommerce developers based in Oslo, Norway. They create quality, minimalist, easy-to-use themes that help people on their e-commerce journey (https://www.nordicmade.com/). 

The code is a Nextjs/dotnet replacement for the "savoy" Wordpress app built by Nordicmade for the Austrian, "wwurm winery". My demonstration website is at: http://3.26.70.15/

The same code with different text/photos, which are selected by configuration during build, is used by the Charm Accessories website (2025): https://github.com/mckenzie-mm/charm-access-2025. The Charm Accessories demonstration website is at: http://3.26.66.148/

The app runs on an AWS container service (ECS). This was chosen instead of Kubernetes due to the lower cost. It is currently only on Australian AWS and will be slow to load in Europe/Norway. The code for deploying the app to AWS is at:
https://github.com/mckenzie-mm/ecs-nordic-cdk.

The app separates the backend code from the Nextjs into an independent dotnet service to allow for the possibility of independent frontend and backend scaling if necessary. Although the backend could have been built using nodejs to be consistent with the frontend, current research indicates that dotnet consistently outperforms nodejs in speed tests (google, for example: https://www.youtube.com/watch?v=iFbpaRjRpOc). The dotnet backend code is at: https://github.com/mckenzie-mm/nordic-api.

The cart uses localstorage as state management is not available on server side rendered pages. The cart is a Nextjs implementation of Steve Griffith's javascript cart (https://www.youtube.com/watch?v=oXtCOiG-7_A).

Screenshots of the website are given below:

<kbd>![alt text](https://github.com/mckenzie-mm/nordic-frontend/blob/main/images-readme/11.png?)<kbd>

<kbd>![alt text](https://github.com/mckenzie-mm/nordic-frontend/blob/main/images-readme/22.png?)<kbd>

<kbd>![alt text](https://github.com/mckenzie-mm/nordic-frontend/blob/main/images-readme/5.png)<kbd>

<kbd>![alt text](https://github.com/mckenzie-mm/nordic-frontend/blob/main/images-readme/6.png)<kbd>

<kbd>![alt text](https://github.com/mckenzie-mm/nordic-frontend/blob/main/images-readme/7.png)<kbd>

<kbd>![alt text](https://github.com/mckenzie-mm/nordic-frontend/blob/main/images-readme/4.png)<kbd>
This app is designed to run with a dotnet api
backend.

## Environment variables for Nextjs App

@@ -35,7 +11,7 @@ The api endpoint to the dotnet app is defined in the config as:

export const API_ENDPOINT = `http://${HOST}:${PORT}`;

The PORT is 3000 for development and production
The PORT is 5000 for development and production

1) For development on host machine ".env.development"

@@ -50,7 +26,7 @@ The PORT is 3000 for development and production
    HOST=webapi

During the build process, the dotnet app is required to be running 
on the host machine (localhost:3000) for the generation 
on the host machine (localhost:5000) for the generation Add commentMore actions
of the static pages. Nextjs will use ".env.production.local"
first by default with HOST=localhost.

@@ -59,4 +35,3 @@ Nextjs will use the bridge network.
The env is required to be production (NODE_ENV=production)
with HOST=webapi (the network alias of the dotnet container).
