import { vec3 } from "gl-matrix";
import Ray from "./Ray";


const V1 = vec3.create();

export default ( ray:Ray, point:vec3 )=>{
  vec3.sub( V1, point, ray.pos );
  vec3.cross( V1, ray.dir, V1 );
  return vec3.length( V1 );
}