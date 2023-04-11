
import decompose from './mat4-decompose'
import { vec3, quat, mat4 } from 'gl-matrix';


export function mat4Xaxis( out:vec3, m:mat4) : void {
  out[0] = m[0]
  out[1] = m[1]
  out[2] = m[2]
}

export function mat4Yaxis( out:vec3, m:mat4) : void {
  out[0] = m[4]
  out[1] = m[5]
  out[2] = m[6]
}

export function mat4Zaxis( out:vec3, m:mat4) : void {
  out[0] = m[8]
  out[1] = m[9]
  out[2] = m[10]
}
