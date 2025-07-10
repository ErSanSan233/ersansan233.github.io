# 液态玻璃效果个人主页

一个具有视觉吸引力的个人主页，带有动态背景动画。

## 页面内容介绍

### 主页窗口
- **标题**：ErSanSan233
- **段落文本**：居中显示的介绍文字
- **特殊效果**：半透明液态玻璃效果，带有圆角和模糊边框
- **布局**：水平垂直居中的响应式设计

### 背景动画
- 随机飘动的正方形色块，颜色为 #E6A235 和 #E4E4E4
- 色块具有随机大小(10-50px)和旋转效果
- 无限循环的平滑动画效果

## 部署到GitHub Pages

### 前提条件
- Node.js 和 npm 已安装
- GitHub账号和仓库

### 部署步骤

1. 安装部署依赖
```bash
npm install --save-dev gh-pages
```

2. 修改package.json
添加以下内容到package.json文件：
```json
"homepage": "https://ersansan233.github.io/",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. 执行部署命令
```bash
npm run deploy
```

4. 访问网站
部署完成后，通过以下链接访问：
https://ersansan233.github.io/

## 技术栈
- React
- CSS (Glassmorphism效果)
- Canvas API (背景动画)

液态玻璃效果借助https://github.com/rdev/liquid-glass-react 实现。