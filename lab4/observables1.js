const os = require('os');
const {Observable, of, from} = require('rxjs');

let checkSystem = new Promise((resolve, reject) =>{
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

from(checkSystem).subscribe((e)=> console.log(e));
console.log("Checking your system...");    