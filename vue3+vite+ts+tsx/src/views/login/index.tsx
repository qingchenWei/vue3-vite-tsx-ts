import { defineComponent } from "vue";
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const page = () => <div>登陆页面</div>
    return page
  }
})
