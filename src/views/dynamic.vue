<template>
  <div class="dynamic">
    <li-header class="header" :config="headerConfig"></li-header>
    <!-- <div class="page-main"> -->
            <!-- <scroller>
              <list class="ul">
                <li-dynamic-item v-for="(item, index) in list" :key="index" :data="item"></li-dynamic-item>
              </list>
            </scroller> -->
    <!-- </div> -->

    <!-- <li-screen :status="wayStatus" @close="closeWayChioceEvent"></li-screen> -->

    <!-- <transition name="fade">
      <div class="way-list" v-show="wayStatus" :class="{show: wayStatus}">
        <div class="cell"
          :class="{active: wayIndex === item.id}"
          v-for="item in wayList"
          @click="wayEvent(item)"
        >{{item.text}}</div>
      </div>
    </transition> -->
  </div>
</template>
<script>
  // import dynamicItem from '../components/dynamic_item.vue';
  // import { Scroller, Spinner } from 'vux';
  // import { createNamespacedHelpers } from 'vuex';
  // import {getPostAjax} from '../api/ajax_router.js';
  // const { mapState, mapMutations } = createNamespacedHelpers('box1/dynamic');
  import liHeader from '../components/li_header.vue'
  export default {
    components: {
      // 'li-dynamic-item': dynamicItem,
      // Scroller,
      // Spinner
      'li-header': liHeader
    },
    data () {
      return {
        headerConfig: {
          title: '旅游圈',
          left: {
            icon: 'back',
            clickEvent: this.leftMenuEvent
          },
          right: {
            icon: 'list',
            clickEvent: this.rightMenuEvent
          }
        },
        wayStatus: false,
        pageConfig: {
          num: 10,
          page: 0
        },
        list: [],
        refreshAjaxStatus: false
      };
    },
    methods: {
      configEvent () {

      },
      rightMenuEvent (e) {
        console.log(e)
      },
      leftMenuEvent (e) {
        console.log(e)
      }
    }
  };
</script>

<style lang="less" scoped>
.dynamic {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  background: green;
  .header {
    width: 100%;
    height: 50px;
  }
  .page-main {
    flex: 1;
    background: red;
    .ul {
      padding: 0;
      margin: 0;
    }

  }
  .way-list {
    width: 120px;
    height: 0;
    background: #fff;
    position: fixed;
    top: 50px;
    right: 0;
    transition: all .5s;
    z-index: 10;
    &.show {
      height: 153px;
    }

    &.fade-enter-active,
    &.fade-leave-active {
        transition: opacity .4s;
    }
    &.fade-enter,
    &.fade-leave-to {
        opacity: 0;
    }

    .cell {
      line-height: 50px;
      border-bottom: 1px solid #eee;
      padding: 0 15px;
      box-sizing: border-box;
      &.active {
        color: #20a0ff;
      }
    }
  }

}
</style>
<style lang="less">
.pullup-container, .pulldown-container {
  line-height: 60px;
  color: #666;
}
</style>
