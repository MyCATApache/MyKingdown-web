<template>
  <dl class="item">
    <dt>
      <img src="../../../static/img/aa.jpg" alt="">
    </dt>
    <dd>
      <div class="item_name_grade">
        <span class="item_name">狗达</span>
        <div class="item_grade">
            <img src="../../../static/img/star.gif" alt="">
            <span class="item_num">
              LV10
            </span>
        </div>
      </div>
      <div class="public_time">发布时间： 01-01 12:59:27</div>
      <div class="text" v-bind:class="{is_view:isView}">
        毕业一年后，在这一行摸爬滚打，总找不到突破...
        <span v-if="type === '本尊' && !isView" @click="seeDetail()">查看详情</span>
        <span v-if="type !== '本尊'" @click="dialogVisible = true">查看详情</span>
      </div>
      <el-dialog
        title="温馨提示"
        :visible.sync="dialogVisible"
        width="300px"
        height="400px"
        :before-close="handleClose">
        <div class="noteinfo">
          <img src="../../../static/img/hb.png" alt="">
          <div class="dialog_content">
            <span>查看答案详情需付费</span>
          <p>您需支付：<b>400元</b></p>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="leave" @click="dialogVisible = false">含泪离开</el-button>
          <el-button @click="dialogVisible = false">任性付费</el-button>
          <div class="support">感谢您的支持，Panda金库新增200元</div>
        </span>
      </el-dialog>
      <div class="option">
        <span>就ta</span>
        <span>ta不行</span>
        <span>私聊ta</span>
        <span class="danger">举报</span>
      </div>
    </dd>
  </dl>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      isView: false
    };
  },
  props: ["type"],
  mounted() {
    console.log(this.type);
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    seeDetail() {
      this.isView = true;
    }
  }
};
</script>

<style lang="less">
.item {
  display: flex;
  dt {
    flex: 1;
    img {
      width: 160px;
      height: 160px;
    }
  }
  dd {
    flex: 5;
    margin-left: 20px;
    .item_name_grade {
      width: 100%;
      display: flex;
      align-items: center;
      .item_name {
        font-size: 18px;
        font-weight: 600;
        color: #000;
      }
      .item_grade {
        width: 70px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
        img {
          flex: 1;
        }
        .item_num {
          flex: 1;
          height: 15px;
          line-height: 15px;
          text-align: center;
          font-size: 8px;
          -webkit-text-size-adjust: none;
          padding: 0 5px;
          color: #fff;
          background: #ff7a30;
        }
      }
    }
    .public_time {
      color: #999a9e;
      line-height: 40px;
    }
    .is_view {
      height: 40px;
    }
    .text {
      // width: 100%;
      // height: 20px;
      padding: 10px;
      background: #eee;
      span {
        color: #ffc331;
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
      .dialog-footer {
        .support {
          color: #fff;
          text-align: center;
          margin-top: 10px;
        }
      }
    }
    .option {
      width: 100%;
      text-align: right;
      span {
        display: inline-block;
        margin-left: 15px;
        margin-top: 15px;
        padding: 5px 15px;
        color: #fff;
        background: #ffc331;
        border-radius: 5px;
      }
      span:hover {
        cursor: pointer;
      }
      .danger {
        background: #fe0000;
      }
    }
  }
}
</style>
