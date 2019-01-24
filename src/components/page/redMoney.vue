<template>
    <div class="red_label">
        <div class="label_theme">
            <h3>红包金额</h3>
            <p>您发的红包金额等值于您增加的【慷慨度】，0元红包每人限发1个</p>
        </div>
        <div class="label_slider">
             <el-slider
                    v-model="amount"
                    :max="2000"
                    :step="100">
                </el-slider>
        </div>
        <div class="red_btn">
            	<span class="prev_btn" @click='prevBtn'>上一步</span>
				<span class="next_btn" @click='nextBtn'>下一步</span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 100
    };
  },
  methods: {
    prevBtn() {
      this.$router.push({ path: "/redlable" });
    },
    nextBtn() {
      this.$router.push({ path: "/redExplain" });
    }
  }
};
</script>

<style lang="less">
.red_label {
  height: auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding-top: 20px;
  padding-left: 83px;
  padding-right: 28px;
  box-sizing: border-box;
  position: relative;
  .label_theme {
    display: flex;
    align-items: center;
    p {
      font-size: 14px;
      color: #ccc;
      margin-left: 20px;
    }
  }
  .label_slider {
    width: 50%;
  }
  .red_btn {
    position: absolute;
    right: 28px;
    bottom: 30px;
    span {
      color: #fff;
      padding: 8px 20px;
      border-radius: 5px;
      background: #3471ff;
    }
    span:hover {
      cursor: pointer;
    }
  }
}
.el-slider {
  .el-slider__bar {
    height: 17px;
    background-color: rgba(70, 193, 239, 1);
  }
  .el-slider__runway {
    height: 17px;
    background-color: rgba(242, 242, 242, 1);
  }
  .el-slider__button-wrapper {
    top: -10px;
  }
  .el-slider__button {
    border: 2px solid rgba(70, 193, 239, 1);
  }
}
</style>
