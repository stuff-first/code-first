var shell = require("shelljs");

module.exports = {
    exec: cmd => {
        return new Promise((resolve, reject) => {
            shell.exec(cmd, function (code, stdout, stderr) {
                resolve({
                    code,
                    stdout,
                    stderr
                });
            });
        })
    }
}