class FileCopyPlugin {
    constructor() {
        this.cache = []
    }
    apply(compiler) {
        compiler.hooks.beforeRun.tapAsync('FileCopyPlugin', (compilation, callback) => {
            fs.readFile('../package.json', function (err, data) {
                if (err) {
                    return
                }
                let message = JSON.parse(data)
                fs.writeFileSync('../build.readme', messagenull, function (err, data) {
                    if (err) return;
                })
            })
        })
    }
}