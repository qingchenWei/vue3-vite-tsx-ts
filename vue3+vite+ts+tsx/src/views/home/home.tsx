import { defineComponent } from "vue";
import styles from './styles.module.less'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const page = () => <ul class={styles.box}>
      <el-button type="primary" onClick={() => router.push('/login')}>login</el-button>
    </ul>
    return page
  }
})
