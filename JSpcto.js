let video;
let bodyPose;
let poses = [];
let connections;

function preload() {
  // Carica il modello bodyPose
  bodyPose = ml5.bodyPose();
}

function setup() {
  createCanvas(640, 480);

  // Crea il video e nascondilo
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // Inizia a rilevare le pose nel video della webcam
  bodyPose.detectStart(video, gotPoses);
  // Ottieni le informazioni sulle connessioni dello scheletro
  connections = bodyPose.getSkeleton();
}

function draw() {
  // Disegna il video della webcam
  image(video, 0, 0, width, height);

  // Disegna le connessioni dello scheletro e i punti chiave
  drawSkeletonAndKeypoints();
}

// Funzione di callback quando bodyPose fornisce dati
function gotPoses(results) {
  // Salva l'output nella variabile poses
  poses = results;
}

// Funzione per disegnare le connessioni dello scheletro e i punti chiave
function drawSkeletonAndKeypoints() {
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    drawConnections(pose);
    drawKeypoints(pose);
  }
}

// Funzione per disegnare le connessioni dello scheletro
function drawConnections(pose) {
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = pose.keypoints[pointAIndex];
    let pointB = pose.keypoints[pointBIndex];
    // Disegna una linea solo se entrambi i punti sono abbastanza affidabili
    if (pointA.score > 0.1 && pointB.score > 0.1) {
      stroke(255, 0, 0);
      strokeWeight(2);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}

// Funzione per disegnare i punti chiave tracciati
function drawKeypoints(pose) {
  for (let j = 0; j < pose.keypoints.length; j++) {
    let keypoint = pose.keypoints[j];
    // Disegna un cerchio solo se la fiducia del punto chiave è maggiore di 0.1
    if (keypoint.score > 0.1) {
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }
}
