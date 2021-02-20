const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setUp(){

    createCanvas(1400,400)
ground1=new Ground (600,200,1200,20)
}

function draw(){
    background(0)
ground1.display();
}
