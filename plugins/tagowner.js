let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *@6285742344873 Ada yang Manggil tuh*`, m)

  conn.reply(m.chat, `
Onii Chan! (@6285742344873  ), Dipanggil Temenmu!
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6285742344873 /i
handler.command = new RegExp

module.exports = handler
