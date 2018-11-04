<template>
  <div>
    <div class="home">
      <header class="header">
        <Button type="primary" to="/login_common">common登录页</Button>
         <Button type="primary" to="/login_icdp">icdp登录页</Button>
        <Button @click="toggle_nav_one" type="primary">侧边栏导航</Button>
        <Button type="primary">{{default_menu}}</Button>
        <Button type="primary" to="/page_2">/page_2页</Button>
        <Button type="primary" to="/page_3">/page_3页</Button>
      </header>
      <main class="main">
        <div class="main_nav bottom">
          <Poptip :trigger="'hover'" title="首页菜单标题" content="content">
            <Button type="primary" to="/page_1" class="poptip_t">首页菜单**/page_1</Button>
          </Poptip>
          <Poptip :trigger="'hover'" title="Title" content="content">
            <Button class="poptip_t">Bottom Center</Button>
          </Poptip>
          <Poptip v-model="visible_poptip" :trigger="'hover'" title="动态切换页面测试列表1" content="content">
            <Button class="poptip_t">动态切换页面测试</Button>
            <div slot="content">
              <ul>
                <router-link tag="li" v-for="(item,index) in slide_nav_path_list" :key='index' :to="item.url" @click.native="close_poptip">{{item.title}}</router-link>
              </ul>
            </div>
          </Poptip>
          <Poptip :trigger="'hover'" title="Title" content="content">
            <Button class="poptip_t">菜单列表页</Button>
            <div slot="content">
              <table>
                <thead>
                  <tr>
                    <th>Version</th>
                    <th>Update Time</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0.9.5</td>
                    <td>2016-10-26</td>
                    <td><Button type="primary" to="/page_2">/page_2页</Button></td>
                  </tr>
                  <tr>
                    <td>0.9.4</td>
                    <td>2016-10-25</td>
                    <td>Add new components <code>Modal</code></td>
                  </tr>
                  <tr>
                    <td>0.9.2</td>
                    <td>2016-09-28</td>
                    <td>Add new components <code>Select</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Poptip>
          <Poptip :trigger="'hover'" title="Title" content="content">
            <Button class="poptip_t">Bottom Right</Button>
          </Poptip>
        </div>
        <!-- 公共部分切换路由 -->
        <router-view></router-view>
        <!-- <main-content></main-content> -->
      </main>
    </div>
    <!-- 左侧菜单 ***一级菜单-->
    <Drawer :mask="false" class="one_drawer" :transfer='false' title="一级菜单" placement="left" :closable="true" v-model="silde_one">
      <Button @click="toggle_nav_two" type="primary">打开二级菜单</Button>
      <p>Some contents...</p>
      <ul>
        <router-link tag="li" v-for="(item,index) in slide_nav_path_list" :key='index' :to="item.url" @click.native="slide_nav_page">{{item.title}}</router-link>
      </ul>
      <p>Some contents...</p>
    </Drawer>
    <!-- 左侧菜单 ***二级菜单-->
    <Drawer :mask="false" class="two_drawer" title="二级菜单" placement="left" :closable="true" v-model="silde_two">
      This is two-level drawer.
      <Button @click="toggle_nav_three" type="primary">打开三级菜单</Button>
      <ul>
        <router-link tag="li" v-for="(item,index) in slide_nav_path_list" :key='index' :to="item.url" @click.native="slide_nav_page">{{item.title}}</router-link>
      </ul>
    </Drawer>
    <!-- 左侧菜单 ***三级菜单-->
    <Drawer :mask="false" class="three_drawer" title="三级菜单" placement="left" :closable="true" v-model="silde_three">
      This is two-level drawer.
      <p>Some contents...</p>
      <ul>
        <router-link tag="li" v-for="(item,index) in slide_nav_path_list" :key='index' :to="item.url" @click.native="slide_nav_page">{{item.title}}</router-link>
      </ul>
      <p>Some contents...</p>
    </Drawer>
  </div>
</template>

<script>
// import MainContent from '@/components/Home/Main_content'
export default {
  name: 'Home',
  // components: {MainContent},
  data () {
    return {
      silde_one: false,
      silde_two: false,
      silde_three: false,
      visible_poptip: false,
      default_menu: '菜单一或二',
      slide_nav_path_list: [
        {url: '/page_1', title: '/page_1页面'},
        {url: '/page_2', title: '/page_2页面'},
        {url: '/page_3', title: '/page_3页面'}
      ]
    }
  },
  methods: {
    toggle_nav_one () {
      this.silde_one = !this.silde_one
    },
    toggle_nav_two () {
      this.silde_two = !this.silde_two
    },
    toggle_nav_three () {
      this.silde_three = !this.silde_three
    },
    slide_nav_page () {
      this.silde_one = this.silde_two = this.silde_three = false
    },
    close_poptip () {
      this.visible_poptip = false
    }

  }
}
</script>

<style lang="scss">
@import '~@/styles/sass/Home/Home.scss';
</style>
