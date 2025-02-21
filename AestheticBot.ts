import { Client, GatewayIntentBits } from 'discord.js';
import { commands } from './commands';
import { handleEvents } from './events';
import { ThemeService } from './services';

export class AestheticBot {
    public client: Client;
    private themeService: ThemeService;

    constructor() {
        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent
            ]
        });
        
        this.themeService = new ThemeService();
        this.initialize();
    }

    private initialize(): void {
        handleEvents(this.client);
        commands.forEach(cmd => this.client.on(cmd.name, cmd.execute));
    }

    public async start(): Promise<void> {
        await this.client.login(process.env.TOKEN);
    }
}
