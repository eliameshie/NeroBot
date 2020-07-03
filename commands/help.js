// Intializing Discord and other Dependencies.
const Discord = require('discord.js');

// Variables for Embed
const embedTitle = 'Helpful Commands';
const embedDesc = `${commands}`;
const embedColor = 'A6D8FF';
const embedFooter = 'Developed by Nero Studios LLC | eli#3981';
const errorColor = '';

// Commands

const commands =
`
Helpful Commands 
-
!help - Displays the current commands available on the server.
!anime - Displays the current anime of the week.
!cnight - Displays this weeks community night & info about it.
`

const adminCommands = 
`
Helpful Commands
-
!help - Displays the current commands available on the server.
!anime - Displays the current anime of the week.
!cnight - Displays this weeks community night & info about it.

Admin Commands 
-
!mute - Mute a player. (!mute @user <time> <reason>)
!poll - Creates a poll (!poll <question>) 

`


module.exports = {
    name: 'help',
    description: "help",
    execute(message, args) {

    const helpEmbed = new Discord.RichEmbed()
      .setTitle(embedTitle)
      .setColor(embedColor)
      .setDescription(embedDesc)
      .setFooter(embedFooter);
    
    message.channel.send(helpEmbed);
   
    }
}