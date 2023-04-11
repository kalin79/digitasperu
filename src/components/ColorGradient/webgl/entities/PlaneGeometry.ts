import GLArrayBuffer from "nanogl/arraybuffer";
import GLIndexBuffer from "nanogl/indexbuffer";
import Program from "nanogl/program";
import { GLContext } from "nanogl/types";


export default class PlaneGeometry {

  gl: GLContext;
  vbuffer: GLArrayBuffer;
  ibuffer: GLIndexBuffer;

  constructor(gl: GLContext, width = 1, height = 1, widthSegments = 1, heightSegments = 1) {

    this.gl = gl;
    const width_half = width / 2;
    const height_half = height / 2;

    const gridX = Math.floor(widthSegments);
    const gridY = Math.floor(heightSegments);

    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;

    const segment_width = width / gridX;
    const segment_height = height / gridY;

    const indices = [];
    const data = [];

    for (let iy = 0; iy < gridY1; iy++) {

      const y = iy * segment_height - height_half;

      for (let ix = 0; ix < gridX1; ix++) {

        const x = ix * segment_width - width_half;
        data.push(x, -y, 0, ix / gridX, 1 - (iy / gridY));

      }

    }

    for (let iy = 0; iy < gridY; iy++) {

      for (let ix = 0; ix < gridX; ix++) {

        const a = ix + gridX1 * iy;
        const b = ix + gridX1 * (iy + 1);
        const c = (ix + 1) + gridX1 * (iy + 1);
        const d = (ix + 1) + gridX1 * iy;

        indices.push(a, b, d);
        indices.push(b, c, d);

      }

    }

    this.ibuffer = new GLIndexBuffer(gl, gl.UNSIGNED_SHORT, new Uint16Array(indices));

    this.vbuffer = new GLArrayBuffer(gl);
    this.vbuffer
      .attrib("aPosition", 3, gl.FLOAT)
      .attrib("aTexcoord", 2, gl.FLOAT);

    this.vbuffer.data(new Float32Array(data));

    // console.log("Vert count : ", data.length / 5);

  }

  bind(prg: Program) {
    this.vbuffer.bind();
    this.vbuffer.attribPointer(prg);
    this.ibuffer.bind();
  }

  draw() {
    this.ibuffer.drawTriangles();
  }

}