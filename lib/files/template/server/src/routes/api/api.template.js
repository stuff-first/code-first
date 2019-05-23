var Handlebars = require('handlebars');
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['api'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "const router = require(\"express\").Router();\nconst "
    + alias4(((helper = (helper = helpers.lower || (depth0 != null ? depth0.lower : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lower","hash":{},"data":data}) : helper)))
    + "Controller = require(\"../../controllers/"
    + alias4(((helper = (helper = helpers.lower || (depth0 != null ? depth0.lower : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lower","hash":{},"data":data}) : helper)))
    + "Controller\");\n\n// Matches with \"/api/"
    + alias4(((helper = (helper = helpers.lower || (depth0 != null ? depth0.lower : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lower","hash":{},"data":data}) : helper)))
    + "\"\nrouter.route(\"/\")\n  .get("
    + alias4(((helper = (helper = helpers.lower || (depth0 != null ? depth0.lower : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lower","hash":{},"data":data}) : helper)))
    + "Controller.findAll)\n  .post("
    + alias4(((helper = (helper = helpers.lower || (depth0 != null ? depth0.lower : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lower","hash":{},"data":data}) : helper)))
    + "Controller.create);\n\n// Matches with \"/api/"
    + alias4(((helper = (helper = helpers.lower || (depth0 != null ? depth0.lower : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lower","hash":{},"data":data}) : helper)))
    + "/:id\"\nrouter\n  .route(\"/:id\")\n  .get("
    + alias4(((helper = (helper = helpers.lower || (depth0 != null ? depth0.lower : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lower","hash":{},"data":data}) : helper)))
    + "Controller.findById)\n  .put("
    + alias4(((helper = (helper = helpers.lower || (depth0 != null ? depth0.lower : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lower","hash":{},"data":data}) : helper)))
    + "Controller.update)\n  .delete("
    + alias4(((helper = (helper = helpers.lower || (depth0 != null ? depth0.lower : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lower","hash":{},"data":data}) : helper)))
    + "Controller.remove);\n\nmodule.exports = router;";
},"useData":true});
})();