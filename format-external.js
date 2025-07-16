#!/usr/bin/env node
const { exec } = require('child_process');
const path = require('path');

// 外部文件路径配置
const externalPaths = [
    'c:\\Users\\ASUS\\Downloads\\MFAAvalonia-v1.5.5-win-x64\\resource\\pipeline\\*.json',
    // 添加更多路径...
];

console.log('开始格式化外部文件...');

externalPaths.forEach((filePath, index) => {
    const command = `npx prettier --write "${filePath}"`;
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`格式化失败 ${filePath}:`, error);
            return;
        }
        console.log(`✅ 已格式化: ${filePath}`);
        if (stdout) console.log(stdout);
    });
});

console.log('格式化任务已启动...'); 