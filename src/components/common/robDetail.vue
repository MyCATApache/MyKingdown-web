<template>
  <div class="wrapper">
      <v-head></v-head>
      <div class="content">
        <div class="pass_detail">
          <div class="detail_left">
            <div class="detail_back" @click="getBackHistory()">返回</div>
            <div class="detail_tx">
              <img src="../../../static/img/tx.jpg" alt="">
              <span><b>{{type}}</b></span>
            </div>
            <div class="detail_name_grade">
              <span class="detail_name">{{dataList.name}}</span>
              <div class="detail_grade">
                  <img src="../../../static/img/star.gif" alt="">
                  <span class="detail_num">
                    LV10
                  </span>
              </div>
            </div>
               <div  class="contact" @click="contactVisible = true">私信ta</div>
               <el-dialog
                    :visible.sync="contactVisible"
                    width="300px"
                    height="400px"
                    title="温馨提示"
                    :before-close="handleContactClose">
                <div class="noteinfo">
                  <img src="../../../static/img/hb.png" alt="">
                  <p v-if="!infoDisplay">获取该金主联系方式需付费，您需支付：400元</p>
                  <div class="info_display" v-if="infoDisplay">
                    <p><label>电话：</label>17610939705</p>
                    <p><label>QQ：</label>1060262592</p>
                    <p><label>微信：</label>17610939705</p>
                  </div>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button class="leave" v-if="!infoDisplay" @click="contactVisible = false">含泪离开</el-button>
                  <el-button class="leave" v-if="infoDisplay" @click="handleInfo()">取消</el-button>                      
                  <el-button v-if="!infoDisplay" @click="handlePay()">任性付费</el-button>
                  <el-button v-if="infoDisplay" @click="handleInfo()">确定</el-button>
                </span>
               </el-dialog>
            <ul class="redenvelope">
              <li>发了50个红包</li>
              <li>投了2个亿</li>
              <li>赚了1个亿</li>
              <li>抢了20个红包</li>
            </ul>
            <ul class="degree">
              <li>慷慨度：<span>☆☆☆☆</span></li>
              <li>可靠度：<span>☆☆</span></li>
              <li>信用度：<span>☆☆☆</span></li>
              <li>表达欲：<span>☆☆☆☆</span></li>
              <li>亲和力：<span>☆</span></li>
              <li>理解力：<span>☆☆☆</span></li>
              <li>判断力：<span>☆☆☆☆☆☆</span></li>
              <li>领导力：<span>☆☆☆</span></li>
              <li>执行力：<span>☆☆☆</span></li>
              <li>沟通协调力：<span>☆☆☆☆☆</span></li>
              <li>专业技术能力：<span>☆☆☆</span></li>
            </ul>
            <div class="growth">
              <div @click="toPerson()">查看更多 >></div>
            </div>
          </div>
          <div class="detail_right">
            <dl class="share">
              <dt>
                <img src="../../../static/img/hair.png" alt="">
                <b>{{dataList.jine}}</b>
              </dt>
              <dd>
                <div class="theme">{{dataList.biaoti}}</div>
                <div class="public_time">发布时间：{{dataList.time}}</div>
              </dd>
            </dl>
            <div class="detail_right_text">
              毕业一年后，在这一行摸爬滚打，总找不到突破...<span>查看详情</span>
            </div>
            <div class="submit_app" >如果您对红包内容有把握，欢迎回答金主问题，赶紧抢红包</div>
            <div class="submit_app" >如果您对红包内容和金额有疑惑，欢迎提问；</div>
            <div class="submit_app" >如果您对红包内容有什么感触，欢迎评论；</div>
            <div class="submit_app" >如果您认为红包内容有敏感信息或者有损他人利益，请举报</div>
             <div class="btn" >
              <span>回答</span>
              <span>提问</span>
              <span>评论</span>
              <span>举报</span>
            </div> 
            <div class="wisdom_tips" v-if="type === '本尊'">
              <h4>智慧锦囊</h4>
              <p>如果此时您不知道怎么办，我来帮您出妙招（建议最好先看完提问和评论）：</p>
              <ol>
                <li>1、如果您不着急。您可以刷新您的红包，刷新后您的红包发布时间更新未当前，会进入红包列表前端，但是随着红包增多，您的红包又会被淹没，重要或者紧急红包不建议</li>
                <li>2、如果您很着急，您可以选择【置顶】红包，追加红包或者求助平台</li>
              </ol>
              <ul>
                <li>【置顶红包】：向平台支付一笔服务费，您的红包会根据您给的服务费置顶不同长度的时间（3元起步，每天增加3元），不重要的红包不建议</li>
                <li>追加红包：您可以根据下方用户的建议追加合适红包金额，让您的红包更具竞争力</li>
                <li>求助平台：如果以上方法都行不通，您还可以求助平台运营，我们会将您的问题推给专家团，重要的大额红包建议</li>
              </ul>
              <!-- <h5>现阶段加分规则</h5>
              <ol class="reward">
                <li>1、支付平台付服务费，立即增加慷慨度，等值于支付金额</li>
                <li>2、追加红包金额，红包无异议到达大虾账户上，增加慷慨度，等值于一共支付的红包金额</li>
                <li>3、点赞/差评1次，积极性加1</li>
                <li>4、回复提问1次，责任感加1</li>
              </ol> -->
            </div>
            <div class="detail_enve" v-if="process.process">
              <div class="enve_amount">
                <div>已筹金额{{process.money}}</div>
                <div class="enve_btn">
                  <span>申请延时</span>
                  <span>申请加急</span>
                </div>
              </div>
              <div class="enve_display">
                <div>
                  <span>{{process.targetMount}}</span>
                  <span>目标金额</span>
                </div>
                <div>
                  <span>{{process.rate}}</span>
                  <span>达成率</span>
                </div>
                <div>
                  <span>{{process.personNum}}</span>
                  <span>参加人数</span>
                </div>
                <div>
                  <span>{{process.day}}</span>
                  <span>已筹天数</span>
                </div>
              </div>
              <div class="enve_process">
                <h3>活动流程</h3>
                <el-steps :active="process.process" align-center>
                  <el-step title="发起众筹" description="2018-01-01 12：00"></el-step>
                  <div class="process_step">众筹中</div>
                  <el-step title="众筹生效" description="2018-01-15 12：00"></el-step>
                  <div class="process_step">回答中</div>
                  <el-step title="【最佳答案】投票" description="2018-01-29 12：00 金主必投，否则责任感-1"></el-step>
                  <div class="process_step">投票中</div>                  
                  <el-step title="获得名单公布" description="2018-02-01 12：00"></el-step>
                </el-steps>
              </div>
              <div class="enve_speak">
                <h3>我来说两句:</h3>
                <div class="enve_text" contenteditable="true"></div>
                <p>请说靠谱话，与题目无关的内容均视为无效回答，一经平台发现，可靠度将-1</p>
                <div class="enve_submit">
                  <span>提交</span>
                </div>
              </div>
            </div>
            <div class="all_app">
               <div class="tabs">
	            <li 
	                v-for='(item,index) in tabs'
	                :key="index"
	                :class="{tabActive:index == num}"
	                @click='toggleTabs(item.name,index)'
	            >{{item.name}}</li>
			</div>
			<div class="tabsCont">
				<dl>
					<dt>
						<img src="../../../static/img/tx.jpg" alt="" />
					</dt>
					<dd>
						<h4><span>狗达</span><img src="../../../static/img/dj.jpg" alt="" /></h4>
						<p>回答时间：2018-08-24 12:30:00 </p>
						<p class="detail">毕业一年后，在这一行摸爬滚打，总找不到突破...<span class="span">查看详情</span></p>
						<p class="btn_color">
							<img src="../../../static/img/ding.png" alt="" />
							<img src="../../../static/img/di.png" alt="" />
							<button class="jubao">举报</button>
						</p>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../../static/img/tx.jpg" alt="" />
					</dt>
					<dd>
						<h4><span>狗达</span><img src="../../../static/img/dj.jpg" alt="" /></h4>
						<p>回答时间：2018-08-24 12:30:00 </p>
						<p class="detail">毕业一年后，在这一行摸爬滚打，总找不到突破...<span class="span">查看详情</span></p>
						<p class="btn_color">
							<img src="../../../static/img/ding.png" alt="" />
							<img src="../../../static/img/di.png" alt="" />
							<button class="jubao">举报</button>
						</p>
					</dd>
				</dl>
			</div>
            </div>
          </div>
        </div>
      </div>
      <v-footer></v-footer>
  </div>
