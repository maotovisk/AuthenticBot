import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    osu_id: String,
    discord_id: String,
    token: String,
    session_id: String,
    access: {
        role_id: Number,
        admin: Boolean
    }
});


export default mongoose.model('user', userSchema);