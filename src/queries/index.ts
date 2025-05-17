import { Composer } from 'grammy';
import { BotContext } from '../types.js';
import { fullInfo } from './full-info/index.js';
import { subscribe } from './subscribe/index.js';

const callbackQuery = new Composer<BotContext>();

callbackQuery.use(fullInfo).use(subscribe)

export default callbackQuery;
