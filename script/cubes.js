import * as THREE from "https://threejs.org/build/three.module.js";
import { Cube } from './cube.js';

class Cubes {

    pieceCiano() {

        var matCyan = new THREE.MeshLambertMaterial ({
            color: 0x53C6D3, 
            shading:THREE.FlatShading
          });
        
        var cube1 = new Cube(0, 1, 0, 1, matCyan)
        var cube2 = new Cube(0, 2, 0, 1, matCyan)

        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
    }

    pieceAzzurro() {

        var matAzzurro = new THREE.MeshLambertMaterial ({
            color: 0x0089B9,
            shading:THREE.FlatShading
        });

        var cube1 = new Cube(0, 1, 0, 1, matAzzurro)
        var cube2 = new Cube(0, 2, 0, 1, matAzzurro)
        var cube3 = new Cube(1, 1, 0, 1, matAzzurro)

        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
        this.group.add(cube3.obj);
    }
    
    pieceBlu() {

        var matBlu = new THREE.MeshLambertMaterial ({
            color: 0x0036A9,
            shading:THREE.FlatShading
        });

        var cube1 = new Cube(0, 1, 0, 1, matBlu)
        var cube2 = new Cube(0, 2, 0, 1, matBlu)
        var cube3 = new Cube(1, 1, 0, 1, matBlu)
        var cube4 = new Cube(1, 2, 0, 1, matBlu)

        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
        this.group.add(cube3.obj);
        this.group.add(cube4.obj);
    }

    pieceCeleste() {

        var matCeleste = new THREE.MeshLambertMaterial ({
            color: 0x30F6FF,
            shading:THREE.FlatShading
        });
        
        var cube1 = new Cube(0, 1, 0, 1, matCeleste)
        var cube2 = new Cube(0, 2, 0, 1, matCeleste)
        var cube3 = new Cube(1, 1, 0, 1, matCeleste)
        var cube4 = new Cube(1, 2, 0, 1, matCeleste)
        var cube5 = new Cube(2, 1, 0, 1, matCeleste)
        var cube6 = new Cube(2, 2, 0, 1, matCeleste)
        var cube7 = new Cube(3, 1, 0, 1, matCeleste)
        var cube8 = new Cube(3, 2, 0, 1, matCeleste)
        var cube9 = new Cube(3, 3, 0, 1, matCeleste)
       

        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
        this.group.add(cube3.obj);
        this.group.add(cube4.obj);
        this.group.add(cube5.obj);
        this.group.add(cube6.obj);
        this.group.add(cube7.obj);
        this.group.add(cube8.obj);
        this.group.add(cube9.obj);

    }

    pieceMagenta() {

        var matViola = new THREE.MeshLambertMaterial ({
            color: 0xDD3A8E,
            shading:THREE.FlatShading
        });

        var cube1 = new Cube(0, 1, 0, 1, matViola)
        var cube2 = new Cube(0, 2, 0, 1, matViola)
        var cube3 = new Cube(0, 3, 0, 1, matViola)
        var cube4 = new Cube(1, 1, 0, 1, matViola)
        var cube5 = new Cube(1, 2, 0, 1, matViola)
        var cube6 = new Cube(1, 3, 0, 1, matViola)

        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
        this.group.add(cube3.obj);
        this.group.add(cube4.obj);
        this.group.add(cube5.obj);
        this.group.add(cube6.obj);
    }

    pieceRosa() {

        var matRosa = new THREE.MeshLambertMaterial ({
            color: 0xFF9ABF,
            shading:THREE.FlatShading
        });

        var cube1 = new Cube(0, 1, 0, 1, matRosa)
        var cube2 = new Cube(0, 2, 0, 1, matRosa)
        var cube3 = new Cube(0, 3, 0, 1, matRosa)
        var cube4 = new Cube(1, 2, 0, 1, matRosa)
        var cube5 = new Cube(2, 2, 0, 1, matRosa)
        var cube6 = new Cube(2, 1, 0, 1, matRosa)

        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
        this.group.add(cube3.obj);
        this.group.add(cube4.obj);
        this.group.add(cube5.obj);
        this.group.add(cube6.obj);
    }

    pieceFucsia() {

        var matFucsia = new THREE.MeshLambertMaterial ({
            color: 0xFF1E7A,
            shading:THREE.FlatShading
        });

        var cube1 = new Cube(0, 1, 0, 1, matFucsia)
        var cube2 = new Cube(0, 2, 0, 1, matFucsia)
        var cube3 = new Cube(0, 3, 0, 1, matFucsia)
        var cube4 = new Cube(1, 2, 0, 1, matFucsia)
        var cube5 = new Cube(2, 2, 0, 1, matFucsia)
        var cube6 = new Cube(3, 2, 0, 1, matFucsia)
        var cube7 = new Cube(3, 1, 0, 1, matFucsia)
       

        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
        this.group.add(cube3.obj);
        this.group.add(cube4.obj);
        this.group.add(cube5.obj);
        this.group.add(cube6.obj);
        this.group.add(cube7.obj);
    }

