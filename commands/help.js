// Intializing Discord and other Dependencies.
const Discord = require('discord.js');

// Variables for Embed
const embedTitle = 'Helpful Commands';
const embedColor = 'A6D8FF';
const embedFooter = 'Developed by Nero Studios LLC | eli#3981';
const errorColor = '';

// Commands

const commands =
`
**!help** - Displays the current commands available on the server.
**!anime** - Displays the current anime of the week.
**!cnight** - Displays this weeks community night & info about it.
`

const adminCommands = 
`
**!help** - Displays the current commands available on the server.
**!anime** - Displays the current anime of the week.
**!cnight** - Displays this weeks community night & info about it.

**Admin Commands** 

**!mute** - Mute a player. (!mute @user <time> <reason>)
**!poll** - Creates a poll (!poll <question>) 

`

const embedDesc = `${commands}`;
const embedADesc = `${adminCommands}`;

module.exports = {
    name: 'help',
    description: "help",
    execute(message, args) {

    const helpEmbed = new Discord.RichEmbed()
      .setTitle(embedTitle)
      .setColor(embedColor)
      .setDescription(embedDesc)
      .setFooter(embedFooter);

    const adminhelpEmbed = new Discord.RichEmbed()
      .setTitle(embedTitle)
      .setColor(embedColor)
      .setDescription(embedADesc)
      .setFooter(embedFooter);


if(message.member.roles.some(role =>
    ['// Higher Staff'].includes(role.name))) {
    message.channel.send(adminhelpEmbed)
   } else {
    message.channel.send(helpEmbed);


   }


    }
}