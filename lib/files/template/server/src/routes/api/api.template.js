const Handlebars = require('handlebars');
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['api'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "// Matches with \"/api/"
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "\"\nrouter.route(\"/\")\n  .get("
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller.findAll)\n  .post("
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller.create);\n\n// Matches with \"/api/"
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "/:id\"\nrouter\n  .route(\"/:id\")\n  .get("
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller.findById)\n  .put("
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller.update)\n  .delete("
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller.remove);\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "// Matches with \"/api/"
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "/short\"\nrouter.route(\"/short\")\n  .get("
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller.findAll);\n\n// Matches with \"/api/"
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "/short/:id\"\nrouter.route(\"/short/:id\")\n  .get("
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller.findById);\n\n// Matches with \"/api/"
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "/full\"\nrouter.route(\"/full\")\n  .get("
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller.findAllFull);\n\n// Matches with \"/api/"
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "/full/:id\"\nrouter.route(\"/full/:id\")\n  .get("
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller.findByIdFull);\n\n// Matches with \"/api/"
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "\"\nrouter.route(\"/\")\n  .post("
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller.create);\n\n// Matches with \"/api/"
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "/:id\"\nrouter\n  .route(\"/:id\")\n  .put("
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller.update)\n  .delete("
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller.remove);\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "const router = require(\"express\").Router();\nconst "
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller = require(\"../../controllers/"
    + alias4(((helper = (helper = helpers.lowerPlural || (depth0 != null ? depth0.lowerPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lowerPlural","hash":{},"data":data}) : helper)))
    + "Controller\");\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.associatiated : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\nmodule.exports = router;";
},"useData":true});
})();