var client = require('./lib/memjs/memjs').Client.create();

client.get('AAA');
client.set('BBB', 'ZZZ');

client.close();
