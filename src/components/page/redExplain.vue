<template>
	<div class='hair_top_cont'>
		<h2>红包【置顶】<span>必填项</span></h2>
		<div class="text_area">
			<p>重要或者紧急红包建议选择红包【置顶】服务，那你发的红包金额等值于您增加的【慷慨度】</p>
		</div>
    <div class="top_slider">
      <el-slider
          v-model="amount"
          :max="150"
          :step="10">
      </el-slider>
      <p>{{amount}}元（{{amount / 10}}天）</p>
    </div>
		<div class="hair_wen">
			<h3>红包说明:</h3>
			<p>1、红包总金额95%给予答题者，5%给予平台运营。</p>
			<p>2、红包【置顶】金额作为服务费给予平台运营。</p>
			<p>3、请仔细核对红包信息，红包发出后，若无人给出合理解答，红包关闭后，平台将全额退还红包金额。</p>
			<p>4、请确保红包内容不包含敏感信息和不影响平台利益，否则平台有权删除红包，删除后红包金额将不予退回，同时扣减1分信用分，平台粉丝也有权举报红包主人，一经查实，红包主人信用分将被扣减1分。</p>
			<p>5、红包分配中，如果出现红包纠纷，若证实是红包主人的问题，红包主人将被扣减1分信用分，同时在平台运营的调解下给出合理分配，否则不能关闭红包，红包余额将充公。</p>
			<div class="btn">
				<button class="prev_btn" @click='prevBtn'>上一步</button>
				<button class="next_btn" @click='contactVisible = true'>呼叫大虾</button>
			</div>
		</div>
		<el-dialog
            :visible.sync="contactVisible"
            width="330px"
            title=""
            :before-close="handleContactClose">
        <div class="noteinfo">
          <img src="../../../static/img/hb.png" alt="">
          <p class="info_title">金主，您计划将红包</p>
          <el-radio-group v-model="radio1">
		    <el-radio :label="1">立即发出
		    	<b>发出后抢到红包的人开始解答</b>
		    </el-radio>
		    
		    <el-radio :label="2">
		    	与答题者沟通后发出
		    	<b>发出后计划抢红包的人需要提交申请，待申请通过后开始答题，若无合适申请者，5天后红包自动开放</b>
		    </el-radio>
		    
		  </el-radio-group>
          
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button  @click="handleInfo()" class="leave" size="medium">取消</el-button>     
          <el-button  @click="handleInfo()" size="medium">确定</el-button>
        </span>
       </el-dialog>
	</div>
</template>

<script>
export default {
  data() {
    return {
      contactVisible: false,
      radio1: 1,
      amount: 10
    };
  },
  methods: {
    handleContactClose() {
      this.contactVisible = false;
    },
    prevBtn() {
      this.$router.push({ path: "/redMoney" });
    },
    nextBtn() {
      this.$router.push({ path: "/enclosure" });
    },
    handleInfo() {
      this.contactVisible = false;
    }
  }
};
</script>

<style  lang='less'>
body {
  padding: 0 !important;
}
.hair_top_cont {
  height: auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding-top: 20px;
  padding-left: 83px;
  padding-right: 28px;
  padding-bottom: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
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
  div.top_slider {
    width: 50%;
    p {
      text-align: left;
      margin: 0;
    }
  }
  div.text_area {
    width: 100%;
    height: auto;
    p {
      text-align: left;
      line-height: 30px;
      font-size: 14px;
      color: #666;
    }
  }
  div.hair_wen {
    width: 100%;
    height: auto;
    // margin-top: 50px;
    // padding-bottom: 20px;
    h3 {
      text-align: left;
      color: #ff180b;
      font-size: 18px;
      font-weight: 400;
    }
    p {
      text-align: left;
      line-height: 26px;
      font-size: 14px;
      color: #6d6e70;
      margin: 0;
    }
    div.btn {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: flex-end;
      // margin-top: 30px;
      // padding-bottom: 30px;
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
        padding: 0;
        outline: 0 none;
      }
    }
  }
  .el-dialog__wrapper {
    .el-dialog {
      background-color: #f94545;
      background-image: url(../../../static/img/bj.png);
      background-size: 100% 100%;
      overflow-x: hidden;
      .el-dialog__footer {
        text-align: center;
      }
      .el-dialog__body {
        padding: 0;
        box-sizing: border-box;
      }
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
        top: 0px;
        right: 10px;
        z-index: 0;
      }
      p.info_title {
        margin: 0;
        padding: 0;
        height: 30px;
        color: #fff;
        line-height: 30px;
        text-align: left;
        padding-left: 40px;
        box-sizing: border-box;
        font-size: 18px;
        margin-top: 30px;
      }
      .el-radio-group {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        margin-top: 20px;
        .el-radio {
          width: 100%;
          padding-left: 40px;
          box-sizing: border-box;
          line-height: 24px;
          text-align: left;
          margin: 0;
          color: #fff;
          font-size: 16px;
          .el-radio__label {
            b {
              display: block;
              width: 100%;
              padding-left: 24px;
              box-sizing: border-box;
              line-height: 24px;
              color: #a70503;
              overflow: hidden;
              white-space: normal;
              padding-right: 10px;
              font-weight: 400;
            }
          }
          .el-radio__input.is-checked .el-radio__inner {
            border-color: #fff;
            background: none;
          }
          .el-radio__input.is-checked + .el-radio__label {
            color: #fff;
          }
        }
      }
      .dialog-footer {
        width: 100%;
        height: auto;
        display: flex;
        .hair_cont .el-dialog__wrapper .el-button {
          color: #fff;
          width: 40%;
          text-align: center;
          background: #ffad2d;
          border: none;
        }
      }
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