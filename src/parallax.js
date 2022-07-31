export const parallax = (options) => {
  const opts = {
    elements: document.querySelectorAll('.parallax'),
    speed: 0.3,
    throttleInterval: 30,
    ...options
  };
  
  const throttle = (callback, timeout) => {
    let wait = false;

    return () => {
      if (wait) return;
      callback.call();
      wait = true;
      setTimeout(() => { wait = false; }, timeout);
    };
  };

  const handler = () => {
    opts.elements.forEach((el) => {
      el.style.backgroundPosition =
        '50% ' + ((window.pageYOffset - el.offsetTop) * opts.speed) + 'px';
    });
  };

  window.addEventListener('scroll', throttle(handler, opts.throttleInterval));
};
