# ShawnCloud - Simplified Version

这是ShawnCloud的简化版本，只包含3个文件的基本前端网站。

## 文件结构

```
simple-version/
├── index.html    - 主HTML文件，包含所有页面结构
├── style.css     - 所有样式文件，包含玻璃态UI设计
└── app.js        - 所有JavaScript逻辑（密码验证、语言切换、主题切换等）
```

## 功能特性

✅ **密码保护** - 密码：910729  
✅ **中英文切换** - 默认英文，支持实时切换  
✅ **深色/浅色主题** - 支持主题切换  
✅ **文件展示** - 模拟文件网格展示  
✅ **搜索功能** - 文件搜索  
✅ **响应式设计** - 支持移动端和桌面端  
✅ **Apple风格UI** - 玻璃态设计，模仿iCloud Drive界面

## 访问方式

1. **通过Replit服务器访问**：
   - 访问：`https://your-replit-url/simple/index.html`
   - 或者：`https://your-replit-url/simple/`

2. **直接在浏览器中打开**：
   - 双击 `index.html` 文件即可在浏览器中打开
   - 无需服务器，完全静态运行

## 技术栈

- 纯HTML5
- 纯CSS3（包含CSS变量、Grid布局、Flexbox）
- 原生JavaScript（ES6+）
- 无框架、无依赖

## 数据存储

- 密码验证状态：sessionStorage
- 语言偏好：localStorage
- 主题设置：localStorage
- 文件数据：JavaScript对象（模拟数据）

## 使用说明

1. 打开应用后会看到密码锁定界面
2. 输入密码 `910729` 解锁
3. 解锁后可以：
   - 点击右上角地球图标切换中英文
   - 点击太阳/月亮图标切换主题
   - 在搜索框搜索文件
   - 浏览模拟的文件网格

## 自定义

### 修改密码
在 `app.js` 中修改：
```javascript
const correctPassword = '910729'; // 改成你想要的密码
```

### 添加文件
在 `app.js` 的 `mockFiles` 数组中添加：
```javascript
const mockFiles = [
    { id: 9, name: "your-file.pdf", type: "pdf", size: "1 MB", date: "2024-01-20" },
    // ...更多文件
];
```

### 修改颜色主题
在 `style.css` 的 `:root` 和 `body.dark-mode` 中修改CSS变量
