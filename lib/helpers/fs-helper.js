const fs = require('fs');
module.exports = {
    copyFile: (src, dest) => {
        return new Promise((resolve, reject) => {
            fs.copyFile(src, dest, err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    },
    updateFile: (path, updater) => {
        return new Promise((resolve, reject) => {
            if (typeof updater !== "function") {
                return reject(new Error("Updater must be a function."))
            }
            fs.readFile(path, { encoding: 'utf8'}, (err, data) => {
                if (err) {
                    return reject(err);
                }
                const newData = updater(data);
                fs.writeFile(path, newData, err => {
                    if (err) {
                        return reject(err);
                    }
                    resolve();
                })
            })
        });
    }
}