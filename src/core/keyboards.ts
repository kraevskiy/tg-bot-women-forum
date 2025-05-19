import { InlineKeyboard } from 'grammy';
import { TEXTS } from '../helpers/texts.js';
import { commandConstant } from '../helpers/command.constant.js';
import { queryConstant } from '../helpers/query.constant.js';

export const keyFullInfo = InlineKeyboard.text(TEXTS.btnMore, queryConstant.full_info);
export const keySubscribeForum = InlineKeyboard.text(TEXTS.btnSubscribeForumGetGift, queryConstant.subscribe);

export const keyboardMain = InlineKeyboard.from([
	[keyFullInfo],
	[keySubscribeForum]
])


export const keySubscribe = InlineKeyboard.text(TEXTS.btnSubscribeGetGift, queryConstant.subscribe);

export const keyboardFullMain = InlineKeyboard.from([
	[keySubscribe]
])
