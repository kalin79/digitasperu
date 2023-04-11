
export function eulerfromRotationMatrix(out, m, order = 'YXZ') {
  if (order === 'XYZ') {
      out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));
      if (Math.abs(m[8]) < 0.99999) {
          out[0] = Math.atan2(-m[9], m[10]);
          out[2] = Math.atan2(-m[4], m[0]);
      } else {
          out[0] = Math.atan2(m[6], m[5]);
          out[2] = 0;
      }
  } else if (order === 'YXZ') {
      out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));
      if (Math.abs(m[9]) < 0.99999) {
          out[1] = Math.atan2(m[8], m[10]);
          out[2] = Math.atan2(m[1], m[5]);
      } else {
          out[1] = Math.atan2(-m[2], m[0]);
          out[2] = 0;
      }
  } else if (order === 'ZXY') {
      out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));
      if (Math.abs(m[6]) < 0.99999) {
          out[1] = Math.atan2(-m[2], m[10]);
          out[2] = Math.atan2(-m[4], m[5]);
      } else {
          out[1] = 0;
          out[2] = Math.atan2(m[1], m[0]);
      }
  } else if (order === 'ZYX') {
      out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));
      if (Math.abs(m[2]) < 0.99999) {
          out[0] = Math.atan2(m[6], m[10]);
          out[2] = Math.atan2(m[1], m[0]);
      } else {
          out[0] = 0;
          out[2] = Math.atan2(-m[4], m[5]);
      }
  } else if (order === 'YZX') {
      out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));
      if (Math.abs(m[1]) < 0.99999) {
          out[0] = Math.atan2(-m[9], m[5]);
          out[1] = Math.atan2(-m[2], m[0]);
      } else {
          out[0] = 0;
          out[1] = Math.atan2(m[8], m[10]);
      }
  } else if (order === 'XZY') {
      out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));
      if (Math.abs(m[4]) < 0.99999) {
          out[0] = Math.atan2(m[6], m[5]);
          out[1] = Math.atan2(m[8], m[0]);
      } else {
          out[0] = Math.atan2(-m[9], m[10]);
          out[1] = 0;
      }
  }

  return out;
}


/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} euler Angles to rotate around each axis in degrees.
 * @param {String} order detailing order of operations. Default 'XYZ'.
 * @returns {quat} out
 * @function
 */
 export function fromEuler(out, euler, order = 'YXZ') {
    let sx = Math.sin(euler[0] * 0.5);
    let cx = Math.cos(euler[0] * 0.5);
    let sy = Math.sin(euler[1] * 0.5);
    let cy = Math.cos(euler[1] * 0.5);
    let sz = Math.sin(euler[2] * 0.5);
    let cz = Math.cos(euler[2] * 0.5);

    if (order === 'XYZ') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === 'YXZ') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    } else if (order === 'ZXY') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === 'ZYX') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    } else if (order === 'YZX') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === 'XZY') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    }

    return out;
}