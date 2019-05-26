const pluralize = require('pluralize')

module.exports = class Model {
    constructor(name, associatiated, associationsRaw, db) {
        this.name = name;
        this.lower = pluralize.singular(name.toLowerCase());
        this.upper = this.lower.charAt(0).toUpperCase() + this.lower.slice(1);
        this.upperPlural = pluralize(this.upper);
        this.lowerPlural = pluralize(this.lower);
        this.associatiated = associatiated;
        this.associationsRaw = associationsRaw;
        this.checkByName = this.checkByName.bind(this);
        this.db = db;
        this.associations = [];
    }
    checkByName(name) {
        return name === this.upper || name === this.lower || name === this.upperPlural || name === this.lowerPlural;
    }
    updateAssociations(models) {
        const removeSelf = this.associationsRaw.filter(key => !this.findByAnyName(key));
        const turnToModel = removeSelf.map(key => models.reduce((prev, model) => model.checkByName(key) ? model : prev, null))
        const filtered = turnToModel.filter(model => model !== null);
        if (filtered.length != turnToModel.length) {
            console.log("Match not found!");
        }
        this.associations = filtered;
    }
}