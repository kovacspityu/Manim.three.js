import {Animation} from './index.js';

let anim = new Animation(true);
// anim.createArrow(0, 0, 0, 1, 1, 1, 'red', true);
let line = anim.createLineCircle(1, 1000, true);
let mesh = anim.fill(line.geometry, 0xff00ff, 0);
let animation = [
    {
        name: "draw square",
        fraction: 0,
        animate: () => {
            animation[0].fraction = (animation[0].fraction + 0.01);
            line.material.dashSize = animation[0].fraction * 10;
        },
        reset: () => {
            animation[0].fraction = 0;
        },
        terminateCond: () => (animation[0].fraction >= 1)
    },
    {
        name: "remove square",
        fraction: 1,
        animate: () => {
            animation[1].fraction = (animation[1].fraction - 0.03);
            line.material.dashSize = animation[1].fraction * 10;
        },
        reset: () => {
            animation[1].fraction = 1;
        },
        terminateCond: () => (animation[1].fraction <= 0)
    },
    {
        name: "fill square",
        animate: () => {
            mesh.opacity += 0.005;
        },
        reset: () => {},
        terminateCond: () => (mesh.opacity >= 0.4)
    },
    {
        name: "unfill square",
        animate: () => {
            mesh.opacity -= 0.01;
        },
        reset: () => {},
        terminateCond: () => (mesh.opacity <= 0)
    }
];
anim.addAnimation(animation[0]);
anim.addAnimation(animation[2]);
anim.addAnimation({name: "checkpoint"});
anim.addAnimation(animation[1]);
anim.addAnimation(animation[3]);
anim.addAnimation({name: "checkpoint"});
anim.addAnimation(animation[0]);
anim.addAnimation(animation[2]);
anim.addAnimation({name: "checkpoint"});
anim.addAnimation(animation[1]);
anim.addAnimation(animation[3]);
anim.addAnimation({name: "checkpoint"});
anim.addAnimation(animation[0]);
anim.addAnimation(animation[2]);
anim.addAnimation({name: "checkpoint"});
anim.addAnimation(animation[1]);
anim.addAnimation(animation[3]);
anim.addAnimation({name: "checkpoint"});
anim.play();
