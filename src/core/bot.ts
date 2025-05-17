import { Bot } from 'grammy';
import { BotContext } from '../types.js';

const BOT_API_KEY = process.env.TELEGRAM_API_BOT_KEY;

if (!BOT_API_KEY) {
	throw new Error('TELEGRAM_API_BOT_KEY is not define')
}

const bot = new Bot<BotContext>(BOT_API_KEY)

export default bot;
