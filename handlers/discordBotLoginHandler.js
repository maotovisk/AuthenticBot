import * as privateUtils from '../utils/privateFileHandler.js';

const loginBot = (discordBot) => {
    privateUtils.get('DISCORD_TOKEN').then(token => {
        discordBot.login(token);
    })
}

export { loginBot };
