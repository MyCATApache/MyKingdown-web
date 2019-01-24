<template>
	<div class="imking_sideBar">
		<div class="side_lt" v-for='(item,index) in items' :key='index'>
			<router-link  tag="li" :to="item.path" :class='{"liActive":ind == index}' @click.native='getInd(index)'>
			  {{item.name}}
        <span class="item_num">5</span>
			</router-link>
		</div>
		
	</div>
</template>

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          name: "发红包",
          path: "/hairEnvelopes"
        },
        {
          name: "抢红包",
          path: "/robEnvelopes"
        },
        {
          name: "我发的红包",
          path: "/passEnvelopes"
        },
        {
          name: "我参与的红包",
          path: "/partEnvelopes"
        },
        {
          name: "红包众筹",
          path: "/enveCrowd"
        },
        {
          name: "历史红包",
          path: "/historyEnvelopes"
        }
      ],
      ind: 0
    };
  },
  created() {
    var name = this.$router.history.current.fullPath;
    this.items.forEach((item, index) => {
      if (name == item.path) {
        this.ind = index;
      }
    });
  },
  methods: {
    getInd(index) {
      this.ind = index;
    }
  }
};
</script>

<style lang='less'>
.imking_sideBar {
  width: 18%;
  background: #fff;
  padding-top: 20px;
  border-radius: 5px 0 0 5px;
  .side_lt {
    width: 100%;
    height: 38px;
    line-height: 38px;
    margin-bottom: 20px;
    li {
      padding-left: 24px;
      text-align: left;
      color: #666867;
      border-radius: 4px;
      box-sizing: border-box;
      position: relative;
    }
    li:hover {
      cursor: pointer;
    }
    li.liActive {
      background: #3e6fe8;
      color: #fff;
    }
    .item_num {
      display: inline-block;
      width: 20px;
      height: 20px;
      color: #3e6fe8;
      background: yellow;
      border: 1px solid #3e6fe8;
      border-radius: 50%;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      position: absolute;
      right: 8px;
      top: 8px;
    }
  }
}
</style>