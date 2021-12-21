import Vue from 'vue'
import PTitleBar from './PTitleBar.vue'
import PTextEdit from './PTextEdit.vue'
const Components = {
    PTitleBar,
    PTextEdit
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components