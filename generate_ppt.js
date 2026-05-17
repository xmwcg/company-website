const pptxgen = require('pptxgenjs');

// 创建PPT对象
let pres = new pptxgen();

// 设置PPT属性
pres.author = "王先生";
pres.company = "厦门金奕鸣科技有限公司";
pres.title = "公司介绍";

// 定义配色方案（科技风：深蓝+青色+白色）
const colors = {
    primary: "1E2761",    // 深蓝
    secondary: "CADCFC",  // 冰蓝
    accent: "FFFFFF",      // 白色
    text: "333333",        // 深灰
    lightText: "666666"    // 浅灰
};

// 幻灯片1：封面
let slide1 = pres.addSlide();
slide1.background = { color: colors.primary };
slide1.addText("厦门金奕鸣科技有限公司", {
    x: 0.5, y: 2.0, w: 9.0, h: 1.5,
    fontSize: 44, bold: true, color: colors.accent,
    align: "center", fontFace: "微软雅黑"
});
slide1.addText("技术研发 · 软件开发 · 解决方案", {
    x: 0.5, y: 3.5, w: 9.0, h: 0.8,
    fontSize: 20, color: colors.secondary,
    align: "center", fontFace: "微软雅黑"
});
slide1.addText("13599530881 | xmwcg@163.com", {
    x: 0.5, y: 5.0, w: 9.0, h: 0.5,
    fontSize: 14, color: colors.accent,
    align: "center", fontFace: "微软雅黑"
});

// 幻灯片2：关于我们
let slide2 = pres.addSlide();
slide2.background = { color: "FFFFFF" };
slide2.addText("关于我们", {
    x: 0.5, y: 0.5, w: 9.0, h: 0.8,
    fontSize: 32, bold: true, color: colors.primary,
    fontFace: "微软雅黑"
});
slide2.addText(
    "我们是一家专注于技术研发和软件开发的一人科技有限公司。\n\n" +
    "✅ 丰富的行业经验\n" +
    "✅ 专业的技术能力\n" +
    "✅ 灵活的定制服务\n\n" +
    "我们用AI赋能开发，用技术驱动创新。",
    {
        x: 1.0, y: 1.8, w: 8.0, h: 3.5,
        fontSize: 16, color: colors.text,
        fontFace: "微软雅黑", lineSpacing: 30
    }
);

// 幻灯片3：服务项目
let slide3 = pres.addSlide();
slide3.background = { color: "F5F5F5" };
slide3.addText("服务项目", {
    x: 0.5, y: 0.5, w: 9.0, h: 0.8,
    fontSize: 32, bold: true, color: colors.primary,
    fontFace: "微软雅黑"
});

const services = [
    { title: "💻 定制软件开发", desc: "Web应用、移动应用、桌面应用\n根据客户需求定制开发" },
    { title: "🤖 AI技术咨询", desc: "ChatGPT集成、自动化流程设计\nAI工具选型和应用" },
    { title: "🎨 UI/UX设计", desc: "专业的用户界面设计\n优秀的用户体验" },
    { title: "📊 技术顾问", desc: "技术架构咨询、代码审查\n技术支持和维护" }
];

let startY = 1.8;
services.forEach((service, index) => {
    let y = startY + index * 1.2;
    slide3.addText(service.title, {
        x: 1.0, y: y, w: 8.0, h: 0.5,
        fontSize: 18, bold: true, color: colors.primary,
        fontFace: "微软雅黑"
    });
    slide3.addText(service.desc, {
        x: 1.5, y: y + 0.5, w: 7.5, h: 0.6,
        fontSize: 14, color: colors.lightText,
        fontFace: "微软雅黑"
    });
});

// 幻灯片4：技术栈
let slide4 = pres.addSlide();
slide4.background = { color: "FFFFFF" };
slide4.addText("技术栈", {
    x: 0.5, y: 0.5, w: 9.0, h: 0.8,
    fontSize: 32, bold: true, color: colors.primary,
    fontFace: "微软雅黑"
});

const techStack = [
    "React", "Vue", "Next.js", "Node.js", "Python", "FastAPI",
    "PostgreSQL", "MongoDB", "Redis", "阿里云", "腾讯云", "AWS",
    "ChatGPT", "GitHub Copilot", "Docker", "Git", "Linux", "AI辅助开发"
];

let startX = 1.0;
let startY4 = 2.0;
techStack.forEach((tech, index) => {
    let row = Math.floor(index / 3);
    let col = index % 3;
    let x = startX + col * 3.0;
    let y = startY4 + row * 1.0;
    
    slide4.addShape(pres.ShapeType.roundRect, {
        x: x, y: y, w: 2.5, h: 0.6,
        fill: { color: colors.primary },
        line: { color: colors.primary }
    });
    slide4.addText(tech, {
        x: x, y: y, w: 2.5, h: 0.6,
        fontSize: 14, bold: true, color: colors.accent,
        align: "center", valign: "middle", fontFace: "微软雅黑"
    });
});

// 幻灯片5：开发流程
let slide5 = pres.addSlide();
slide5.background = { color: "F5F5F5" };
slide5.addText("开发流程", {
    x: 0.5, y: 0.5, w: 9.0, h: 0.8,
    fontSize: 32, bold: true, color: colors.primary,
    fontFace: "微软雅黑"
});

