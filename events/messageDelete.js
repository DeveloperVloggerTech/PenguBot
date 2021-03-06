const { Event } = require("klasa");
const logger = require("../utils/log");

module.exports = class extends Event {

    async run(message) {
        if (!message.guild || message.author.bot) return;

        const log = logger("messages", message.guild, `❌ **Message by ${message.member}** was \`deleted\` in ${message.channel}\n**Content:**\n${message.content}`, `${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL());
        const loggingChannel = message.guild.channels.get(message.guild.configs.loggingChannel);
        if (log && loggingChannel) await loggingChannel.send(log);
    }

    async init() {
        if (!this.client.gateways.guilds.schema.logs.has("messages")) {
            this.client.gateways.guilds.schema.logs.add("messages", { type: "boolean", default: false });
        }
    }

};
