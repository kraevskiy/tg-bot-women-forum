import { Composer } from 'grammy';
import { BotContext } from '../../types.js';
import { TEXTS } from '../../helpers/texts.js';

export const subscribe = new Composer<BotContext>();

subscribe.callbackQuery('subscribe', async (ctx) => {
	ctx.answerCallbackQuery();
	await ctx.reply(TEXTS.subscribeSuccess, {
		parse_mode: 'HTML'
	});
	ctx.callbackQuery.message?.editReplyMarkup()
})
