Vue.directive('preview', {
  bind(el, binding, vnode) {
    el.attachShadow({mode: 'open'})
    el.shadowRoot.innerHTML = binding.value
  },
  update(el, binding, vnode) {
    if (vnode.elm.shadowRoot.innerHTML !== binding.value) {
      el.shadowRoot.innerHTML = binding.value;
    }
  }
})

new Vue({
  el: '#editor',
  data: {
    content: '',
  }
})

