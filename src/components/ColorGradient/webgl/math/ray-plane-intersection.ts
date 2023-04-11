
import { vec3 } from "gl-matrix";
import Ray    from "./Ray";
import Plane  from "./Plane";

const V1 = vec3.create();

export default ( out:vec3, ray:Ray, plane:Plane ) : boolean =>{

  const denom = vec3.dot( plane.normal, ray.dir );

  if ( Math.abs( denom ) > 1e-6) { 

    vec3.sub( V1, plane.origin, ray.pos );
    const t = vec3.dot( V1, plane.normal ) / denom; 

    vec3.scaleAndAdd( out, ray.pos, ray.dir, t );

    return true;
  }

  return false;

}