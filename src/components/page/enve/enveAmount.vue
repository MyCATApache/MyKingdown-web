<template>
    <div class="enve_amount">
        <div class="enve_theme">
            <h3>发起金额</h3>
            <span>不低于100元。您发的红包金额等值于您增加的【慷慨度】</span>
        </div>
        <div class="start">
            <div class="amount_slider">
                <el-slider
                    v-model="amount"
                    :max="1000"
                    :step="100">
                </el-slider>
                 <!-- <div class="amount_num">
                    <span class="start_num">5元</span>
                    <span class="step_num">{{amount}}元</span>
                </div> -->
            </div>
            <div class="amount_prompt">
                100元起步，上不封顶
            </div>
        </div>
        <div class="aims">
            <h3>目标金额</h3>          
        </div>
        <div class="aims">
            <div class="amis_slider">
                <el-slider
                    v-model="aims"
                    :max="10000"
                    :step="amount">
                </el-slider>
            </div>
            <div class="amount_prompt">
                请给出与您发起问题相当的目标金额
            </div>
        </div>
        <div class="amount_btn">
            <button class="prev_btn" @click='prevBtn'>上一步</button>
            <button class="next_btn" @click='contactVisible = true'>呼叫小伙伴</button>
        </div>
        <el-dialog
            :visible.sync="contactVisible"
            width="330px"
            title=""
            :before-close="handleContactClose">
            <div class="noteinfo">
            <img src="../../../../static/img/hb.png" alt="">
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
                <el-button  @click="contactVisible = false"  size="medium">取消</el-button>     
                <el-button  @click="contactVisible = false"  size="medium">确定</el-button>
            </span>
       </el-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 100,
      aims: 100,
      contactVisible: false,
      radio1: 1
    };
  },
  watch: {
    amount() {
      this.aims = this.amount;
    }
  },
  methods: {
    prevBtn() {
      this.$router.push({ path: "/enveLable" });
    },
    handleContactClose() {
      this.contactVisible = false;
    }
  }
};
</script>

<style lang="less">
.enve_amount {
  //   height: auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding-top: 20px;
  padding-left: 83px;
  box-sizing: border-box;
  position: relative;
  .enve_theme {
    display: flex;
    line-height: 30px;
    h3 {
      margin: 0;
    }
    span {
      font-size: 14px;
      color: #9999ad;
      margin-left: 10px;
    }
  }
  .start {
    display: flex;
    line-height: 45px;
    margin-top: 30px;
    margin-bottom: 50px;
    .amount_slider {
      width: 300px;
      //   .amount_num {
      //     position: relative;
      //     .start_num {
      //       position: absolute;
      //       top: 0;
      //       left: 0;
      //     }
      //     .step_num {
      //       position: absolute;
      //       top: 0;
      //       left: 50px;
      //     }
      //   }
    }
    .amount_prompt {
      font-size: 14px;
      color: #9999ad;
      margin-left: 10px;
    }
  }
  .aims {
    display: flex;
    line-height: 45px;
    h3 {
      margin: 0;
    }
    .amis_slider {
      width: 300px;
      margin: 0 12px;
    }
    .amount_prompt {
      font-size: 14px;
      color: #9999ad;
      //   margin-left: 10px;
    }
  }
  div.amount_btn {
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
.el-dialog__wrapper {
  .el-dialog {
    background-color: #f94545;
    background-image: url(../../../../static/img/bj.png);
    background-size: 100% 100%;
    overflow-x: hidden;
    .el-dialog__footer {
      text-align: center;
    }
    .el-dialog__body {
      // padding: 0;
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
</style>
