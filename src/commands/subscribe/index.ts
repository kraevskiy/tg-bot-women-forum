import { Composer } from 'grammy';
import { BotContext } from '../../types.js';
import { keyboardMain } from '../../core/keyboards.js';
import { TEXTS } from '../../helpers/texts.js';
import { commandConstant } from '../../helpers/command.constant.js';

export const subscribe = new Composer<BotContext>();

subscribe.command(commandConstant.subscribe, async (ctx: BotContext): Promise<void> => {
	await ctx.reply(TEXTS.subscribeSuccess, {
		parse_mode: 'HTML'
	});
});
