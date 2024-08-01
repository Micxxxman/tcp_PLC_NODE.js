var moment = require('moment')

// create an empty modbus client
var ModbusRTU = require("modbus-serial")
var client = new ModbusRTU();

// open connection to a tcp line
// 创建Modbus TCP连接，IP是15.18.200.23,端口502
client.connectTCP("15.18.200.23", { port: 502 });

// 读取非甲烷总烃的关于总烃、甲烷、NMHC这3个寄存器（寄存器地址分别为22,25,28）中的浓度
// 每隔5秒钟读取保持寄存器的值，从寄存器地址22开始读取，读10个寄存器到data数组中
setInterval(function(){
    client.readHoldingRegisters(22, 10, function(err, data){
        // 获取当前时间
        //moment.locale('zh-cn');
        console.log("----------------------------------------------------------------------");
        console.log("数据时间是：" + moment().format('YYYY年MM月DD日 HH时mm分ss秒'));
        console.log("总烃的浓度是:" + data.data[0] * 0.01 + "ppmV");	// 总烃浓度对应的寄存器地址为22
        console.log("CH4的浓度是:" + data.data[3] * 0.01 + "ppmV"); // CH4浓度对应的寄存器地址为22
        console.log("NHMC的浓度是:" + data.data[6] * 0.01 + "ppmV"); // NHMC浓度对应的寄存器地址为22
        console.log("----------------------------------------------------------------------");

        //console.log(data.data);
    });
}, 5000);