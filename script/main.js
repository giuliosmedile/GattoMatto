import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'glTF';
import { Cube } from './cube.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 500, 500 );
renderer.setPixelRatio = window.devicePixelRatio;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

var threeGroup = new THREE.Group();

// Add a white plane
var planeGeometry = new THREE.PlaneGeometry( 10, 10 );
const planeMaterial = new THREE.MeshStandardMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.rotation.x = Math.PI / 2;
threeGroup.add( plane );


// Add a grey cube at y=1
// const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
// const cubeMaterial = new THREE.MeshBasicMaterial( {color: 0x888888} );
// const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
// cube.position.y = 1;
// scene.add( cube );

var cube = new Cube(0, 1, 0, 1, new THREE.MeshStandardMaterial( {color: 0x888888} ));
threeGroup.add( cube.obj );

// Make the user rotate the cube by pressing the arrow keys
document.addEventListener('keydown', function(event) {
	switch (event.keyCode) {
		case 37: // Left
		cube.obj.rotation.y += 0.1;
		break;
		case 38: // Up
		cube.obj.rotation.x += 0.1;
		break;
		case 39: // Right
		cube.obj.rotation.y -= 0.1;
		break;
		case 40: // Down
		cube.obj.rotation.x -= 0.1;
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





threeGroup.traverse( function (object) {
	if ( object.isMesh ) {
		object.castShadow = true;
		object.receiveShadow = true;
	}
}
);
plane.castShadow = false;
scene.add( threeGroup );



camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();