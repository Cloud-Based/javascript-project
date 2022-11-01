const { EventEmitter } = require('events');

const birthdayEventListener = ({ name }) => {
  console.log(`Happy birthday ${name}!`);
}

const myEmitter = new EventEmitter();

myEmitter.on('birth-day', birthdayEventListener);

myEmitter.emit('birth-day', { name: 'Harry' });
