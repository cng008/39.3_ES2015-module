/** choose a random item. */

let idx;

function choice(items) {
  idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

/** return copy of array w/o first appearance of item
 *
 * If not found, return undefined.
 *
 **/

function remove(item, items) {
  return items.includes(item)
    ? [...items.slice(0, idx), ...items.slice(idx + 1)]
    : undefined;
  //   for (let i = 0; i < items.length; i++) {
  //     if (items[i] === item) {
  //       return [...items.slice(0, i), ...items.slice(i + 1)]
  //     }
  //   }
}

export { choice, remove };
