<template>
    <div class="history_wrapper">
        <div class="history_submit_info">
          <img src="../../../static/img/submit_application.gif" alt="">
          <span>【精品】红包可能是您需要的，花最少的钱，用最快的速度获得您想要的答案</span>
        </div>
        <div v-for="item in data" :key="item.id">
            <Historytabs :data="item"></Historytabs>
        </div>
    </div>
</template>

<script>
import Historytabs from "../common/historytabs";
import AllData from "../../../data/data.json";

export default {
  data() {
    return {
      data: Object
    };
  },
  components: {
    Historytabs
  },
  mounted() {
    this.data = AllData;
  }
};
</script>

<style lang="less">
.history_wrapper {
  width: 100%;
  padding: 0 65px;
  height: auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding-top: 20px;
  .history_submit_info {
    text-align: left;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    span {
      color: #f75c5c;
    }
  }
}
</style>