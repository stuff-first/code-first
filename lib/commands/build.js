module.exports = () => {
    const { sequelize, Sequelize, ...db } = require(`${process.cwd()}/server/src/models`);
    require("../files/template");
    const Handlebars = require("handlebars");
    const Model = require('../helpers/classes/model.class');
    const fs = require('fs');
    console.log(db);
    const models = [];
    for (let key in db) {
        for (let property in db[key]) {
            console.log(property, ":", db[key][property])
        }
        let associationsRaw = [];
        for (let assocKey in db[key].associations) {
            associationsRaw.push(assocKey);
        }
        const model = new Model(key, associationsRaw, db[key]);
        models.push(model);
        console.log(JSON.stringify(db[key].rawAttributes, null, 2));
    }
    models.forEach(model => {
        model.updateAssociations(models);
        fs.writeFile(`./server/src/controllers/${model.lowerPlural}Controller.js`, Handlebars.templates.controller(model), err => {
            console.log(err);
        });
        fs.writeFile(`./server/src/routes/api/${model.lowerPlural}.js`, Handlebars.templates.api(model), err => {
            console.log(err);
        });
    });
    fs.writeFile(`./server/src/routes/api/index.js`, Handlebars.templates['api-index']({models}), err => {
        console.log(err);
    });
}