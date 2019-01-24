<template>
	<div class='enve_label_cont'>
		<h2>众筹内容<span>必填项</span></h2>
		<p>请您尽可能的选择并补充合适标签，这样更有利于大虾们找到，并快速解答。</p>
		<div class="enve_wen">
			<div class="hair_checkbox">
				<el-checkbox-group v-model="checkboxGroup1" size="medium">
					<el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
				</el-checkbox-group>
			</div>
			<div class="btn">
				<button class="prev_btn" @click='prevBtn'>上一步</button>
				<button class="next_btn" @click='nextBtn'>下一步</button>
			</div>
       <el-dialog
        title="温馨提示"
        :visible.sync="dialogVisible"
        width="300px"
        height="400px"
        :before-close="handleClose">
        <div class="noteinfo">
          <img src="../../../../static/img/hb.png" alt="">
          <div class="dialog_content">
            补充
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="leave" @click="dialogVisible = false">取消</el-button>
          <el-button @click="dialogVisible = false">确定</el-button>
        </span>
      </el-dialog>
		</div>
     
	</div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      checkboxGroup1: [""],
      cities: ["IT技术", "Mycat", "读写分离", "文档类"]
    };
  },
  methods: {
    prevBtn() {
      this.$router.push({ path: "/enveEclosure" });
    },
    nextBtn() {
      this.$router.push({ path: "/enveAmount" });
    },
    handleClose() {
      this.dialogVisible = false;
    }
  }
};
</script>

<style  lang='less'>
.enve_label_cont {
  height: auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding-top: 20px;
  padding-left: 83px;
  padding-right: 28px;
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
  p {
    text-align: left;
    line-height: 30px;
    font-size: 16px;
    color: #65666a;
  }
  div.enve_wen {
    width: 100%;
    height: auto;
    // margin-top: 20px;
    // padding-bottom: 50px;
    div.hair_checkbox {
      text-align: left;
    }
    div.btn {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: flex-end;
      margin-top: 150px;
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
.el-dialog__wrapper {
  .el-dialog {
    background-color: #f94545;
    background-image: url(../../../../static/img/bj.png);
    background-size: 100% 100%;
  }
  .el-dialog__title {
    color: #fff;
    font-weight: 600;
  }
  .el-dialog__close {
    color: #fff;
  }
  .el-button {
    color: #fff;
    background: #ffad2d;
    border: none;
  }
  .leave {
    color: #ffad2d;
    background: #fff;
  }
  .noteinfo {
    color: #fff;
    position: relative;
    img {
      width: 100px;
      height: 100px;
      position: absolute;
      top: -50px;
      right: 10px;
      z-index: 0;
    }
    .dialog_content {
      position: relative;
      z-index: 2;
    }
  }
}
</style>