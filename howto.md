A project (Django + React) 


创建项目

- 创建 django 工程
```
djangoadmin startproject djangohowto
cd djangohowto
./manage.py startproject firstapp
pip install djangorestframework
pip install markdown       # Markdown support for the browsable API.
pip install django-filter  # Filtering support
```

- 创建 react 工程并复制到 django 工程中
```
create-react-app hello
cp -rf hello djangohowot/
npm -g install webpack
```
> 编译 react 所需的 npm 包、插件已经都包含在里面了，就不用再单独安装了


- 创建 webpack 配置文件 *webpack.config.js*
- 修改 *package.json*
  主要是将 build 命令修改成 webpack 命令
- 运行 *webpack* 打包react应用代码，运行 *webpack --watch* 实时调试 


## ref

- [http://demos.wijmo.com/5/React/InputIntro/InputIntro/]
- [https://github.com/reactjs/react-autocomplete]