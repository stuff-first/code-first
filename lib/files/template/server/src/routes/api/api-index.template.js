const Handlebars = require('handlebars');
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['api-index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "const "
    + alias2(alias1((depth0 != null ? depth0.lower : depth0), depth0))
    + "Routes = require(\"./"
    + alias2(alias1((depth0 != null ? depth0.lowerPlural : depth0), depth0))
    + "\");\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "// "
    + alias2(alias1((depth0 != null ? depth0.upper : depth0), depth0))
    + " routes\nrouter.use(\"/"
    + alias2(alias1((depth0 != null ? depth0.lowerPlural : depth0), depth0))
    + "\", "
    + alias2(alias1((depth0 != null ? depth0.lower : depth0), depth0))
    + "Routes);\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "const router = require(\"express\").Router();\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.models : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.models : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\nmodule.exports = router;\n";
},"useData":true});
})();