#!/bin/bash

# 游戏列表，每行格式：文件名,标题,emoji,颜色,描述
games=(
"crossword,填字游戏,📝,#f39c12,根据提示填写单词完成字谜"
"wordguess,猜单词,💭,#3498db,根据提示猜出正确的单词"
"checkers,跳棋,⚫,#2c3e50,经典跳棋对战游戏"
"reversi,黑白棋,⚪,#34495e,翻转棋子控制棋盘的策略游戏"
"quiz,知识问答,❓,#e67e22,测试你的知识水平"
"rhythm,节奏游戏,🎵,#8e44ad,跟随音乐节拍点击"
"shooter,射击游戏,🔫,#c0392b,射击敌人获得高分"
"defense,塔防游戏,🏰,#16a085,建造防御塔抵御敌人进攻"
"racing,赛车游戏,🏎️,#d35400,驾驶赛车获得第一名"
"fishing,钓鱼游戏,🎣,#2980b9,放松的钓鱼模拟游戏"
"cooking,烹饪游戏,👨‍🍳,#e74c3c,模拟烹饪美味料理"
"dress,换装游戏,👗,#e91e63,为角色搭配漂亮服装"
"puzzle2,拼图游戏,🖼️,#795548,拼接图片完成拼图"
"bubble,泡泡龙,🫧,#00bcd4,射击泡泡消除相同颜色"
"solitaire,纸牌游戏,🃏,#607d8b,经典单人纸牌游戏"
"chess,象棋,♟️,#8d6e63,中国象棋对战游戏"
"gomoku,五子棋,⚫,#4caf50,连成五子获胜的棋类游戏"
"backgammon,双陆棋,🎲,#ff9800,古老的双陆棋对战游戏"
"pool,台球游戏,🎱,#4caf50,模拟台球击球游戏"
"tennis,网球游戏,🎾,#8bc34a,网球对战游戏"
"soccer,足球游戏,⚽,#4caf50,足球射门游戏"
"basketball,篮球游戏,🏀,#ff5722,篮球投篮游戏"
"golf,高尔夫,⛳,#4caf50,高尔夫挥杆游戏"
"bowling,保龄球,🎳,#795548,保龄球投球游戏"
"darts,飞镖游戏,🎯,#e91e63,飞镖投掷准确性游戏"
"billiards,桌球游戏,🎱,#4caf50,桌球对战游戏"
"archery,射箭游戏,🏹,#8bc34a,射箭命中目标游戏"
"pinball,弹球游戏,🕹️,#9c27b0,经典弹球机游戏"
"slots,老虎机,🎰,#ff9800,运气老虎机游戏"
"lottery,彩票游戏,🎫,#9c27b0,数字彩票抽奖游戏"
)

# 创建游戏函数
create_game() {
    local filename=$1
    local title=$2
    local emoji=$3
    local color=$4
    local description=$5
    
    cat > "${filename}.html" << HTML_EOF
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, ${color} 0%, #2c3e50 100%);
            color: white;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }
        
        h1 {
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .game-container {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            max-width: 500px;
            margin: 20px 0;
        }
        
        .game-icon {
            font-size: 4rem;
            margin-bottom: 20px;
        }
        
        .game-info {
            display: flex;
            gap: 30px;
            justify-content: center;
            margin: 20px 0;
            font-size: 18px;
        }
        
        .controls {
            margin: 20px 0;
        }
        
        button {
            background: ${color};
            color: white;
            border: none;
            padding: 12px 24px;
            margin: 8px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .play-area {
            width: 400px;
            height: 300px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px auto;
            font-size: 1.2rem;
        }
        
        .instructions {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 10px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>${emoji} ${title}</h1>
    
    <div class="game-container">
        <div class="game-icon">${emoji}</div>
        
        <div class="game-info">
            <div>分数: <span id="score">0</span></div>
            <div>等级: <span id="level">1</span></div>
        </div>
        
        <div class="play-area" id="playArea">
            点击开始游戏按钮开始游戏
        </div>
        
        <div class="controls">
            <button onclick="startGame()">开始游戏</button>
            <button onclick="pauseGame()">暂停</button>
            <button onclick="resetGame()">重置</button>
        </div>
        
        <div class="instructions">
            <p>${description}</p>
            <p>使用鼠标点击或键盘控制游戏</p>
        </div>
    </div>

    <script>
        let gameRunning = false;
        let score = 0;
        let level = 1;
        let gameLoop;
        
        const scoreElement = document.getElementById('score');
        const levelElement = document.getElementById('level');
        const playAreaElement = document.getElementById('playArea');
        
        function startGame() {
            if (gameRunning) return;
            
            gameRunning = true;
            score = 0;
            level = 1;
            
            updateDisplay();
            playAreaElement.textContent = '游戏进行中...';
            
            gameLoop = setInterval(() => {
                score += 10;
                updateDisplay();
                
                if (score % 100 === 0) {
                    level++;
                    levelElement.textContent = level;
                }
            }, 1000);
        }
        
        function pauseGame() {
            gameRunning = false;
            clearInterval(gameLoop);
            playAreaElement.textContent = '游戏已暂停';
        }
        
        function resetGame() {
            gameRunning = false;
            clearInterval(gameLoop);
            
            score = 0;
            level = 1;
            
            updateDisplay();
            playAreaElement.textContent = '点击开始游戏按钮开始游戏';
        }
        
        function updateDisplay() {
            scoreElement.textContent = score;
            levelElement.textContent = level;
        }
        
        document.addEventListener('keydown', (e) => {
            if (!gameRunning) return;
            
            switch(e.key) {
                case ' ':
                    e.preventDefault();
                    score += 5;
                    updateDisplay();
                    break;
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                    e.preventDefault();
                    score += 1;
                    updateDisplay();
                    break;
            }
        });
        
        playAreaElement.addEventListener('click', () => {
            if (gameRunning) {
                score += 15;
                updateDisplay();
                playAreaElement.textContent = \`点击得分！当前分数: \${score}\`;
            }
        });
    </script>
</body>
</html>
HTML_EOF
}

# 创建所有游戏
for game_data in "${games[@]}"; do
    IFS=',' read -r filename title emoji color description <<< "$game_data"
    echo "创建游戏: $filename.html - $title"
    create_game "$filename" "$title" "$emoji" "$color" "$description"
done

echo "所有游戏创建完成！"
