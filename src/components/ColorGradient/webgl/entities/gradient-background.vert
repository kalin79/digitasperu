attribute vec2 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord0;
varying vec2 vClipPos;
  
void main( void ){
  gl_Position = vec4( aPosition, 0.0, 1.0 );
  vTexCoord0 = aTexCoord;
  vClipPos = gl_Position.xy / gl_Position.w;
}
