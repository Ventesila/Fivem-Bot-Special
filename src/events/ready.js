const { Events, Discord } = require("discord.js");
const gamedig = require("gamedig");

module.exports = {
  name: Events.ClientReady,
  once: true,
  
  async execute(client, config) {
    console.log(`${client.user.tag} HAZIR.`)
    
    const server = config.server;
  
    setInterval(async function playersUpdate() {
      const samp = await gamedig.query({
        type: "fivem",
        host: server.ip || "195.85.201.169",
        port: server.port || "30120",
      });
      

      client.user.setPresence({ activities: [{ name: `Oyuncular: ${samp.raw.clients}/${samp.maxplayers}` }], status: "dnd"});
    }, config.duration)
  }
}