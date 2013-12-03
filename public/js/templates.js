define(["ember"], function(Ember){

Ember.TEMPLATES["add_module_item_modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  options = {hash:{
    'style': ("width: 20px;height: 20px;display: block;")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-x'] || depth0['ic-icon-x']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-x", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      <label>Title</label>\n      ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "ID"};
  options = {hash:{
    'value': ("newItem.title")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "ID"};
  options = {hash:{
    'value': ("newItem.title")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n    \n    ");
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "ID"};
  options = {hash:{
    'value': ("title")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n        <ic-button>\n          Cancel\n        </ic-button>\n      ");
  }

  data.buffer.push("<ic-modal-header>\n  <ic-modal-title>\n    Add Item in <strong>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</strong>\n  </ic-modal-title>\n  <ic-modal-header-close>\n    ");
  hashContexts = {'action': depth0};
  hashTypes = {'action': "STRING"};
  options = {hash:{
    'action': ("cancel")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-trigger'] || depth0['ic-trigger']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-trigger", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </ic-modal-header-close>\n</ic-modal-header>\n\n<ic-modal-body class=\"columned\">\n  <ic-stacked-tabs>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isAssignment:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Assignments</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isPage:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Pages</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isQuiz:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Quizzes</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isFile:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">File</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isDiscussion:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Discussion</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isTextHeader:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Text Header</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isExternalUrl:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">External URL</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isExternalTool:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">External Tool</ic-tab>\n  </ic-stacked-tabs>\n\n  <div class=\"padded\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isAssignment", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isPage", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isQuiz", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isFile", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isDiscussion", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isTextHeader", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isExternalUrl", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isExternalTool", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n</ic-modal-body>\n\n<ic-modal-footer>\n  <div class=\"modal-footer-right\">\n      ");
  hashContexts = {'action': depth0};
  hashTypes = {'action': "STRING"};
  options = {hash:{
    'action': ("cancel")
  },inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-trigger'] || depth0['ic-trigger']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-trigger", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    <ic-button class=\"primary\">Add Item</ic-button>\n  </div>\n</ic-modal-footer>");
  return buffer;
  
});

Ember.TEMPLATES["component-css"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<style>\nic-screenreader-only {\n  display: none;\n}\n\nic-modal * { box-sizing: border-box }\n\nic-button {\n  background-color: #F2F2F2;\n  background-image: linear-gradient(to bottom, #FFFFFE 0%, #E7E7E7 100%);\n  border: 1px solid #B6B9BC;\n/*   box-shadow: 0 0 0 1px #B6B9BC; */\n  padding: 6px 12px;\n  line-height: 22px;\n  border-radius: 4px;\n  vertical-align: middle;\n  font-size: 0.80em;\n  letter-spacing: 0.0625em;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; \n  cursor: default;\n}\n\nic-button.primary {\n  border-color: #39A2DE;\n/*   box-shadow: 0 0 0 1px #39A2DE; */\n  background-color: #1AA5E8;\n  background-image: linear-gradient(to bottom, #20B7F8 0%, #1B98DC 100%);\n  color: white;\n}\n</style>");
  
});

Ember.TEMPLATES["components/content-icon"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-icon-drag-handle"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<svg version=\"1.1\" class=\"ic-icon-drag-handle\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n	 width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n<g ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n	<rect x=\"29\" width=\"14\" height=\"14\"/>\n	<rect x=\"29\" y=\"28\" width=\"14\" height=\"14\"/>\n	<rect x=\"29\" y=\"57\" width=\"14\" height=\"14\"/>\n	<rect x=\"29\" y=\"85\" width=\"14\" height=\"15\"/>\n	<rect x=\"58\" width=\"14\" height=\"14\"/>\n	<rect x=\"58\" y=\"28\" width=\"14\" height=\"14\"/>\n	<rect x=\"58\" y=\"57\" width=\"14\" height=\"14\"/>\n	<rect x=\"58\" y=\"85\" width=\"14\" height=\"15\"/>\n</g>\n</svg>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-icon-publish"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<svg version=\"1.1\" class=\"ic-icon-pubish\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n	 width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n<path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M100,62c0,15.534-12.586,28.125-28.137,28.125\n	c-1.068,0-53.113,0-53.113,0C8.166,88.599,0,79.261,0,68.25c0-8.801,5.224-16.339,12.72-19.806c-0.086-0.714-0.22-1.416-0.22-2.149\n	c0-10.351,8.386-18.75,18.744-18.75c2.392,0,4.657,0.488,6.763,1.306C40.332,17.456,50.403,8.875,62.494,8.875\n	c13.824,0,25.006,11.194,25.006,25c0,1.544-0.183,3.039-0.452,4.504C94.824,43.384,100,52.069,100,62z M73.114,32.239\n	c-2.753-2.033-6.683-1.477-8.746,1.245l-19,24.982L34.955,48.249c-2.442-2.399-6.397-2.399-8.838,0\n	c-2.441,2.393-2.441,6.274,0,8.673l20.63,20.246l27.643-36.347C76.452,38.105,75.885,34.259,73.114,32.239z\"/>\n</svg>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-icon-settings"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<svg version=\"1.1\" class=\"ic-icon-settings\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n   width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n<style>\n.ic-icon-settings {\n  -moz-transform: rotate(0deg);\n  transition-property: rotate;\n  transition-duration: 0.8s;\n  -moz-transition: transform 0.8s;\n  -ms-transition: transform 0.8s;\n}\n.ic-icon-settings:hover {\n  transition-property: rotate;\n  transition-duration: 0.8s;\n  transition: transform 0.8s;\n  -webkit-transition: transform 0.8s;\n  -moz-transition: transform 0.8s;\n  -webkit-transform: rotate(15deg);\n  -moz-transform: rotate(15deg);\n  -ms-transform: rotate(15deg);\n  transform: rotate(15deg);\n}\n.ic-icon-settings:active {\n  -webkit-transform: rotate(25deg);\n  -moz-transform: rotate(25deg);\n  -ms-transform: rotate(25deg);\n  transform: rotate(25deg);\n  transition-duration: 0.1s;\n  -moz-transition: transform 0.1s;\n  -ms-transition: transform 0.1s;\n  transition: transform 0.1s;\n}\n</style>\n<path class=\"test123\" ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M99.771,45.605c-0.184-1.863-1.592-3.377-3.44-3.688l-9.138-1.566c-0.905-3.493-2.28-6.791-4.068-9.825\n  l5.345-7.546c1.094-1.548,1.007-3.64-0.21-5.094c-1.867-2.216-3.933-4.281-6.145-6.145c-0.774-0.646-1.729-0.977-2.679-0.977\n  c-0.841,0-1.687,0.256-2.407,0.767l-7.55,5.345c-3.035-1.788-6.332-3.163-9.825-4.068L58.091,3.67\n  c-0.319-1.845-1.833-3.257-3.7-3.444C52.84,0.075,51.401,0,50,0s-2.84,0.075-4.391,0.226c-1.867,0.188-3.381,1.6-3.7,3.444\n  l-1.563,9.138c-3.493,0.905-6.79,2.28-9.825,4.068l-7.55-5.345c-0.721-0.511-1.566-0.767-2.407-0.767\n  c-0.95,0-1.904,0.331-2.679,0.977c-2.212,1.863-4.277,3.929-6.145,6.145c-1.217,1.454-1.304,3.546-0.21,5.094l5.345,7.546\n  c-1.792,3.034-3.167,6.332-4.068,9.825L3.67,41.917c-1.849,0.312-3.257,1.825-3.44,3.688C0.075,47.156,0,48.596,0,50\n  s0.075,2.847,0.229,4.395c0.184,1.863,1.592,3.377,3.44,3.688l9.138,1.566c0.901,3.493,2.276,6.791,4.068,9.825L11.53,77.02\n  c-1.094,1.548-1.007,3.64,0.21,5.094c1.867,2.216,3.933,4.281,6.145,6.145c0.774,0.646,1.729,0.977,2.679,0.977\n  c0.841,0,1.687-0.256,2.407-0.767l7.55-5.345c3.035,1.788,6.332,3.163,9.825,4.068l1.563,9.138c0.319,1.845,1.833,3.257,3.7,3.444\n  C47.16,99.925,48.599,100,50,100s2.84-0.075,4.391-0.226c1.867-0.188,3.381-1.6,3.7-3.444l1.563-9.138\n  c3.493-0.905,6.79-2.28,9.825-4.068l7.55,5.345c0.721,0.511,1.566,0.767,2.407,0.767c0.95,0,1.904-0.331,2.679-0.977\n  c2.212-1.863,4.277-3.929,6.145-6.145c1.217-1.454,1.304-3.546,0.21-5.094l-5.345-7.546c1.788-3.034,3.163-6.332,4.068-9.825\n  l9.138-1.566c1.849-0.312,3.257-1.825,3.44-3.688C99.925,52.847,100,51.404,100,50S99.925,47.156,99.771,45.605z M50,69.23\n  c-10.626,0-19.23-8.604-19.23-19.23S39.374,30.77,50,30.77S69.23,39.374,69.23,50S60.626,69.23,50,69.23z\"/>\n</svg>");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-icon-x"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<svg version=\"1.1\" class=\"ic-icon-x\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n     width=\"100%\" height=\"100%\" viewBox=\"0 0 16 16\" enable-background=\"new 0 0 16 16\" xml:space=\"preserve\">\n<style>\n.ic-icon-x {\n  -moz-transform: rotate(0deg);\n  transition-property: rotate;\n  transition-duration: 0.8s;\n  -moz-transition: transform 0.8s;\n  -ms-transition: transform 0.8s;\n  transition: transform 0.8s;\n}\n.ic-icon-x:hover {\n  transition-property: scale;\n  transition-duration: 0.8s;\n  transition: transform 0.8s;\n  -webkit-transition: transform 0.8s;\n  -moz-transition: transform 0.8s;\n  -webkit-transform: scale(1.09);\n  -moz-transform: scale(1.09);\n  -ms-transform: scale(1.09);\n  transform: scale(1.09);\n}\n.ic-icon-x:active {\n  -webkit-transform: scale(0.9);\n  -moz-transform: scale(0.9);\n  -ms-transform: scale(0.9);\n  transform: scale(0.9);\n  transition-duration: 0.1s;\n  -moz-transition: transform 0.1s;\n  -ms-transition: transform 0.1s;\n  transition: transform 0.1s;\n}\n</style>\n  <g>\n      <path ");
  hashContexts = {'fill': depth0};
  hashTypes = {'fill': "ID"};
  options = {hash:{
    'fill': ("fillColor")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" d=\"M0.028,1.923l1.896-1.895L8,6.105L14.104,0L16,1.896L9.896,8l6.076,6.076l-1.896,1.895L8,9.895L1.896,16\n          L0,14.104L6.104,8L0.028,1.923z\"/>\n  </g>\n</svg>");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-lazily-paginated-records"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-menu-css"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<style>\nic-menu-items {\n  position: absolute;\n  display: none;\n}\n\nic-menu-items[aria-expanded=\"true\"] {\n  display: block;\n}\n\nic-menu-items {\n  outline: none;\n  background: #fff;\n  border: 1px solid #aaa;\n  border-radius: 3px;\n  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);\n  list-style-type: none;\n  padding: 2px 0px;\n  font-family: \"Lucida Grande\", \"Arial\", sans-serif;\n  font-size: 12px;\n}\n\nic-menu-item {\n  display: block;\n  padding: 4px 20px;\n  cursor: default;\n  white-space: nowrap;\n}\n\nic-menu-item:focus {\n  background: #3879D9;\n  color: #fff;\n  outline: none;\n}\n</style>\n\n<!--style>\nic-menu-trigger {\n  padding: 6px;\n  border: 1px solid transparent;\n  border-radius: 3px 3px 0 0;\n  border-bottom: none;\n  z-index: 1;\n  position: relative;\n}\n\nic-menu-trigger i:before {\n  color: #bbb;\n}\n\nic-menu.is-open ic-menu-trigger {\n  border-color: #aaa;\n  background: #fff;\n  z-index: 3;\n}\n\nic-menu-trigger:hover i:before,\nic-menu.is-open ic-menu-trigger i:before {\n  color: #555;\n}\n\nic-menu-items {\n  font-family: inherit;\n  right: 0;\n  z-index: 2;\n  top: 22px;\n  border-radius: 3px 0px 3px 3px;\n}\n\nic-menu-item {\n  font: inherit;\n}\n\nic-menu-item:focus {\n  background: #3A87AD;\n}\n</style -->");
  
});

Ember.TEMPLATES["components/ic-menu-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  
});

Ember.TEMPLATES["components/ic-menu-list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  
});

Ember.TEMPLATES["components/ic-menu-trigger"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  
});

Ember.TEMPLATES["components/ic-menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  
});

Ember.TEMPLATES["components/ic-modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"modal-container\">\n  <div class=\"modal\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-trigger"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  
});

