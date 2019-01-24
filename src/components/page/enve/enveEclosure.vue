<template>
	<div class="enveEnclosure">
		<h2>众筹附件<span>非必填</span></h2>
		<div class="img_list">
			<el-upload
				class='upload_img'
			  action="https://jsonplaceholder.typicode.com/posts/"
			  list-type="picture-card"
			  :on-preview="handlePictureCardPreview"
			  :on-remove="handleRemove">
			  <i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog :visible.sync="dialogVisible">
			  <img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
		</div>
		<p class="pp">上传附件有助于您提高问题完善性</p>
		<div class="btn">
			<button class="prev_btn" @click='prevBtn'>上一步</button>
			<button class="next_btn" @click='nextBtn'>下一步</button>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    prevBtn() {
      this.$router.push({ path: "/nextEnve" });
    },
    nextBtn() {
      this.$router.push({ path: "/enveLable" });
    }
  }
};
</script>

<style lang='less'>
.enveEnclosure {
  height: auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding-top: 20px;
  padding-left: 83px;
  box-sizing: border-box;
  h2 {
    width: 100%;
    text-align: left;
    font-size: 18px;
    color: #2c2d2f;
    font-weight: 400;
    span {
      font-size: 14px;
      color: #ff180b;
      margin-left: 10px;
    }
  }
  div.img_list {
    width: 100%;
    height: auto;
    display: flex;
    .upload_img {
      // width: 25%;
      height: auto;
    }
  }
  p.pp {
    line-height: 30px;
    text-align: left;
    color: #ff180b;
  }
  div.btn {
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
</style>