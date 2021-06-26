import { print, printError } from '../utils/printUtils.js';

const readyEvent = (discordBot) => {
    print(`Logged in as ${discordBot.user.tag}`);
}

const callEvents = (discordBot) => {
    discordBot.on("ready", ()=> {readyEvent(discordBot)});
}

export default {callEvents};
export {callEvents}