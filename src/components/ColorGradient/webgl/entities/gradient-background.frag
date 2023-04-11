uniform sampler2D uGradient1;
uniform sampler2D uGradient2;
uniform sampler2D uWhiteNoise;
uniform vec3 uViewport;
uniform vec2 uMpos;
uniform float uTime;

varying vec2 vTexCoord0;
varying vec2 vClipPos;


float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main(void){

  float gradSample = vTexCoord0.y;

  vec2 screenCoord = gl_FragCoord.xy;

  vec3 wn = texture2D(uWhiteNoise, screenCoord * 0.0085 * uViewport.z).rgb;
  
  
  float dither = wn.g;
  gradSample += (dither - 0.5) * 0.1;
  gradSample = clamp(gradSample, 0.0, 1.0);

  gradSample += uMpos.y * 0.15;

  vec3 grad1 = texture2D(uGradient1, vec2(gradSample, 0.5)).rgb;
  vec3 grad2 = texture2D(uGradient2, vec2(gradSample, 0.5)).rgb; 

  float lerp = screenCoord.x / uViewport.x * uViewport.z;
  lerp = map(lerp, 0.0, 1.0, -0.2, 1.2);
  lerp = clamp(lerp, 0.0, 1.0);
  lerp += uMpos.x * 0.2;
  vec3 color = mix(grad1, grad2, clamp(lerp, 0.0, 1.0));

  float phase = mod(uTime * 2.0, 1.0);

  float f = phase;
  float w = wn.b;
  w = mix(w, wn.r, clamp(map(f, 0.0, 0.3333, 0.0, 1.0), 0.0, 1.0));
  w = mix(w, wn.g, clamp(map(f, 0.3333, 0.66666, 0.0, 1.0), 0.0, 1.0));
  w = mix(w, wn.b, clamp(map(f, 0.66666, 1.0, 0.0, 1.0), 0.0, 1.0));
  color *= 0.85 + w * 0.15;
  
  gl_FragColor = vec4(color, 1.0);
}
