ace.define("ace/theme/tomorrow_night",[], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-tomorrow-night";
exports.cssText = ".ace-tomorrow-night .ace_gutter {\
background: #1E1E1E;\
color: #D4D4D4\
}\
.ace-tomorrow-night .ace_print-margin {\
width: 1px;\
background: #1E1E1E\
}\
.ace-tomorrow-night {\
background-color: #1E1E1E;\
color: #D4D4D4\
}\
.ace-tomorrow-night .ace_cursor {\
color: #AEAFAD\
}\
.ace-tomorrow-night .ace_marker-layer .ace_selection {\
background: #373B41\
}\
.ace-tomorrow-night.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px e#1D1F21;\
}\
.ace-tomorrow-night .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-tomorrow-night .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #4B4E55\
}\
.ace-tomorrow-night .ace_marker-layer .ace_active-line {\
background: #282A2E\
}\
.ace-tomorrow-night .ace_gutter-active-line {\
background-color: #282A2E\
}\
.ace-tomorrow-night .ace_marker-layer .ace_selected-word {\
border: 1px solid #373B41\
}\
.ace-tomorrow-night .ace_invisible {\
color: #4B4E55\
}\
.ace-tomorrow-night .ace_keyword,\
.ace-tomorrow-night .ace_meta,\
.ace-tomorrow-night .ace_storage,\
.ace-tomorrow-night .ace_storage.ace_type,\
.ace-tomorrow-night .ace_support.ace_type {\
color: #569CD6\
}\
.ace-tomorrow-night .ace_keyword.ace_operator {\
color: #569CD6\
}\
.ace-tomorrow-night .ace_constant.ace_character,\
.ace-tomorrow-night .ace_constant.ace_numeric,\
.ace-tomorrow-night .ace_keyword.ace_other.ace_unit,\
.ace-tomorrow-night .ace_support.ace_constant,\
.ace-tomorrow-night .ace_variable.ace_parameter {\
color: #B5CEA8\
}\
.ace-tomorrow-night .ace_constant.ace_language {\
color: #569CD6\
}\
.ace-tomorrow-night .ace_constant.ace_language.ace_escape {\
color: #CE9178\
}\
.ace-tomorrow-night .ace_constant.ace_other {\
color: #CED1CF\
}\
.ace-tomorrow-night .ace_invalid {\
color: #CED2CF;\
background-color: #DF5F5F\
}\
.ace-tomorrow-night .ace_invalid.ace_deprecated {\
color: #CED2CF;\
background-color: #B798BF\
}\
.ace-tomorrow-night .ace_fold {\
background-color: #81A2BE;\
border-color: #C5C8C6\
}\
.ace-tomorrow-night .ace_entity.ace_name.ace_function,\
.ace-tomorrow-night .ace_support.ace_function {\
color: #DCDCAA\
}\
.ace-tomorrow-night .ace_variable {\
color: #9CDCFE\
}\
.ace-tomorrow-night .ace_variable.ace_language {\
color: #569CD6\
}\
.ace-tomorrow-night .ace_support.ace_class,\
.ace-tomorrow-night .ace_support.ace_type {\
color: #4EC9B0\
}\
.ace-tomorrow-night .ace_heading,\
.ace-tomorrow-night .ace_markup.ace_heading,\
.ace-tomorrow-night .ace_string {\
color: #CE9178\
}\
.ace-tomorrow-night .ace_entity.ace_name.ace_tag,\
.ace-tomorrow-night .ace_entity.ace_other.ace_attribute-name,\
.ace-tomorrow-night .ace_meta.ace_tag,\
.ace-tomorrow-night .ace_string.ace_regexp,\
.ace-tomorrow-night .ace_variable {\
color: #CC6666\
}\
.ace-tomorrow-night .ace_comment {\
color: #6A9955\
}\
.ace-tomorrow-night .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
                (function() {
                    ace.require(["ace/theme/tomorrow_night"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            