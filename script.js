let playerState= "idle";
const dropdown = document.getElementById('animations');
console.log(dropdown);
dropdown.addEventListener('change', (e)=>{
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 400;
const CANVAS_HEIGHT = canvas.height = 400;

const playerImage = new Image();
playerImage.src = './Assets/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;


let gameFrame = 0;
const staggerFrames = 6;
const spriteAnimation = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'sleep',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    }
];

animationStates.forEach((state,index)=>{
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let posisionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: posisionX, y: positionY});
    }
    
    spriteAnimation[state.name] = frames;
})

console.log(animationStates);
console.log(spriteAnimation);


function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimation[playerState].loc.length;

    let frameX = spriteWidth * position;
    let frameY = spriteAnimation[playerState].loc[position].y;
    ctx.drawImage(playerImage
                ,frameX ,frameY,
                spriteWidth,spriteHeight
                ,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();