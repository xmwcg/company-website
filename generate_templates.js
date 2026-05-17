const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
        AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign,
        HeadingLevel } = require('docx');

// 辅助函数：创建带格式的段落
function createParagraph(text, options = {}) {
    return new Paragraph({
        children: [new TextRun({
            text: text,
            size: options.size || 24,
            bold: options.bold || false,
            italics: options.italic || false,
        })],
        alignment: options.alignment || AlignmentType.LEFT,
        spacing: options.spacing || { before: 0, after: 200 },
    });
}

// 生成软件开发合同模板
function generateDevelopmentContract() {
    const doc = new Document({
        styles: {
            default: { document: { run: { font: "宋体", size: 24 } } },
            paragraphStyles: [
                { id: "Heading1", name: "Heading 1", basedOn: "Normal", 
                  run: { size: 32, bold: true, font: "黑体" },
                  paragraph: { spacing: { before: 240, after: 240 } },
                ]
        },
        sections: [{
            properties: {
                page: {
                    size: { width: 12240, height: 15840 },
                    margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
                }
            },
            children: [
                // 标题
                new Paragraph({
                    heading: HeadingLevel.HEADING_1,
                    children: [new TextRun({ 
                        text: "软件开发合同", 
                        size: 36, 
                        bold: true 
                    })],
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 0, after: 400 }
                }),

                // 合同编号
                createParagraph("合同编号：[2024-001]", { alignment: AlignmentType.RIGHT, size: 20 }),
                createParagraph("", { spacing: { before: 200, after: 200 } }),

                // 甲方信息
                createParagraph("甲方（委托方）：[公司名称]", { bold: true }),
                createParagraph("地址：[甲方地址]"),
                createParagraph("联系人：[甲方联系人]"),
                createParagraph("联系电话：[甲方电话]"),
                createParagraph("电子邮箱：[甲方邮箱]"),
                createParagraph("", { spacing: { before: 200, after: 200 } }),

                // 乙方信息
                createParagraph("乙方（开发方）：[你的公司名称]", { bold: true }),
                createParagraph("地址：[乙方地址]"),
                createParagraph("联系人：[你的姓名]"),
                createParagraph("联系电话：[你的电话]"),
                createParagraph("电子邮箱：[你的邮箱]"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 第一条
                createParagraph("第一条 项目内容", { bold: true, size: 26 }),
                createParagraph("1. 项目名称：[项目名称]"),
                createParagraph("2. 项目描述：[项目详细描述]"),
                createParagraph("3. 交付成果：[交付的软件/文档清单]"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 第二条
                createParagraph("第二条 开发周期", { bold: true, size: 26 }),
                createParagraph("1. 项目启动日期：[日期]"),
                createParagraph("2. 项目交付日期：[日期]"),
                createParagraph("3. 里程碑节点："),
                createParagraph("   • 需求确认：[日期]"),
                createParagraph("   • 设计评审：[日期]"),
                createParagraph("   • 开发完成：[日期]"),
                createParagraph("   • 测试验收：[日期]"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 第三条
                createParagraph("第三条 合同金额与支付方式", { bold: true, size: 26 }),
                createParagraph("1. 合同总金额：人民币 [金额] 元（含税）"),
                createParagraph("2. 支付方式："),
                createParagraph("   • 首付款：合同签订后支付 [比例]%，计 [金额] 元"),
                createParagraph("   • 进度款：项目完成 [比例]% 后支付 [比例]%，计 [金额] 元"),
                createParagraph("   • 尾款：项目验收合格后支付 [比例]%，计 [金额] 元"),
                createParagraph("3. 发票：[是否需要发票，发票类型]"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 第四条
                createParagraph("第四条 双方权利义务", { bold: true, size: 26 }),
                createParagraph("1. 甲方权利义务："),
                createParagraph("   • 提供项目所需的需求文档、资料"),
                createParagraph("   • 及时确认需求、设计、开发成果"),
                createParagraph("   • 按时支付合同款项"),
                createParagraph("2. 乙方权利义务："),
                createParagraph("   • 按需求完成开发工作"),
                createParagraph("   • 保证代码质量，及时修复bug"),
                createParagraph("   • 保护甲方数据安全"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 第五条
                createParagraph("第五条 知识产权", { bold: true, size: 26 }),
                createParagraph("1. 本项目开发的软件著作权归 [甲方/乙方] 所有"),
                createParagraph("2. 乙方保留核心技术的知识产权"),
                createParagraph("3. 甲方不得擅自将本项目代码转交第三方"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 第六条
                createParagraph("第六条 保密条款", { bold: true, size: 26 }),
                createParagraph("1. 双方应对在合作过程中获知的对方商业秘密保密"),
                createParagraph("2. 保密期限：合同期内及合同终止后 [年限] 年"),
                createParagraph("3. 违反保密义务的，应赔偿对方损失"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 第七条
                createParagraph("第七条 违约责任", { bold: true, size: 26 }),
                createParagraph("1. 甲方逾期付款的，每逾期一天，按合同总额的 [比例]% 支付违约金"),
                createParagraph("2. 乙方逾期交付的，每逾期一天，按合同总额的 [比例]% 支付违约金"),
                createParagraph("3. 因不可抗力导致合同无法履行的，双方协商解决"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 第八条
                createParagraph("第八条 争议解决", { bold: true, size: 26 }),
                createParagraph("因本合同引起的争议，双方应友好协商解决；协商不成的，提交 [仲裁委员会/人民法院] 解决。"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 第九条
                createParagraph("第九条 其他", { bold: true, size: 26 }),
                createParagraph("1. 本合同一式两份，甲乙双方各执一份"),
                createParagraph("2. 本合同自双方签字盖章之日起生效"),
                createParagraph("3. 本合同未尽事宜，双方可另行签订补充协议"),
                createParagraph("", { spacing: { before: 400, after: 200 } }),

                // 签字区域
                new Paragraph({
                    children: [new TextRun({ text: "甲方（盖章）：_____________", size: 24 })],
                    spacing: { before: 400, after: 200 }
                }),
                createParagraph("代表签字：_____________"),
                createParagraph("日期：_____________"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                new Paragraph({
                    children: [new TextRun({ text: "乙方（盖章）：_____________", size: 24 })],
                    spacing: { before: 400, after: 200 }
                }),
                createParagraph("代表签字：_____________"),
                createParagraph("日期：_____________"),
            ]
        }]
    });

    Packer.toBuffer(doc).then(buffer => {
        fs.writeFileSync("软件开发合同模板.docx", buffer);
        console.log("✅ 软件开发合同模板已生成：软件开发合同模板.docx");
    }).catch(err => {
        console.error("❌ 生成合同模板失败：", err);
    });
}

// 生成保密协议模板
function generateNDA() {
    const doc = new Document({
        styles: {
            default: { document: { run: { font: "宋体", size: 24 } } },
        },
        sections: [{
            properties: {
                page: {
                    size: { width: 12240, height: 15840 },
                    margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
                }
            },
            children: [
                new Paragraph({
                    children: [new TextRun({ 
                        text: "保密协议", 
                        size: 36, 
                        bold: true 
                    })],
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 0, after: 400 }
                }),

                createParagraph("甲方（披露方）：[公司名称]"),
                createParagraph("乙方（接收方）：[你的公司名称]"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                createParagraph("鉴于甲方在业务合作过程中可能向乙方披露商业秘密和机密信息，为保护甲方的合法权益，双方达成如下协议：", { spacing: { before: 200, after: 400 } }),

                createParagraph("第一条 保密信息的定义", { bold: true }),
                createParagraph("保密信息指甲方在合作过程中向乙方披露的、未公开的、具有商业价值的信息，包括但不限于："),
                createParagraph("1. 技术信息：技术方案、源代码、算法、图纸、模型等"),
                createParagraph("2. 商业信息：客户名单、营销策略、财务数据、经营计划等"),
                createParagraph("3. 其他标明"保密"或"机密"的信息"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                createParagraph("第二条 保密义务", { bold: true }),
                createParagraph("1. 乙方应对甲方的保密信息严格保密，未经甲方书面同意，不得向任何第三方披露"),
                createParagraph("2. 乙方仅可在合作目的范围内使用保密信息"),
                createParagraph("3. 乙方应采取合理的安全措施保护保密信息，防止泄露"),
                createParagraph("4. 乙方仅可向其需要知悉的员工披露保密信息，并确保这些员工履行同等保密义务"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                createParagraph("第三条 保密期限", { bold: true }),
                createParagraph("1. 本协议的保密期限为：[年限] 年"),
                createParagraph("2. 保密期限届满后，乙方应销毁或返还所有保密信息"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                createParagraph("第四条 例外情况", { bold: true }),
                createParagraph("以下信息不属于保密信息："),
                createParagraph("1. 公开时已为公众所知的信息"),
                createParagraph("2. 非因乙方过错而为公众所知的信息"),
                createParagraph("3. 乙方在未接触保密信息的情况下独立开发的信息"),
                createParagraph("4. 经甲方书面同意公开的信息"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                createParagraph("第五条 违约责任", { bold: true }),
                createParagraph("乙方违反本协议的，应赔偿甲方因此遭受的全部损失，包括但不限于直接经济损失、律师费、诉讼费等。"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                createParagraph("第六条 其他", { bold: true }),
                createParagraph("1. 本协议一式两份，双方各执一份"),
                createParagraph("2. 本协议自双方签字之日起生效"),
                createParagraph("3. 本协议的修改需经双方书面同意"),
                createParagraph("", { spacing: { before: 400, after: 200 } }),

                new Paragraph({
                    children: [new TextRun({ text: "甲方（盖章）：_____________", size: 24 })],
                    spacing: { before: 400, after: 200 }
                }),
                createParagraph("代表签字：_____________"),
                createParagraph("日期：_____________"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                new Paragraph({
                    children: [new TextRun({ text: "乙方（盖章）：_____________", size: 24 })],
                    spacing: { before: 400, after: 200 }
                }),
                createParagraph("代表签字：_____________"),
                createParagraph("日期：_____________"),
            ]
        }]
    });

    Packer.toBuffer(doc).then(buffer => {
        fs.writeFileSync("保密协议模板.docx", buffer);
        console.log("✅ 保密协议模板已生成：保密协议模板.docx");
    }).catch(err => {
        console.error("❌ 生成保密协议失败：", err);
    });
}

// 生成报价单模板
function generateQuotation() {
    const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
    const borders = { top: border, bottom: border, left: border, right: border };

    const doc = new Document({
        styles: {
            default: { document: { run: { font: "宋体", size: 24 } } },
        },
        sections: [{
            properties: {
                page: {
                    size: { width: 12240, height: 15840 },
                    margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
                }
            },
            children: [
                new Paragraph({
                    children: [new TextRun({ 
                        text: "报 价 单", 
                        size: 36, 
                        bold: true 
                    })],
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 0, after: 400 }
                }),

                // 报价单基本信息
                createParagraph("报价单号：[2024-001]", { size: 20 }),
                createParagraph("报价日期：[日期]", { size: 20 }),
                createParagraph("有效期限：[天数] 天", { size: 20 }),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 客户信息
                createParagraph("客户信息", { bold: true, size: 26, spacing: { before: 200, after: 200 } }),
                createParagraph("客户名称：[客户公司名称]"),
                createParagraph("联系人：[联系人姓名]"),
                createParagraph("联系电话：[联系电话]"),
                createParagraph("电子邮箱：[电子邮箱]"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 报价项目明细表
                createParagraph("报价项目明细", { bold: true, size: 26, spacing: { before: 200, after: 200 } }),

                new Table({
                    width: { size: 9360, type: WidthType.DXA },
                    columnWidths: [2340, 2340, 2340, 2340],
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    borders,
                                    width: { size: 2340, type: WidthType.DXA },
                                    shading: { fill: "4472C4", type: ShadingType.CLEAR },
                                    children: [new Paragraph({ 
                                        children: [new TextRun({ text: "项目名称", bold: true, color: "FFFFFF" })],
                                        alignment: AlignmentType.CENTER 
                                    })]
                                }),
                                new TableCell({
                                    borders,
                                    width: { size: 2340, type: WidthType.DXA },
                                    shading: { fill: "4472C4", type: ShadingType.CLEAR },
                                    children: [new Paragraph({ 
                                        children: [new TextRun({ text: "描述", bold: true, color: "FFFFFF" })],
                                        alignment: AlignmentType.CENTER 
                                    })]
                                }),
                                new TableCell({
                                    borders,
                                    width: { size: 2340, type: WidthType.DXA },
                                    shading: { fill: "4472C4", type: ShadingType.CLEAR },
                                    children: [new Paragraph({ 
                                        children: [new TextRun({ text: "单价（元）", bold: true, color: "FFFFFF" })],
                                        alignment: AlignmentType.CENTER 
                                    })]
                                }),
                                new TableCell({
                                    borders,
                                    width: { size: 2340, type: WidthType.DXA },
                                    shading: { fill: "4472C4", type: ShadingType.CLEAR },
                                    children: [new Paragraph({ 
                                        children: [new TextRun({ text: "小计（元）", bold: true, color: "FFFFFF" })],
                                        alignment: AlignmentType.CENTER 
                                    })]
                                }),
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    borders,
                                    width: { size: 2340, type: WidthType.DXA },
                                    children: [new Paragraph({ 
                                        children: [new TextRun({ text: "[项目1名称]" })],
                                        alignment: AlignmentType.LEFT 
                                    })]
                                }),
                                new TableCell({
                                    borders,
                                    width: { size: 2340, type: WidthType.DXA },
                                    children: [new Paragraph({ 
                                        children: [new TextRun({ text: "[项目1描述]" })],
                                        alignment: AlignmentType.LEFT 
                                    })]
                                }),
                                new TableCell({
                                    borders,
                                    width: { size: 2340, type: WidthType.DXA },
                                    children: [new Paragraph({ 
                                        children: [new TextRun({ text: "[单价]" })],
                                        alignment: AlignmentType.RIGHT 
                                    })]
                                }),
                                new TableCell({
                                    borders,
                                    width: { size: 2340, type: WidthType.DXA },
                                    children: [new Paragraph({ 
                                        children: [new TextRun({ text: "[小计]" })],
                                        alignment: AlignmentType.RIGHT 
                                    })]
                                }),
                            ]
                        }),
                    ]
                }),

                createParagraph("", { spacing: { before: 400, after: 200 } }),

                // 总计
                new Paragraph({
                    children: [new TextRun({ 
                        text: "合计金额：人民币 [总金额] 元（含税）", 
                        size: 28, 
                        bold: true 
                    })],
                    alignment: AlignmentType.RIGHT,
                    spacing: { before: 200, after: 400 }
                }),

                // 付款方式
                createParagraph("付款方式", { bold: true, size: 26, spacing: { before: 200, after: 200 } }),
                createParagraph("1. 首付款：合同签订后支付 [比例]%，计 [金额] 元"),
                createParagraph("2. 进度款：项目完成 [比例]% 后支付 [比例]%，计 [金额] 元"),
                createParagraph("3. 尾款：项目验收合格后支付 [比例]%，计 [金额] 元"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 交付周期
                createParagraph("交付周期", { bold: true, size: 26, spacing: { before: 200, after: 200 } }),
                createParagraph("项目启动日期：[日期]"),
                createParagraph("项目交付日期：[日期]"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 备注
                createParagraph("备注", { bold: true, size: 26, spacing: { before: 200, after: 200 } }),
                createParagraph("1. 本报价单有效期为 [天数] 天"),
                createParagraph("2. 本报价不含 [列出不含的项目，如：服务器费用、第三方API费用等]"),
                createParagraph("3. 如需额外功能开发，费用另行商议"),
                createParagraph("", { spacing: { before: 200, after: 400 } }),

                // 联系方式
                createParagraph("联系方式", { bold: true, size: 26, spacing: { before: 200, after: 200 } }),
                createParagraph("公司名称：[你的公司名称]"),
                createParagraph("联系人：[你的姓名]"),
                createParagraph("联系电话：[你的电话]"),
                createParagraph("电子邮箱：[你的邮箱]"),
                createParagraph("公司地址：[公司地址]"),
                createParagraph("", { spacing: { before: 400, after: 200 } }),

                new Paragraph({
                    children: [new TextRun({ text: "请签字确认后回传，谢谢！", size: 24, italic: true })],
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 400, after: 0 }
                }),
            ]
        }]
    });

    Packer.toBuffer(doc).then(buffer => {
        fs.writeFileSync("报价单模板.docx", buffer);
        console.log("✅ 报价单模板已生成：报价单模板.docx");
    }).catch(err => {
        console.error("❌ 生成报价单失败：", err);
    });
}

// 主函数
console.log("开始生成文档模板...\n");

generateDevelopmentContract();
generateNDA();
generateQuotation();

console.log("\n所有模板生成完成！");
