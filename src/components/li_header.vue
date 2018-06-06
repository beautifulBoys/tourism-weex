<template>
  <div>
    <div class="header">
      <div class="left" @click="leftHandleEvent">
        <image class="image" :src="leftImage"/>
      </div>
      <div class="center">
        <text class="header-title">{{config.title}}</text>
      </div>
      <div class="right" @click="rightHandleEvent">
        <image class="image" :src="rightImage"/>
      </div>
    </div>
  </div>
</template>
<script>
import base64png from '../images/base64png.json'
export default {
  props: ['config', 'show', 'rIcon'],
  data () {
    return {
      leftImage: '',
      rightImage: ''
    }
  },
  mounted () {
    if (this.config.left.icon) this.leftImage = base64png[this.config.left.icon]
    if (this.config.right.icon) this.rightImage = base64png[this.config.right.icon]
  },
  methods: {
    leftHandleEvent (e) {
      this.config.left.clickEvent(e)
    },
    rightHandleEvent (e) {
      this.config.right.clickEvent(e)
    }
  }
}
</script>

<style lang="less" scoped>
.header {
    font-family: "Microsoft YaHei";
    width: 100%;
    z-index: 20;
    height: 100%;
    display: flex;
    flex-direction: row;
    background: #20a0ff;

    .left {
      width: 100px;
      padding: 26px;
      box-sizing: border-box;
    }
    .right {
      width: 100px;
      padding: 26px;
      box-sizing: border-box;
    }
    .image {
      width: 48px;
      height: 48px;
      margin: 0 auto;
      display: block;
    }
    .center {
        flex: 1;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        .header-title {
          font-size: 36px;
          color: #fff;
        }
    }
}

</style>
