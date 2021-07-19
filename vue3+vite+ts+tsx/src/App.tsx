
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({

  setup() {
    const homepage = () => <RouterView></RouterView>

    return homepage
  }

})

