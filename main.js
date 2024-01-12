img = "";
noseX = 0;
noseY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	coin_sound = loadSound("coin.wav")
	kick_sound = loadSound("kick.wav")
	jump_sound = loadSound("jump.wav")
	mariodie_music = loadSound("mariodie.wav")
	gameover_music = loadSound("gameover.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(800, 400)
	canvas.parent('game')
	video.parent('cam')
	poseNet = ml5.poseNet(video, modelLoaded)
	poseNet.on('pose', gotPoses)
}

function draw() {
	game()
}

function modelLoaded() {
	console.log("modelo carregado")
}
  
function gotPoses(results) {
	if (results.length > 0){
	  console.log(results)
	  noseX = results[0].pose.nose.x
	  noseY = results[0].pose.nose.y
	}
}





