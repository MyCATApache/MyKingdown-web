<template>
	<div class='hair_wrapper'>
		<div class="hair_title">
			<img src="../../../static/img/quan.jpg" alt="" />
			<span>红包标题</span>
			<input type="text" />
			<b>*必填项</b>
		</div>
		<div class="hair_ms">
			<p>请用几个关键字准确定位出您的问题，方便答题者快速定位，提高效率。</p>
		</div>
		<div class="hair_cont">
			<h2>温馨提示，平台根据您填写的标题会找出相似问题</h2>
			<p>1、如果有您正好需要的，您可以直接在下方找到满意的答案，同时点击问题内容前方的红包按钮支付更少红包金额即可任性看答案。</p>
			<p>2、如果没有您需要的，您可以继续下一步完善红包资料。</p>
			<h3>此阶段加分规则：</h3>
			<p>1、发红包获得等值[慷慨度]，如发100元红包即可获得100分[慷慨度]</p>
			<p>2、点赞/差评可获得[积极性]，如点赞/差评一次，获得1分[积极性]</p>
			<p>3、评论可获得[积极性]，如评论一次获得1分[积极性]</p>
			<p>4、积极举报可获得[积极性]，如您的举报一经查实，可获得1分[积极性]，如您的虚报毫无凭据，一经查实，将降低1分[靠谱值]，情况严重的将进入平台黑名单</p>
			<button @click='next' v-text='cont'></button>
		</div>
		<div class="hair_want" v-if='flag == true'>
			<div class="hair_title">
				<img src="../../../static/img/quan2.jpg" alt="" />
				<span>猜你想要知道</span>
			</div>
			<div class="hair_li">
				<dl>
					<dt>
						<img src="../../../static/img/tx.jpg" alt="" />
					</dt>
					<dd>
						<h4><span>狗达</span><img src="../../../static/img/dj.jpg" alt="" /><b>金主</b></h4>
						<p><span>私聊ta</span></p>
						<div class="hair_li_cont">
							<li class="li_left"><img src="../../../static/img/hair.jpg" alt="" /></li>
							<li class="li_right">
								<h5>分享UI设计五年工作经验</h5>
								<p>发布时间：01-01 12:59:27</p>
								<p class="detail">毕业一年后，在这一行摸爬滚打，总找不到突破...<span class="span">查看详情</span></p>
								<p class="btn_color">
									<img src="../../../static/img/ding.png" alt="" />
									<img src="../../../static/img/di.png" alt="" />
									<button>评论</button>
									<button class="jubao">举报</button>
								</p>
							</li>
						</div>
					</dd>
				</dl>
			</div>
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
						<h4>狗达<span>发布时间：01-01 12:59:27</span></h4>
						<p class="detail">毕业一年后，在这一行摸爬滚打，总找不到突破...<span class="span">查看详情</span></p>
						<p class="btn_color">
							<img src="../../../static/img/ding.png" alt="" />
							<img src="../../../static/img/di.png" alt="" />
							<button>评论</button>
							<button class="jubao">举报</button>
						</p>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../../static/img/tx.jpg" alt="" />
					</dt>
					<dd>
						<h4>狗达<span>发布时间：01-01 12:59:27</span></h4>
						<p class="detail">毕业一年后，在这一行摸爬滚打，总找不到突破...<span class="span">查看详情</span></p>
						<p class="btn_color">
							<img src="/static/img/ding.png" alt="" />
							<img src="/static/img/di.png" alt="" />
							<button>评论</button>
							<button class="jubao">举报</button>
						</p>
					</dd>
				</dl>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
  data() {
    return {
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
      flag: false,
      cont: "下一步"
    };
  },
  methods: {
    toggleTabs(name, ind) {
      this.num = ind;
    },
    next() {
      if (this.cont == "下一步") {
        this.flag = true;
        this.cont = "继续下一步";
      } else if(this.cont == "继续下一步"){
      	this.$router.push({path:'/nextHair'})
      }
    }
  }
};
</script>

