import { IBotContext } from 'src/context/context.interface';
import { StringDecoder } from 'string_decoder';
import { Telegraf } from 'telegraf';
import { BotCommand } from 'telegraf/typings/core/types/typegram';

export abstract class Command {
	constructor(public bot: Telegraf<IBotContext>) {}

	abstract handle(): void;
	abstract command(): BotCommand;
}
