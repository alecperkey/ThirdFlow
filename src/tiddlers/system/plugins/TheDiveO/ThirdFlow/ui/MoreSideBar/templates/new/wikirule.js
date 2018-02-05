/*\
created: 20180205162715434
modified: 20180205163131597
title: $:/plugins/TheDiveO/ThirdFlow/ui/MoreSideBar/templates/new/wikirule.js
type: application/javascript
module-type: wikirule
\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/* Gives a name to our wikiparser rule and exports it */
exports.name = "dash";
/* Export the type(s) of rule, can be "inline: true" or/and "block: true" */
exports.types = { inline: true };

/* Initializes the rule and tells the parser when to match */
exports.init = function(parser) {
	this.parser = parser;
	this.matchRegExp = /fOO!/mg;
};

/* Parses markup after the parser has matched out rule. It then returns
 * a parse tree.
 */
exports.parse = function() {
	/* Move past this match */
	this.parser.pos = this.matchRegExp.lastIndex;
	return [{
		type: "entity",
		entity: "foo"
	}];
};

})();
