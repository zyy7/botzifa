let handler = async (m, { conn }) => {
let caption = `
⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　^v^
¸︵︵( ░░ )︵.︵.︵
(´░░░░░░ ') ░░░' )
`´︶´¯`︶´`︶´︶´`　^v^　　^v^
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪
`

conn.sendButton( m.chat, caption, `hallo juga`, `hallo juga`, `.👍`, m)

       }
       
handler.customPrefix = /^(hallo|hay|p)/i
handler.command = new RegExp
module.exports = handler
