import bot from './core/bot.js';
import commands from './commands/index.js';
import { hydrate } from '@grammyjs/hydrate';
import callbackQuery from './queries/index.js';

export async function init(): Promise<void> {
	bot.use(hydrate());
	bot.use(commands);
	bot.use(callbackQuery);
	bot.start()
}
