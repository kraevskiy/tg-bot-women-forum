import { Composer } from 'grammy';
import { BotContext } from '../../types.js';
import { TEXTS } from '../../helpers/texts.js';
import { keyboardFullMain } from '../../core/keyboards.js';
import { queryConstant } from '../../helpers/query.constant.js';

export const fullInfo = new Composer<BotContext>();

fullInfo.callbackQuery(queryConstant.full_info, async (ctx) => {
	ctx.answerCallbackQuery();
	await ctx.reply(TEXTS.moreInfo, {
		reply_markup: keyboardFullMain,
		parse_mode: 'HTML'
	});
	ctx.callbackQuery.message?.editText(TEXTS.welcomeSecond, {
		parse_mode: 'HTML'
	})
})
