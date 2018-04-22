# VCU Senior Capstone

[![CircleCI](https://circleci.com/gh/StevenMHernandez/capstone.svg?style=svg)](https://circleci.com/gh/StevenMHernandez/capstone)

Sponsor: Capital One

Goal: Provide operational insight to AWS service architecture.

## Project Setup

```
git clone https://github.com/StevenMHernandez/capstone.git
cd capstone
npm install
```

## Run Project

```
# run/manually test diagram builder code
node src/index.js

# or, run/manually test the slack Message sender code
# notice, you must change the CHATBOT_TOKEN to your specific chatbot's token.
CHATBOT_TOKEN=XXXX node src/slackMessageSender/index.js
```

## Run Tests

```
npm test
```

## Update Dependencies

Sometimes, we might add a new library through npm. To download this new library, run `npm install` once again.

## Resources

[Project Wiki](https://github.com/StevenMHernandez/capstone/wiki) contains information on setting things up for the project.
(For example setting up NPM, AWS, etc)
If we as a group need to explain anything to one another how to do something,
we should create a page in the wiki so that the whole group can learn.

## Hosting Chatbot

Chatbot logic is "hosted" using AWS Lambda. Deployment and configuration is handled by [the serverless framework](https://github.com/serverless/serverless)

With sufficient credentials, chatbot can be deployed with `serverless-deploy --aws-profile your-profile-name-here`

To allow for rendering of the plantuml, we are using plantuml's default PlantUML server system where images are generated on the fly by encoding graphs into the an image url.
Your own plantuml server can be built deployed onto aws lambda through the use of:
https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:293246570391:applications~plantuml-render

## Preview an in-browser graph

As an experiment, I am trying out [WebCola](http://marvl.infotech.monash.edu/webcola/index.html) as an interactive graph/uml visualizer.
WebCola provides some helpers to build SVG graphs in the browser.
This might offer us some additional points of interest for our project such as clicking an ec2 instance to view stats/more information.

To run this in-browser graph, we first need to install an http-server with `npm install -g http-server`.

Then we can run the server from our terminal: `http-server` which will then serve `index.html` at `http://localhost:8080`.