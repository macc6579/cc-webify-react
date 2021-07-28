export function assert(condition, message, prefix) {
  if (!condition) {
    let errorMessage = prefix ? `[${prefix}]: ${message}` : message;
    throw new Error(errorMessage);
  }
}

export function warn(condition, message, prefix) {
  if (!condition) {
    let warnMessage = prefix ? `[${prefix}]: ${message}` : message;
    typeof console !== 'undefined' && console.warn(warnMessage);
  }
}

export function getPrefixAssert(prefix) {
  return function(condition: boolean, message: string) {
    assert(condition, message, prefix);
  };
}

export function getPrefixWarn(prefix) {
  return function(condition: boolean, message: string) {
    warn(condition, message, prefix);
  };
}
