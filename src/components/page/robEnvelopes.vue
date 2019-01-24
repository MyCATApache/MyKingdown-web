<template>
	<div class='hair_wrapper'>
		<div class="hair_title">
			<input type="text" placeholder="请输入关键字(全文检索)" />
			<i class="el-icon-search"></i>
		</div>
		<div class="hair_ms">
			<p><i class="el-icon-bell"></i>乱抢红包有风险，请慎重！</p>
		</div>
		<div class="hair_cont">
			<h2>抢红包之前请认真阅读如下规则：</h2>
			<p>抢红包规则></p>
			<p>提问规则></p>
			<p>评论规则></p>
			<p>此阶段加分规则></p>
		</div>
		<div class="hair_want">
			<div class="hair_li" v-for='(item,index) in list'>
				<dl>
					<dt>
						<img :src="item.url" alt="" />
					</dt>
					<dd>
						<h4><span>{{item.name}}</span><img :src="item.dengji" alt="" /></h4>
						<div class="hair_li_cont">
							<li class="li_left">
								<img src="../../../static/img/hair.png" alt="" />
								<b>{{item.jine}}</b>
							</li>
							<li class="li_right">
								<h5 @click='detail(item)'>{{item.biaoti}}</h5>
								<p>发布时间：{{item.time}}</p>
								<p class="btn_color">
									<span>回答({{item.huida}})</span>
									<span>提问({{item.tiwen}})</span>
									<span>评论({{item.pingl}})</span>
								</p>
							</li>
						</div>
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
      list:[
      {
      	url:require('../../../static/img/tx.jpg'),
      	name:'狗达',
      	dengji:'../../../static/img/dj.jpg',
      	biaoti:'分享UI设计五年工作经验',
      	time:'01-01 12:59:27',
      	huida:'3',
      	tiwen:'4',
      	pingl:'5',
      	jine:'300￥'
      },{
      	url:require('../../../static/img/tx.jpg'),
      	name:'狗达',
      	dengji:require('../../../static/img/dj.jpg'),
      	biaoti:'分享UI设计五年工作经验',
      	time:'01-01 12:59:27',
      	huida:'0',
      	tiwen:'5',
      	pingl:'13',
      	jine:'500￥'
      },{
      	url:require('../../../static/img/tx.jpg'),
      	name:'狗达',
      	dengji:require('../../../static/img/dj.jpg'),
      	biaoti:'分享UI设计五年工作经验',
      	time:'01-01 12:59:27',
      	huida:'8',
      	tiwen:'14',
      	pingl:'45',
      	jine:'800￥'
      },{
      	url:require('../../../static/img/tx.jpg'),
      	name:'狗达',
      	dengji:require('../../../static/img/dj.jpg'),
      	biaoti:'分享UI设计五年工作经验',
      	time:'01-01 12:59:27',
      	huida:'13',
      	tiwen:'34',
      	pingl:'25',
      	jine:'400￥'
      }
      ],
    };
  },
  methods: {
    detail(cont){
    	this.$router.push({
          path: "/robDetail"
        });
        localStorage.setItem('robDetail',JSON.stringify(cont))
    }
  }
};
</script>

<style lang='less' scoped="scoped">
.hair_wrapper {
  /*width: 100%;*/
  height: auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding-top: 20px;
  .hair_title {
    width: 100%;
    height: 30px;
    margin-top: 5px;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
      position: relative;
    
    input {
      width: 35%;
      border: none;
      height: 30px;
      border: 1px solid #A4A5A7;
      margin-left: 13px;
      border-radius: 20px;
      padding-left: 10px;
      box-sizing: border-box;
      color: #A4A5A7;
    }
   	i {
      position: absolute;
      right: 10px;
      top: 7px;
    }
  }
  .hair_ms {
    width: 100%;
    color: #929395;
    font-size: 16px;
    p{
      color: #FD0200;
      font-size: 18px;
      padding-left:31%;
      text-align: left;
      i{
      	margin-right: 10px;
      }
    	
    }
  }
  .hair_cont {
    width:100%;
    margin-bottom: 20px;
    h2 {
      font-size: 16px;
      font-weight: 400;
      color:#98999D;
      line-height: 40px;
      text-align: center;
      margin: 0;
    }
    p {
      line-height: 26px;
      font-size: 16px;
      margin: 0;
      color:#4A7BD8;
      text-align: left;
      padding-left: 37%;
    }
    
  }
  .hair_want {
    width: 100%;
    height: auto;
    margin-top: 70px;
    padding-left: 63px;
    box-sizing: border-box;
    .hair_li {
      width: 100%;
      height: auto;
      margin-bottom:30px;
      border-bottom:1px dashed #ccc;
      
      dl {
        width: 100%;
        height: auto;
        display: flex;
        margin-bottom: 28px;
        dt {
          flex: 2;
          height: auto;
          img {
            width: 100%;
            height: auto;
            position: relative;
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
          }
          p {
            margin: 0;
            text-align: left;
            span {
              font-size: 14px;
              color: #fff;
              padding: 3px 35px;
              /*background: #fec22e;*/
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
              position: relative;
              img {
                width: 80%;
                height: auto;
                margin-top: 10px;
              }
               b{
          		position: absolute;
	          	top: 16px;
	          	left: 2px;
	          	width: 100%;
	          	text-align: center;
	          	font-size: 14px;
	          	color:#FE342A ;
	          }
            }
            .li_right {
              flex: 8.7;
              h5 {
                margin: 0;
                text-align: left;
                line-height: 32px;
                font-size: 16px;
                color: #323335;
                margin-top: 15px;
                cursor: pointer;
              }
              p{
              	color:#97989C ;
              }
              p.btn_color{
              	width: 100%;
              	height: auto;
              	display: flex;
              	justify-content: flex-end;
              	box-sizing: border-box;
              	padding-right: 30px;
              	margin-top: 20px;
              	span{
              		color:#FFBB21;
              		padding: 3px 8px;
              		cursor: pointer;
              	}
              }
            }
          }
        }
      }
      &:last-child{
      	border-bottom: none;
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
</style>