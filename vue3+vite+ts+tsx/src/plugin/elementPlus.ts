import type { App } from 'vue'

import  { ElButton} from 'element-plus'

export const setupElementPlus = (app: App) => {
  app.use(ElButton)
};
