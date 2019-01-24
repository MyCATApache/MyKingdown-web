<template>
	<div class="imking_footer">
		<div class="footer_lt">
			<h6><img src="../../../static/img/foot.jpg" alt="" /></h6>
			<p>如果要找一个词，包含对美好的所有期待，那就是【靠谱】</p>
			<p>让我们开启红包之旅，一起来积累我们的【靠谱度】</p>
			<p>搭建我们的社交网络</p>
		</div>
		<div class="footer_rt">
			<ul>
				<li>首页</li>
				<li>我要创业</li>
				<li>红包悬赏</li>
				<li>众包项目</li>
				<li>精准招聘</li>
				<li>黄埔教学</li>
				<li>开源项目</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style lang='less'>
.imking_footer {
  width: 100%;
  height: 300px;
  background: #1d325d;
  padding: 0 15%;
  box-sizing: border-box;
  display: flex;
  .footer_lt {
    flex: 4;
    h6 {
      width: auto;
      text-align: left;
      margin: 0;
      margin-top: 50px;
      margin-bottom: 20px;
      img {
        width: 50%;
        height: auto;
      }
    }
    p {
      margin: 0;
      color: #426ce2;
      line-height: 34px;
      font-size: 14px;
      text-align: left;
    }
  }
  .footer_rt {
    flex: 6;
    ul {
      width: 100%;
      height: auto;
      display: flex;
      margin-top: 110px;
      box-sizing: border-box;
      margin-left: 0;
      padding: 0;
      li {
        color: #fff;
        flex: 1;
        line-height: 60px;
        margin: 0;
      }
    }
  }
}
</style>