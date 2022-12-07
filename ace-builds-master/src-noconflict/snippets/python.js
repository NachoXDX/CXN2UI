ace.define("ace/snippets/python.snippets",["require","exports","module"], function(require, exports, module){module.exports = "snippet #!\n\t#!/usr/bin/env python\nsnippet while\n\twhile ${1:condition}:\n\t\t${2:# TODO: write code...}\n# dowh - does the same as do...while in other languages\nsnippet if\n\tif ${1:condition}:\n\t\t${2:# TODO: write code...}\nsnippet else\n\telse:\n\t\t${1:# TODO: write code...}\nsnippet elif\n\telif ${1:condition}:\n\t\t${2:# TODO: write code...}\n# For\nsnippet for\n\tfor ${1:item} in ${2:items}:\n\t\t${3:# TODO: write code...}\n# Encodes\nsnippet moveL\n\tmoveL(${1:x},${2:y},${3:z})\nsnippet CXN2.move_joints\n\tCXN2.move_joints([${1:j1},${2:j2},${3:j3},${4:j4},${5:j5},${6:j6}])\nsnippet CXN2.shift_pose\n\tCXN2.shift_pose(${1:pose},${2:amt})\nsnippet CXN2.set_arm_max_velocity\n\tCXN2.set_arm_max_velocity(${1:vel})\nsnippet CXN2.wait\n\tCXN2.wait(${1:time})\nsnippet CXN2.set_gripper\n\tCXN2.set_gripper(${1:amt})\nsnippet CXN2.move_pose\n\tCXN2.move_pose(${1:x},${2:y},${3:z},${4:r},${5:p},${6:y})\nsnippet CXN2.move_line\n\tCXN2.move_line(${1:x},${2:y},${3:z},${4:r},${5:p},${6:y})\n";

});

ace.define("ace/snippets/python",["require","exports","module","ace/snippets/python.snippets"], function(require, exports, module){"use strict";
exports.snippetText = require("./python.snippets");
exports.scope = "python";

});                (function() {
                    ace.require(["ace/snippets/python"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            