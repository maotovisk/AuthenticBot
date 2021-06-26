import {checkPrivateFiles} from './utils/privateFileHandler.js';
import {callEvents} from './handlers/eventHandler.js';
import {callCommands} from './handlers/commandHandler.js';
import {loginBot} from './handlers/discordBotLoginHandler.js';
import {startDatabase} from './handlers/databaseHandler.js';
import Discord from 'discord.js';
import mongoose from 'mongoose';
import {print, printError} from './utils/printUtils.js';

const discordBot = new Discord.Client();

checkPrivateFiles().then((check)=> {
    if (check) {
        startDatabase(mongoose);
        loginBot(discordBot);
        callEvents(discordBot);
        callCommands(discordBot);
    } else {
        printError("Error while checking credentials!")
    }
});





