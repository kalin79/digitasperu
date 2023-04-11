import { vec3, mat4, mat3 } from "gl-matrix"
import Camera from 'nanogl-camera'


const V1 = vec3.create()
const IMVP = mat4.create()
const MAT3 = mat3.create()
const M4 = mat4.create();



export default class Ray {

  pos: vec3
  dir: vec3

  _invalid: boolean = true

  constructor() {
    this.pos = vec3.create()
    this.dir = vec3.create()
  }


  unproject(coords: ArrayLike<number>, cam: Camera, skipParent: boolean = false) {
    mat4.invert(IMVP, cam._viewProj);
    if (cam._parent && skipParent) {
      mat4.invert(M4, cam._parent._wmatrix);
      mat4.multiply(IMVP, M4, IMVP);
    }

    V1[0] = coords[0];
    V1[1] = coords[1];

    V1[2] = -1
    vec3.transformMat4(this.pos, V1, IMVP);

    V1[2] = 1
    vec3.transformMat4(this.dir, V1, IMVP);

    vec3.subtract(this.dir, this.dir, this.pos);
    vec3.normalize(this.dir, this.dir);
  }


  unprojectProjOnly(coords: ArrayLike<number>, cam: Camera) {
    mat4.invert(IMVP, cam.lens.getProjection());

    V1[0] = coords[0];
    V1[1] = coords[1];

    V1[2] = -1
    vec3.transformMat4(this.pos, V1, IMVP);

    V1[2] = 1
    vec3.transformMat4(this.dir, V1, IMVP);

    vec3.subtract(this.dir, this.dir, this.pos);
    vec3.normalize(this.dir, this.dir);
  }

  invalidate() {
    this._invalid = true;
  }


}