</template>

<script>
import vHead from "./Header.vue";
import vFooter from "./Footer.vue";
import bus from "./bus.js";
import Commonitem from "./Commonitem.vue";
import CommonDailog from "./CommonDailog.vue";
export default {
  data() {
    return {
      dataList: null,
      type: "金主",
      contactVisible: false,
      infoDisplay: false,
      isOpen: "",
      activeName: "first",
      process: Object,
      activeIndex: "1",
      tabs: [
        {
          name: "全部"
        },
        {
          name: "回答(1)"
        },
        {
          name: "提问(2)"
        },
        {
          name: "评论(2)"
        }
      ],
      num: 0,
    };
  },
  components: {
    vHead,
    vFooter,
    Commonitem,
    CommonDailog
  },
  created(){
    this.dataList = JSON.parse(localStorage.getItem('robDetail'))
  },
  mounted() {

    
  },
  methods: {
    getBackHistory() {
      this.$router.back(-1);
    },
    handleClose(done) {
      this.dialogVisible = false;
    },
    handleContactClose() {
      this.contactVisible = false;
    },
    handlePay() {
      this.infoDisplay = true;
    },
    handleInfo() {
      this.contactVisible = false;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    toPerson() {
      // console.log(this.$route.path, this.$router);
      this.$router.push({
        path: "/person",
        query: {
          path: "/person",
          to: this.$route.path
        }
      });
    },
    toggleTabs(name, ind) {
      this.num = ind;
    },
  }
};
</script>

<style lang="less">
.content {
  width: 100%;
  padding: 0 15% 60px;
  box-sizing: border-box;
  display: flex;
  /* padding-top: 15px; */
  background: #f5f8ff;
}
.pass_detail {
  width: 100%;
  background: #fff;
  margin-top: 20px;
  display: flex;
  padding: 20px 0 20px 20px;
  text-align: left;
  font-size: 14px;
  .detail_left {
    flex: 1;
    border-right: 1px solid #eee;
    .detail_back {
      width: 100%;
      height: 30px;
      font-size: 20px;
      color: #657dc5;
      // line-height: 30px;
      cursor: pointer;
    }
    .detail_tx {
      position: relative;
      img {
        width: 150px;
        height: 170px;
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 12px;
        background: #fdd212;
        text-align: center;
        line-height: 20px;
        padding: 3px 7px;
      }
    }
    .contact {
      display: inline-block;
      background: red;
      color: #fff;
      padding: 1px 4px;
      border-radius: 3px;
      margin-top: 5px;
    }
    .contact:hover {
      cursor: pointer;
    }
    .el-dialog__wrapper {
      .el-dialog {
        background-color: #f94545;
        background-image: url(../../../static/img/bj.png);
        background-size: 100% 100%;
        .el-dialog__footer {
          text-align: center;
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
        p {
          position: relative;
          z-index: 2;
        }
      }
    }
    .detail_name_grade {
      width: 100%;
      display: flex;
      align-items: center;
      .detail_name {
        font-size: 18px;
        font-weight: 600;
        color: #000;
      }
      .detail_grade {
        width: 70px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
        img {
          flex: 1;
        }
        .detail_num {
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
    .redenvelope {
      padding-left: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      li {
        color: #fcb50d;
        text-align: left;
        font-size: 12px;
        border: 1px solid #fcb50d;
        border-radius: 5px;
        margin-top: 5px;
        margin-left: 5px;
        padding: 2px 5px;
      }
    }
    .degree {
      padding-left: 0;
      li {
        line-height: 25px;
        span {
          color: #fcb50d;
        }
      }
    }
    .growth {
      color: #657dc5;
      display: flex;
      align-items: center;
      div:hover {
        cursor: pointer;
      }
    }
  }
  .detail_right {
    flex: 4;
    padding: 0 28px;
    .share {
      display: flex;
      dt {
      	position: relative;
        img {
          width: 50px;
          height: 60px;
        }
        b{
        	position: absolute;
        	width: 100%;
        	text-align: center;
        	top: 8px;
        	font-size: 14px;
        	color:#FE342A ;
        }
      }
      dd {
        .public_time {
          color: #9a9b9d;
          font-size: 12px;
        }
        .open_time {
          color: #ff000a;
          margin-top: 10px;
        }
      }
    }
    .detail_right_text {
      height: 170px;
      background: #eee;
      color: #9f9f9f;
      padding: 10px;
      border-radius: 10px;
      span {
        color: #ffc331;
      }
      span:hover {
        cursor: pointer;
      }
    }
    .submit_app {
      width: 100%;
      height: 30px;
      line-height: 30px;
      color: #959597;
    }
    .wisdom_tips {
      padding-right: 50px;
      ol,
      ul {
        margin: 0;
        padding: 0;
        li {
          margin-bottom: 10px;
        }
      }
      h5,
      h4 {
        color: red;
      }
      .reward {
        color: red;
      }
    }
    .detail_enve {
      margin: 20px 0;
      .enve_amount {
        display: flex;
        justify-content: space-between;
        div.enve_btn {
          span {
            padding: 8px 20px;
            color: #fff;
            background: #3e6fe8;
            border-radius: 5px;
            margin-right: 10px;
          }
        }
      }
      .enve_display {
        width: 100%;
        height: 60px;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        border-radius: 5px;
        & > div {
          width: 20%;
          display: flex;
          flex-direction: column;
          line-height: 25px;
          text-align: center;
        }
      }
      .enve_process {
        margin-top: 20px;
        .el-steps {
          .process_step {
            width: 0;
            margin-top: -10px;
          }
        }
      }
      .enve_speak {
        .enve_text {
          width: 100%;
          height: 100px;
          border: 2px solid #3e6fe8;
          border-radius: 5px;
          box-sizing: border-box;
        }
        p {
          color: #ccc;
        }
        .enve_submit {
          display: flex;
          justify-content: flex-end;
          span {
            padding: 8px 20px;
            color: #fff;
            background: #3e6fe8;
            border-radius: 5px;
            margin-right: 20px;
          }
        }
      }
    }
    .all_app {
      .tabs {
      width: auto;
      display: flex;
      height: 40px;
      line-height: 40px;
      margin-top: 50px;
      border-bottom: 1px solid #dcdde1;
      li {
        margin: 0 20px;
        text-align: center;
        color: #262729;
        box-sizing: border-box;
        cursor: pointer;
        &:first-child {
          margin-left: 0;
        }
      }
      li.tabActive {
        color: #f3c82e;
        border-bottom: 2px solid #f3c82e;
      }
    }
    .tabsCont {
      width: 100%;
      box-sizing: border-box;
      dl {
        display: flex;
        width: 100%;
        height: auto;
        box-sizing: border-box;
        dt {
          flex: 1.7;
          img {
            width: 100%;
            height: auto;
          }
        }
        dd {
          flex: 8.3;
          margin-left: 20px;
          box-sizing: border-box;
          h4 {
            width: 100%;
            line-height: 30px;
            text-align: left;
            margin: 0;
            display: flex;
            span {
              line-height: 30px;
              font-size: 18px;
              color: #3b3d3a;
            }
            img {
              width: auto;
              height: 20px;
              margin-top: 5px;
              margin-left: 10px;
            }
          }
          p{
          	margin: 0;
          }
          p.detail {
            margin: 0;
            height: 40px;
            line-height: 40px;
            background: #ededed;
            color: #a8a9ab;
            text-align: left;
            box-sizing: border-box;
            margin-top: 10px;
            padding: 0 20px;
            span {
              color: #f8c00b;
              background: none;
              padding: 0;
            }
          }
          p.btn_color{
              	width: 100%;
              	height: auto;
              	display: flex;
              	justify-content: flex-end;
              	box-sizing: border-box;
              	padding: 0;
              	margin: 0;
              	padding-right: 20px;
              	img{
              		display: inline-block;
              		width: 24px;
              		height: auto;
              		margin-right: 20px;
              		margin-top: 5px;
              	}
              	button{
              		width: 50px;
              		height: 25px;
              		border-radius: 5px;
              		border: none;
              		outline: none;
              		color: #fff;
              		background:#FEB542;
              		margin-left: 15px;
              		margin-top: 5px;
              		cursor: pointer;
              	}
              	button.jubao{
              			background:#fe0000 ;
              		}
              }
        }
      }
    }
    }
  }
}
</style>
