const { Command } = require("klasa");

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            cooldown: 8,
            aliases: ["garbagewho"],
            requiredPermissions: ["ATTACH_FILES", "USE_EXTERNAL_EMOJIS", "EMBED_LINKS"],
            description: msg => msg.language.get("COMMAND_GARBAGE_DESCRIPTION"),
            extendedHelp: "No extended help available.",
            usage: "[GarbageWho:user]"
        });
    }

    async run(msg, [GarbageWho = msg.author]) {
        const image = await this.client.idiotic.garbage(GarbageWho.displayAvatarURL({ format: "png", size: 128 }));
        return msg.channel.sendFile(image);
    }

};
