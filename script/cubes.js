import * as THREE from "https://threejs.org/build/three.module.js";
import { Cube } from './cube.js';

class Cubes {

    pieceCyan() {

        var matCyan = new THREE.MeshLambertMaterial ({
            color: 0x00FFFF, 
            shading:THREE.FlatShading
          });
        
        var cube1 = new Cube(0, 1, 0, 1, matCyan)
        var cube2 = new Cube(1, 2, 0, 1, matCyan)

        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
    }

    pieceBigL() {

        var mat = new THREE.MeshLambertMaterial ({
            color: 0xFF8000,
            shading:THREE.FlatShading
    });

        cube1 = new Cube(0, 0, 0, 1, new THREE.MeshNormalMaterial())
        cube2 = new Cube(0, 1, 0, 1, new THREE.MeshNormalMaterial())
        cube3 = new Cube(0, 2, 0, 1, new THREE.MeshNormalMaterial())

        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
        this.group.add(cube3.obj);
    }
    
    pieceSmallT;

    constructor(index) {
        this.group = new THREE.Group();
        this.generatePiece(index);
    }

    generatePiece(index) {
        switch (index) {
            case "pieceCyan":
                this.pieceCyan();
                break;
            default:
                console.log("Error: Invalid piece index");
        }
        
    }

}




export { Cubes }