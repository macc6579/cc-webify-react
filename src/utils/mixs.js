import { isEqual } from 'lodash';
import { message } from 'antd';

export function flatTree(treeDatas, isAddPath) {
  return treeDatas.reduce((a, c) => {
    if (isAddPath) {
      c.path = c.path || [c.id];
      if (c.children && c.children.length) {
        c.children.forEach(ch => {
          ch.path = [...c.path, ch.id];
        });
      }
    }
    return c.children && c.children.length
      ? [...a, c, ...flatTree(c.children, isAddPath)]
      : [...a, c];
  }, []);
}

export function arePropsEqual(pre, next) {
  return Object.keys(pre).every(key => isEqual(pre[key], next[key]));
}

export function copyTextToClipboard(text) {
  var textArea = document.createElement('textarea');

  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    if (successful) {
      message.success('复制成功！');
    } else {
      message.error('复制失败!');
    }
  } catch (err) {
    message.error('复制失败！');
  }
  document.body.removeChild(textArea);
}

export function unique(arr) {
  return Array.from(new Set(arr));
}

export const noop = () => {};
