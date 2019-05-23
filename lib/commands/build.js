module.exports = () => {
    const { sequelize, Sequelize, ...db } = require(`${process.cwd()}/server/src/models`);
    require("../files/template");
    const Handlebars = require("handlebars");
    const fs = require('fs');
    console.log(db);
    const models = [];
    for (let key in db) {
        fs.writeFile(`./server/src/controllers/${model.lower}sController.js`, Handlebars.templates.controller(model), err => {
            console.log(err);
        });
        fs.writeFile(`./server/src/routes/api/${model.lower}s.js`, Handlebars.templates.api(model), err => {
            console.log(err);
        });
        for (let property in db[key]) {
            console.log(property, ":", db[key][property])
        }
        let associated = false;
        let associations = [];
        for (let Model in db[key].associations) {
            associated = true;
            associations.push({
                upper: Model,
                lower: Model.toLowerCase()
            });
        }
        const model = {
            upper: key,
            lower: key.toLowerCase(),
            associated,
            associations
        };
        models.push(model);
        console.log(JSON.stringify(db[key].rawAttributes, null, 2));
    }
    fs.writeFile(`./server/src/routes/api/index.js`, Handlebars.templates['api-index']({models}), err => {
        console.log(err);
    });
}