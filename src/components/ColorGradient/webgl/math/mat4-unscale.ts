
import {vec3, mat4} from 'gl-matrix'

const M4 = mat4.create();

const XAxis  = <vec3> new Float32Array( M4.buffer,  0*4, 3 );
const YAxis  = <vec3> new Float32Array( M4.buffer,  4*4, 3 );
const ZAxis  = <vec3> new Float32Array( M4.buffer,  8*4, 3 );
const POS    = <vec3> new Float32Array( M4.buffer, 12*4, 3 );




export default function mat4unscale( out:mat4, m:mat4 ){

  M4.set( m );
  vec3.normalize( XAxis, XAxis );
  vec3.normalize( YAxis, YAxis );
  vec3.normalize( ZAxis, ZAxis );
  out.set( M4 );

}