const Rx = require('rxjs');
const os = require('os');

var myObservable = Rx.Observable.create(function(observer){
    observer.next("Checking your system...");
    const cpus = os.cpus().length;
    const ram = os.totalmem();
    if(ram < 4*1000*1000*1000){
        observer.error("This app needs at least 4 GB of RAM");
    }
    if(cpus < 2){
        observer.error("Processor is not supported");
    }
    observer.complete();
});

myObservable.subscribe(function(x){console.log(x);},
                        function(err){console.log(err);},
                        function() {console.info('System is checked successfully.');});
