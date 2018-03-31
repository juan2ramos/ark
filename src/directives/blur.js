const blur = {}

function setBlur (el, binding) {
  el.style.color = !binding.value ? 'red' : 'blue'
  el.querySelectorAll('button').forEach(button => {
    if (!binding.value) {
      button.setAttribute('disabled', true)
    } else {
      button.removeAttribute('disabled')
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}
export default blur