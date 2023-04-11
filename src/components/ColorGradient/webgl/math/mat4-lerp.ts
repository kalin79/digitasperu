
import decompose from './mat4-decompose'
import { vec3, quat, mat4 } from 'gl-matrix';



const P1   = vec3.create();
const R1   = quat.create();
const S1   = vec3.create();

const P2   = vec3.create();
const R2   = quat.create();
const S2   = vec3.create();


export default function mat4lerp( out:mat4, m1:mat4, m2:mat4, p:number ) : void {

  decompose( m1, P1, R1, S1 );
  decompose( m2, P2, R2, S2 );

  vec3.lerp( P1, P1, P2, p );
  vec3.lerp( S1, S1, S2, p );
  quat.slerp( R1, R1, R2, p );

  mat4.fromRotationTranslationScale( out, R1, P1, S1 );

}
