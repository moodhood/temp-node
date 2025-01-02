const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => { // this will listen for a specific event using the on() method 
    console.log(`data received: ${name}, ${id}`) // first argument is the name ('response') second argument is the callback which is executed when the event is emitted
})
customEmitter.on('response', () => {
    console.log(`other logic!`)
})


customEmitter.emit('response', 'john', 41) // this is to trigger an even using emit() with the event name as its first argument, the other arguments can be variables for the callback function
// order matters, first listen then emit

