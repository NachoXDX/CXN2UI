// #region Bloques

Blockly.Blocks['CXN2_move_line'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move Line");
        this.appendValueInput("POSE_X")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("POSE_Y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("POSE_Z")
        .setCheck("Number")
        .appendField("z");
    this.appendValueInput("POSE_ROLL")
        .setCheck("Number")
        .appendField("roll");
    this.appendValueInput("POSE_PITCH")
        .setCheck("Number")
        .appendField("pitch");
    this.appendValueInput("POSE_YAW")
        .setCheck("Number")
        .appendField("yaw");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#3D4D9A");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['CXN2_move_joints'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move Joints");
            this.appendValueInput("JOINTS_1")
            .setCheck("Number")
            .appendField("j1");
        this.appendValueInput("JOINTS_2")
            .setCheck("Number")
            .appendField("j2");
        this.appendValueInput("JOINTS_3")
            .setCheck("Number")
            .appendField("j3");
        this.appendValueInput("JOINTS_4")
            .setCheck("Number")
            .appendField("j4");
        this.appendValueInput("JOINTS_5")
            .setCheck("Number")
            .appendField("j5");
        this.appendValueInput("JOINTS_6")
            .setCheck("Number")
            .appendField("j6");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#3D4D9A");
        this.setTooltip("Give all 6 joints to move the robot");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['CXN2_move_pose'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move Pose");
            this.appendValueInput("POSE_X")
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("POSE_Y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("POSE_Z")
            .setCheck("Number")
            .appendField("z");
        this.appendValueInput("POSE_ROLL")
            .setCheck("Number")
            .appendField("roll");
        this.appendValueInput("POSE_PITCH")
            .setCheck("Number")
            .appendField("pitch");
        this.appendValueInput("POSE_YAW")
            .setCheck("Number")
            .appendField("yaw");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#3D4D9A");
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

Blockly.Blocks['CXN2_shift_pose'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Shift");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["pos. x", "0"], ["pos. y", "1"], ["pos. z", "2"], ["rot. x", "3"], ["rot. y", "4"], ["rot. z", "5"]]), "SHIFT_POSE_AXIS")
        this.appendValueInput("SHIFT_POSE_VALUE")
            .setCheck("Number")
            .appendField("by");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#3D4D9A");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['CXN2_set_arm_max_speed'] = {
    init: function () {
        this.appendValueInput("SET_ARM_MAX_SPEED")
            .setCheck("Number")
            .appendField("Set Arm max. speed to");
        this.appendDummyInput()
            .appendField("%");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#3D4D9A");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Blockly.Blocks['niryo_one_calibrate_auto'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("Calibrate motors (auto)");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("Will auto calibrate motors. If already calibrated, will do nothing.");
//         this.setHelpUrl("");
//     }
// }; 

// Blockly.Blocks['niryo_one_calibrate_manual'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("Calibrate motors (manual)");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("Will manually calibrate motors (robot needs to be in home position). If already calibrated, will do nothing.");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_activate_learning_mode'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([["Activate", "1"], ["Deactivate", "0"]]), "LEARNING_MODE_VALUE")
//             .appendField("learning mode");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

Blockly.Blocks['CXN2_sleep'] = {
    init: function () {
        this.appendValueInput("SLEEP_TIME")
            .setCheck("Number")
            .appendField("Wait for ");
        this.appendDummyInput()
            .appendField("seconds");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#3D4D9A");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['CXN2_gripper'] = {
    init: function () {

        this.appendValueInput("GRIPPER")
            .setCheck("Number")
            .appendField("Gripper");
        this.appendDummyInput()
            .appendField("%");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#3D4D9A");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Blockly.Blocks['niryo_one_close_gripper'] = {
//     init: function () {
//         this.appendValueInput("CLOSE_GRIPPER")
//             .setCheck("Number")
//             .appendField("Close Gripper");
//         this.appendDummyInput()
//             .appendField("%");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
// }
// };

// Blockly.Blocks['niryo_one_change_tool'] = {
//     init: function () {
//         this.appendValueInput("NEW_TOOL_ID")
//             .setCheck("niryo_one_tool_select")
//             .appendField("Change tool to");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_tool_select'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([["gripper 1", "TOOL_GRIPPER_1_ID"], ["gripper 2", "TOOL_GRIPPER_2_ID"], ["gripper 3", "TOOL_GRIPPER_3_ID"], ["electromagnet 1", "TOOL_ELECTROMAGNET_1_ID"], ["vacuum pump 1", "TOOL_VACUUM_PUMP_1_ID"]]), "TOOL_SELECT");
//         this.setOutput(true, "niryo_one_tool_select");
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_detach_tool'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("Detach current tool");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_pull_air_vacuum_pump'] = {
//     init: function () {
//         this.appendValueInput("PULL_AIR_VACUUM_PUMP_ID")
//             .setCheck("niryo_one_tool_select")
//             .appendField("Pull air with Vacuum Pump");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_push_air_vacuum_pump'] = {
//     init: function () {
//         this.appendValueInput("PUSH_AIR_VACUUM_PUMP_ID")
//             .setCheck("niryo_one_tool_select")
//             .appendField("Push air with Vacuum Pump");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_setup_electromagnet'] = {
//     init: function () {
//         this.appendValueInput("SETUP_ELECTROMAGNET_ID")
//             .setCheck("niryo_one_tool_select")
//             .appendField("Setup Electromagnet");
//         this.appendValueInput("SETUP_ELECTROMAGNET_PIN")
//             .setCheck("niryo_one_gpio_select")
//             .setAlign(Blockly.ALIGN_RIGHT)
//             .appendField("with pin");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_gpio_select'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([["1A", "GPIO_1A"], ["1B", "GPIO_1B"], ["1C", "GPIO_1C"], ["2A", "GPIO_2A"], ["2B", "GPIO_2B"], ["2C", "GPIO_2C"]]), "GPIO_SELECT");
//         this.setOutput(true, "niryo_one_gpio_select");
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_sw_select'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([["SW1", "SW_1"], ["SW2", "SW_2"]]), "SW_SELECT");
//         this.setOutput(true, "niryo_one_sw_select");
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_activate_electromagnet'] = {
//     init: function () {
//         this.appendValueInput("ACTIVATE_ELECTROMAGNET_ID")
//             .setCheck("niryo_one_tool_select")
//             .appendField("Activate Electromagnet");
//         this.appendValueInput("ACTIVATE_ELECTROMAGNET_PIN")
//             .setCheck("niryo_one_gpio_select")
//             .setAlign(Blockly.ALIGN_RIGHT)
//             .appendField("with pin");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_deactivate_electromagnet'] = {
//     init: function () {
//         this.appendValueInput("DEACTIVATE_ELECTROMAGNET_ID")
//             .setCheck("niryo_one_tool_select")
//             .appendField("Deactivate Electromagnet");
//         this.appendValueInput("DEACTIVATE_ELECTROMAGNET_PIN")
//             .setCheck("niryo_one_gpio_select")
//             .setAlign(Blockly.ALIGN_RIGHT)
//             .appendField("with pin");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_digital_write'] = {
//     init: function () {
//         this.appendValueInput("DIGITAL_WRITE_PIN")
//             .setCheck("niryo_one_gpio_select")
//             .appendField("Set Pin");
//         this.appendDummyInput()
//             .appendField("to state")
//             .appendField(new Blockly.FieldDropdown([["HIGH", "PIN_HIGH"], ["LOW", "PIN_LOW"]]), "PIN_WRITE_SELECT");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_set_pin_mode'] = {
//     init: function () {
//         this.appendValueInput("SET_PIN_MODE_PIN")
//             .setCheck("niryo_one_gpio_select")
//             .setAlign(Blockly.ALIGN_RIGHT)
//             .appendField("Set Pin");
//         this.appendDummyInput()
//             .appendField("to mode")
//             .appendField(new Blockly.FieldDropdown([["INPUT", "PIN_MODE_INPUT"], ["OUTPUT", "PIN_MODE_OUTPUT"]]), "PIN_MODE_SELECT");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_digital_read'] = {
//     init: function () {
//         this.appendValueInput("DIGITAL_READ_PIN")
//             .setCheck("niryo_one_gpio_select")
//             .appendField("Get Pin");
//         this.appendDummyInput()
//             .appendField("state");
//         this.setInputsInline(true);
//         this.setOutput(true, "niryo_one_gpio_state");
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_gpio_state'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("state")
//             .appendField(new Blockly.FieldDropdown([["HIGH", "PIN_HIGH"], ["LOW", "PIN_LOW"]]), "GPIO_STATE_SELECT");
//         this.setOutput(true, "niryo_one_gpio_state");
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_set_12v_switch'] = {
//     init: function () {
//         this.appendValueInput("SET_12V_SWITCH")
//             .setCheck("niryo_one_sw_select")
//             .appendField("Set 12V Switch");
//         this.appendDummyInput()
//             .appendField("to state")
//             .appendField(new Blockly.FieldDropdown([["HIGH", "PIN_HIGH"], ["LOW", "PIN_LOW"]]), "SET_12V_SWITCH_SELECT");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_comment'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("Comment :")
//             .appendField(new Blockly.FieldTextInput(""), "COMMENT_TEXT");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("This block will not be executed.");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['niryo_one_break_point'] = {
//     init: function() {
//         this.appendDummyInput()
//             .appendField("Break Point");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("#3D4D9A");
//         this.setTooltip("Stop the execution of the program. Press 'play' to resume.");
//         this.setHelpUrl("");
// 	}
// };

// #endregion

// #region Python
Blockly.Python['CXN2_move_joints'] = function (block) {
    var number_joints_1 = Blockly.Python.valueToCode(block, 'JOINTS_1', Blockly.Python.ORDER_ATOMIC);
    var number_joints_2 = Blockly.Python.valueToCode(block, 'JOINTS_2', Blockly.Python.ORDER_ATOMIC);
    var number_joints_3 = Blockly.Python.valueToCode(block, 'JOINTS_3', Blockly.Python.ORDER_ATOMIC);
    var number_joints_4 = Blockly.Python.valueToCode(block, 'JOINTS_4', Blockly.Python.ORDER_ATOMIC);
    var number_joints_5 = Blockly.Python.valueToCode(block, 'JOINTS_5', Blockly.Python.ORDER_ATOMIC);
    var number_joints_6 = Blockly.Python.valueToCode(block, 'JOINTS_6', Blockly.Python.ORDER_ATOMIC);
    var code = 'CXN2.move_joints([' + number_joints_1 + ', ' + number_joints_2 + ', '
      + number_joints_3 + ', ' + number_joints_4 + ', ' + number_joints_5 + ', ' + number_joints_6 + '])\n'
    return code;
  };

  Blockly.Python['CXN2_move_pose'] = function (block) {
    var number_pose_x = Blockly.Python.valueToCode(block, 'POSE_X', Blockly.Python.ORDER_ATOMIC);
    var number_pose_y = Blockly.Python.valueToCode(block, 'POSE_Y', Blockly.Python.ORDER_ATOMIC);
    var number_pose_z = Blockly.Python.valueToCode(block, 'POSE_Z', Blockly.Python.ORDER_ATOMIC);
    var number_pose_roll = Blockly.Python.valueToCode(block, 'POSE_ROLL', Blockly.Python.ORDER_ATOMIC);
    var number_pose_pitch = Blockly.Python.valueToCode(block, 'POSE_PITCH', Blockly.Python.ORDER_ATOMIC);
    var number_pose_yaw = Blockly.Python.valueToCode(block, 'POSE_YAW', Blockly.Python.ORDER_ATOMIC);
  
    var code = 'CXN2.move_pose(' + number_pose_x + ', ' + number_pose_y + ', ' +
      number_pose_z + ', ' + number_pose_roll + ', ' + number_pose_pitch +
      ', ' + number_pose_yaw + ")\n";
    return code;
  };

  Blockly.Python['CXN2_move_line'] = function (block) {
    var number_pose_x = Blockly.Python.valueToCode(block, 'POSE_X', Blockly.Python.ORDER_ATOMIC);
    var number_pose_y = Blockly.Python.valueToCode(block, 'POSE_Y', Blockly.Python.ORDER_ATOMIC);
    var number_pose_z = Blockly.Python.valueToCode(block, 'POSE_Z', Blockly.Python.ORDER_ATOMIC);
    var number_pose_roll = Blockly.Python.valueToCode(block, 'POSE_ROLL', Blockly.Python.ORDER_ATOMIC);
    var number_pose_pitch = Blockly.Python.valueToCode(block, 'POSE_PITCH', Blockly.Python.ORDER_ATOMIC);
    var number_pose_yaw = Blockly.Python.valueToCode(block, 'POSE_YAW', Blockly.Python.ORDER_ATOMIC);
  
    var code = 'CXN2.move_line(' + number_pose_x + ', ' + number_pose_y + ', ' +
      number_pose_z + ', ' + number_pose_roll + ', ' + number_pose_pitch +
      ', ' + number_pose_yaw + ")\n";
    return code;
  };
  
  Blockly.Python['CXN2_set_arm_max_speed'] = function(block) {
    var value_set_arm_max_speed = Blockly.Python.valueToCode(block, 'SET_ARM_MAX_SPEED', Blockly.Python.ORDER_ATOMIC) || '0';
    var code = 'CXN2.set_arm_max_velocity(' + value_set_arm_max_speed + ')\n';
    return code;
  };

  Blockly.Python['CXN2_shift_pose'] = function (block) {
    var dropdown_shift_pose_axis = block.getFieldValue('SHIFT_POSE_AXIS');
    var number_shift_pose_value = Blockly.Python.valueToCode(block, 'SHIFT_POSE_VALUE', Blockly.Python.ORDER_ATOMIC);
  
    var code = 'CXN2.shift_pose(' + dropdown_shift_pose_axis + ', ' +
      number_shift_pose_value + ')\n';
    return code;
  };

  Blockly.Python['CXN2_sleep'] = function (block) {
    var value_sleep_time = Blockly.Python.valueToCode(block, 'SLEEP_TIME', Blockly.Python.ORDER_ATOMIC) || '0';
    var code = 'CXN2.wait(' + value_sleep_time + ')\n';
    return code;
  };

  Blockly.Python['CXN2_gripper'] = function(block) {
    var value_gripper = Blockly.Python.valueToCode(block, 'GRIPPER', Blockly.Python.ORDER_ATOMIC) || '0';
    var code = 'CXN2.set_gripper(' + value_gripper + ')\n';
    return code;
  };
// #endregion
