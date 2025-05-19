import { Composer } from 'grammy';
import { BotContext } from '../../types.js';
import { keyboardMain } from '../../core/keyboards.js';
import { TEXTS } from '../../helpers/texts.js';
import { commandConstant } from '../../helpers/command.constant.js';

export const start = new Composer<BotContext>();

start.command(commandConstant.start, async (ctx: BotContext): Promise<void> => {
	await ctx.reply(TEXTS.welcome, {
		reply_markup: keyboardMain,
		parse_mode: 'HTML'
	});
});
