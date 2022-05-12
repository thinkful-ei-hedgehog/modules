const moment = require('moment');

function getDateTime(){
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}

module.exports = getDateTime;