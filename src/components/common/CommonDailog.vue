<template>
<div>
     <div class="btn" >
        <span @click="Topping()">【置顶红包】</span>
        <span @click="addTo()">追加红包</span>
        <span @click="help()">求助平台</span>
        <span @click="cancel()">取消红包</span>
    </div> 
    <el-dialog
        title="温馨提示"
        :visible.sync="dialogVisible"
        width="300px"
        height="400px"
        :before-close="handleClose">
        <div class="noteinfo">
          <img src="../../../static/img/hb.png" alt="">
          <div class="dialog_content" v-if="typeDailog === 'top'">
              <div class="top_body">
                <div class="title">服务费</div>   
                <div class="top_num">
                    <el-slider
                    v-model="topValue"
                    :max="30"
                    :show-tooltip="false"
                    :step="1">
                    </el-slider>
                    <p>服务费{{topGenerosity}}元，有效期{{topDay}}天</p>
                    <p>慷慨度+{{topGenerosity}}</p>
                </div>
              </div>
            
          </div>
          <div class="dialog_content" v-if="typeDailog === 'add'">
            <div class="top_body">
                <div class="title">追加红包</div>   
                <div class="top_num">
                    <el-slider
                    v-model="addValue"
                    :max="20"
                    :show-tooltip="false"
                    :step="1">
                    </el-slider>
                    <p>服务费{{addGenerosity}}元,慷慨度+{{addGenerosity}}</p>
                </div>
              </div>
          </div><div class="dialog_content" v-if="typeDailog === 'help'">
            <div class="top_body">
                <div class="title">服务费</div>   
                <div class="top_num">
                    <el-slider
                    v-model="helpValue"
                    :max="20"
                    :show-tooltip="false"
                    :step="1">
                    </el-slider>
                    <p>服务费{{helpGenerosity}}元,慷慨度+{{helpGenerosity}}</p>
                </div>
              </div>
          </div>
          <div class="dialog_content" v-if="typeDailog === 'cancel'">
           <p>取消红包后其他人将无法为您继续解答，您确定要取消吗？</p> 
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="leave" @click="dialogVisible = false">取消</el-button>
          <el-button @click="dialogVisible = false">确定</el-button>
        </span>
      </el-dialog>
</div>
   
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      typeDailog: "",
      topValue: 1,
      topDay: 1,
      topGenerosity: 3,
      addValue: 1,
      addDay: 1,
      addGenerosity: 50,
      helpValue: 1,
      helpDay: 1,
      helpGenerosity: 100
    };
  },
  watch: {
    topValue() {
      this.topDay = this.topValue;
      this.topGenerosity = this.topValue * 3;
    },
    addValue() {
      this.addDay = this.addValue;
      this.addGenerosity = this.addValue * 50;
    },
    helpValue() {
      this.helpDay = this.helpValue;
      this.helpGenerosity = this.helpValue * 100;
    }
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    Topping() {
      this.dialogVisible = true;
      this.typeDailog = "top";
    },
    addTo() {
      this.dialogVisible = true;
      this.typeDailog = "add";
    },
    help() {
      this.dialogVisible = true;
      this.typeDailog = "help";
    },
    cancel() {
      this.dialogVisible = true;
      this.typeDailog = "cancel";
    }
  }
};
</script>

<style lang="less">
.btn {
  text-align: right;
  span {
    display: inline-block;
    margin: 15px 0;
    margin-left: 10px;
    padding: 3px 7px;
    color: #fff;
    background: #4072e5;
    border-radius: 5px;
  }
  span:hover {
    cursor: pointer;
  }
}
.el-dialog__wrapper {
  .el-dialog {
    background-color: #f94545;
    background-image: url(../../../static/img/bj.png);
    background-size: 100% 100%;
    .el-slider {
      .el-slider__bar {
        height: 17px;
        background-color: #ffad2d;
      }
      .el-slider__runway {
        height: 17px;
        background-color: #fff;
      }
      .el-slider__button-wrapper {
        top: -10px;
      }
      .el-slider__button {
        border: 2px solid #ffad2d;
      }
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
      top: -50px;
      right: 10px;
      z-index: 0;
    }
    .dialog_content {
      position: relative;
      z-index: 2;
      .top_body {
        display: flex;
        .title {
          flex: 1;
          line-height: 46px;
        }
        .top_num {
          flex: 3;
          margin-left: 10px;
          p {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
