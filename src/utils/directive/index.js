import Vue from 'vue'
/*
  按钮防抖自定义指令
*/
Vue.directive('debounce', {
  inserted: function (el, binding) {
    let timer = null
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      timer = setTimeout(() => {
        binding.value()
      }, parseInt(binding.arg || 500))
    })
  }
})
