<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>

      </Header>
      <Layout>
        <Sider
          hide-trigger
          :style="{background: '#fff',width:'200px'}"
        >
          <Menu
            active-name="1-2"
            theme="light"
            width="auto"
            :open-names="['1']"
          >

            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-filing" />
                Navigation Two
              </template>
              <MenuItem
                name="2-1"
                to="/page_3/test1"
              >/page_3/test1</MenuItem>
              <MenuItem
                name="2-2"
                to="/page_3/test2"
              >/page_3/test2</MenuItem>
              <Submenu name="3">
                <template slot="title">第二级子菜单</template>
                <MenuItem
                  name="3-1"
                  to="/page_3/test1_1"
                >/page_3/test11</MenuItem>
                <MenuItem
                  name="3-2"
                  to="/page_3/test1_2"
                >/page_3/test12</MenuItem>
              </Submenu>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                Navigation333
              </template>
              <MenuItem name="4-1">Option </MenuItem>
              <MenuItem name="4-2">Option 10</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">

          <Content :style="{padding: '40px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {}
</script>