<style lang='less'>
.hair_wrapper {
  /*width: 100%;*/
  height: auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding-top: 20px;
  .hair_title {
    width: 100%;
    height: 20px;
    margin-top: 5px;
    display: flex;
    padding-left: 25px;
    box-sizing: border-box;
    img {
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-top: 5px;
    }
    span {
      margin-left: 55px;
      color: #0454ff;
      font-size: 18px;
    }
    input {
      width: 45%;
      border: none;
      height: 20px;
      border: 1px solid #dbdce0;
      margin-left: 13px;
    }
    b {
      font-size: 16px;
      color: #ff3238;
      margin-left: 10px;
      font-weight: 400;
    }
  }
  .hair_ms {
    width: 100%;
    text-align: center;
    color: #929395;
    font-size: 16px;
  }
  .hair_cont {
    width: 84% !important;
    margin: 0 8% 0 8%;
    background: #d2dfff;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px 28px;
    margin-bottom: 20px;
    h2 {
      font-size: 18px;
      font-weight: 400;
      color: #4774c9;
      line-height: 40px;
      text-align: left;
      margin: 0;
    }
    p {
      line-height: 26px;
      font-size: 16px;
      margin: 0;
      color: #a3a9bf;
      text-align: left;
    }
    h3 {
      color: #f9172f;
      font-size: 18px;
      font-weight: 400;
      line-height: 40px;
      text-align: left;
      margin: 0;
    }
    button {
      display: block;
      width: 36%;
      height: 40px;
      border-radius: 6px;
      background: #3471ff;
      color: #fff;
      border: none;
      margin: 20px auto;
      cursor: pointer;
    }
  }
  .hair_want {
    width: 100%;
    height: auto;
    .hair_title {
      width: auto;
      height: 30px;
      margin-top: 35px;
      display: flex;
      /*margin-left:25px;*/
      box-sizing: border-box;
      img {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-top: 6px;
      }
      span {
        margin-left: 18px;
        color: #f7c238;
        font-size: 18px;
      }
    }
    .hair_li {
      width: 100%;
      height: auto;
      padding-left: 63px;
      box-sizing: border-box;
      dl {
        width: 100%;
        height: auto;
        display: flex;
        dt {
          flex: 2;
          height: auto;
          img {
            width: 100%;
            height: auto;
          }
        }
        dd {
          flex: 8;
          display: flex;
          margin-left: 20px;
          flex-direction: column;
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
            b {
              font-size: 15px;
              color: #ff7f3a;
              margin-left: 5px;
            }
          }
          p {
            margin: 0;
            text-align: left;
            span {
              font-size: 14px;
              color: #fff;
              padding: 3px 35px;
              background: #fec22e;
              border-radius: 20px;
            }
          }
          .hair_li_cont {
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 5px;
            .li_left {
              flex: 1.3;
              img {
                width: 80%;
                height: auto;
                margin-top: 10px;
              }
            }
            .li_right {
              flex: 8.7;
              h5 {
                margin: 0;
                text-align: left;
                line-height: 22px;
                margin-left: 10px;
                color: #323335;
              }
              p {
                line-height: 20px;
                font-size: 14px;
                color: #a8a9ab;
                margin-left: 10px;
              }
              p.detail {
                margin-left: 10px;
                height: 30px;
                line-height: 30px;
                background: #ededed;
                color: #a8a9ab;
                box-sizing: border-box;
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
              	padding-right: 30px;
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
    .tabs {
      width: auto;
      margin-left: 63px;
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
      padding-left: 63px;
      box-sizing: border-box;
      dl {
        display: flex;
        width: 100%;
        height: auto;
        box-sizing: border-box;
        dt {
          flex: 1.4;
          img {
            width: 100%;
            height: auto;
          }
        }
        dd {
          flex: 8.6;
          margin-left: 20px;
          box-sizing: border-box;
          h4 {
            margin: 0;
            text-align: left;
            color: #353638;
            font-size: 20px;
            span {
              color: #a2a3a7;
              font-size: 16px;
              font-weight: 400;
              margin-left: 10px;
            }
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
</style>