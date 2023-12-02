import { IBotContext } from 'src/context/context.interface';
import { Command } from './command.class';
import { Markup, Telegraf } from 'telegraf';
import { BotCommand } from 'telegraf/typings/core/types/typegram';

export class StartCommand extends Command {
	constructor(bot: Telegraf<IBotContext>) {
		super(bot);
	}
	handle(): void {
		this.bot.start((ctx: IBotContext) => {
			console.log(ctx.session);
			ctx.scene.enter('start-scene');
			// ctx.reply(
			// 	'Вам понравился курс?',
			// 	Markup.inlineKeyboard([
			// 		Markup.button.callback('Да', 'yes'),
			// 		Markup.button.callback('Нет', 'no')
			// 	])
			// );
		});

		// this.bot.action('yes', (ctx: IBotContext) => {
		// 	ctx.editMessageText('Круто!');
		// });

		// this.bot.action('no', (ctx: IBotContext) => {
		// 	ctx.editMessageText('пипец!');
		// });
	}
	command(): BotCommand {
		return {
			command: 'start',
			description: 'Starts the bot'
		};
	}
}
