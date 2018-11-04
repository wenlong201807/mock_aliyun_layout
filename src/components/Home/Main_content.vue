// <template>
  // <div>
    // <div class="main_content">
      // <main class="main"></main>
      // <footer class="footer"></footer>
      // </div>
    //
    <!-- 左侧菜单 -->
    // <Drawer style="height:300px;" title="Basic Drawer" placement="left" :closable="false" v-model="to_silde_one">
      // <p>Some contents...</p>
      // <p>Some contents...</p>
      // <p>Some contents...</p>
      // </Drawer>
    // </div>
  // </template>

<script>
// export default {
//   name: 'Main_content',
//   props: ['to_silde_one'],
//   data () {
//     return {
//       test: 'main_content'
//       // copy_silde_one: this.to_silde_one
//     }
//   }
// }
// </script>

// <style lang="scss" scoped>
// .main_content{
//    display: flex;
//   min-height: 100vh;
//   flex-direction: column;
//   // background:#ccc;
//   .main{
//     flex: 8;
//      background:#ccc;

//   }
//   .footer{
//      flex: 2;
//      background:yellowgreen;
//   }
// }

// // 修改左侧菜单的样式
// // .ivu-drawer-content{
// //   height: calc(100% - 50px);
// //   top:50px;
// // }
// </style>

// ***********************<script>

// <template>
//   <div>
//     <ul>
//       <template v-for="(item) in items">
//         <li @mouseover="selectStyle (item) "
//             :class="{'active':item.active}"
//             @mouseout="outStyle(item)">
//           {{item.select}}
//           <span class="icon" v-show="item.active">{{item.icon}}</span>
//         </li>
//       </template>
//     </ul>
//   </div>
// </template>

// <script>
//   export default{
//     data(){
//       return {
//         active: false,
//         items: [
//           {select:'第一行',icon:1},
//           {select:'第二行',icon:2},
//           {select:'第三行',icon:3},
//           {select:'第四行',icon:4}
//         ]
//       }
//     },
//     methods: {
//       selectStyle (item) {
//         var _this=this;
//         this.$nextTick(function () {
//           this.items.forEach(function (item) {
//             _this.$set(item,'active',false);
//           });
//           this.$set(item,'active',true);
//         });
//       },
//       outStyle (item) {
//         this.$set(item,'active',false);
//       }
//     }
//   }
// </script>

// <!-- 样式 -->
// <style scoped>
//   ul{
//     overflow: hidden;
//   }
//   li{
//     float: left;
//     color:#000;
//     transition: width .3s linear;
//     outline: 1px solid red;
//   }
//   .active{
//     color: red;
//     background: chartreuse;
//   }
//   .icon{
//     float: right;
//     font-size: 12px;
//   }
// </style>
