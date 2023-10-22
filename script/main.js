import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'glTF';
import { Cubes } from './cubes.js';
import { Plane } from './plane.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 5, 5 );
camera.lookAt(new THREE.Vector3(0, 60, 0));


const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth - 100, window.innerHeight - 100);
renderer.setPixelRatio = window.devicePixelRatio;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

var threeGroup = new THREE.Group();

var plane = new Plane(0, 0, 0, 10, new THREE.MeshStandardMaterial( {color: 0xffffff, side: THREE.DoubleSide} ), 5);

threeGroup.add( plane.planeGroup );

// var pieceCiano = new Cubes("pieceCiano");
// threeGroup.add( pieceCiano.group );

// var pieceAzzurro = new Cubes("pieceAzzurro");
// threeGroup.add( pieceAzzurro.group );

// var pieceBlu = new Cubes("pieceBlu");
// threeGroup.add( pieceBlu.group );

// var pieceCeleste = new Cubes("pieceCeleste");
// threeGroup.add( pieceCeleste.group );

// var pieceMagenta = new Cubes("pieceMagenta");
// threeGroup.add( pieceMagenta.group );

// var pieceRosa = new Cubes("pieceRosa");
// threeGroup.add( pieceRosa.group );

// var pieceFucsia = new Cubes("pieceFucsia");
// threeGroup.add( pieceFucsia.group );

// var pieceBianco = new Cubes("pieceBianco");
// threeGroup.add( pieceBianco.group );

// var pieceNero = new Cubes("pieceNero");
// threeGroup.add( pieceNero.group );

// var pieceGiallo = new Cubes("pieceGiallo");
// threeGroup.add( pieceGiallo.group );

// var pieceVerdino = new Cubes("pieceVerdino");
// threeGroup.add( pieceVerdino.group );

var pieceVerde = new Cubes("pieceVerde");
threeGroup.add( pieceVerde.group );


// Make the user rotate the cube by pressing the arrow keys
document.addEventListener('keydown', function(event) {
	switch (event.code) {
		case "KeyA": // Left
		rotateCube('y', 1, pieceFucsia.group);
		break;
		case 'KeyW': // Up
		rotateCube('x', 1);
		break;
		case 'KeyD': // Right
		rotateCube('y', -1);
		break;
		case 'KeyS': // Down
		rotateCube('x', -1);
		break;
		case 'KeyQ':
		rotateCube('z', 1);
		break;
		case 'KeyE':
		rotateCube('z', -1);
		break;
		case "ArrowLeft": // Left
		moveCube('x', -1);
		break;
		case 'ArrowUp': // Up
		moveCube('z', -1);
		break;
		case 'ArrowRight': // Right
		moveCube('x', 1);
		break;
		case 'ArrowDown': // Down
		moveCube('z', 1);
		break;
	}
});


// Add a directional light that casts shadows
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set( 0, 10, 0 );
directionalLight.castShadow = true;
directionalLight.shadow.camera.top = 10;
directionalLight.shadow.camera.bottom = - 10;
directionalLight.shadow.camera.left = - 10;
directionalLight.shadow.camera.right = 10;
directionalLight.shadow.camera.near = 0.1;
directionalLight.shadow.camera.far = 40;
scene.add( directionalLight );

// Add a global light that illuminates the whole scene
const ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 );
scene.add( ambientLight );




threeGroup.traverse( function (object) {
	if ( object.isMesh ) {
		object.castShadow = true;
		object.receiveShadow = true;
	}
}
);
plane.obj.castShadow = false;
scene.add( threeGroup );



camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();

// Function that smoothly rotates the cube by 90 degrees in the x or y direction
function rotateCube(axis, sign, target) {
	var angle = 0;
	var interval = setInterval(function() {
		target.rotation[axis] += Math.PI / 180 * sign;
		angle += Math.PI / 180;
		if (angle >= Math.PI / 2) {
			clearInterval(interval);
		}
	}, 10);

}

// Function that smoothly translates the cube by 1 unit in the x or y direction
function moveCube(axis, sign) {
	var distance = 0;
	var interval = setInterval(function() {
		target.obj.position[axis] += sign * 0.01;
		distance += 0.01;
		if (distance >= 1) {
			clearInterval(interval);
		}
	}, 10);

}
