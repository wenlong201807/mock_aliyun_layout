<template>
  <div>
    <h3>page_1.vue</h3>
    <div>获取登陆页面query的kk参数{{$route.query.kk}}</div>
    <div>获取登陆页面params的kk参数{{$route.params.kk}}</div>
  </div>
</template>

<script>
export default {
  name: 'LoginCommon',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
