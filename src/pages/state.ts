//页面布局状态管理，主要涉及侧边栏的展开关闭导致三个组件之间的互动
import { readonly, ref, Ref } from "vue"

class ShowState {
    protected isShow: Ref<boolean>
    constructor() {
        this.isShow = ref(false)
    }
    getValue() {
        return readonly(this.isShow)
    }

    reverseValue() {
        this.isShow.value = !this.isShow.value
    }
}
const showState = new ShowState()
export default showState