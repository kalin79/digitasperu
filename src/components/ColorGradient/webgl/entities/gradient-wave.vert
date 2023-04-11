attribute vec3 aPosition;
attribute vec2 aTexcoord;

uniform mat4 uMVP;
uniform float uNoiseScale;
uniform float uHeightScale;
uniform float uScaleX;
uniform float uScaleY;
uniform float uTime;
uniform float uSpeed;
uniform vec3 uCastPos;

varying float vHeight;
varying float vFade;
varying vec2 vClipPos;
varying float vGradCast;

#define M_PI 3.14159265358979323846

float rand(vec2 co){return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);}
float rand (vec2 co, float l) {return rand(vec2(rand(co), l));}
float rand (vec2 co, float l, float t) {return rand(vec2(rand(co, l), t));}

float perlin(vec2 p, float dim, float time) {
	vec2 pos = floor(p * dim);
	vec2 posx = pos + vec2(1.0, 0.0);
	vec2 posy = pos + vec2(0.0, 1.0);
	vec2 posxy = pos + vec2(1.0);
	
	float c = rand(pos, dim, time);
	float cx = rand(posx, dim, time);
	float cy = rand(posy, dim, time);
	float cxy = rand(posxy, dim, time);
	
	vec2 d = fract(p * dim);
	d = -0.5 * cos(d * M_PI) + 0.5;
	
	float ccx = mix(c, cx, d.x);
	float cycxy = mix(cy, cxy, d.x);
	float center = mix(ccx, cycxy, d.y);
	
	return center * 2.0 - 1.0;
}


void main(void){

  vec3 position = aPosition;
  vec2 ncoord = aTexcoord * vec2(uNoiseScale) * vec2(uScaleX, uScaleY);
  // ncoord.x *= uNoiseScale * uScaleX;
  // ncoord.y *= uNoiseScale * uScaleY;
  ncoord += vec2(uTime * 0.5 * uSpeed, uTime * 0.5 * uSpeed);
  // float n1 = perlin(ncoord, 1.0, 0.0);
  // float n2 = perlin(ncoord + vec2(4.454, 2.54), 1.0, 0.0);

  float n1 = perlin(ncoord, 1.0, 0.0);
  float n2 = perlin(ncoord + vec2(4.454, 2.54), 1.0, 0.0);

  float n = mix(n1, n2, (sin(uTime * 0.8 * uSpeed) + 1.0) * 0.5);

	vGradCast = distance(uCastPos, aPosition);

  
  position.z -= n * uHeightScale;
	position.z -= clamp((1.0 - vGradCast * 0.4) * 1.2, 0.0, 1.0) * uHeightScale;
  
  gl_Position = uMVP * vec4(position, 1.0);

  vHeight = n;

  vFade = length((aTexcoord - vec2(0.5))* 2.0);
	vClipPos = gl_Position.xy / gl_Position.w;

}