
import {vec3, mat4} from 'gl-matrix'

const M4 = mat4.create();

const XAxis  = <vec3> new Float32Array( M4.buffer,  0*4, 3 );
const YAxis  = <vec3> new Float32Array( M4.buffer,  4*4, 3 );
const ZAxis  = <vec3> new Float32Array( M4.buffer,  8*4, 3 );
const POS    = <vec3> new Float32Array( M4.buffer, 12*4, 3 );
const YUP    = <vec3> new Float32Array( [0, 1, 0] );



export default function mat4LookAt( out:mat4, pos:vec3, tgt:vec3, up : vec3 = YUP ){

  vec3.subtract( ZAxis, pos, tgt );
  vec3.cross( XAxis, up, ZAxis );
  vec3.cross( YAxis, ZAxis, XAxis );
  vec3.normalize( XAxis, XAxis );
  vec3.normalize( YAxis, YAxis );
  vec3.normalize( ZAxis, ZAxis );

  POS.set( pos );
  out.set( M4 );

}