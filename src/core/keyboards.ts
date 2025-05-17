import { InlineKeyboard } from 'grammy';
import { TEXTS } from '../helpers/texts.js';

export const keyFullInfo = InlineKeyboard.text(TEXTS.btnMore, 'full-info');
export const keySubscribeForum = InlineKeyboard.text(TEXTS.btnSubscribeForumGetGift, 'subscribe');

export const keyboardMain = InlineKeyboard.from([
	[keyFullInfo],
	[keySubscribeForum]
])


export const keySubscribe = InlineKeyboard.text(TEXTS.btnSubscribeGetGift, 'subscribe');

export const keyboardFullMain = InlineKeyboard.from([
	[keySubscribe]
])
