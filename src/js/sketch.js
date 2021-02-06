let shootingStars;
let numStars;
let staticStars;
let bigMountain;
let leftMountain;
let rightMountain;

class Star {
    constructor(x, y, r, opacity, isShooting) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.opacity = opacity;
        this.isShooting = isShooting;
        this.xVel = (Math.random() * 10) + 10;
        this.yVel = Math.random() * -2;
    }

    update() {
        this.x += this.xVel;
        this.y += this.yVel;
    }

    show() {
        fill(255, 255, 255, this.opacity);
        circle(this.x, this.y, this.r)
    }
}

class Mountain {
    constructor(x1, y1, x2, y2, x3, y3, color) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.color = color;
    }

    show() {
        fill(this.color);
        strokeWeight(0);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
        fill(150)
        // this.snowcap();
    }
}


let mountainSetup = () => {
    bigMountain = new Mountain(windowWidth / 2, windowHeight / 2, 0, windowHeight, windowWidth, windowHeight, color(58, 63, 87));
    frontLeftMountain = new Mountain(windowWidth / 4.8, windowHeight / 1.4, -100, windowHeight, windowWidth / 2, windowHeight, color(37, 41, 59));
    frontRightMountain = new Mountain(windowWidth - (windowWidth / 4.8), windowHeight / 1.4, windowWidth / 2, windowHeight, windowWidth + 100, windowHeight, color(37, 41, 59)); 
}

let drawMountains = () => {
    bigMountain.show()
    frontLeftMountain.show();   
    frontRightMountain.show(); 
}


let spawnShootingStar = () => {
    if (Math.floor(Math.random() * 300) == 0) {
        let shootingStar = new Star(-10, random(0, windowHeight), 6, 255, true);
        return shootingStar;
    }
}

let shootingStar = () => {
    let shootingStar = spawnShootingStar()

    if (shootingStar) {
        shootingStars.push(shootingStar)
    }
    shootingStars.forEach(shootingStar => {
        shootingStar.update();
        shootingStar.show();
        if (shootingStar.x > windowWidth || shootingStar.y < 0 || shootingStar.y > windowHeight) {
            shootingStars.pop(shootingStar);
            background(28, 31, 46);
        }
    });
}

function setup() {

    numStars = (windowWidth * windowHeight) / 25000;
    staticStars = [];
    shootingStars = [];

    cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);
    cnv.parent('canvas');
    background(220)

    mountainSetup();
    for (let i=0; i<numStars; i++) {
        staticStars.push(new Star(random(0, windowWidth), random(0, windowHeight), random(4), random(170, 200), false));
    }

}


function draw() {
    background(28, 31, 46, 100);

    stroke(255, 255, 255, 10);
    strokeWeight(4);    
    shootingStar();
    staticStars.forEach(star => {
        star.show();
    });
    
    drawMountains();
}
