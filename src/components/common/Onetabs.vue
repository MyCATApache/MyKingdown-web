<template>
    <div class="one_tabs">
        <!-- {{data.name}} -->
        <div class="one_left">
            <div class="one_left_avatar">
              <img src="../../../static/img/avator.gif" alt="">
            </div>
            <div class="one_left_money">
                <img src="../../../static/img/money.gif" alt="">
                {{data.money}}
              </div>
            <div class="one_left_ask" v-if="data.solve" :class="{ask_solve:data.solve}">
              已解决
            </div>
            <div class="one_left_ask" v-if="!data.solve">
              等待解决
            </div>
        </div>
        <!-- 已开放 && 有人抢包 -->
        <div class="one_right" v-if="data.isOpen && data.isOne">
            <div class="one_right_info">
              <div class="one_right_name_grade">
                <span class="one_right_name" @click="toDetail(data,'open')">{{data.name}}</span>
                <div class="one_right_grade">
                  <div>
                  <img src="../../../static/img/star.gif" alt="">
                  <span class="one_right_grade_num">
                    LV{{data.grade}}
                    </span>
                  </div>
                </div>
                <span class="one_right_title">{{data.title}}</span>
              </div>
              <div class="one_right_introduction">{{data.theme}}</div>
              <div class="one_right_anatomy">深度剖析 ｜ {{data.content}}</div>
              <div class="full_content">port SQLServer数据库连接失败常见解决方案 5707 Java报表工具FineRe... <span>查看完整内容</span></div>
              <div class="one_right_release_time">发布时间：{{data.releasetime}}</div>
              <!-- <div class="one_right_prompt">{{data.prompt}}</div> -->
              <!-- <div class="one_right_release_time">{{data.releasetime}}</div> -->
            </div>
            <div class="one_right_time">
              <div class="one_right_time_delay all_comment" @click="toDetail(data, 'open')">
              查看全部评价 >>
              </div>
              <div class="one_right_time_ask">
                <div class="one_right_ask">
                  <img src="../../../static/img/ask.jpg" alt="">
                  <span>提问 ({{data.ask}})</span>
                </div>
                <div class="one_right_comment">
                  <img src="../../../static/img/comment.jpg" alt="">
                  <span>评论 ({{data.comment}})</span> 
                  </div>
              </div>
            </div>
        </div>
        <!-- 已开放 && 无人抢包 -->
        <div class="one_right" v-if="data.isOpen && !data.isOne">
            <div class="one_right_info">
              <div class="one_right_name_grade">
                <span class="one_right_name"  @click="toDetail(data,'open')">{{data.name}}</span>
                <div class="one_right_grade">
                  <div>
                  <img src="../../../static/img/star.gif" alt="">
                  <span class="one_right_grade_num">
                    LV{{data.grade}}
                    </span>
                  </div>
                </div>
                <span class="one_right_title">{{data.title}}</span>
              </div>
              <div class="one_right_introduction">{{data.theme}}</div>
              <div class="one_right_anatomy">深度剖析 ｜ {{data.content}}</div>
              <div class="one_right_release_time">发布时间：{{data.releasetime}}</div>
            </div>
            <div class="one_right_time no_open">
              <div class="one_right_time_delay">
              红包等待时间{{data.delaytime}}
              </div>
              <div class="one_right_time_ask">
                <div class="one_right_ask">
                  <img src="../../../static/img/ask.jpg" alt="">
                  <span>提问 ({{data.ask}})</span>
                </div>
                <div class="one_right_comment">
                  <img src="../../../static/img/comment.jpg" alt="">
                  <span>评论 ({{data.comment}})</span> 
                  </div>
              </div>
            </div>
        </div>
        <!-- 未开放 -->
        <div class="one_right" v-if="!data.isOpen">
            <div class="one_right_info">
              <div class="one_right_name_grade">
                <span class="one_right_name"  @click="toDetail(data,'noOpen')">{{data.name}}</span>
                <div class="one_right_grade">
                  <div>
                  <img src="../../../static/img/star.gif" alt="">
                  <span class="one_right_grade_num">
                    LV{{data.grade}}
                    </span>
                  </div>
                </div>
                <span class="one_right_title">{{data.title}}</span>
              </div>
              <div class="one_right_introduction">{{data.theme}}</div>
              <div class="one_right_anatomy">深度剖析 ｜ {{data.content}}</div>
              <div class="full_content">port SQLServer数据库连接失败常见解决方案 5707 Java报表工具FineRe... 
                <!-- <span>查看完整内容</span> -->
                </div>
              <div class="one_right_release_time">发布时间：{{data.releasetime}}</div>
              <div class="one_right_submit_application">提交申请计时：{{data.applicationtime}}<span>大虾提交申请1天内未收到金主回应可以主动联系金主，或者投诉您</span></div>
            </div>
            <div class="one_right_time">
              <div class="one_right_submit" @click="toDetail(data,'noOpen')">金主，有人提交抢红包申请了，快去看看把 >></div>
              <div class="one_right_time_ask">
                <!-- <div class="one_right_application">
                  <img src="../../../static/img/sq_1.gif" alt="">
                  <span @click="dialogVisible = true">点击开放</span>
                </div> -->
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import bus from "./bus.js";
export default {
  data() {
    return {
      typeDetail: "",
      dialogVisible: false
    };
  },
  props: ["data", "type"],
  methods: {
    toDetail(item, toType) {
      if (this.type === "redenvelope") {
        this.typeDetail = "本尊";
        this.$router.push({
          path: "/passDetail",
          query: {
            path: "/passDetail",
            data: item,
            type: this.typeDetail,
            isOpen: toType
          }
        });
      } else if (this.type === "participate") {
        this.typeDetail = "金主";
        this.$router.push({
          path: "/passDetail",
          query: {
            path: "/passDetail",
            data: item,
            type: this.typeDetail,
            isOpen: "participate"
          }
        });
      }
      // this.$router.push({
      //   path: "/passDetail",
      //   query: {
      //     path: "/passDetail",
      //     data: item,
      //     type: this.typeDetail,
      //     isOpen: toType
      //   }
      // });
    },
    handleClose(done) {
      this.dialogVisible = false;
    }
  }
};
</script>

