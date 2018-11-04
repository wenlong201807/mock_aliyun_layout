<template>
  <div>
    <h1>login_common.vue</h1>
    <Button type="primary" @click="login_common">/page_1页</Button>
  </div>
</template>

<script>
export default {
  name: 'login_common',
  data () {
    return {

    }
  },
  methods: {
    login_common () {
      this.$router.push({
        // path: '/page_1',
        name: 'Page_1',
        params: {
          name: 'nameValue**Common',
          kk: 'common'
        }
      })
    }
  }
}
</script>
