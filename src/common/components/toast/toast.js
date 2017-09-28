import Vue from 'vue';

import ToastProto from './toast.vue'
const ToastConstructor = Vue.extend(ToastProto);
let toastPool = [];

let getAnInstance = () => {
  if (toastPool.length > 0) {
    let instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  return new ToastConstructor({
    el: document.createElement('div')
  });
};

let returnAnInstance = instance => {
  if (instance) {
    toastPool.push(instance);
  }
};

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

ToastConstructor.prototype.close = function() {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
  this.closed = true;
  returnAnInstance(this);
};

let Toast = (options = {}) => {
  let duration = options.duration || 3000;

  let instance = getAnInstance();
  instance.closed = false;
  clearTimeout(instance.timer);
  instance.message = typeof options === 'string' ? options : options.message;
  instance.position = options.position || 'middle';
  instance.className = options.className || '';
  instance.iconClass = options.iconClass || '';
  instance.closeCallback = options.closeCallback || function(){};

  document.body.appendChild(instance.$el);
  Vue.nextTick(function() {
    instance.visible = true;
    instance.$el.removeEventListener('transitionend', removeDom);
    instance.timer = setTimeout(function() {
      if (!instance.closed) {
        instance.close();
      }
      if (instance.closeCallback && typeof instance.closeCallback == 'function') {
          instance.closeCallback();
      }
    }, duration);
  });
  return instance;
};

export default Toast;
