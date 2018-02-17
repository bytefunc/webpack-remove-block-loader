/*jslint node:true */
"use strict";

var loaderUtils = require("loader-utils");

function regexEscape(str) {
    return str.replace(
        /([\^|\$|\.|\*|\+|\?|\=|\!|\:|\\|\/|\(|\)|\[|\]|\{|\}])/gi,
        "\\$1"
    );
}

function removeBlockLoader(content) {
    var opts = loaderUtils.getOptions(this) || {};
    if (opts.active === false) {
        return content;
    }
    var start = regexEscape(opts.start || "/*");
    var end = regexEscape(opts.end || "*/");
    var blocks = [];
    if (opts.hasOwnProperty("blocks")) {
        blocks = opts.blocks;
    } else {
        blocks.push("devblock");
    }

    blocks.forEach(function(block) {
        var regex = new RegExp(
            "[\\t ]*" +
                start +
                " ?(" +
                block +
                "):start ?" +
                end +
                "[\\s\\S]*?" +
                start +
                " ?\\1:end ?" +
                end +
                "[\\t ]*\\n?",
            "g"
        );
        content = content.replace(regex, "");
    });

    if (this.cacheable) {
        this.cacheable(true);
    }

    return content;
}

module.exports = removeBlockLoader;
