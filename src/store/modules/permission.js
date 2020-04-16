import { asyncRouterMap, constantRouterMap } from '@/router'
import wsCache from '@/cache'
import path from 'path'

const permission = {
  state: {
    routers: [],
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      console.log(routers + '路由')
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }) {
      return new Promise(resolve => {
        const result = generateRoutes(asyncRouterMap).concat([{
          path: '*',
          redirect: '/404',
          hidden: true
        }])
        commit('SET_ROUTERS', result)
        resolve()
      })
    }
  }
}

function generateRoutes(routes, basePath = '/') {
  const res = []

  for (const route of routes) {
    // skip some route
    if (route.hidden) { continue }

    let onlyOneChild = null

    let data = null

    if (route.children && route.children.length === 1) { // 只有一个子节点
      onlyOneChild = path.resolve(route.path, route.children[0].path)
    }
    console.log(wsCache.get('userInfo').roleAuth)
    for (const item of wsCache.get('userInfo').roleAuth) {
      if (path.resolve(basePath, onlyOneChild || route.path) === item.path) { // 节点匹配
        data = Object.assign({}, route)
        if (data.meta) {
          data.meta.btnRoles = item.btnRoles || []
        }
        if (route.children) {
          data.children = []
        }
      }
    }

    // recursive child routes
    if (route.children && data) {
      data.children = generateRoutes(route.children, data.path)
    }
    if (data) {
      res.push(data)
    }
  }
  return res
}

export default permission
