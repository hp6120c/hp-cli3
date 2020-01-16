module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    scripts: {
      test: 'vue-cli-service  command'
    },
    dependencies: {
      "core-js": "^3.4.4",
      "vue": "^2.6.10",
      "vue-router": "^3.1.3",
      "vuex": "^3.1.2",
      "element-ui": "^2.12.0",
      "axios": "^0.19.0"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "^4.1.0",
      "@vue/cli-plugin-eslint": "^4.1.0",
      "@vue/cli-plugin-router": "^4.1.0",
      "@vue/cli-plugin-vuex": "^4.1.0",
      "@vue/cli-service": "^4.1.0",
      "@vue/eslint-config-airbnb": "^4.0.0",
      "babel-eslint": "^10.0.3",
      "eslint": "^5.16.0",
      "eslint-plugin-vue": "^5.0.0",
      "lint-staged": "^9.5.0",
      "node-sass": "^4.12.0",
      "sass-loader": "^8.0.0",
      "vue-template-compiler": "^2.6.10"
    },
  })

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template')
  api.render({
    './.eslintrc.js'     : '../template/.eslintrc.js',
    './.gitignore'       : '../template/.gitignore'
  });
  if (options.file_saver == 'true') { 
    // options.module 可以访问上面问题数组的第一个对象的值，默认为: 'module0'
    // console.log(`Your choice is ${options.module}`)
    api.extendPackage({
      devDependencies: {
        "file-saver": "^2.0.1"
      }
    });
  }
  if (options.XLSX === 'true') {
    // options.moduleName 可以访问到用户从控制台输入的文字
    // console.log(`Your input is ${options.moduleName}`)
    api.extendPackage({
      devDependencies: {
        "xlsx": "^0.14.2"
      }
    });
  }
  if (options.echarts === 'true') {
    // options.moduleName 可以访问到用户从控制台输入的文字
    // console.log(`Your input is ${options.moduleName}`)
    api.extendPackage({
      dependencies: {
        "echarts": "^4.2.1"
      }
    });
  }
}