import bot from './core/bot.js';
import commands from './commands/index.js';
import { hydrate } from '@grammyjs/hydrate';
import callbackQuery from './queries/index.js';
import { GrammyError, HttpError } from 'grammy';
import { menuCommands } from './core/menu-commands.js';

export async function init(): Promise<void> {
	bot.use(hydrate());
	await bot.api.setMyCommands(menuCommands);
	bot.use(commands);
	bot.use(callbackQuery);
	bot.catch((e) => {
		const ctx = e.ctx;
		console.error(`Error while handling update ${ctx.update.update_id}`)

		if (e instanceof GrammyError) {
			console.error("Error in request: ", e.description)
		} else if (e instanceof HttpError) {
			console.error("Could not contact Telegram: ", e)
		} else {
			console.error("Unknown error: ", e)
		}
	})
	bot.start();
}
