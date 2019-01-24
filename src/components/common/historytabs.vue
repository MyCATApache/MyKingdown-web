<template>
    <div class="history_tabs">
        <!-- {{data.name}} -->
        <div class="history_left">
            <div class="history_left_avatar">
              <img src="../../../static/img/aa.jpg" alt="">
            </div>
        </div>
        <div class="history_right">
            <div class="history_right_info">
              <div class="history_right_name_grade">
                <span class="history_right_name" @click="toDetail(data)">{{data.name}}</span>
                <div class="history_right_grade">
                  <div>
                  <img src="../../../static/img/star.gif" alt="">
                  <span class="history_right_grade_num">
                    LV{{data.grade}}
                    </span>
                  </div>
                </div>
                <span class="history_right_title">{{data.title}}</span>
              </div>
              <div class="history_img_text">
                  <img src="../../../static/img/hair.jpg" alt="">
                  <div class="history_text">
                    <div class="history_right_release_time">发布时间：{{data.releasetime}}</div>
                    <div class="history_right_solve" v-if="data.solve">熊大已经完美解决</div>
                    <div class="history_right_solve" v-if="!data.solve">笨笨熊已经部分解决</div>              
                    <div class="history_right_grabtime">截止时间：{{data.releasetime}}</div>
                  </div>
              </div>
            </div>
            <div class="history_right_time">
              <div class="history_right_time_ask">
                <div class="history_right_application">
                  <img src="../../../static/img/sq_1.gif" alt="">
                  <span>回答 ({{data.application}})</span>
                </div>
                <div class="history_right_ask">
                  <img src="../../../static/img/ask.jpg" alt="">
                  <span>提问 (5)</span>
                </div>
                <div class="history_right_comment">
                  <img src="../../../static/img/comment.jpg" alt="">
                  <span>评论 (6)</span> 
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import bus from "./bus.js";
export default {
  props: {
    data: Object
  },
  methods: {
    toDetail(item) {
      this.$router.push({
        path: "/passDetail",
        query: {
          path: "/passDetail",
          data: item,
          type: "history",
          isOpen: "history"
        }
      });
    }
  }
};
</script>

<style lang='less'>
.history_tabs {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  .history_left {
    flex: 1;
    line-height: 30px;
    .history_left_avatar {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      background: skyblue;
      line-height: 85px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .history_left_money {
      width: 90px;
      height: 25px;
      font-size: 12px;
      color: #ff722e;
      border: 2px solid #ff722e;
      border-radius: 15px;
      margin-top: 10px;
    }
    .history_left_ask {
      width: 90px;
      height: 25px;
      font-size: 12px;
      color: #386fe3;
      border: 2px solid #386fe3;
      border-radius: 15px;
      margin-top: 10px;
    }
    .ask_solve {
      background: #cdd1d4;
      color: #000;
      border: 2px solid #a0a0a0;
    }
  }
  .history_right {
    flex: 5;
    text-align: left;
    line-height: 25px;
    margin-left: 10px;
    .history_right_info {
      .history_right_name_grade {
        width: 100%;
        display: flex;
        .history_right_name {
          font-size: 18px;
          font-weight: 600;
          color: #000;
        }
        .history_right_name:hover {
          cursor: pointer;
        }
        .history_right_grade {
          width: 70px;
          height: 30px;
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 10px;
            img {
              flex: 1;
            }
            .history_right_grade_num {
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
        .history_right_title {
          color: #f14a04;
          font-size: 8px;
          -webkit-text-size-adjust: none;
          font-weight: 700;
        }
      }
      .history_right_introduction {
        font-size: 18px;
        color: #519efa;
      }
      .history_right_release_time {
        color: #9eacc9;
        font-size: 12px;
      }
      .history_img_text {
        display: flex;
        img {
          width: 60px;
          height: 70px;
        }
        .history_text {
          margin-left: 10px;
        }
      }
      .history_right_solve {
        color: #f75c5c;
      }
      .history_right_prompt {
        color: #f75c5c;
        font-size: 12px;
      }
      .history_right_grabtime {
        color: #65a3fb;
        font-size: 12px;
      }
      .history_right_submit_application {
        font-size: 12px;
        color: #f75c5c;
        span {
          color: #000;
          // margin-left: 5px;
        }
      }
    }
    .history_right_time {
      font-size: 12px;
      display: flex;
      justify-content: flex-end;
      border-bottom: 1px dashed #a4a5a9;
      //   margin-top: 10px;
      //   padding-top: 10px;
      .history_right_time_ask {
        text-align: right;
        color: #91a0c1;
        .history_right_ask,
        .history_right_comment,
        .history_right_application {
          margin-left: 10px;
          display: inline-block;
          width: 80px;
          height: 30px;
          position: relative;
          img {
            position: absolute;
            top: 5px;
            left: 10px;
          }
        }
      }
      .history_right_time_delay {
        color: #f75c5c;
      }
      .history_right_submit {
        color: #f75c5c;
      }
      .history_right_submit:hover {
        cursor: pointer;
      }
    }
  }
}
</style>

