'use strict'
import readline from 'readline';
import * as fs from 'fs';
import { print, printError } from './printUtils.js'

const PRIVATE_FILE_PATH = "./.private/private.json";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const checkPrivateFiles = async () => {
    try {
        fs.exists(PRIVATE_FILE_PATH, async exists => {
            if (exists) {
                print("Private file exists!")
            } else {
                printError("Private file not found!")
                print("###### Please get your credentials prepared! The bot will set it up!")
                let privateFile = {};

                rl.question("Please insert your DISCORD API TOKEN: ", (discordToken) => {
                    privateFile.DISCORD_TOKEN = discordToken;
                    rl.question("Please insert your OSU API TOKEN: ", (osuToken) => {
                        privateFile.OSU_API = osuToken;
                        rl.question("Please insert your LEAGUE API TOKEN: ", (leagueToken) => {
                            privateFile.LEAGUE_API = leagueToken;
                            fs.writeFile(PRIVATE_FILE_PATH, JSON.stringify(privateFile), (err) => {
                                if (err)
                                    throw err;
                                console.log(JSON.stringify(privateFile));
                                print("Private file has been created")
                            });
                        });
                    });
                });
            }
        });
    } catch (e) {
        printError(e);
    }
}

const login = (discordBot) => {
    get('DISCORD_TOKEN').then( token => {
        discordBot.login(token);
    })
}

const get = (token) => {
    return new Promise((resolve, reject) => {
        fs.readFile(PRIVATE_FILE_PATH, (err, data) => {
            let credentials = JSON.parse(data);
            switch (token) {
                case "DISCORD_TOKEN":
                    resolve(credentials.DISCORD_TOKEN);
                    break;
                case "OSU_API":
                    resolve(credentials.OSU_API);
                    break;
                case "LEAGUE_API":
                    resolve(credentials.LEAGUE_API);
                    break;
            }
        });
    });
}

export default checkPrivateFiles;
export { checkPrivateFiles, login, get }