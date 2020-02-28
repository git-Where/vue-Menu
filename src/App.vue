<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      roleAuth: [
        {
          path: '/dashboard',
          title: '首页',
          btnRoles: []
        },
        {
          path: '/form',
          btnRoles: [],
          title: 'Form'
        },
        {
          path: '/form/index',
          title: 'Form',
          roles: ['edit', 'det'],
          btnRoles: ['edit', 'det']
        },
        {
          path: '/nested',
          title: 'Nested',
          btnRoles: []
        },
        {
          path: '/nested/menu1',
          title: 'Menu1',
          roles: ['edit', 'det'],
          btnRoles: ['edit', 'det']
        },
        {
          path: '/nested/menu1/menu1-1',
          title: 'Menu1-1',
          meta: { title: 'Menu1-1' }
        },
        {
          path: '/nested/menu2',
          title: 'menu2',
          roles: ['edit', 'det'],
          btnRoles: ['edit', 'det']
        }
      ]
    }
  },
  created() {
    this.$wsCache.set('userInfo', { roleAuth: this.roleAuth })
    if (this.$wsCache.get('userInfo')) {
      this.$store.dispatch('GenerateRoutes').then(() => {
        this.$router.options.routes = this.$store.getters.routers
        console.log(this.$router)
        console.log(this.$store.getters.addRouters)
        this.$router.addRoutes(this.$store.getters.addRouters)
      })
    }
  }
}
</script>
