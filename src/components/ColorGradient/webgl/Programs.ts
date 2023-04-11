
import Program   from 'nanogl/program'

import { GLContext } from 'nanogl/types';
import Scene from './Scene';

Program.debug = true;


/**
 * checkHighP
 * @param {WebGLRenderingContext} gl 
 */
function checkHighP( gl:GLContext ){

  const hv = gl.getShaderPrecisionFormat( gl.VERTEX_SHADER, gl.HIGH_FLOAT );
  const hf = gl.getShaderPrecisionFormat( gl.FRAGMENT_SHADER, gl.HIGH_FLOAT );
  return  hf.precision > 0 && hv.precision > 0;

}


type PEntry = {
  id:string
  prg:Program
  vert:string
  frag:string
  ext: string
}



export default class Programs {

  hasHighp: boolean;
  
  programsMap : Map<string, PEntry> = new Map()
  programs: PEntry[] = [];
  

  /**
   * 
   * @param {import('scene').default} scene 
   */
  constructor( private scene:Scene ){

    const gl = scene.gl;

    // TODO: test if available
    // gl.getExtension('OES_standard_derivatives');

    this.hasHighp = checkHighP( gl );

    this.compile();
  }


  create( id:string, vert:string, frag:string, ext: string = null ) : Program {
    // if( this.programsMap.has(id)) throw `${id} already exist`
  
    if( this.programsMap.has(id)){
      return this.programsMap.get(id).prg;
    }

    const prg = new Program(this.scene.gl);
    const entry = {prg, vert, frag, id, ext};
    this.programsMap.set( id , entry );
    this.programs.push( entry )
    return prg;
  }

  update( id:string, vert?:string, frag?:string ) : void {
    const entry = this.programsMap.get(id)
    const v = entry.vert;
    const f = entry.frag;
    vert = vert || v;
    frag = frag || f;
    let defs = this.getGlobalDefinitions()
    if(entry.ext){
      defs = entry.ext + defs;
    }
    if( ! entry.prg.compile( vert , frag , defs ) ) {
      // restore
      entry.prg.compile( v, f, defs ) 
    } else {
      entry.vert = vert;
      entry.frag = frag;
    }
  }


  get( id:string):Program {
    return this.programsMap.get(id).prg;
  }


  precision(){
    return this.hasHighp ? 'highp' : 'mediump';
  }


  getGlobalDefinitions() : string {
    var defs = '\n';
    defs += 'precision ' + this.precision() + ' float;\n';
    return defs;
  }

  compile( ){

    for (const entry of this.programs) {
      let defs = this.getGlobalDefinitions()
      if(entry.ext){
        defs = entry.ext + defs;
      }
      entry.prg.compile( entry.vert, entry.frag, defs );
    }


    this.process();

  }


  process(){
    for (var entry of this.programs ) {
      entry.prg.use();
    }
  }


  dispose(){
    
    for (var entry of this.programs ) {
      entry.prg.dispose();
    }
    this.programs = null;
    this.programsMap = null

  }

}

