import{generateWAMessageFromContent}from'@whiskeysockets/baileys';import _0x4fa16c from'fs';const handler=async(_0x396876,{conn:_0x2ac78f,usedPrefix:_0x366664,command:_0x49596b})=>{const _0x4dde53=await _0x2ac78f['getName'](_0x396876['sender']),_0x38d15c='*hola\x20amig@\x20Buenaa*\x0aBOTCITO\x0aAGRESIVO\x0aA:\x20SU\x0aSERVICIO\x20OFC\x20BOT*\x20\x0a𝙲𝙾𝙽𝙲𝙴𝙿𝚃𝙾:\x20APOYO\x0a𝙿𝙰𝚈𝙿𝙰𝙻:\x20https://www.paypal.com/paypalme/botcitoagresivoonly\x0a𝙽𝚄𝙼𝙴𝚁𝙾:\x20*envía\x20un\x20mensaje\x20si\x20has\x20realizado\x20un\x20apoyo\x20a\x20base\x20de\x20eso\x20recibirás\x20un\x20mensaje\x20de\x20agradecimiento*\x0ahttp://wa.me/+59891364361'['trim'](),_0x60399d={'quoted':_0x396876,'userJid':_0x2ac78f['user']['jid']},_0x2f182c=generateWAMessageFromContent(_0x396876['chat'],{'liveLocationMessage':{'degreesLatitude':0x0,'degreesLongitude':0x0,'caption':_0x38d15c,'secuenceNumber':'0','contextInfo':{'mentionedJid':_0x2ac78f['parseMention']()}}},_0x60399d);_0x2ac78f['relayMessage'](_0x396876['chat'],_0x2f182c['message'],{});};handler['help']=['donasi'],handler['tags']=['info'],handler['command']=/^dona(te|si)|donar|apoyar$/i;export default handler;