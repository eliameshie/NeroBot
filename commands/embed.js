// Intializing Discord and other Dependencies.
const Discord = require('discord.js');

// Variables for Embed
const embedTitle = 'Helpful Commands';
const embedDesc = '***C O M I N G S O O N*** ';
const embedColor = 'A6D8FF';
const embedFooter = 'Developed by Nero Studios LLC | eli#3981';
const errorColor = '';

module.exports = {
    name: 'embed',
    description: "embed",
    execute(message, args) {


    const helpEmbed = new Discord.RichEmbed()
      .setTitle(embedTitle)
      .setColor(embedColor)
      .setDescription(embedDesc)
      .setFooter(embedFooter);
    

    

    message.channel.send(helpEmbed);
    }
}