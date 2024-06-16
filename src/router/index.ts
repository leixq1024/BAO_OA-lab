import { createMemoryHistory, createRouter } from 'vue-router'
import { threeRouter } from './modules/threeRouter'

const routes = [{ path: '/', redirect: '/three/createScene' }, ...threeRouter]
export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
