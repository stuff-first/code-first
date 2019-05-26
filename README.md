# Code First

The purpose of this package is to generate boilerplates for different tech stacks, with the very first tech stack iteration being mysql through sequelize, node, express, react.  Eventually we will also build upon this and make it so it can build frontend skeletons using material-ui package automatically based off sequelize models and extra config info.

# Getting Started

To use cli:

either use npx e.g.:

```npx code-first init```

or

install and use via commandline:

```bash
npm i -g code-first
code-first init
```

Useage of CLI:

* init - should be run on empty repository/folder, creates all the boilerplate files for project.
* build - run after creating sequelize models

Example project:
* Start by running bash commands:
```bash
mkdir my-project
cd my-project
git init
npx code-first init
npm run sequelize -- model:create --name User --attributes name:string,state:boolean,birth:date,card:integer,role:enum:'{Admin,Guest}'
npm run sequelize -- model:create --name Person --attributes name:string,state:boolean,birth:date,card:integer,role:enum:'{Admin,Guest}'
```
* copy into person.js's .associate method
```javascript
Person.belongsTo(models.User);
```
* copy into user.js's .associate method
```javascript
User.hasMany(models.Person, {
    onCascade: "delete"
});
```
* then run the bash command: 
```bash
npx code-first build
```