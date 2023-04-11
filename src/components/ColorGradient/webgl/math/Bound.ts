import { vec3 } from "gl-matrix"

export default class Bounds {

  readonly min = vec3.create()
  readonly max = vec3.create()

  private _size = vec3.create()

  get size():vec3{
    vec3.sub(this._size, this.max, this.min);
    return this._size;
  }
}