import { Context, Scenes, session, Telegraf } from 'telegraf';
import { IConfigService } from './config/config.interface';
import { ConfigService } from './config/config.servise';
import { IBotContext } from './context/context.interface';
import { Command } from './commands/command.class';
import { StartCommand } from './commands/start.command';
import * as LocalSession from 'telegraf-session-local';
import { connectDB } from './database/db';
import { startScene } from './scenes/start.scene';

class Bot {
	bot: Telegraf<IBotContext>;
	commands: Command[] = [];
	stage = new Scenes.Stage<IBotContext>([startScene], {
		ttl: 10
	});
	constructor(private readonly configService: IConfigService) {
		this.bot = new Telegraf<IBotContext>(this.configService.get('BOT_TOKEN'));
		this.bot.use(new LocalSession({ database: 'sessions.json' }).middleware()); // для персистентных сессий использовать Redis
		this.bot.use(this.stage.middleware());
	}
	async init() {
		await connectDB();

		this.commands = [new StartCommand(this.bot)];
		for (const command of this.commands) {
			command.handle();
		}

		this.bot.telegram.setMyCommands(this.commands.map(command => command.command()));
		this.bot.launch();
	}
}

const bot = new Bot(new ConfigService()); //inversify

bot.init();

