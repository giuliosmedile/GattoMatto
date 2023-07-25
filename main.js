import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'glTF';

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();