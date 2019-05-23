module.exports = ({name, attributes}) => {
    const fs = require('fs');
    const dir = './server';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    var shell = require("shelljs");
    shell.exec(`cd server/src; sequelize model:create --name ${name} --attributes ${attributes}`);  
}