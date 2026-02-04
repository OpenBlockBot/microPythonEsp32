export default Blockly => {
    Blockly.Python['microPython_pin_esp32ReadTouchPin'] = function (block) {
        var pin = block.getFieldValue('PIN');

        Blockly.Python.imports_['Pin'] = 'from machine import Pin';
        Blockly.Python.imports_['TouchPad'] = 'from machine import TouchPad';
        Blockly.Python.variables_['TouchPad' + pin] = 't' + pin + ' = TouchPad(Pin(' + pin + '))';

        return ['t' + pin + '.read()', Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
};