<style lang='less'>
.one_tabs {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  .one_left {
    flex: 1;
    line-height: 30px;
    .one_left_avatar {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      background: skyblue;
      line-height: 85px;
      img {
        border-radius: 50%;
      }
    }
    .one_left_money {
      width: 90px;
      height: 25px;
      font-size: 12px;
      color: #ff722e;
      border: 2px solid #ff722e;
      border-radius: 15px;
      margin-top: 10px;
    }
    .one_left_ask {
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
  .one_right {
    flex: 5;
    text-align: left;
    line-height: 25px;
    margin-left: 10px;
    .one_right_info {
      .one_right_name_grade {
        width: 100%;
        display: flex;
        .one_right_name {
          font-size: 18px;
          font-weight: 600;
          color: #000;
        }
        .one_right_name:hover {
          cursor: pointer;
        }
        .one_right_grade {
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
            .one_right_grade_num {
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
        .one_right_title {
          color: #f14a04;
          font-size: 8px;
          -webkit-text-size-adjust: none;
          font-weight: 700;
        }
      }
      .one_right_introduction {
        font-size: 18px;
        color: #519efa;
      }
      .one_right_anatomy {
        font-size: 12px;
        width: 530px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .full_content {
        font-size: 12px;
        span {
          color: #f75c5c;
          float: right;
        }
        span:hover {
          cursor: pointer;
        }
      }
      .one_right_release_time {
        color: #9eacc9;
        font-size: 12px;
      }
      .one_right_prompt {
        color: #f75c5c;
        font-size: 12px;
      }
      .one_right_grabtime {
        color: #65a3fb;
        font-size: 12px;
      }
      .one_right_submit_application {
        font-size: 12px;
        color: #f75c5c;
        span {
          color: #000;
          // margin-left: 5px;
        }
      }
    }
    .no_open {
      margin-top: 10px;
      padding-top: 10px;
    }
    .one_right_time {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      border-top: 1px dashed #a4a5a9;
      .one_right_time_ask {
        text-align: right;
        color: #91a0c1;
        .one_right_ask,
        .one_right_comment,
        .one_right_application {
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
          span:hover {
            cursor: pointer;
          }
        }
      }
      .one_right_time_delay {
        color: #f75c5c;
      }
      .all_comment:hover {
        cursor: pointer;
      }
      .one_right_submit {
        color: #f75c5c;
      }
      .one_right_submit:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
