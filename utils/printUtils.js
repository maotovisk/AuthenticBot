import moment from 'moment';

const print = (message) => {
    if (message == "")
        throw "A message can't be empty"
    console.log(`[INFO] [${moment().format("DD/MM/YYYY, HH:mm:ss")}] ${message}`);
}

const printError = (message) => {
    if (message == "")
        throw "A message can't be empty"
    console.error(`[ERROR] [${moment().format("DD/MM/YYYY, HH:mm:ss")}] ${message}`);
}

export default print;
export {print, printError};