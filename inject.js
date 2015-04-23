// 这里的JS和页面的不相通呢，$().jquery 版本都不一样，不是同一个，影响不到。。。
//
$(document).ajaxComplete(function(event, xhr, settings) {
    // https://webim.feixin.10086.cn/WebIM/GetConnect.aspx?Version=688
    /*
    rc: 200
    rv:
        0:
            Data:
                0:
                    GData:
                        gUri: "sip:PG47191655@fetion.com.cn;p=4007"
                        members:
                        0:
                            MemberUri: "sip:226184800@fetion.com.cn;p=16101"
                            ms: "0"
                    GDataType: 9
            DataType: 8

            DataType: 3
            Data:
                fromName: null
                fromUid: 338019260
                fromUri: "sip:1637946304@fetion.com.cn;p=16301"
                msg: "<Font Face='Helvetica' Color='16777216' weight = '5' Size='10'>ack</Font>"
                msgId: 2
                msgType: 2
                sTime: "2015-04-22 08:06:10"
                sc: 0
                toUid: 1176436933
                toUri: "sip:737370821@fetion.com.cn;p=31110"
     */
    var data = JSON.parse(xhr.responseText);
    if (data.rv && data.rv[0] && data.rv[0].DataType == 3) {
        var msg = data.rv[0].Data;
        var responseMsg = Ai.process(msg);
        $.post('https://webim.feixin.10086.cn/WebIM/SendMsg.aspx?Version=' + ApiUrl.Version, {
            To: msg.fromUid,
            IsSendSms: 0,
            Msg: responseMsg,
            ssid: WebIM.SessionId
        });
    }
});
