// This is a fake Bot script that just runs, 
// and creates an uncaughtException itself after 30 seconds
process.on('message', function(m) {
    if (m.status && m.msg === 'are_you_there') {
        process.send({ status: true, msg: 'online', process: m.process, name: "BOT #1" });
    }
});

setTimeout( function(){
    console.log('>>> BOT #1 will now crash');
    var crash = "brick wall";
    crash.push({"time to crash":"now"});
}, 30000);
