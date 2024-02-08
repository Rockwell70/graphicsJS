import * as THREE from 'three';
// import { OrbitControls} from "three/addons";
// import { GLTFLoader} from "three/addons";
// import renderer from "three/addons/renderers/common/Renderer";
//
// const controls = new OrbitControls( camera, renderer.domElement);
// const loader = new GLTFLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
