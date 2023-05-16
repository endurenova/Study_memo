
var arryValue = function() {
    var idx_00 = "value1";
    var idx_01 = "value2";
    return [idx_00, idx_01];
};
var codes = arryValue();
var key1 = codes[0];
var key2 = codes[1];


var dicValue = function() {
    var key1;
    var key2;
    return {
        key1: "value1",
        key2: "value2"
    };
};
var a = dicValue();
var dCodes = a.key1;
var dCodes2 = a.key2;


var countResizeHandle = (ch) => {
    var countResizable = 0;
    var countSiblings = 0;
    Array.from(ch).forEach((list) => {
        if (list.classList.contains("resizable")) {
            countResizable++;
        }else{
            countSiblings++;
        }
    });
    return [countResizable, countSiblings];
}