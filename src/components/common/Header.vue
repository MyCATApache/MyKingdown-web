<template>
	<div class="imking_header">
		<div class="header_zx">
			<div class="header_zx_tl">
				<img src="../../../static/img/voice.jpg" class="voice" alt="" />
				<span>Mycat 全方位为您提供服务</span>
			</div>
			<div class="header_zx_tr">
				<img src="../../../static/img/news.jpg" class="news" alt="" /><span>消息中心</span>
				<img src="../../../static/img/mine.jpg" alt="" class="mine" /><span @click="toPerson()">个人中心</span>
			</div>
		</div>
		<div class="heder_myCat">
			<div class="mycat_lt">
				<img src="../../../static/img/logo.jpg" alt="" />
			</div>
			<div class="mycat_rt">
				<li v-for='(item,index) in jieDuan' :key="index">
					<dl>
						<dt><img src="../../../static/img/aa.jpg" alt="" :class='{"active":ind == index}' /></dt>
						<dd><span>{{item}}</span></dd>
					</dl>
					<p></p>
				</li>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      jieDuan: [
        "萌新",
        "菜鸟",
        "才俊",
        "老鸟",
        "大侠",
        "干将",
        "专家",
        "大牛",
        "教主"
      ],
      ind: 0
    };
  },
  methods: {
    toPerson() {
      this.$router.push({ path: "/person" });
    }
  }
};
</script>

<style lang='less'>
.imking_header {
  width: 100%;
  height: 98px;
  .header_zx {
    width: 100%;
    padding: 0 15%;
    height: 30px;
    box-sizing: border-box;
    background: #1d325d;
    display: flex;
    justify-content: space-between;
    .header_zx_tl {
      display: flex;
      img.voice {
        width: auto;
        height: 30px;
        margin-right: 16px;
      }
      span {
        height: 30px;
        line-height: 30px;
        color: #4f72e6;
        font-size: 12px;
      }
    }
    .header_zx_tr {
      display: flex;
      img.news {
        width: auto;
        height: 30px;
        margin-right: 14px;
      }
      img.mine {
        width: auto;
        height: 30px;
        margin-right: 14px;
        margin-left: 30px;
      }
      span {
        height: 30px;
        line-height: 30px;
        color: #4f72e6;
        font-size: 12px;
      }
      span:hover {
        cursor: pointer;
      }
    }
  }
  .heder_myCat {
    width: 100%;
    height: 68px;
    padding: 0 15%;
    background: #4072e5;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .mycat_lt {
      img {
        width: 170px;
        height: auto;
        margin-top: 10px;
      }
    }
    .mycat_rt {
      flex: 1;
      margin-left: 78px;
      display: flex;
      li {
        width: 12%;
        display: flex;
        dl {
          width: 32px;
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          dt {
            width: 32px;
            height: 32px;
            /*border-radius: 50%;*/
            img {
              display: block;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              margin: 0;
            }
            img.active {
              display: block;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              border: 2px solid #ffa609;
              transform: scale(1.1);
              /*border-image: -webkit-linear-gradient(#FFA609,#F9CD46) 30 30;
								border-image: -moz-linear-gradient(#FFA609, #F9CD46) 30 30;
								border-image: -o-linear-gradient(#FFA609, #F9CD46) 30 30;
								border-image: linear-gradient(#FFA609,#F9CD46) 30 30;*/
              &:before {
                content: "";
                display: block;
                width: 42px;
                height: 21px;
                margin-top: 10px;
                padding: 10px;
                padding-bottom: 0;
                box-sizing: border-box;
                border-top-left-radius: 50%;
                border-top-right-radius: 50%;
                background: -webkit-gradient(
                    linear,
                    left top,
                    right top,
                    color-stop(0, #fff),
                    color-stop(1, #fff)
                  ),
                  -webkit-gradient(linear, left top, right top, color-stop(0, #077df8), color-stop(1, #74baff));
                background-clip: content-box, padding-box;
              }
              &:after {
                content: "";
                display: block;
                width: 42px;
                height: 21px;
                padding: 10px;
                padding-top: 0;
                box-sizing: border-box;
                border-bottom-left-radius: 50%;
                border-bottom-right-radius: 50%;
                background: -webkit-gradient(
                    linear,
                    left top,
                    right top,
                    color-stop(0, #fff),
                    color-stop(1, #fff)
                  ),
                  -webkit-gradient(linear, left top, right top, color-stop(0, #fff), color-stop(1, #74baff));
                background-clip: content-box, padding-box;
              }
            }
          }
          dd {
            width: 100%;
            font-size: 14px;
            margin-top: 3px;
            span {
              position: relative;
              left: -40px;
              color: #103760;
            }
          }
        }
        p {
          flex: 1;
          height: 3px;
          margin-top: 26px;
          background: #dbd1dc;
        }
        &:nth-child(1) dl dd span {
          color: #eedd35;
        }
        &:last-child p {
          display: none;
        }
      }
    }
  }
}
</style>