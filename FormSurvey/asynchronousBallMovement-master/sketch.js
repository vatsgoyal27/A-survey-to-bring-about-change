var database;
var gameState = 0;
var form;
var LunchResp, PayResp, OneKResp;
var playerCount;
var count;


function setup(){ 
    database = firebase.database();
    createCanvas(500,500);
    survey = new Form();
    survey.display();
    survey.updateCount();

}
function draw(){ 
    background("white"); 
    drawSprites(); 
} 

