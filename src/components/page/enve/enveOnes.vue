<template>
    <div class="enve_one">
        <div class="imgs">
            <img src="../../../../static/img/aa.jpg" alt="">
        </div>
        <div class="enve_ones_cont">
            <div class="cont_theme">
                <span>【众筹中】</span>
                <h3 @click="toeDetail(data)">{{data.name}}</h3>
            </div>
            <div class="enve_slider">
                <div class="slider_value">
                    <span></span>
                </div>
                <span>{{data.schedule}}</span>
            </div>
            <div class="join_num">
                {{data.personNum}}人加入 ｜ 已筹{{data.money}}元
            </div>
            <div class="count_down">
                <div class="count_down_time">
                    倒计时:{{data.countdown}}
                </div> 
                <div class="count_down_money">
                    ￥{{data.step}}起
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    toeDetail(process) {
      this.$router.push({
        path: "/passDetail",
        query: {
          path: "/passDetail",
          process
        }
      });
    }
  }
};
</script>

<style lang="less">
.enve_one {
  display: flex;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #eee;
  .imgs {
    img {
      width: 86px;
      height: 86px;
      border-radius: 50%;
    }
  }
  .enve_ones_cont {
    line-height: 25px;
    margin-left: 20px;
    text-align: left;
    .cont_theme {
      h3 {
        margin: 0;
        display: inline-block;
      }
      h3:hover {
        cursor: pointer;
      }
      span {
        color: #fcb50d;
      }
    }
    .enve_slider {
      .slider_value {
        width: 260px;
        height: 20px;
        background: #eee;
        display: inline-block;
        border-radius: 5px;
        margin-top: 5px;
        span {
          float: left;
          background: #fcb50d;
          width: 200px;
          height: 20px;
          border-radius: 5px;
        }
      }
    }
    .join_num {
      color: #9999ad;
      font-size: 14px;
    }
    .count_down {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
