import { vec3 } from "gl-matrix";


var V3 = vec3.create();


export function ParseCSS( str:string ){
  return parseInt( str.substr(1), 16 );
}

export function HexToVec( hex:number, v3:vec3 ){
  v3[0] = ((hex >> 16) & 0xFF)/0xFF;
  v3[1] = ((hex >> 8) & 0xFF)/0xFF;
  v3[2] = ( hex & 0xFF )/0xFF;
  return v3;
}

export function TmpHexToVec( hex:number ):vec3{
  V3[0] = ((hex >> 16) & 0xFF)/0xFF;
  V3[1] = ((hex >> 8) & 0xFF)/0xFF;
  V3[2] = ( hex & 0xFF )/0xFF;
  return V3;
}


export function VecToHex( v3:vec3 ):number {
  return  Math.round(v3[0] * 0xFF)<<16 |
          Math.round(v3[1] * 0xFF)<<8  |
          Math.round(v3[2] * 0xFF);
}


export function MakeFromHex( hex:number ):vec3{
  return HexToVec( hex, vec3.create() );
}

