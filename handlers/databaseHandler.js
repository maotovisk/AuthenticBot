import { print, printError } from '../utils/printUtils.js';
import * as privateHandler from '../utils/privateFileHandler.js';

const mongoString = await privateHandler.get('MONGO_URL');

const readyEvent = () => {
    print(`Database connected!`);
}

const startDatabase = async (mongoose) => {

    mongoose.connect(mongoString,{ useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.once("open", readyEvent);
    
    mongoose.connection.on('error', printError);
}

export {startDatabase};