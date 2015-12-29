var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');
var environment = args.env || "dev";
console.log(environment);
var common_conf = {
  name: "netlore mmo game server",
  version: "0.0.1",
  environment: environment,
  max_players: 100,
  data_paths: {
    items: __dirname + "/resources/game_data/items",
    maps: __dirname + "/resources/game_data/items"
  },
  starting_zone: "rm_map_home"
}

var conf = {
  production: {
   ip: args.ip || "0.0.0.0",
   port:args.port || 8081,
   database: "mongodb://127.0.0.1/rm2mmo_prod"
  },
  dev: {
   ip: args.ip || "0.0.0.0",
   port:args.port || 8082,
   database: "mongodb://127.0.0.1/rm2mmo_dev"
  },
 
}

extend(false, conf.production, common_conf);
extend(false, conf.dev, common_conf);

module.exports = config = conf[environment];
