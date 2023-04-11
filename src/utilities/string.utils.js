/**
 * Make a slug from given string.
 * @author Julien Vasseur <julien@poigneedemainvirile.com>
 * @param  {String} value
 * @return {String}
 */
export const slugify = (value) => {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}
