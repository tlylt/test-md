const Benchmark = require('benchmark');
const { execSync } = require('child_process');

const execOptions = {
    stdio: ['inherit', 'inherit', 'inherit'],
};
const suite = new Benchmark.Suite();
suite.add('build', () => {
    // run command "markbind build"
    execSync(`markbind build `, execOptions);

})
suite.on("cycle", function (event) {
    console.log(String(event.target));
});
suite.run();
