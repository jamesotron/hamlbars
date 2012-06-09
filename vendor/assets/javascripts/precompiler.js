// DOM
var Element = {}
Element.firstChild = function () { return Element };
Element.innerHTML = function () { return Element };

var document = { createRange: false, createElement: function() { return Element } };
var window = this;
this.document = document;

// Console
var console = window.console = {};
console.log = console.info = console.warn = console.error = function(){};

// jQuery
var jQuery = window.jQuery = function() { return jQuery };
jQuery.ready = function() { return jQuery };
jQuery.inArray = function() { return jQuery };
jQuery.jquery = "1.7";
var $ = jQuery;

// Precompiler
var Hamlbars = {
  precompile: function(string) {
    var ast = Handlebars.parse(string);
    var options = { data: true, stringParams: true };
    var environment = new Handlebars.Compiler().compile(ast, options);
    var templateSpec = new Handlebars.JavaScriptCompiler().compile(environment, options, undefined, true);

    return templateSpec.toString();
  }
};


