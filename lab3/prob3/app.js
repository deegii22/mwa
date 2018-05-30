const EventEmitter = require('events');
class Clock extends EventEmitter{
    constructor(){
        super();
    }
}

//init
const clock = new Clock();

//addListener
clock.on('tick', () => console.log('woohoo'));

//emit
setInterval(() => clock.emit('tick'),1000);