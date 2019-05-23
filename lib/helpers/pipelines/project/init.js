const shell = require('../../cmd-helper.js');
const fs = require('../../fs-helper.js');
const path = require('path');

const initCmd = "npm init -y";
module.exports = () => {
    return shell.exec(initCmd).then(() => {
        const events = [];
        ['.eslintignore', '.eslintrc.json', 'README.md'].map(file => {
            events.push(fs.copyFile(path.join(__dirname, '../../../files/copy', file), './' + file));
        })
        events.push(fs.copyFile(path.join(__dirname, '../../../files/copy/_.git'), './.gitignore'));
        events.push(fs.updateFile("./package.json", data => {
            const pkgObj = JSON.parse(data);
            pkgObj.scripts.iServer = "cd server; npm i";
            pkgObj.scripts.iClient = "cd client; npm i";
            pkgObj.scripts.install = "npm run iServer; npm run iClient";
            pkgObj.scripts.start = "cd server; npm start";
            pkgObj.scripts.devServer = "cd server; npm run dev";
            pkgObj.scripts.devClient = "cd client; npm start";
            pkgObj.scripts.dev = "npx concurrently \"npm run devServer\" \"npm run devClient\"";
            pkgObj.scripts.buildServer = "cd server; npm run build";
            pkgObj.scripts.buildClient = "cd client; npm run build";
            pkgObj.scripts.build = "npx concurrently \"npm run buildServer\" \"npm run buildClient\"";
            pkgObj.scripts.sequelize = "cd server; npm run sequelize -- "
            pkgObj.main = "server/dist/server.js";
            return JSON.stringify(pkgObj, null, 2);
        }));
        return Promise.all(events);
    })
};