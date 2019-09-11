# Certificate Generator

React app for adding name and course to certificate

`npm run build`
Create a build folder for production deployment. 

`npm start`
Start the application.

I've included the nginx configuration file which I created in `/etc/nginx/sites-available` on my virtual private server (VPS). I found it a challenge to get react-router to cooperate with nginx and there was little documentation for how to do so. When I did find a successful configuration, I thought it would be worth including in the repo.

I'm using [PM2](https://pm2.keymetrics.io/) to manage the process in the VPS. 


