---
title: 配置preti插件
date: 2022-07-18 08:56:08
permalink: /pages/b06133/
categories:
  - 知识碎片
tags:
  -
---

ctrl+shift+p 打开设置

把那个配置 json 抄进去

```json
{
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "workbench.iconTheme": "material-icon-theme",
  "prettier.printWidth": 280,
  "git.ignoreMissingGitWarning": true,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "all"
}
```

eslint.js 里的是验证规则

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': ['error', { semi: true, singleQuote: true, trailingComma: 'all' }],
    // 'prettier/prettier': 'off'
  },
};
```

有时候插件配置项目不识别，还要在配置已经设置里的东西
