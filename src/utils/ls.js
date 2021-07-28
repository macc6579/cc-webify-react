const ls = global.localStorage;

export function set(key, value) {
  ls.setItem(key, value);
}

export function get(key) {
  return ls.getItem(key);
}

export function remove(key) {
  return ls.removeItem(key);
}

let prefix = 'm-';

// 存储map中某一项数据
export function mSet(itemName, key, value) {
  let item = ls.getItem(`${prefix}${itemName}`)
    ? JSON.parse(ls.getItem(`${prefix}${itemName}`))
    : {};
  item = { ...item, [key]: value };
  ls.setItem(`${prefix}${itemName}`, JSON.stringify(item));
}

// 读取map中某一项数据
export function mGet(itemName, key) {
  let item = JSON.parse(ls.getItem(`${prefix}${itemName}`));
  if (key) {
    return item ? item[key] : null;
  } else {
    return item;
  }
}

// 移除 map中某一项数据
export function mRemove(itemName, key) {
  let item = JSON.parse(ls.getItem(`${prefix}${itemName}`));
  if (!item[key]) return;
  delete item[key];
  ls.setItem(`${prefix}${itemName}`, JSON.stringify(item));
}
