import { print, printError } from '../utils/printUtils.js';
//
import Discord from 'discord.js';
import fs from 'fs';

const DEFAULT_PREFIX = JSON.parse(fs.readFileSync('./options.json')).globalPrefix;

const messageEvent = (discordBot, message) => {
    let prefix = DEFAULT_PREFIX; // || getGuildPrefix ;

    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

    if (!discordBot.commands.has(commandName)) return;

    const command = discordBot.commands.get(commandName);

	try {
        command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Error trying to execute this command!');
	}


}

const callCommands = (discordBot) => {
    discordBot.commands = new Discord.Collection();
        const commandFolders = fs.readdirSync('./commands');

        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                import(`../commands/${folder}/${file}`).then( (command) => {
                    discordBot.commands.set(command.name, command);
                });
            }
        }
        
    /*for (const file of commandFiles) {
        import(`../commands/${file}`).then( (command) => {
            discordBot.commands.set(command.name, command);
        });
    }*/
    
    discordBot.on("message", message => {messageEvent(discordBot, message)});
}

export {callCommands};