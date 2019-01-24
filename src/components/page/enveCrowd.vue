<template>
<div class="enve_crowd">
    <div class="enve_crowd_first" v-if="!isNext">
        <div class="introduction">
            <p>金主，您有什么火爆话题要寻求帮助，快来发起众筹吧，更多小伙伴会加入进来，您只需花很少的钱就可以任性提问咯，如果问题紧急，不建议</p>
            <div class="initiate">
                <span @click="initiate()">发起众筹</span>
            </div>
        </div>
        <div class="enve_crowd_cont">
          <div v-for="(item,index) in data" :key="index">
            <enveOnes :data="item"></enveOnes>
          </div>
        </div>
    </div>
    <div class="enve_crowd_theme" v-if="isNext">
      <div class="hair_title">
        <span>红包标题</span>
        <input type="text" />
        <b>*必填项</b>
      </div>
      <div class="hair_ms">
        <p>请用几个关键字准确定位出您的问题，方便答题者快速定位，提高效率。</p>
      </div>
      <div class="nextBtn">
        <span @click="next()">{{nextStep}}</span>
      </div>
    </div>
</div>
</template>

<script>
import enveOnes from "./enve/enveOnes.vue";
import evenData from "../../../data/evenData.json";
export default {
  data() {
    return {
      isNext: false,
      nextStep: "下一步",
      data: []
    };
  },
  components: {
    enveOnes
  },
  mounted() {
    this.data = evenData;
  },
  methods: {
    initiate() {
      this.isNext = true;
    },
    next() {
      this.$router.push({ path: "/nextEnve" });
    }
  }
};
</script>

<style lang="less">
.enve_crowd {
  width: 100%;
  padding: 0 65px;
  // height: auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding-top: 20px;
  .enve_crowd_first {
    .introduction {
      font-size: 14px;
      color: #91a1c2;
      text-align: left;
      border: 1px dashed #4173e6;
      border-radius: 15px;
      padding: 20px 15px;
      p {
        margin: 0;
        line-height: 25px;
      }
      .initiate {
        text-align: right;
        span {
          color: #fff;
          border-radius: 5px;
          padding: 5px 10px;
          background: #3471ff;
        }
        span:hover {
          cursor: pointer;
        }
      }
    }
    .enve_crowd_cont {
      margin-top: 20px;
    }
  }
  .enve_crowd_theme {
    width: 100%;
    height: 100%;
    position: relative;
    .hair_title {
      width: 100%;
      height: 20px;
      margin-top: 5px;
      display: flex;
      padding-left: 25px;
      box-sizing: border-box;
      img {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-top: 5px;
      }
      span {
        margin-left: 55px;
        color: #0454ff;
        font-size: 18px;
      }
      input {
        width: 45%;
        border: none;
        height: 20px;
        border: 1px solid #dbdce0;
        margin-left: 13px;
      }
      b {
        font-size: 16px;
        color: #ff3238;
        margin-left: 10px;
        font-weight: 400;
      }
    }
    .hair_ms {
      width: 100%;
      text-align: center;
      color: #929395;
      font-size: 16px;
    }
    .nextBtn {
      position: absolute;
      right: 0;
      bottom: 50px;
      span {
        color: #fff;
        border-radius: 5px;
        padding: 5px 20px;
        background: #3471ff;
      }
      span:hover {
        cursor: pointer;
      }
    }
  }
}
</style>