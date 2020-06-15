import {checkPrivateFiles, login} from './utils/privateFileHandler.js';
import {callEvents} from './handlers/eventHandler.js';
import Discord from 'discord.js';

const discordBot = new Discord.Client();

checkPrivateFiles();

login(discordBot);

callEvents(discordBot);






