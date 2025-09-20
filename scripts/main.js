// 游戏数据 - 基于实际的50个游戏文件
const games = [
    { id: 'archery', name: '射箭游戏', category: 'action', icon: '🏹', description: '射箭命中目标，测试你的精准度' },
    { id: 'backgammon', name: '双陆棋', category: 'strategy', icon: '🎲', description: '古老的双陆棋对战游戏' },
    { id: 'basketball', name: '篮球游戏', category: 'action', icon: '🏀', description: '篮球投篮游戏，挑战你的投篮技巧' },
    { id: 'billiards', name: '桌球游戏', category: 'casual', icon: '🎱', description: '桌球对战游戏，精准控制球杆' },
    { id: 'bowling', name: '保龄球', category: 'casual', icon: '🎳', description: '保龄球投球游戏，争取全中' },
    { id: 'bubble', name: '泡泡龙', category: 'puzzle', icon: '🫧', description: '射击泡泡消除相同颜色' },
    { id: 'centipede', name: '蜈蚣大战', category: 'action', icon: '🐛', description: '射击蜈蚣和其他昆虫敌人' },
    { id: 'checkers', name: '跳棋', category: 'strategy', icon: '⚫', description: '经典跳棋对战游戏' },
    { id: 'chess', name: '象棋', category: 'strategy', icon: '♟️', description: '中国象棋对战游戏' },
    { id: 'connect4', name: '四子棋', category: 'strategy', icon: '🔴', description: '连成四子获胜的策略游戏' },
    { id: 'cooking', name: '烹饪游戏', category: 'casual', icon: '👨‍🍳', description: '模拟烹饪美味料理' },
    { id: 'crossword', name: '填字游戏', category: 'puzzle', icon: '📝', description: '根据提示填写单词完成字谜' },
    { id: 'darts', name: '飞镖游戏', category: 'casual', icon: '🎯', description: '飞镖投掷准确性游戏' },
    { id: 'defense', name: '塔防游戏', category: 'strategy', icon: '🏰', description: '建造防御塔抵御敌人进攻' },
    { id: 'dress', name: '换装游戏', category: 'casual', icon: '👗', description: '为角色搭配漂亮服装' },
    { id: 'fishing', name: '钓鱼游戏', category: 'casual', icon: '🎣', description: '放松的钓鱼模拟游戏' },
    { id: 'frogger', name: '青蛙过河', category: 'arcade', icon: '🐸', description: '帮助青蛙安全穿越马路和河流' },
    { id: 'golf', name: '高尔夫', category: 'casual', icon: '⛳', description: '高尔夫挥杆游戏' },
    { id: 'gomoku', name: '五子棋', category: 'strategy', icon: '⚫', description: '连成五子获胜的棋类游戏' },
    { id: 'hangman', name: '猜词游戏', category: 'puzzle', icon: '🎪', description: '猜字母组成单词，避免被吊死' },
    { id: 'lottery', name: '彩票游戏', category: 'casual', icon: '🎫', description: '数字彩票抽奖游戏' },
    { id: 'match3', name: '三消游戏', category: 'puzzle', icon: '💎', description: '匹配三个相同元素消除' },
    { id: 'maze', name: '走迷宫', category: 'puzzle', icon: '🌀', description: '在复杂迷宫中找到出口' },
    { id: 'memory', name: '记忆翻牌', category: 'puzzle', icon: '🃏', description: '翻牌找到相同图案，考验记忆力' },
    { id: 'minesweeper', name: '扫雷', category: 'puzzle', icon: '💣', description: '经典扫雷游戏，避开地雷清理区域' },
    { id: 'missile', name: '导弹防御', category: 'action', icon: '🚀', description: '防御导弹攻击，保护城市' },
    { id: 'monopoly', name: '大富翁', category: 'strategy', icon: '🏠', description: '经典大富翁策略游戏' },
    { id: 'pacman', name: '吃豆豆', category: 'arcade', icon: '👻', description: '经典吃豆人游戏，收集豆子避开鬼魂' },
    { id: 'pinball', name: '弹球游戏', category: 'arcade', icon: '🕹️', description: '经典弹球机游戏' },
    { id: 'platformer', name: '平台跳跃', category: 'action', icon: '🏃', description: '经典平台跳跃游戏，收集道具到达终点' },
    { id: 'pong', name: '乒乓球', category: 'arcade', icon: '🏓', description: '双人乒乓球游戏，经典街机游戏' },
    { id: 'pool', name: '台球游戏', category: 'casual', icon: '🎱', description: '模拟台球击球游戏' },
    { id: 'puzzle', name: '滑块拼图', category: 'puzzle', icon: '🧩', description: '移动滑块完成拼图挑战' },
    { id: 'puzzle2', name: '拼图游戏', category: 'puzzle', icon: '🖼️', description: '拼接图片完成拼图' },
    { id: 'quiz', name: '知识问答', category: 'puzzle', icon: '❓', description: '测试你的知识水平' },
    { id: 'racing', name: '赛车游戏', category: 'action', icon: '🏎️', description: '驾驶赛车获得第一名' },
    { id: 'reversi', name: '黑白棋', category: 'strategy', icon: '⚪', description: '翻转棋子控制棋盘的策略游戏' },
    { id: 'rhythm', name: '节奏游戏', category: 'casual', icon: '🎵', description: '跟随音乐节拍点击' },
    { id: 'shooter', name: '射击游戏', category: 'action', icon: '🔫', description: '射击敌人获得高分' },
    { id: 'skiing', name: '滑雪游戏', category: 'action', icon: '⛷️', description: '滑雪下坡，避开障碍物' },
    { id: 'slots', name: '老虎机', category: 'casual', icon: '🎰', description: '运气老虎机游戏' },
    { id: 'snake', name: '贪吃蛇', category: 'arcade', icon: '🐍', description: '经典贪吃蛇游戏，控制蛇吃食物并避免撞到自己' },
    { id: 'soccer', name: '足球游戏', category: 'action', icon: '⚽', description: '足球射门游戏' },
    { id: 'solitaire', name: '纸牌游戏', category: 'casual', icon: '🃏', description: '经典单人纸牌游戏' },
    { id: 'sudoku', name: '数独', category: 'puzzle', icon: '🔢', description: '经典数独益智游戏' },
    { id: 'tennis', name: '网球游戏', category: 'action', icon: '🎾', description: '网球对战游戏' },
    { id: 'tetris', name: '俄罗斯方块', category: 'puzzle', icon: '🧩', description: '经典俄罗斯方块，消除行获得分数' },
    { id: 'tictactoe', name: '井字棋', category: 'strategy', icon: '❌', description: '简单但有趣的井字棋游戏' },
    { id: 'typing', name: '打字游戏', category: 'casual', icon: '⌨️', description: '提高打字速度和准确率' },
    { id: 'wordguess', name: '猜单词', category: 'puzzle', icon: '💭', description: '根据提示猜出正确的单词' }
];

// DOM元素
const gamesGrid = document.getElementById('games-grid');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');

// 渲染游戏卡片
function renderGames(gamesToRender = games) {
    gamesGrid.innerHTML = '';
    
    gamesToRender.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <span class="game-icon">${game.icon}</span>
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <span class="game-category">${getCategoryName(game.category)}</span>
        `;
        
        gameCard.addEventListener('click', () => {
            window.location.href = `game.html?game=${game.id}`;
        });
        
        gamesGrid.appendChild(gameCard);
    });
}

// 获取分类中文名
function getCategoryName(category) {
    const categoryNames = {
        'action': '动作游戏',
        'puzzle': '益智游戏',
        'arcade': '街机游戏',
        'strategy': '策略游戏',
        'casual': '休闲游戏'
    };
    return categoryNames[category] || category;
}

// 搜索功能
function filterGames() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    const filteredGames = games.filter(game => {
        const matchesSearch = game.name.toLowerCase().includes(searchTerm) || 
                            game.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    renderGames(filteredGames);
}

// 事件监听器
searchInput.addEventListener('input', filterGames);
categoryFilter.addEventListener('change', filterGames);

// 初始渲染
renderGames();