const pipelineGroups = [
    require('./client'),
    require('./server'),
    require('./project')
];
module.exports = {
    init: pipelineGroups.map(group => group.init).filter(init => !!init)
}