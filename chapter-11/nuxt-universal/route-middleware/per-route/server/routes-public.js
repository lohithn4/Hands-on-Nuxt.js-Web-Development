'use strict'

import Router from 'koa-router'

// Import routes from different modules.
import home from './modules/public/home'
import user from './modules/public/user'

const router = new Router({ prefix: '/api/public' })

// https://stackoverflow.com/questions/30285683/how-can-i-split-my-koa-routes-into-separate-files
const modules = [home, user]
for (var module of modules) {
  router.use(module.routes(), module.allowedMethods())
}

export default router
