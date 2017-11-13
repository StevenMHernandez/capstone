# VCU Senior Capstone

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
node src/index.js
```

## Update Dependencies

Sometimes, we might add a new library through npm. To download this new library, run `npm install` once again.

## Resources

[Project Wiki](https://github.com/StevenMHernandez/capstone/wiki) contains information on setting things up for the project.
(For example setting up NPM, AWS, etc)
If we as a group need to explain anything to one another how to do something,
we should create a page in the wiki so that the whole group can learn.

## Preview an in-browser graph

As a quick experiment, I am trying out WebCola as an interactive graph/uml visualizer.
This might offer us some additional points of interest for our project.

To run this in-browser graph, we first need to install an http-server with `npm install -g http-server`.

Then we can run the server from our terminal: `http-server` which will then serve `index.html` at `http://localhost:8080`.