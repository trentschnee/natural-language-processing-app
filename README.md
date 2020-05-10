# Natural Language Processing Blog App

Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data. This application uses Aylien's API from a Client browser and takes in requests with a custom server.



## Developing 

This natural language processing app is very easy to develop off of. All you need to do are the following steps!

### Step 1: Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

### Step 2: Clone the repo
`git clone https://github.com/trentschnee/natural-language-processing-app.git`

### Step 3: Install the needed packages
`npm install`  or `yarn install`

### Step 4: Configure API key with .env
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```
### Step 5: Run the server

`npm run start` or `yarn start`

### Step 6: Run the dev server

`npm run build-dev` or `yarn build-dev`

## Production Mode
The application also allows you to build in production mode. Just do `npm run build-prod` or `yarn build-prod`

