import * as THREE from "https://threejs.org/build/three.module.js";

class Cube {
    constructor(x, y, z, size, material) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.material = material;
        
        this.obj = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), material);
        this.obj.position.x = x;
        this.obj.position.y = y;
        this.obj.position.z = z;
    }
}

export { Cube };