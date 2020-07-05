// Intializing Discord and other Dependencies.
const Discord = require('discord.js');

// Variables for Embed
const embedTitle = 'Anime of the Week';
const embedDesc = '**Top 5 Anime of the week.**';
const embedColor = 'A6D8FF';
const embedFooter = 'Developed by Nero Studios LLC | Week of 6 July 2020';
const errorColor = '';

module.exports = {
    name: 'embed',
    description: "embed",
    execute(message, args) {

    if(message.member.roles.some(role => ['// Higher Staff'].includes(role.name))) {

    const helpEmbed = new Discord.RichEmbed()
      .setTitle(embedTitle)
      .setColor(embedColor)
      .setDescription(embedDesc)
      .addField('1. Erased or Boku Dake ga Inai Machi', 'Available: [Funimation](http://google.com) [Crunchyroll](http://google.com)')
      .addField('2. Attack on Titan or Shingeki no Kyojin', 'Available: [Funimation](http://google.com) [Crunchyroll](http://google.com)')
      .addField('3. Naruto', 'Available: [Funimation](http://google.com) [Crunchyroll](http://google.com)')
      .addField('4. Hunter x Hunter', 'Available: [Funimation](http://google.com) [Crunchyroll](http://google.com)')
      .addField('5. My Hero Academia or Boku no Hero Academia', 'Available: [Funimation](http://google.com) [Crunchyroll](http://google.com)')
      .setFooter(embedFooter);
    

    

    message.channel.send(helpEmbed);
    } else {
      return message.reply("You don't have access to this command.")
    }
    }
}