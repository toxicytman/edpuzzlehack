let tries = 0;
let isSuccess = false;

function getAssignment() {
    console['log'](`${'[CS] got the assignment id'}`);
    return new URL(document.URL)['pathname']['split']('/')[2]
}

function sendRequest() {
    if (tries == 3) {
        console['log'](`${'[CS] something went wrong'}`);
        return
    };
    const _0x503ax5 = new XMLHttpRequest();
    _0x503ax5['open']('GET', `${'https://edpuzzle.com/api/v3/assignments/'}${getAssignment()}${''}`, true);
    _0x503ax5['onerror'] = (_0x503ax6) => {
        isSuccess = false;
        tries++;
        console['log'](`${'[CS] retrying..'}`);
        sendRequest()
    };
    _0x503ax5['onload'] = (_0x503ax6) => {
        parseData(_0x503ax5['response'])
    };
    _0x503ax5['send']()
}

function parseData(_0x503ax8) {
    console['clear']();
    let _0x503ax6 = JSON['parse'](_0x503ax8);
    console['log'](`${'[CS] Got the answers'}`);
    _0x503ax6['medias'][0]['questions']['forEach']((_0x503ax9) => {
        if (_0x503ax9['type']['includes']('multiple')) {
            _0x503ax9['choices']['forEach']((_0x503axa) => {
                if (_0x503axa['isCorrect']) {
                    var _0x503ax6 = 'Q: ' + _0x503ax9['body'][0]['text'] + '\x0AA: ' + _0x503axa['body'][0]['html'];
                    console['log'](_0x503ax6);
                    alert(_0x503ax6)
                }
            })
        } else {
            var _0x503ax6 = 'Q: ' + _0x503ax9['body'][0]['text'] + '\x0AA: ' + choice['body'][0]['html'];
            console['log'](_0x503ax6);
            alert(_0x503ax6)
        }
    })
}
setTimeout(() => {
    console['clear']();
    sendRequest()
}, 1000)
