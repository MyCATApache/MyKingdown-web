<template>
	<div class="wrapper">
        <v-head></v-head>
        <!-- 第一版不需要 -->
		<!-- <div class="pass_envelopes_search" v-if="isHiddenSearch">
			<div class="search_input">
				<input type="search" placeholder="输入关键词搜索红包">
			</div>
		</div> -->
        <div class="content">
        	<v-sidebar v-show="isHiddenMenu"></v-sidebar>
	        <!--<div class="content-box">-->
	            <!--<div class="cont_rig">
	                <transition name="move" mode="out-in">-->
	                    <!--<keep-alive :include="tagsList">-->
	                        <router-view class='content-box'></router-view>
	                    <!--</keep-alive>
	                </transition>-->
	            <!--</div>-->
	        <!--</div>-->
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";
import vFooter from "./Footer.vue";
import bus from "./bus";
export default {
  data() {
    return {
      tagsList: [],
      collapse: false,
      isHiddenSearch: true,
      isHiddenMenu: true
    };
  },
  components: {
    vHead,
    vSidebar,
    vFooter
  },
  created() {
    //          bus.$on('collapse', msg => {
    //              this.collapse = msg;
    //          })
    //
    //          // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    //          bus.$on('tags', msg => {
    //              let arr = [];
    //              for(let i = 0, len = msg.length; i < len; i ++){
    //                  msg[i].name && arr.push(msg[i].name);
    //              }
    //              this.tagsList = arr;
    //          })
  },
  watch: {
    $route(to, from) {
      if (to.path === "/passDetail") {
        this.isHiddenMenu = false;
        this.isHiddenSearch = false;
      } else {
        this.isHiddenMenu = true;
        this.isHiddenSearch = true;
      }
    }
  },
  mounted() {
    if (this.$router.history.current.path === "/passDetail") {
      this.isHiddenMenu = false;
    }
  }
};
</script>

<style>
.content {
  width: 100%;
  padding: 30px 15% 30px;
  box-sizing: border-box;
  display: flex;
  /* padding-top: 15px; */
  background: #f5f8ff;
}
.content .content-box {
  flex: 1;
}
.content .content-box div {
  /* width: 100%; */
  /* height: auto; */
}
.pass_envelopes_search {
  height: 80px;
  padding: 0 15% 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #f5f8ff;
}
.search_input {
  width: 300px;
  height: 30px;
  border: 1px solid #315beb;
  border-radius: 15px;
  text-align: left;
}
.search_input input::-webkit-input-placeholder {
  color: #315beb;
}
.search_input input {
  width: 260px;
  height: 100%;
  border-radius: 15px;
  border: none;
  background: none;
  text-indent: 15px;
  outline: none;
}
</style>