Ember.TEMPLATES["edit_module_item_modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  options = {hash:{
    'style': ("width: 20px;height: 20px;display: block;")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-x'] || depth0['ic-icon-x']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-x", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "ID"};
  options = {hash:{
    'value': ("title")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n    \n    ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n        <ic-button>\n          Cancel\n        </ic-button>\n      ");
  }

  data.buffer.push("<ic-modal-header>\n  <ic-modal-title>\n    Edit Item in <strong>Week 1</strong>\n  </ic-modal-title>\n  <ic-modal-header-close>\n    ");
  hashContexts = {'action': depth0};
  hashTypes = {'action': "STRING"};
  options = {hash:{
    'action': ("cancel")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-trigger'] || depth0['ic-trigger']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-trigger", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </ic-modal-header-close>\n</ic-modal-header>\n\n<ic-modal-body class=\"columned\">\n  <ic-stacked-tabs>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isAssignment:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Assignments</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isPage:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Pages</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isQuiz:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Quizzes</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isFile:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">File</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isDiscussion:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Discussion</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isTextHeader:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Text Header</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isExternalUrl:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">External URL</ic-tab>\n    <ic-tab ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isExternalTool:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">External Tool</ic-tab>\n  </ic-stacked-tabs>\n\n  <div class=\"padded\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isAssignment", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isPage", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isQuiz", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isFile", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isDiscussion", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isTextHeader", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isExternalUrl", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isExternalTool", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n</ic-modal-body>\n\n<ic-modal-footer>\n  <div class=\"modal-footer-right\">\n      ");
  hashContexts = {'action': depth0};
  hashTypes = {'action': "STRING"};
  options = {hash:{
    'action': ("cancel")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-trigger'] || depth0['ic-trigger']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-trigger", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    <ic-button class=\"primary\">Add Item</ic-button>\n  </div>\n</ic-modal-footer>");
  return buffer;
  
});

Ember.TEMPLATES["ic-menu-css"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<style>\nic-menu-trigger {\n  padding: 6px;\n  border: 1px solid transparent;\n  border-radius: 3px 3px 0 0;\n  border-bottom: none;\n  z-index: 1;\n  position: relative;\n}\n\nic-menu-trigger i:before {\n  color: #bbb;\n}\n\nic-menu.is-open ic-menu-trigger {\n  border-color: #aaa;\n  background: #fff;\n  z-index: 3;\n}\n\nic-menu-trigger:hover i:before,\nic-menu.is-open ic-menu-trigger i:before {\n  color: #555;\n}\n\nic-menu-items {\n  font-family: inherit;\n  right: 0;\n  z-index: 2;\n  top: 22px;\n  border-radius: 3px 0px 3px 3px;\n}\n\nic-menu-item {\n  font: inherit;\n}\n\nic-menu-item:focus {\n  background: #3A87AD;\n}\n</style>");
  
});

Ember.TEMPLATES["item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "renaming", {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n    ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  stack1 = helpers.view.call(depth0, "renameModuleItem", {hash:{
    'class': ("flex-6")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "ID"};
  options = {hash:{
    'value': ("title")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveRename", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</button>\n      <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelRename", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</button>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n    ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  stack1 = helpers.view.call(depth0, {hash:{
    'class': ("flex-6")
  },inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n      <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("item.html_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" <!-- (i: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.indent", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(", p: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.position", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(") --></a>\n      <div class=\"rename-button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "rename", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-edit\"></i></div>\n    ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n  <div class=\"flex flex-column flex-6\">\n    <div>\n      ");
  hashContexts = {'value': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'value': ("title"),
    'placeholder': ("Enter title here")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    ");
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n  ");
  hashContexts = {'id': depth0,'on-close': depth0};
  hashTypes = {'id': "ID",'on-close': "STRING"};
  options = {hash:{
    'id': ("dialogId"),
    'on-close': ("closeEditModal")
  },inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-modal'] || depth0['ic-modal']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-modal", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "edit_module_item_modal", "item", options) : helperMissing.call(depth0, "render", "edit_module_item_modal", "item", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, options, hashTypes, hashContexts;
  data.buffer.push("\n  ");
  options = {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack1 = helpers['ic-menu']) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0['ic-menu']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers['ic-menu']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "STRING"};
  options = {hash:{
    'tagName': ("a"),
    'href': ("#")
  },inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-trigger'] || depth0['ic-menu-trigger']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-trigger", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack2 = helpers['ic-menu-list']) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0['ic-menu-list']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers['ic-menu-list']) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  options = {hash:{
    'style': ("display: block;")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-settings'] || depth0['ic-icon-settings']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-settings", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'on-select': depth0};
  hashTypes = {'on-select': "STRING"};
  options = {hash:{
    'on-select': ("openEditModal")
  },inverse:self.noop,fn:self.program(18, program18, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-item'] || depth0['ic-menu-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n      ");
  hashContexts = {'on-select': depth0};
  hashTypes = {'on-select': "STRING"};
  options = {hash:{
    'on-select': ("remove")
  },inverse:self.noop,fn:self.program(21, program21, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-item'] || depth0['ic-menu-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n      ");
  hashContexts = {'on-select': depth0};
  hashTypes = {'on-select': "STRING"};
  options = {hash:{
    'on-select': ("addItemAbove")
  },inverse:self.noop,fn:self.program(24, program24, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-item'] || depth0['ic-menu-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n      ");
  hashContexts = {'on-select': depth0};
  hashTypes = {'on-select': "STRING"};
  options = {hash:{
    'on-select': ("addItemBelow")
  },inverse:self.noop,fn:self.program(27, program27, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-item'] || depth0['ic-menu-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['t'] || depth0['t']),stack1 ? stack1.call(depth0, "edit", options) : helperMissing.call(depth0, "t", "edit", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program19(depth0,data) {
  
  
  data.buffer.push("Edit");
  }

function program21(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['t'] || depth0['t']),stack1 ? stack1.call(depth0, "remove", options) : helperMissing.call(depth0, "t", "remove", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program22(depth0,data) {
  
  
  data.buffer.push("Remove");
  }

function program24(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['t'] || depth0['t']),stack1 ? stack1.call(depth0, "add_item_above", options) : helperMissing.call(depth0, "t", "add_item_above", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program25(depth0,data) {
  
  
  data.buffer.push("Add item above");
  }

function program27(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['t'] || depth0['t']),stack1 ? stack1.call(depth0, "add_item_above", options) : helperMissing.call(depth0, "t", "add_item_above", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program28(depth0,data) {
  
  
  data.buffer.push("Add item below");
  }

function program30(depth0,data) {
  
  
  data.buffer.push("\n  [Sv]\n");
  }

  data.buffer.push("<menu type=\"context\" ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  options = {hash:{
    'id': ("contextmenuId")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" style=\"display: none;\">\n  <menuitem label=\"Edit module item\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></menuitem>\n  <menuitem accesskey=\"r\" label=\"Remove module item\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></menuitem>\n  <menuitem label=\"Add item Above\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addItemAbove", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></menuitem>\n  <menuitem label=\"Add item below\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addItemBelow", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></menuitem>\n</menu>\n\n");
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "item._editing", {hash:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n<availability class=\"flex-2\">\n  <strong>Available</strong> Jan 1, 2014\n</availability>\n\n<due-date class=\"flex-2\">\n  <strong>Due</strong> Feb 1, 2014\n</due-date>\n\n<points class=\"flex-1\">\n  10 pts\n</points>\n\n<publish>\n  ");
  hashContexts = {'fill-value': depth0,'style': depth0};
  hashTypes = {'fill-value': "STRING",'style': "STRING"};
  options = {hash:{
    'fill-value': ("red"),
    'style': ("display: block;width: 16px;height: 16px;")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-publish'] || depth0['ic-icon-publish']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-publish", options))));
  data.buffer.push("\n</publish>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "editing", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "item._editing", {hash:{},inverse:self.program(30, program30, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  return buffer;
  
});

Ember.TEMPLATES["modal-css"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<style>\nic-modal-body.columned {\n  display: -webkit-flex;\n  display: flex;\n}\n\nic-modal ic-stacked-tabs {\n  overflow: hidden;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n\nic-modal-body > .padded {\n  -webkit-flex: 2.5;\n  flex: 2.5;\n}\n\nic-modal ic-tab {\n  flex: 1;\n  padding: 0px 20px;\n  background-color: white;\n  border-right: 1px solid #E3E4E4;\n  cursor: default;\n  display: flex;\n  align-items: center;\n  min-height: 40px;\n  max-height: 80px;\n}\n\nic-modal ic-tab.active{\n  background-color: #EEF2F4;\n  box-shadow: 0 0 0 1px #E3E4E4;\n  border-right: 1px solid transparent;\n}\n\nic-modal ic-tab:hover:not(.active) {\n  background: rgba(250, 250, 250, 0.82);\n}\n\nic-modal .modal-container {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  background: rgba(0, 0, 0, 0.82);\n  position: fixed;\n  display: -webkit-flex;\n  display: flex;\n}\n\n@media (max-width: 970px) {\n  ic-modal .modal {\n    position:fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n  }\n\n  ic-modal-body {flex: 1}\n}\n\n@media (min-width: 971px) {\n  ic-modal .modal {\n    border-radius: 5px;\n    margin: auto;\n    max-width: 750px;\n    max-height: 85%;\n    background-color: white;\n    -webkit-flex: .8;\n            flex: .8;\n  } \n\n  ic-modal-header {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n  }\n\n  ic-modal-header-close {\n    border-top-right-radius: 5px;\n  }\n\n  ic-modal-footer {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n}\n\nic-modal-body {\n  overflow: scroll;\n  background-color: #EEF2F4;\n}\n\nic-modal-body.padded,\nic-modal-body  > .padded{\n  padding: 12px;\n}\n\nic-modal-header {\n  background-color: white;\n  display: -webkit-flex;\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid #E3E4E4;\n}\n\nic-modal-title {\n  -webkit-flex: 1;\n  flex: 1;\n  font-size: 1.4em;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; \n  font-weight: 300;\n  line-height: 100%;\n  padding: 20px;\n}\n\nic-modal-header-close {\n  transition: background-color 0.15s;\n  -webkit-transition: background-color 0.15s;\n  width: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: .5;\n}\n\nic-modal-header-close:hover {\n  opacity: 1;\n  background-color: #f1f1f1;\n}\n\nic-modal-header .modal-header-center {\n  text-align: center;\n  -webkit-flex: 1;\n          flex: 1;\n}\n\nic-modal-header .modal-header-right {\n  padding: 6px;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n\nic-modal-footer {\n  display: -webkit-flex;\n  display: flex;\n  background-color: white;\n  border-top: 1px solid #E3E4E4;\n}\n\nic-modal-footer .modal-footer-left {\n  -webkit-flex: 1;\n          flex: 1;\n}\n\nic-modal-footer .modal-footer-center {\n  text-align: center;\n  -webkit-flex: 1;\n          flex: 1;\n}\n\nic-modal-footer .modal-footer-right {\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n  padding: 14px 12px;\n}\n</style>");
  
});

Ember.TEMPLATES["module"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "STRING"};
  options = {hash:{
    'tagName': ("a"),
    'href': ("#")
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-trigger'] || depth0['ic-menu-trigger']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-trigger", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n      ");
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack2 = helpers['ic-menu-list']) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0['ic-menu-list']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers['ic-menu-list']) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  options = {hash:{
    'style': ("display: block;")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-settings'] || depth0['ic-icon-settings']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-settings", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n        ");
  hashContexts = {'on-select': depth0};
  hashTypes = {'on-select': "STRING"};
  options = {hash:{
    'on-select': ("showAddModuleItemModal")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-item'] || depth0['ic-menu-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n        ");
  hashContexts = {'on-select': depth0};
  hashTypes = {'on-select': "STRING"};
  options = {hash:{
    'on-select': ("openEditModuleModal")
  },inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-item'] || depth0['ic-menu-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n        ");
  hashContexts = {'on-select': depth0};
  hashTypes = {'on-select': "STRING"};
  options = {hash:{
    'on-select': ("remove")
  },inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-item'] || depth0['ic-menu-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n        ");
  hashContexts = {'on-select': depth0};
  hashTypes = {'on-select': "STRING"};
  options = {hash:{
    'on-select': ("addModuleAbove")
  },inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-item'] || depth0['ic-menu-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n        ");
  hashContexts = {'on-select': depth0};
  hashTypes = {'on-select': "STRING"};
  options = {hash:{
    'on-select': ("addModuleBelow")
  },inverse:self.noop,fn:self.program(17, program17, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-item'] || depth0['ic-menu-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['t'] || depth0['t']),stack1 ? stack1.call(depth0, "edit", options) : helperMissing.call(depth0, "t", "edit", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("Add item");
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['t'] || depth0['t']),stack1 ? stack1.call(depth0, "edit", options) : helperMissing.call(depth0, "t", "edit", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program9(depth0,data) {
  
  
  data.buffer.push("Edit module");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['t'] || depth0['t']),stack1 ? stack1.call(depth0, "remove", options) : helperMissing.call(depth0, "t", "remove", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program12(depth0,data) {
  
  
  data.buffer.push("Remove module");
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['t'] || depth0['t']),stack1 ? stack1.call(depth0, "add_module_above", options) : helperMissing.call(depth0, "t", "add_module_above", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program15(depth0,data) {
  
  
  data.buffer.push("Add module above");
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['t'] || depth0['t']),stack1 ? stack1.call(depth0, "add_module_above", options) : helperMissing.call(depth0, "t", "add_module_above", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program18(depth0,data) {
  
  
  data.buffer.push("Add module below");
  }

function program20(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    ");
  hashContexts = {'href': depth0,'data': depth0,'is-loading': depth0};
  hashTypes = {'href': "ID",'data': "ID",'is-loading': "ID"};
  options = {hash:{
    'href': ("module.items_url"),
    'data': ("module.items"),
    'is-loading': ("isLoadingModuleItems")
  },inverse:self.noop,fn:self.program(21, program21, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-lazily-paginated-records'] || depth0['ic-lazily-paginated-records']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-lazily-paginated-records", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n      <module-items class=\"flex flex-column\">      \n        ");
  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  stack1 = helpers.each.call(depth0, "item", "in", "module.items", {hash:{
    'itemController': ("item")
  },inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </module-items>\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isLoadingModuleItems", {hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    ");
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ItemView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

function program24(depth0,data) {
  
  
  data.buffer.push("\n        Loading\n      ");
  }

function program26(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addItemForDevelopment", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n          +\n        </button>\n      ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    ");
  hashContexts = {'id': depth0,'on-close': depth0};
  hashTypes = {'id': "ID",'on-close': "STRING"};
  options = {hash:{
    'id': ("dialogId"),
    'on-close': ("hideAddModuleItemModal")
  },inverse:self.noop,fn:self.program(29, program29, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-modal'] || depth0['ic-modal']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-modal", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program29(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "add_module_item_modal", "item", options) : helperMissing.call(depth0, "render", "add_module_item_modal", "item", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<module ");
  hashContexts = {'contextmenu': depth0};
  hashTypes = {'contextmenu': "STRING"};
  options = {hash:{
    'contextmenu': ("contextmenuId")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n  <menu type=\"context\" ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  options = {hash:{
    'id': ("contextmenuId")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" style=\"display: none;\">\n    <menuitem accesskey=\"r\" label=\"Add module item\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addItem", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></menuitem>\n    <menuitem label=\"Delete module\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></menuitem>\n  </menu>\n\n  <module-header>\n    <module-title class=\"flex-4\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "module.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</module-title>\n    <prerequisites>\n      <strong>Prereqs:</strong> Week 1 Module    \n    </prerequisites>\n  \n    <publish>\n      ");
  hashContexts = {'fill-value': depth0,'style': depth0};
  hashTypes = {'fill-value': "STRING",'style': "STRING"};
  options = {hash:{
    'fill-value': ("red"),
    'style': ("display: block;width: 16px;height: 16px;")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ic-icon-publish'] || depth0['ic-icon-publish']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-icon-publish", options))));
  data.buffer.push("\n    </publish>\n\n    ");
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack2 = helpers['ic-menu']) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0['ic-menu']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers['ic-menu']) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </module-header>\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "items_count", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "addingModuleItem", {hash:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n</module>");
  return buffer;
  
});

Ember.TEMPLATES["modules-app-css"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<style>\nmodules,\nmodule {\n  display: -webkit-flex;\n  display: flex;\n\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n\nmodule-item {\n  padding-left: 12px;\n}\n\nmodule {\n  padding: 8px;\n}\n\nmodule-header {\n  height: 40px;\n}\n\nmodule-item a {\n  text-decoration: none;\n  color: black;\n  font-size: 1.10em;\n}\n\nmodule-item .rename input[type=\"text\"],\nmodule-item .rename input[type=\"text\"]:focus,\nmodule-item .rename input[type=\"text\"]:active {\n  padding: 0;\n  border: 0 none;\n  box-shadow: 0 0 0 transparent;\n  -webkit-box-shadow: 0 0 0 transparent;\n  margin:0;\n  border:0;\n  width: 340px;\n}  \n\nmodule-items {\n  background-color: white;\n  border-radius: 6px;\n  border: 1px solid #E4E6E6;\n}\n\nmodule-title {\n  font-size: 1.2em;\n  font-weight: bold;\n}\n\nmodule-header {\n  display: -webkit-flex;\n  display: flex;\n\n  -webkit-flex-direction: row;\n  flex-direction: row;\n\n  -webkit-align-items: center;\n  align-items: center;\n}\n\nmodule-item {\n  display: -webkit-flex;\n  display: flex;\n\n  -webkit-flex-direction: row;\n  flex-direction: row;\n\n  -webkit-align-items: center;\n  align-items: center;\n\n  border-bottom: 1px solid #E4E6E6;\n  min-height: 34px;\n}\n\nprerequisites {\n  display: inline-block;\n  background-color: #E1E5E9;\n  border: 1px solid #BDC1C7;\n  border-radius: 14px;\n  padding: 2px 12px;\n}\n\nic-menu,\npublish {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\navailability,\ndue-date,\npoints,\nprerequisites {\n  font-size: .9em;\n}\n\n/* ----------- */\n\nic-icon-settings {\n  width: 16px;\n  height: 16px;\n}\n\nmodule-item.indent-0 .ig-title {\n  margin-left: 0;\n}\n\nmodule-item.indent-1 .ig-title {\n  margin-left: 10px;\n}\n\nmodule-item.indent-2 .ig-title {\n  margin-left: 20px;\n}\n\nmodule-item.indent-3 .ig-title {\n  margin-left: 30px;\n}\n\nmodule-item.indent-4 .ig-title {\n  margin-left: 40px;\n}\n\nmodule-item:hover .rename-button {\n  opacity: 0.2;\n  transition: opacity 0.35s;\n  -webkit-transition: opacity 0.35s;\n  -moz-transition: opacity 0.35s;\n  -ie-transition: opacity 0.35s;\n}\n\nmodule-item .rename-button {\n  display: inline-block;\n  opacity: 0;\n}\n\nmodule-item .rename-button:hover {\n  opacity: 1;\n}\n\nmodule-item .rename {\n  display: inline-block;\n}\n</style>");
  
});

Ember.TEMPLATES["modules"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n    <modules>\n    ");
  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  stack1 = helpers.each.call(depth0, "module", "in", "modules", {hash:{
    'itemController': ("module")
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </modules>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isLoadingModules", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ModuleView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n      Loading...\n    ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n      [Add button]\n    ");
  }

  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "soon-to-be-global-css", "", options) : helperMissing.call(depth0, "render", "soon-to-be-global-css", "", options))));
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "ic-menu-css", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "ic-modal-css", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "ic-dialog-css", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "component-css", "", options) : helperMissing.call(depth0, "render", "component-css", "", options))));
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "modal-css", "", options) : helperMissing.call(depth0, "render", "modal-css", "", options))));
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "modules-app-css", "", options) : helperMissing.call(depth0, "render", "modules-app-css", "", options))));
  data.buffer.push("\n\n<div class=\"header-bar\">\n  <button class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "add", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Create module</button>\n</div>\n\n<modules-app>\n  ");
  hashContexts = {'href': depth0,'data': depth0,'is-loading': depth0};
  hashTypes = {'href': "ID",'data': "ID",'is-loading': "ID"};
  options = {hash:{
    'href': ("url"),
    'data': ("modules"),
    'is-loading': ("isLoadingModules")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-lazily-paginated-records'] || depth0['ic-lazily-paginated-records']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-lazily-paginated-records", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</modules-app>");
  return buffer;
  
});

Ember.TEMPLATES["soon-to-be-global-css"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<style>\n.flex {\n  display: -webkit-flex;\n  display: flex;\n}\n\n.flex-row {\n  -webkit-flex-direction: row;\n  flex-direction: row;\n}\n\n.flex-column {\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n\n.flex-wrap {\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n.align-items-center {\n  -webkit-align-items: center;\n  align-items: center;\n}\n\n.justify-content-center {\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\n.flex-1 { flex: 1; -webkit-flex: 1; }\n.flex-2 { flex: 2; -webkit-flex: 2; }\n.flex-3 { flex: 3; -webkit-flex: 3; }\n.flex-4 { flex: 4; -webkit-flex: 4; }\n.flex-5 { flex: 5; -webkit-flex: 5; }\n.flex-6 { flex: 6; -webkit-flex: 6; }\n.flex-7 { flex: 7; -webkit-flex: 7; }\n.flex-8 { flex: 8; -webkit-flex: 8; }\n\n</style>");
  
});

});