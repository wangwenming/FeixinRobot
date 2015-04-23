var Ai = {
    process: function(msg) {
        var rule;
        for (var ruleName in rules) {
            rule = rules[ruleName];
            if (rule.test.test(msg.msg.replace(/(<([^>]+)>)/ig, ''))) {
                return rule.response(msg);
            }
        }

        return '不知道你在说些什么';
    }
};

var rules = {};
rules.nihao = {
    test: /你好/i,
    response: function(msg) {
        return '世界';
    }
};

rules.hello = {
    test: /hello/i,
    response: function(msg) {
        return 'world';
    }
};

rules.alive = {
    test: /(h|(我还?(在线|活着)(吗|么)))/i,
    response: function(msg) {
        return msg.sTime + '还活着';
    }
};

rules.time = {
    test: /现在(几点|时间)/i,
    response: function(msg) {
        return '现在时间: ' + (new Date).toLocaleString();
    }
};

rules.whoareyou = {
    test: /(你是谁|(你叫(什么|啥)(名字)?))/i,
    response: function(msg) {
        return '我是飞信机器人';
    }
};

rules.whoami = {
    test: /(我是谁|(你叫(什么|啥)(名字)?))/i,
    response: function(msg) {
        return '你丫的是' + msg.fromName;
    }
};

rules.qcms = {
    test: /QCMS/i,
    response: function(msg) {
        return 'QCMS的飞信群号是：77071471，文档：http://doraemon.hulk.corp.qihoo.net:8360/user/home#tf-user-home-qcms';
    }
};
