import { Composer } from 'grammy';
import { BotContext } from '../../types.js';
import { keyboardFullMain, keyboardMain } from '../../core/keyboards.js';
import { TEXTS } from '../../helpers/texts.js';
import { commandConstant } from '../../helpers/command.constant.js';

export const fullInfo = new Composer<BotContext>();

fullInfo.command(commandConstant.full_info, async (ctx: BotContext): Promise<void> => {
	await ctx.reply(TEXTS.moreInfo, {
		reply_markup: keyboardFullMain,
		parse_mode: 'HTML'
	});
	if (ctx.callbackQuery) {
		ctx.callbackQuery.message?.editText(TEXTS.welcomeSecond, {
			parse_mode: 'HTML'
		})
	}
});
