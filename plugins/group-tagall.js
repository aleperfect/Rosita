let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:Disfruta tu estadia en el grupo💋😍* ${pesan}`
let teks = `*⺀Bienvenid@ al grupo, espero que te sientas comod@, soy el Bot Rosita💋⺀*\n\n❄️ ${oi}\n\n❄️ *@fixy._.art.18:*\n`
for (let mem of participants) {
teks += `🐥 @${mem.id.split('@')[0]}\n`}
teks += `➤ 𝐁𝐨𝐭 𝐑𝐨𝐬𝐢𝐭𝐚`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler