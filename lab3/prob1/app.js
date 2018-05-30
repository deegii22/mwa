var dns = require('dns');

dns.resolve4('www.mum.edu', function (err, addresses) {
    if (err) throw err;

    console.log('addresses: ' + addresses);
});