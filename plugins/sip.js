let handler = async m => m.reply(`
┏━╱▔▔╲━━━━━━━━━┓
┃╭▏▕▍▍▏┈┈╭━━━━╮┃
┃╰▏╭╰╮▏┈┈┃▍▍┃┈┃┃
┃┈▏┳╰╯▏▆▔▔▔╲┃┈┣┃
┃┈▏╰━╯▏┣━━╯╱╰━╯┃
┃▔╲╰╯╱▔╰━━━╮┈┈┈┃
┗━━━━━━OKEY┛
`.trim())
handler.command = /^👍$/i

module.exports = handler
