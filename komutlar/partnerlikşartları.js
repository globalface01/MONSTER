const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("```= Partnerlik Şartları =``` !")
  .setTimestamp()
  .setColor(0x000474e3)
 
  .addField('**1-Sunucuların linkleri partnerlik kanallarında paylaşılacak.**', 'GlobalFace')
  .addField('**2-Sunucu sahipleri kadim dostlar olarak kabul edilecektir.**', 'GlobalFace')
  .addField('**3-En ufak bir olayda partnerle yardım istediğimizde yanımızda bulunacaktır.**', 'GlobalFace')
  .addField('**Yukarıdaki maddelere uyulmadığı zaman partnerlik iptal edilir**', '`|🌹Partnerlerimizi seviyoruz🌹|`')
 
  
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p-ş'],
  permLevel: 0
};

exports.help = {
  name: 'partnerlikşartları',
  description: 'Partnerlik için gerekli olan şartları gösterir.',
  usage: 'partnerlikşartları'
};