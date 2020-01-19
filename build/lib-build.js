const { run } = require('runjs')
// 打包入口文件
const libList = require('../lib-list.js')
const { getAssetsPath, chalkConsole, resolve, fsExistsSync } = require('./utils')
const { styleOutputPath } = require('./config/index')
const { move, fileDisplay } = require('./script/file-handle')
const rimraf = require('rimraf')
const fs = require('fs')
const path = require('path')
const cssFiles = []
rimraf(path.resolve(__dirname, '../lib'), function() {
    function build({ input, output } = {}, index, arr) {
      chalkConsole.building(index + 1, arr.length)
      run(
        `vue-cli-service build --target lib --no-clean --name ${output} --dest ${getAssetsPath()} ${input}`
      )
      cssFiles.push(`${output}.css`)
    }

    let pkg = []

    Object.keys(libList).forEach((moduleName) => {
      const { input, output } = libList[moduleName]
      pkg.push({ input, output })
    })
    pkg.forEach(build)
    // 删除多余文件
    rimraf(getAssetsPath('./demo.html'), function() {})
    // 创建样式文件夹
    fs.mkdirSync(getAssetsPath(styleOutputPath))
    // 拷贝css文件到单独目录
    cssFiles.forEach((cssFile) => {
      fsExistsSync(getAssetsPath(cssFile)) &&
        move(getAssetsPath(cssFile), getAssetsPath(styleOutputPath + '/' + cssFile))
    })
    // 重命名common文件
    fileDisplay(getAssetsPath(), (file) => {
      const reg = /.common/
      if (reg.test(file)) {
        file = `../${file}`
        move(resolve(file), resolve(file.replace(reg, '')))
      }
    })

    chalkConsole.success()
})
