<template>
  <div>
    <div class="header">
      <div class="left" @click="leftHandleEvent">
        <image class="image" :src="backData"/>
      </div>
      <div class="center">
        <text class="header-title">{{config.title}}</text>
      </div>
      <div class="right" @click="rightHandleEvent">
        <image class="image" :src="rightIcon"/>
      </div>
    </div>
  </div>
</template>
<script>
import base64png from '../images/base64png.json';
export default {
  props: ['config', 'show', 'rIcon'],
  data () {
    return {
      backData: base64png.back,
      rightIcon: base64png.list
    };
  },
  mounted () {
    if (this.rIcon) this.rightIcon = base64png[this.rIcon];
  },
  methods: {
    leftHandleEvent () {
      this.$emit('headerLeftEvent');
    },
    rightHandleEvent () {
      this.$emit('headerRightEvent');
    }
  }
};
</script>

<style lang="less" scoped>
.header {
    font-family: "Microsoft YaHei";
    width: 100%;
    line-height: 50px;
    z-index: 20;
    height: 100%;
    display: flex;
    flex-direction: row;
    background: #20a0ff;

    .left, .right {
      width: 50px;
      padding: 13px;
      box-sizing: border-box;
      .image {
        width: 24px;
        height: 24px;
        margin: 0 auto;
        display: block;
      }
    }
    .center {
        flex: 1;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        .header-title {
          font-size: 18px;
          color: #fff;
        }
    }
}

</style>
