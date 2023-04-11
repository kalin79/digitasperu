/**
 * Convert simple array into two-dimensional array (matrix)
 * @param {Array} arr
 * @param {Number} width
 * @returns {Array}
 */
export const matrix = (arr, width) => arr.reduce((rows, key, index) => (index % width === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, [])

/**
 * Swap the rows and columns of a matrix
 * @param {Array} matrix
 * @returns {Array}
 */
export const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]))

/**
 * Share out elements from array into columns
 * @param {Array} arr
 * @param {Number} cols
 * @returns {Array}
 */
export const toColumns = (arr, cols) => [...Array(cols).keys()].map(c => arr.filter((_, i) => i % cols === c))

/**
 * Split an array into chunks
 * @param {Array} arr
 * @param {Number} size
 * @returns {Array}
 */
export const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), [])

/**
 * Shuffle an array
 * @param {Array} arr
 * @returns {Array}
 */
export const shuffle = arr => arr.sort(() => .5 - Math.random())

/**
 * Get [size] items from [start] index. If size exceeds maximum, pick from beginning.
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} size
 * @returns {Array}
 */
export const wrap = (arr, start, size) => Array.from({ length: size }, (_, i) => arr[(start + i) % arr.length])

/**
 * Create an array of numbers in the given range
 * @param {Number} min
 * @param {Number} max
 * @param {Number} step
 * @returns {Array}
 */
export const range = (min, max, step = 1) => Array.from({ length: (max - min) / step + 1 }, (_, i) => min + (i * step))
