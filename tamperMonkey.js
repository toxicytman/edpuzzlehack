// ==UserScript==
// @name         Edpuzzle Cheats
// @version      1
// @description  Gets Ed Puzzle awnsers
// @author       Teach Me Python
// @match        *://edpuzzle.com/assignments/*
// @grant        none
// @run-at       document-end
// ==/UserScript==


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


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
    const _0xdfa0x5 = new XMLHttpRequest();
    _0xdfa0x5['open']('GET', `${'https://edpuzzle.com/api/v3/assignments/'}${getAssignment()}${''}`, true);
    _0xdfa0x5['onerror'] = (_0xdfa0x6) => {
        isSuccess = false;
        tries++;
        console['log'](`${'[CS] retrying..'}`);
        sendRequest()
    };
    _0xdfa0x5['onload'] = (_0xdfa0x6) => {
        parseData(_0xdfa0x5['response'])
    };
    _0xdfa0x5['send']()
}

function parseData(_0xdfa0x8) {
    console['clear']();
    let _0xdfa0x6 = JSON['parse'](_0xdfa0x8);
    console['log'](`${'[CS] Got the answers'}`);
    _0xdfa0x6['medias'][0]['questions']['forEach']((_0xdfa0x9) => {
        if (_0xdfa0x9['type']['includes']('multiple')) {
            _0xdfa0x9['choices']['forEach']((_0xdfa0xa) => {
                if (_0xdfa0xa['isCorrect']) {
                    var _0xdfa0x6 = 'Q: ' + _0xdfa0x9['body'][0]['text'] + '\x0AA: ' + _0xdfa0xa['body'][0]['html'];
                    console['log'](_0xdfa0x6);
                    alert(_0xdfa0x6)
                }
            })
        }
    })
}
setTimeout(() => {
    console['clear']();
    sendRequest()
}, 1000)

