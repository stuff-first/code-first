function cfer() {
    require('yargs')
        .usage('Usage: $0 <command> [options]')
        .command(['$0', 'build'], 'Build files from models defined and imported from the index.js file in server/models folder.', _ => {}, _ => {
            require('./commands/build.js')();
        })
        .command('init', 'Initialize an empty project to fill with files.', _ => {}, _ => {
            require('./commands/init.js')();
        })
        .command('model:create [name] [attributes]', 'Initialize a model file in your server/models folder.', (yargs) => {
            yargs
                .positional('name', {
                    describe: 'name for your model'
                })
                .positional('attributes', {
                    describe: 'attributes for your model'
                })
        }, (argv) => {
            require('./commands/model-create.js')(argv);
        })
        // .example('$0 model:create --', 'Initialize an empty project to fill with files.')
        // .nargs('f', 1)
        // .describe('f', 'Load a file')
        // .demandOption(['f'])
        .help('h')
        .alias('h', 'help')
        .epilog('copyright 2019')
        .argv;
    return;
}
module.exports = cfer;