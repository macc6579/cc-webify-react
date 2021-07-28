const easings = {
  linear(t) {
    return t;
  },
  easeInQuad(t) {
    return t * t;
  },
  easeOutQuad(t) {
    return t * (2 - t);
  },
  easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic(t) {
    return --t * t * t + 1;
  },
  easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart(t) {
    return t < 0.5
      ? 8 * t * t * t * t
      : 1 - 8 * --t * t * t * t;
  },
  easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint(t) {
    return t < 0.5
      ? 16 * t * t * t * t * t
      : 1 + 16 * --t * t * t * t * t;
  }
};

// element
// offset
// easingName
// duration
export function scrollLeft(
  element,
  offset,
  easingName = 'linear',
  duration = 250
) {
  let _offset = Math.ceil(offset);
  let startTime =
    'now' in window.performance
      ? performance.now()
      : new Date().getTime();
  let start = Math.ceil(element.scrollLeft);
  let end = Math.ceil(element.scrollLeft) + _offset;
  let maxOffset = Math.ceil(
    element.scrollWidth - element.offsetWidth
  );

  let rqId;
  const animateScroll = function() {
    let now =
      'now' in window.performance
        ? performance.now()
        : new Date().getTime();
    let time = Math.min(1, (now - startTime) / duration);
    let timeFunction = easings[easingName](time);

    let scrollOffset = Math.ceil(
      start + timeFunction * _offset
    );

    if (scrollOffset > maxOffset) {
      return (element.scrollLeft = maxOffset);
    }

    if (scrollOffset < 0) {
      return (element.scrollLeft = 0);
    }

    element.scrollLeft = scrollOffset;
    if (scrollOffset === end) return;

    rqId = window.requestAnimationFrame(animateScroll);
  };
  animateScroll();

  return () => {
    rqId && window.cancelAnimationFrame(rqId);
  };
}
