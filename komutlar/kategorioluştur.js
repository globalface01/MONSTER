const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok'); // Bunu Başkasıda Kullana Bilmesi İçin Kanalları Yönet Yetkisi Verin
    if (kanal.length < 1) return message.reply('Lütfen oluşturacağım kanalın adını yaz.');
  message.delete();
  guild.createChannel(kanal, 'category');
  message.channel.send("Kategori oluşturuldu");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k-o'],
  permLevel: 3
};

exports.help = {
  name: 'kategorioluştur', 
  description: 'Bir kategori oluşturur.',
  usage: 'kategorioluştur [açmak istediğiniz kanalın adı]'
};