    pieceBianco() {

        var matBianco = new THREE.MeshLambertMaterial ({
            color: 0xE9E9E9,
            shading:THREE.FlatShading
        });

        var cube1 = new Cube(0, 1, 0, 1, matBianco)
        var cube2 = new Cube(0, 2, 0, 1, matBianco)
        var cube3 = new Cube(1, 1, 0, 1, matBianco)
        var cube4 = new Cube(2, 1, 0, 1, matBianco)

        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
        this.group.add(cube3.obj);
        this.group.add(cube4.obj);
    }

    pieceNero() {

        var matNero = new THREE.MeshLambertMaterial ({
            color: 0x3C3C3C,
            shading:THREE.FlatShading
        });

        var cube1 = new Cube(0, 1, 0, 1, matNero)
        var cube2 = new Cube(0, 2, 0, 1, matNero)
        var cube3 = new Cube(0, 3, 0, 1, matNero)
        var cube4 = new Cube(1, 2, 0, 1, matNero)
        var cube5 = new Cube(2, 2, 0, 1, matNero)
        var cube6 = new Cube(2, 1, 0, 1, matNero)
        var cube7 = new Cube(2, 3, 0, 1, matNero)

        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
        this.group.add(cube3.obj);
        this.group.add(cube4.obj);
        this.group.add(cube5.obj);
        this.group.add(cube6.obj);
        this.group.add(cube7.obj);
    }

    pieceGiallo() {

        var matGiallo = new THREE.MeshLambertMaterial ({
            color: 0xF0D302,
            shading:THREE.FlatShading
        });

        var cube1 = new Cube(0, 1, 0, 1, matGiallo)
        var cube2 = new Cube(0, 2, 0, 1, matGiallo)
        var cube3 = new Cube(0, 3, 0, 1, matGiallo)
        var cube4 = new Cube(1, 2, 0, 1, matGiallo)
        var cube5 = new Cube(2, 2, 0, 1, matGiallo)
        var cube6 = new Cube(2, 1, 0, 1, matGiallo)
        var cube7 = new Cube(1, 1, 0, 1, matGiallo)

        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
        this.group.add(cube3.obj);
        this.group.add(cube4.obj);
        this.group.add(cube5.obj);
        this.group.add(cube6.obj);
        this.group.add(cube7.obj);
    
    }

    pieceVerdino() {

        var matVerdino = new THREE.MeshLambertMaterial ({
            color: 0xDDF7AD,
            shading:THREE.FlatShading
        });

        var cube1 = new Cube(0, 1, 0, 1, matVerdino)
        var cube2 = new Cube(1, 1, 0, 1, matVerdino)
        var cube3 = new Cube(1, 2, 0, 1, matVerdino)
        var cube4 = new Cube(1, 3, 0, 1, matVerdino)
        var cube5 = new Cube(2, 1, 0, 1, matVerdino)
        var cube6 = new Cube(2, 2, 0, 1, matVerdino)


        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
        this.group.add(cube3.obj);
        this.group.add(cube4.obj);
        this.group.add(cube5.obj);
        this.group.add(cube6.obj);
    }

    pieceVerde(){

        var matVerde = new THREE.MeshLambertMaterial ({
            color: 0x43D337,
            shading:THREE.FlatShading
        });

        var cube1 = new Cube(0, 1, 0, 1, matVerde)
        var cube2 = new Cube(0, 2, 0, 1, matVerde)
        var cube3 = new Cube(0, 3, 0, 1, matVerde)
        var cube4 = new Cube(1, 2, 0, 1, matVerde)
        var cube5 = new Cube(2, 2, 0, 1, matVerde)
        var cube6 = new Cube(3, 1, 0, 1, matVerde)
        var cube7 = new Cube(3, 2, 0, 1, matVerde)
        var cube8 = new Cube(3, 3, 0, 1, matVerde)
        var cube9 = new Cube(3, 4, 0, 1, matVerde)
        var cube10 = new Cube(2, 4, 0, 1, matVerde)
       

        this.group.add(cube1.obj);
        this.group.add(cube2.obj);
        this.group.add(cube3.obj);
        this.group.add(cube4.obj);
        this.group.add(cube5.obj);
        this.group.add(cube6.obj);
        this.group.add(cube7.obj);
        this.group.add(cube8.obj);
        this.group.add(cube9.obj);
        this.group.add(cube10.obj);

    }


    constructor(index) {
        this.group = new THREE.Group();
        this.generatePiece(index);
    }

    generatePiece(index) {
        switch (index) {
            case "pieceCiano":
                this.pieceCiano();
                break;
            case "pieceAzzurro":
                this.pieceAzzurro();
                break;
            case "pieceBlu":
                this.pieceBlu();
                break;
            case "pieceMagenta":
                this.pieceMagenta();
                break;
            case "pieceRosa":
                this.pieceRosa();
                break;
            case "pieceFucsia":
                this.pieceFucsia();
                break;
            case "pieceBianco":
                this.pieceBianco();
                break;
            case "pieceNero":
                this.pieceNero();
                break;
            case "pieceGiallo":
                this.pieceGiallo();
                break;
            case "pieceVerdino":
                this.pieceVerdino();
                break;
            case "pieceCeleste":
                this.pieceCeleste();
                break;
            case "pieceVerde":
                this.pieceVerde();
                break;
            default:
                console.log("Error: Invalid piece index");
        }
        
    }

}




export { Cubes }