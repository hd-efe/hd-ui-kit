import Btn from './Btn/index'

const components = [
    Btn
]

function install(Vue) {
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Btn
}