const process = [
    { step: "1", title: "需求分析", desc: "深入了解客户需求\n明确项目范围和目标" },
    { step: "2", title: "设计方案", desc: "技术架构设计\nUI/UX设计" },
    { step: "3", title: "开发实施", desc: "敏捷开发，快速迭代\nAI辅助，提升效率" },
    { step: "4", title: "测试验收", desc: "全面测试，确保质量\n客户验收，满意交付" },
    { step: "5", title: "维护支持", desc: "持续维护和技术支持\n快速响应，及时解决问题" }
];

let startY5 = 1.8;
process.forEach((item) => {
    slide5.addText(item.step, {
        x: 1.0, y: startY5, w: 0.5, h: 0.5,
        fontSize: 24, bold: true, color: colors.accent,
        align: "center", valign: "middle",
        fill: { color: colors.primary },
        fontFace: "微软雅黑"
    });
    slide5.addText(item.title, {
        x: 1.8, y: startY5, w: 7.0, h: 0.5,
        fontSize: 18, bold: true, color: colors.primary,
        valign: "middle", fontFace: "微软雅黑"
    });
    slide5.addText(item.desc, {
        x: 2.0, y: startY5 + 0.5, w: 6.8, h: 0.5,
        fontSize: 12, color: colors.lightText,
        fontFace: "微软雅黑"
    });
    startY5 += 1.0;
});

// 幻灯片6：为什么选择我们
let slide6 = pres.addSlide();
slide6.background = { color: "FFFFFF" };
slide6.addText("为什么选择我们", {
    x: 0.5, y: 0.5, w: 9.0, h: 0.8,
    fontSize: 32, bold: true, color: colors.primary,
    fontFace: "微软雅黑"
});

const reasons = [
    "✅ 专业：多年的技术积累和行业经验",
    "✅ 高效：AI辅助开发，提升效率",
    "✅ 灵活：一人公司，沟通高效，响应快速",
    "✅ 可靠：注重质量，按时交付",
    "✅ 性价比：无中间环节，价格透明"
];

let startY6 = 2.0;
reasons.forEach((reason) => {
    slide6.addText(reason, {
        x: 1.5, y: startY6, w: 7.0, h: 0.6,
        fontSize: 16, color: colors.text,
        fontFace: "微软雅黑", valign: "middle"
    });
    startY6 += 0.8;
});

// 幻灯片7：合作流程
let slide7 = pres.addSlide();
slide7.background = { color: "F5F5F5" };
slide7.addText("合作流程", {
    x: 0.5, y: 0.5, w: 9.0, h: 0.8,
    fontSize: 32, bold: true, color: colors.primary,
    fontFace: "微软雅黑"
});

const cooperation = [
    "1. 初步沟通：了解需求，评估可行性",
    "2. 方案设计：提供技术方案和报价",
    "3. 签订合同：明确项目范围、周期、费用",
    "4. 开发实施：按里程碑推进，及时沟通",
    "5. 验收交付：客户验收，交付成果",
    "6. 售后支持：持续维护和技术支持"
];

let startY7 = 2.0;
cooperation.forEach((item) => {
    slide7.addText(item, {
        x: 1.5, y: startY7, w: 7.0, h: 0.5,
        fontSize: 14, color: colors.text,
        fontFace: "微软雅黑"
    });
    startY7 += 0.7;
});

// 幻灯片8：联系方式
let slide8 = pres.addSlide();
slide8.background = { color: colors.primary };
slide8.addText("联系方式", {
    x: 0.5, y: 0.5, w: 9.0, h: 0.8,
    fontSize: 32, bold: true, color: colors.accent,
    fontFace: "微软雅黑"
});
slide8.addText(
    "公司名称：厦门金奕鸣科技有限公司\n\n" +
    "联系人：王先生\n\n" +
    "电话：13599530881\n\n" +
    "邮箱：xmwcg@163.com\n\n" +
    "网站：敬请期待\n\n" +
    "地址：厦门海沧区海发路135号933室",
    {
        x: 1.0, y: 2.0, w: 8.0, h: 3.5,
        fontSize: 18, color: colors.accent,
        align: "center", fontFace: "微软雅黑", lineSpacing: 35
    }
);

// 幻灯片9：谢谢
let slide9 = pres.addSlide();
slide9.background = { color: colors.primary };
slide9.addText("谢谢", {
    x: 0.5, y: 2.5, w: 9.0, h: 1.0,
    fontSize: 48, bold: true, color: colors.accent,
    align: "center", fontFace: "微软雅黑"
});
slide9.addText("期待与您的合作", {
    x: 0.5, y: 3.8, w: 9.0, h: 0.6,
    fontSize: 20, color: colors.secondary,
    align: "center", fontFace: "微软雅黑"
});
slide9.addText("请随时联系我们", {
    x: 0.5, y: 4.5, w: 9.0, h: 0.5,
    fontSize: 16, color: colors.accent,
    align: "center", fontFace: "微软雅黑"
});

// 保存PPT
pres.writeFile({ fileName: "公司介绍.pptx" })
    .then(() => {
        console.log("✅ 公司介绍PPT已生成：公司介绍.pptx");
    })
    .catch(err => {
        console.error("❌ 生成PPT失败：", err);
    });
