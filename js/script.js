// 随机生成背景颜色
function randomBackgroundColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 设置上部分和下部分的背景颜色
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

header.style.backgroundColor = randomBackgroundColor();
footer.style.backgroundColor = randomBackgroundColor();
