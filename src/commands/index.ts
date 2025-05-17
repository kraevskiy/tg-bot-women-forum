import { Composer } from 'grammy';
import { BotContext } from '../types.js';
import { BotCommand } from 'grammy/types';
import { start } from './start/index.js';

const commands = new Composer<BotContext>();

commands
	.use(start);

export default commands;

export const MyCommands: readonly BotCommand[] = [
	{command: 'start', description: 'Start'},
];
