import Btn from './Btn/index'
import Button from './button/index'
import Course from './course/index'
import Live from './live/index'
import Slide from './slide/index'
const components = [
    Btn,
    Button,
    Course,
    Live,
    Slide
]

function install(Vue) {
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Btn,
    Button,
    Course,
    Live,
    Slide
}