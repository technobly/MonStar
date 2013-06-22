// This is a fake Bot script that just runs, 
// and terminates itself after 20 seconds
process.on('message', function(m) {
    if (m.status && m.msg === 'are_you_there') {
        process.send({ status: true, msg: 'online', process: m.process, name: "BOT #2" });
    }
});

setTimeout( function(){
    console.log('>>> BOT #2 will now go terminate.');
    process.exit();
}, 20000);
