const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1920;
const CANVAS_HEIGHT = canvas.height = 1080;
let gameSpeed = 10;


const backgroundLayer1 = new Image();
backgroundLayer1.src = 'layer_01.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'layer_02.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'layer_03.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'layer_04.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'layer_05.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = 'layer_06.png';
const backgroundLayer7 = new Image();
backgroundLayer7.src = 'layer_07.png';
const backgroundLayer8 = new Image();
backgroundLayer8.src = 'layer_08.png';

class Layer {
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 1920;
        this.height = 1080;
        this.x2 = this.width
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width){
            this.x = this.width+ this.x2-this.speed;
        }
        if (this.x2 <= -this.width){
            this.x2 = this.width+ this.x-this.speed;
        }
        
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
 }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

const layer1 = new Layer(backgroundLayer1, 0.1);
const layer2 = new Layer(backgroundLayer2, 0.1);
const layer3 = new Layer(backgroundLayer3, 0.4);
const layer4 = new Layer(backgroundLayer4, 0.5);
const layer5 = new Layer(backgroundLayer5, 0.6);
const layer6 = new Layer(backgroundLayer6, 0.7);
const layer7 = new Layer(backgroundLayer7, 1);
const layer8 = new Layer(backgroundLayer8, 1);

const gameObjects = [layer1, layer2, layer3, layer4, layer5, layer6, layer7, layer8]

const slider = document.getElementById('slider');
slider.value=gameSpeed;
const sliderValue = document.getElementById('sliderValue');
sliderValue.innerHTML = gameSpeed;
slider.addEventListener('change', function(e){
    gameSpeed = e.target.value;
    sliderValue.innerHTML = e.target.value;
});



function animate()
{
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    })
    requestAnimationFrame(animate);
}
animate();
