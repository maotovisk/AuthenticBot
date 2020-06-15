import {checkPrivateFiles, login} from './utils/privateFileHandler.js';
import {callEvents} from './handlers/eventHandler.js';
import Discord from 'discord.js';
import {print, printError} from './utils/printUtils.js';

const discordBot = new Discord.Client();

checkPrivateFiles().then((check)=> {
    if (check) {
        login(discordBot);
        callEvents(discordBot);
    } else {
        printError("Error while checking credentials!")
    }
});





