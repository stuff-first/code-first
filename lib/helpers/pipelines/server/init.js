var shell = require('../../cmd-helper.js');
var fs = require('../../fs-helper.js');
var path = require('path');

var initServerCmd = "mkdir server server/src server/src/controllers server/src/routes server/src/routes/api; "
    + "cd server; npm init -y; npm i sequelize express";
module.exports = () => {
    return shell.exec(initServerCmd).then(() => {
        var results = [];
        ['server/src/server.js', 'server/src/routes/index.js'].map(file => {
            results.push(fs.copyFile(path.join(__dirname, '../../../files/copy', file), './' + file));
        })
        var installCmd = "cd server; npm i mysql2 @babel/polyfill; " +
        "npm i --save-dev @babel/preset-env";
        results.push(shell.exec(installCmd).then(() => {
            return fs.updateFile('./server/package.json', data => {
                const pkgObj = JSON.parse(data);
                pkgObj.main = "server.js";
                pkgObj.scripts.cpConfigJson = "mkdir dist/config; cp src/config/config.json dist/config/config.json";
                pkgObj.scripts.build = "npx babel src --out-dir dist; npm run cpConfigJson";
                pkgObj.scripts.start = "node dist/server.js";
                pkgObj.scripts.dev = "npx nodemon --exec \"npx @babel/node src/server.js\"";
                pkgObj.scripts.sequelize = "cd src; npx sequelize-cli";
                pkgObj.babel = {
                    presets: [
                        "@babel/env"
                    ]
                }
                return JSON.stringify(pkgObj, null, 2);
            })
        }));
        var sequelizeCmd = "cd server/src; npx sequelize-cli init";
        results.push(shell.exec(sequelizeCmd))
        return Promise.all(results)
    })
}