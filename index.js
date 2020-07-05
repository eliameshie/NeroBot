require('dotenv').config();
const Discord = require('discord.js');

const TOKEN = process.env.TOKEN;
const fs = require('fs');
const PREFIX = '!'
const color = 'A6D8FF';  

const bot = new Discord.Client({
  'partials': ['MESSAGE']
});


// onJoin DM New User Embed. 

bot.on('guildMemberAdd', member => {

    const welcomeChannel = member.guild.channels.find(channel => channel.name === 'join-logs')

    const joinEmbed = new Discord.RichEmbed()
      .setTitle('Welcome to Nero Studios')
      .setColor(color)
      .setDescription('A creative agency looking for best out of the youth.')
      .addField('**Getting Started**', 'React to a role in #getting-started to gain access to the Discord.')
      .addField('**Other Information**', "Remember this a friendly community and toxicity will not be tolerated at all.")
      .addField('Final Notes', 'Thank you for checking out **Nero Studios!**')
      .setFooter('Developed by Nero Studios LLC | eli#3981');

  member.send(joinEmbed);

  member.addRole(member.guild.roles.find(role => role.name === "Limited-Access"));

  if(!welcomeChannel) return console.log('No Welcome Channel Exists.');

  welcomeChannel.send(`Welcome to **Nero**! ${member} has joined the server.`)




})

bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    const filterArray = message.content.split(" ");
    const filteredWords = ["coon", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy",  "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers",  "retard", "chink"];
    for(var i = 0; i < filteredWords.length; i++) {
      if(filterArray.includes(filteredWords[i])) {
        message.delete()
      }
    }




    switch (args[0]) {
 
        case "embed":
            bot.commands.get('embed').execute(message, args);
        break;

        case "help":
            bot.commands.get('help').execute(message, args);
        break;

        case "comnight":
            bot.commands.get('comnight').execute(message, args);
        break;


        case "poll":
            bot.commands.get('poll').execute(message, args);
        break;

        case "anime":
            bot.commands.get('anime').execute(message, args);
        break;

        case "mute":
            bot.commands.get('mute').execute(message, args);
        break;

        case "leaderboard":
            bot.commands.get('leaderboard').execute(message, args);
        break;






    }
 
});
 



bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity('Nero Studios LLC', { type: 'WATCHING' });

});


