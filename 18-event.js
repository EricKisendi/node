const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) => {
    console.log(`Data recieved user ${name} you are ${age}`)
})
customEmitter.on('response', () => {
    console.log('data recieved')
})
customEmitter.emit('response', 'john', 25)