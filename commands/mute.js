// Initializing Discord and other Dependencies.
const Discord = require('discord.js');
const ms = require('ms');

// Variables for Embed
const embedTitle = 'Mute';
const embedDesc = '';
const embedColor = 'A6D8FF';
const embedFooter = 'Developed by Nero Studios LLC';
const errorColor = '';


module.exports = {
    name: 'mute',
    description: "mute",
    execute(message, args) {
  


    if(message.member.roles.some(role => ['Higher Staff']
      .includes(role.name))) {
        

    let mention = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    if (!mention) return message.reply("Member isn't currently in the discord");

    let defaultRole = message.guild.roles.find(role => role.name === 'Member')
    let mutedRole = message.guild.roles.find(role => role.name === 'Muted')

    if(!mutedRole) return message.reply("Cannot mute this person.")

    let time = args[2];


    if(!args[2]) {
      return message.reply("Specify a time period")
    }

    
    if(!args[3]) {
      return message.reply("Specify a reason for Queue Ban")
    }


    mention.removeRole(defaultRole.id);
    mention.addRole(mutedRole.id);
    const mutedEmbed = 
    `${mention.user.tag} muted for **${ms(ms(time))}**`;

    const reason = args[3];


    const muteEmbed = new Discord.RichEmbed()
      .setTitle(embedTitle)
      .setColor(embedColor)
      .setDescription(`Mute intialized by ${message.author.tag}`)
      .addField('**Mute**', `${mutedEmbed}`)
      .addField('**Reason**', `${reason}`)
      .addField('Bugs', 'If you find any bugs, please contact a **Developer**.')
      .setFooter(embedFooter);


    const logChannel = message.guild.channels.find(channel => channel.name === 'mute-logs')
    logChannel.send(muteEmbed);






    setTimeout(function() {
      mention.addRole(defaultRole.id)
      mention.removeRole(mutedRole.id)
      const logChannel = message.guild.channels.find(channel => channel.name === 'mute-logs')
      message.delete()
    }, ms(time));

      } else {
            message.channel.send("You don't have permission for this command.");
      }
    }
}