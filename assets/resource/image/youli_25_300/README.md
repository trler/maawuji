# 游历25关300次 - 独立模块

## 🎯 功能说明
- **目标**：自动完成游历25关300次挑战
- **类型**：独立功能模块  
- **预计时间**：根据每关耗时而定（建议预留30分钟-1小时）

## 📸 需要截取的图片

请在游戏中截取以下界面的图片，并保存到此文件夹：

### **StartChallenge.png**
- **用途**：识别并点击"开始挑战"按钮
- **截取位置**：游历界面的开始/挑战按钮
- **建议尺寸**：包含按钮和少量周边区域

### **ChallengeReady.png**
- **用途**：识别挑战准备状态，继续下一关
- **截取位置**：每关完成后的继续/下一关按钮
- **建议尺寸**：包含按钮和状态提示文字

### **ChallengeComplete.png**
- **用途**：识别300次挑战全部完成的状态
- **截取位置**：挑战完成提示界面
- **建议尺寸**：包含完成提示和相关文字

## 🔧 使用方法

1. **截取所需图片**：按照上述说明截取3张图片
2. **保存到此目录**：`assets/resource/image/youli_25_300/`
3. **测试识别效果**：使用MAA Support扩展预览
4. **运行任务**：在interface中选择"游历25关300次"任务

## ⚙️ 任务配置

- **节点名称**：`YouLi25_300`
- **超时设置**：可选择10分钟/30分钟/无限制
- **循环逻辑**：自动识别继续/完成状态

## 📝 注意事项

- 此功能为独立模块，不依赖其他游戏功能
- 建议在游戏空闲时运行，避免与其他任务冲突
- 300次挑战可能需要较长时间，建议选择合适的超时设置
- 如果识别不准确，请重新截取图片或调整裁剪区域 