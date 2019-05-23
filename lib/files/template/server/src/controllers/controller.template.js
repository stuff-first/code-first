var Handlebars = require('handlebars');
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['controller'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  findAllFull: function(req, res) {\n    db."
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "\n      .findAll({\n          where: req.query,\n            include: [\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.associations : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            ]\n        })\n      .then(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + " => res.json(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "))\n      .catch(err => res.status(422).json(err));\n  },\n  findByIdFull: function(req, res) {\n    db."
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "\n      .findOne({\n          where: {\n              id: req.params.id\n          },\n            include: [\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.associations : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            ]\n      })\n      .then(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + " => res.json(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "))\n      .catch(err => res.status(422).json(err));\n  },\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            {\n                model: db."
    + container.escapeExpression(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"upper","hash":{},"data":data}) : helper)))
    + "\n            }\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "const db = require(\"../models\");\n\n// Defining methods for the "
    + alias4(((helper = (helper = helpers.lower || (depth0 != null ? depth0.lower : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lower","hash":{},"data":data}) : helper)))
    + "sController\nmodule.exports = {\n  findAll: function(req, res) {\n    db."
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "\n      .findAll({\n          where: req.query\n        })\n      .then(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + " => res.json(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "))\n      .catch(err => res.status(422).json(err));\n  },\n  findById: function(req, res) {\n    db."
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "\n      .findOne({\n          where: {\n              id: req.params.id\n          }\n      })\n      .then(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + " => res.json(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "))\n      .catch(err => res.status(422).json(err));\n  },\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.associated : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  create: function(req, res) {\n    db."
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "\n      .create(req.body)\n      .then(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + " => res.json(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "))\n      .catch(err => res.status(422).json(err));\n  },\n  update: function(req, res) {\n    db."
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "\n      .update(req.body, { where: { id: req.params.id } })\n      .then(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + " => res.json(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "))\n      .catch(err => res.status(422).json(err));\n  },\n  remove: function(req, res) {\n    db."
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "\n      .destroy({ where: { id: req.params.id } })\n      .then(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + " => res.json(db"
    + alias4(((helper = (helper = helpers.upper || (depth0 != null ? depth0.upper : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upper","hash":{},"data":data}) : helper)))
    + "))\n      .catch(err => res.status(422).json(err));\n  }\n};\n";
},"useData":true});
})();