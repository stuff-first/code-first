var shell = require('../../cmd-helper.js');
var fs = require('../../fs-helper.js');

var initClientCmd = "npx create-react-app client";
module.exports = () => {
    return shell.exec(initClientCmd).then(() => {
        console.log(`


            hold the line while we continue to install things!
        `);
        var cleanUpCmd = "cd client; rm -r .git; " +
        "npm i @material-ui/core @material-ui/icons";
        return shell.exec(cleanUpCmd).then(() => {
            return fs.updateFile('./client/package.json', data => {
                const pkgObj = JSON.parse(data);
                pkgObj.proxy = "http://localhost:3001";
                return JSON.stringify(pkgObj, null, 2);
            })
        });
    })
}