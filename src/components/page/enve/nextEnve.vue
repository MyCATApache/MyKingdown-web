<template>
	<div class='enve_cont'>
		<h2>众筹内容<span>必填项</span></h2>
		<div class="text_area">
			<div class="enve_text" contenteditable="true"></div>
		</div>
		<div class="enve_wen">
			<h3>提问正确姿势:</h3>
			<p>1、请清晰简洁提出您的问题，而不是宣讲您的观点。</p>
			<p>2、一次尽量只提一个问题，而不是嵌套多个问题。</p>
			<p>3、请不要提过于宏大的问题，回答者更乐于回答精确、背景信息足够详尽的问题。</p>
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
    return {};
  },
  methods: {
    prevBtn() {
      this.$router.push({ path: "/enveCrowd" });
    },
    nextBtn() {
      this.$router.push({ path: "/enveEclosure" });
    }
  }
};
</script>

<style  lang='less'>
.enve_cont {
  height: auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding-top: 20px;
  padding-right: 28px;
  padding-left: 83px;
  box-sizing: border-box;
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
  div.text_area {
    width: 100%;
    height: 150px;
    // background: #eeeeee;
    .enve_text {
      text-align: left;
      width: 100%;
      height: 150px;
      border: 2px solid #3e6fe8;
      border-radius: 5px;
      box-sizing: border-box;
    }
  }
  div.enve_wen {
    width: 100%;
    height: auto;
    // margin-top: 50px;
    // padding-bottom: 50px;
    h3 {
      text-align: left;
      color: #ff180b;
      font-size: 18px;
      font-weight: 400;
    }
    p {
      text-align: left;
      line-height: 24px;
      font-size: 16px;
      color: #000002;
    }
    div.btn {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: flex-end;
      margin-top: 30px;
      padding-bottom: 30px;
      button {
        display: inline-block;
        // width: 100px;
        // height: 36px;
        border-radius: 7px;
        background: #4072e5;
        font-size: 16px;
        color: #fff;
        margin-right: 20px;
        border: none;
        cursor: pointer;
        padding: 5px 20px;
        outline: 0 none;
      }
    }
  }
}
</style>