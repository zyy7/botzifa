let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
╭═══════════════════════
║╭──❉ 〔 ⳹ ❋ཻུ۪۪⸙𝙀𝙭-𝘽𝙤𝙩𝙯⳹ ❋ཻུ۪۪ 〕 ❉────── 
║│➸ *_GROUP OFFC EX-BOTZ_*
║│➸  *https://chat.whatsapp.com/Hoiw17HdXfMDV8Pagsi4UG*
╰─────────❉
▌│█║▌║▌║║▌║▌║█│▌
⳹ ❋ཻུ۪۪⸙𝙀𝙭-𝘽𝙤𝙩𝙯⳹ ❋ཻུ۪۪⸙ 𝖻𝗒 𝖹𝗒𝗒𝖷𝖽
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
