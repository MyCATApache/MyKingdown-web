<template>
	<div class='hair_label_cont'>
		<h2>红包标签<span>必填项</span></h2>
		<p>请您尽可能的选择并补充合适标签，这样更有利于大虾们找到，并快速解答。</p>
		<div class="hair_wen">
			<div class="hair_checkbox">
				<el-checkbox-group v-model="checkboxGroup1" size="medium">
					<el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
				</el-checkbox-group>
         <div class="supplement">我要补充 >></div>
			</div>
			<div class="btn">
				<button class="prev_btn" @click='prevBtn'>上一步</button>
				<button class="next_btn" @click='nextBtn'>下一步</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      checkboxGroup1: [],
      cities: ["IT技术", "Mycat", "读写分离", "文档类"]
    };
  },
  methods: {
    prevBtn() {
      this.$router.push({ path: "/enclosure" });
    },
    nextBtn() {
      this.$router.push({ path: "/redMoney" });
    }
  }
};
</script>

<style  lang='less'>
.hair_label_cont {
  height: auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding-top: 20px;
  padding-left: 83px;
  padding-right: 28px;
  box-sizing: border-box;
  position: relative;
  h2 {
    width: 100%;
    text-align: left;
    font-size: 18px;
    color: #2c2d2f;
    font-weight: 400;
    span {
      font-size: 14px;
      color: #ff180b;
      margin-left: 10px;
    }
  }
  p {
    text-align: left;
    line-height: 30px;
    font-size: 16px;
    color: #65666a;
  }
  div.hair_wen {
    width: 100%;
    height: auto;
    // margin-top: 10px;
    // padding-bottom: 50px;
    div.hair_checkbox {
      display: flex;
      align-items: center;
      text-align: left;
      .supplement {
        margin-left: 50px;
      }
      .supplement:hover {
        cursor: pointer;
      }
    }
    div.btn {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: flex-end;
      position: absolute;
      right: 28px;
      bottom: 30px;
      button {
        display: inline-block;
        width: 100px;
        height: 36px;
        border-radius: 7px;
        background: #4072e5;
        font-size: 16px;
        color: #fff;
        margin-left: 20px;
        border: none;
        cursor: pointer;
        outline: 0 none;
        padding: 0;
      }
    }
  }
}
</style>