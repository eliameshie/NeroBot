// Initializing Discord and other Dependencies.
const Discord = require('discord.js');
const Anime = require('../models/Anime.js');
const mongoose = require('mongoose');
require('dotenv').config();

// Variables for Embed
const embedTitle = 'Anime of the Week';
const embedDesc = '*3 Anime Recommendations for the Week.*';
const embedColor = 'A6D8FF';
const embedFooter = '';
const errorColor = '';

// Week of Anime
const week = '7/6/2020' // Make this better

// Connecting to MongoDB
mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true});

module.exports = {
    name: 'anime',
    description: "anime",
    execute(message, args) {
  

    
      const newAnime = new Anime({
        _id: mongoose.Types.ObjectId(),
        anime: args[2],
        funimation: args[3],
        crunchyroll: args[4],
        netflix: args[5],
        week: args[6]
      });




if(!args[1]) {

const animeData = Anime.find({week: week  }, (err, data) => {
    if (err) throw err;
    const animeEmbed = new Discord.RichEmbed()
      .setTitle(embedTitle)
      .setColor(embedColor)
      .setDescription(embedDesc)

for(var i = 0; i < data.length; i++) {

      animeEmbed.addField(`${i + 1}. ${data[i].anime}`,` *Available*: [Crunchyroll](${data[i].crunchyroll}) [Funimation](${data[i].funimation}) [Netflix](${data[i].netflix})`)
}
  
      animeEmbed.setFooter(`Developed by Nero Studios LLC | Week of ${data[0].week}`);
      

      message.channel.send(animeEmbed)
    })
    
} else {
  return null;
}

if(args[1] === 'add') {
  if(message.member.roles.some(role => ['// Higher Staff'].includes(role.name))) {
      newAnime.save()
} else {
  return message.reply("You don't have permission to run this command.");
}

}





    }
}