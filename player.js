class Player {
    constructor(x, y, r, playerLabel) {
        let options = {
            label: playerLabel
        }
        // this.body = Bodies.circle(x, y, r, options);
        this.body = Bodies.rectangle(x, y, r, r, options);
        this.r = r;
        this.playerColor = 'green';
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        if (this.body.position.x < 400) {
            this.body.position.x = 395;
        }
        if (this.body.position.x > window.innerWidth - 385) {
            this.body.position.x = window.innerWidth - 395;
        }

        rotate(angle);
        // strokeWeight(1);
        // stroke(255);
        rectMode(CENTER);
        fill(0, 0, 0, 0);
        rect(0, 0, this.r, this.r)
        imageMode(CENTER);
        image(playerImg, 0, 0, this.r, this.r);
        // circle(0, 0, this.r * 2);
        // console.log(shape);
        // img.mask(shape);
        pop();
    }

    removeBody() {
        World.remove(world, this.body);
    }

}