
const DEFAULT_DIR = process.env.ASSET_PATH + 'assets/webgl';

let _assetsDir = DEFAULT_DIR;

function supportsWebp()
{
 var elem = document.createElement('canvas');

 if (!!(elem.getContext && elem.getContext('2d')))
 {
  // was able or not to get WebP representation
  return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
 }
 else
 {
  // very old browser like IE 8, canvas not supported
  return false;
 }
}

const HAS_WEBP = supportsWebp();

const Config = {

  WEBPSupport(){
    return HAS_WEBP;
  },

  /**
   * @param {string} path
   * @return {string} prefixed path
   */
  asset_url(path:string):string{
    return _assetsDir+'/'+path;
  },

  setBaseDir( dir = DEFAULT_DIR ){
    _assetsDir = dir;
  },

};


export default Config;
