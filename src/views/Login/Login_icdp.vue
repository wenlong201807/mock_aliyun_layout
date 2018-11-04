<template>
  <div>
    <h1>login_icdp.vue</h1>
    <Button type="primary" @click="login_icdp">/page_1页</Button>
  </div>
</template>

<script>
export default {
  name: 'login_icdp',
  data () {
    return {

    }
  },
  methods: {
    login_icdp () {
      const userId = 123
      this.$router.push({ path: `/page_1?kk=${userId}` }) // -> /user/123******
      // this.$router.push({
      //   // path: '/page_1',
      //   name: 'Page_1',
      //   params: {
      //     name: 'nameValue**icdp',
      //     kk: 'icdp'
      //   }
      // })
    }
  }
}
</script>
