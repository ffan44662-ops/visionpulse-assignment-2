# 代码规范

本规范参考以下公开规范：

- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [MDN HTML writing guidelines](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide)
- [MDN CSS coding guidelines](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing)

## JavaScript

1. 使用 `const` 优先，只有需要重新赋值时使用 `let`，禁止使用 `var`。
2. 使用 2 个空格缩进，语句末尾保留分号。
3. 函数命名使用 `camelCase`，构造数据类型或类名使用 `PascalCase`。
4. 一个函数只解决一个清晰问题；统计、渲染、事件处理分开组织。
5. 不直接拼接未经处理的用户输入到 HTML。需要进入模板的字符串必须经过 `escapeHtml`。
6. 对外部网络请求必须处理失败分支，并给用户可理解的提示。
7. 所有修改论文数据的操作都要同步更新 `localStorage`，并通过统一的 `renderAll` 刷新派生视图。
8. 不使用隐式全局变量；模块级状态统一放在 `state` 对象中。

## HTML

1. 页面使用语义化标签，例如 `header`、`nav`、`main`、`section`、`footer`。
2. 表单控件必须有对应的 `label` 或 `aria-label`。
3. 仅用于图标的元素添加 `aria-hidden="true"`；图标按钮必须提供 `title` 和 `aria-label`。
4. 标题层级按页面结构使用，不通过改变字体大小伪造标题。
5. 外部链接使用 `target="_blank"` 时必须添加 `rel="noreferrer"`。

## CSS

1. 使用 CSS 自定义属性管理颜色、间距和阴影等设计变量。
2. 使用 BEM 风格或语义化类名，避免依赖深层级选择器。
3. 页面采用移动端优先的响应式约束，表格在小屏幕使用横向滚动。
4. 颜色用于表达信息状态，文本和背景必须保持足够对比度。
5. 动画只用于反馈和趋势播放，不用连续动画装饰静态内容。
6. 组件尺寸使用稳定的 `min-height`、网格和弹性布局，避免内容变化造成页面抖动。

## Git 提交

提交信息采用 `<type>: <short description>`：

- `feat`: 新功能
- `fix`: 修复问题
- `style`: 样式修改
- `docs`: 文档修改
- `test`: 测试或验证
- `refactor`: 不改变功能的重构

