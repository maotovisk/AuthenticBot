const name = 'ping'
const description = 'Ping'
const execute = (message, args) => {
    message.channel.send('Pong.');
}

export { name, description, execute }