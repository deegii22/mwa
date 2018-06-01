const os = require('os');

var checkSystem = function(){
    return new Promise(function(resolve, reject){
        const cpus = os.cpus().length;
        const ram = os.totalmem();
        if(ram < 4*1000*1000*1000){
            reject("This app needs at least 4 GB of RAM");
        }

        if(cpus < 2){
            reject("Processor is not supported");
        }

        resolve("System is checked successfully.");
            
    })
}
checkSystem()
    .then(data => console.log(data))
    .catch(err => console.error(err));
console.log("Checking your system...");    