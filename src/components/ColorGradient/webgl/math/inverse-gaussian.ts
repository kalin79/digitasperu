
const SQRT_2PI = Math.sqrt( Math.PI*2.0 );

export default function invGaussian( x: number, mu=1, lambda=1  ) : number{
  x = Math.max( x, 0.0 );
  
  const muSq2   = 2.0 * mu*mu;
  let x3 = x*x*x;
  let tmp = x - mu;
  return (Math.sqrt(lambda/x3) *  Math.exp( ( -lambda*tmp*tmp )/( muSq2*x ) )) / SQRT_2PI;
  
}
