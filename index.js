 "use strict";

 const Discord = require("discord.js");
 const parser = require("ini-parser");
 const config = parser.parseFileSync('config.ini')
 const client = new Discord.Client();
 
 client.on("ready", () => {
   console.log("I am ready!");
 });
 
 client.on("message", (message) => {
   if (message.content.startsWith("ping")) {
     message.channel.send("pong!");
   }
 });
 
 client.on("message", (message) => {
  if (message.content.startsWith("!username")) {
    client.user.setUsername("Madelyn")
    message.channel.send('my name is Maddie Addie!')
  }
 });

 client.on("message", (message) => {
   if (message.content.startsWith("!shutdown")) {
    message.channel.send("see ya!")
    client.destroy()
   }
 })

 console.log("attempting token " + config.client.token)
 client.login(config.client.token);
