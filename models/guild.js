import mongoose from 'mongoose';

const guildSchema = new mongoose.Schema({
    guild_id: String,
    guild_name: String,
    guild_avatar_url: String,
    prefix: String,
    //prefferable_lang: String,
    welcome_channel: String,
    roles: {
        default: String,
        verified_role: String,
        custom: Array
    }
});


export default mongoose.model('guild', guildSchema);