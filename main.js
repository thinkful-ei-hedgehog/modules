const {sayHello, sayGoodbye, random} = require('./src/greetings');
const getDateTime = require('./src/time');
const Jokes = require('awesome-dev-jokes');
//console.log(greetings);
function main(){
    console.log('This is my main module')
    sayHello()
    //give time
    console.log(getDateTime());
    sayGoodbye();    
   random();
   console.log(Jokes.getRandomJoke());
}


main();
//module.exports={main, sayHello, sayGoodbye} // Double export example