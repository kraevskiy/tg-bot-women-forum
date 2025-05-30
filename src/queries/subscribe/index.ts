import { Composer } from 'grammy';
import { BotContext } from '../../types.js';
import { TEXTS } from '../../helpers/texts.js';
import { queryConstant } from '../../helpers/query.constant.js';

export const subscribe = new Composer<BotContext>();

subscribe.callbackQuery(queryConstant.subscribe, async (ctx) => {
	ctx.answerCallbackQuery();
	await ctx.reply(TEXTS.subscribeSuccess, {
		parse_mode: 'HTML'
	});
	ctx.callbackQuery.message?.editReplyMarkup()
})
