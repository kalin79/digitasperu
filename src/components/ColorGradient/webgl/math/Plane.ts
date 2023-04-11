import { vec3 } from "gl-matrix";


export default class Plane {
  
  origin: vec3;
  normal: vec3;

  constructor(){
    this.origin = <vec3> new Float32Array(3);
    this.normal = <vec3> new Float32Array(3);
    this.normal[1] = 1.0;
  }

}

