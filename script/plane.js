import * as THREE from "https://threejs.org/build/three.module.js";
class Plane {
    constructor(x, y, z, size, material, gridSize) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.material = material;
        
        this.obj = new THREE.Mesh(new THREE.PlaneGeometry(size, size), material);
        this.obj.position.x = x;
        this.obj.position.y = y;
        this.obj.position.z = z;

        this.computeGrid(gridSize);

        this.planeGroup = new THREE.Group();
        this.planeGroup.add(this.obj);
        this.planeGroup.add(this.grid);
        this.planeGroup.rotation.x = Math.PI / 2;
    }

    // A function that draws a grid of gridSize squares at the center of the plane
    computeGrid(gridSize) {
        var grid = new THREE.GridHelper(gridSize, gridSize);
        if (gridSize % 2 == 0) {
            grid.position.x = this.x + 0.5;
            grid.position.y = this.y + 0.5;
        } else {
            grid.position.x = this.x;
            grid.position.y = this.y;
        }
        grid.position.z = this.z - 0.001;
        grid.rotation.x = Math.PI / 2;
        this.grid = grid;

    }
}

export { Plane }