const uA = (typeof (navigator) !== 'undefined' && navigator.userAgent.toLowerCase()) || ''

// export const isMobileIE = /iemobile/i.test(uA)

// export const isMobileOpera = /opera mini/i.test(uA)

// export const isIOS = /iphone|ipad|ipod/i.test(uA)

// export const isBlackberry = /blackberry/i.test(uA)

// export const isMobileAndroid = /android.*mobile/.test(uA)

// export const isAndroid = isMobileAndroid || !isMobileAndroid && /android/i.test(uA)

// export const isFirefox = uA.indexOf('firefox') > -1

// export const safari = uA.match(/version\/[\d\.]+.*safari/)

// export const isSafari = !!safari && !isAndroid

// export const isSafariOlderThan8 = (() => {
//   const limit = 8
//   let version = limit
//   if (isSafari) {
//     const versionWithVersionWord = safari[0].match(/version\/\d{1,2}/)
//     version = +versionWithVersionWord[0].split('/')[1]
//   }

//   return version < limit
// })()

// export const isIEolderThan11 = uA.indexOf('msie') > -1

// export const isIE11 = typeof (navigator) !== 'undefined' && navigator.appVersion.indexOf('Trident/') > 0

// export const isIE = isIEolderThan11 || isIE11

// export const isEdge = /Edge\/\d./i.test(uA)

// export const isMac = typeof (navigator) !== 'undefined' && navigator.platform.toLowerCase().indexOf('mac') > -1

// export const isWin = typeof (navigator) !== 'undefined' && navigator.platform.toLowerCase().indexOf('win') > -1

// export const isMobile = isMobileAndroid || isBlackberry || isIOS || isMobileOpera || isMobileIE

export const isTouch = !!(typeof (window) !== 'undefined' && ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch))
