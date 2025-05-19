import { Composer } from 'grammy';
import { BotContext } from '../types.js';
import { BotCommand } from 'grammy/types';
import { start } from './start/index.js';
import { subscribe } from './subscribe/index.js';
import { fullInfo } from './full_info/index.js';

const commands = new Composer<BotContext>();

commands
	.use(start)
	.use(subscribe)
	.use(fullInfo);

export default commands;
