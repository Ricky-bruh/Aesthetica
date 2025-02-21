import { Client } from 'discord.js';

export const handleEvents = (client: Client) => {
    client.on('ready', () => {
        console.log('Bot is ready!');
    });

    client.on('guildMemberAdd', async (member) => {
        // Welcome new members
    });
};
