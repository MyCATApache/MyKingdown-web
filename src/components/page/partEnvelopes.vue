<template>
	<div class="part_wrapper">
        <div class="part_submit_info">
          <img src="../../../static/img/submit_application.gif" alt="">
          <span>请在倒计时结束前作出回应，否则红包重新分配，您的可靠度减1！</span>
        </div>
        <ul class="part_tabs">
            <li :class="{tabActive:0 == num}" @click='toggleTabs(0)'>
              <span>全部</span>
            </li>
            <li :class="{tabActive:1 == num}" @click='toggleTabs(1)' >
              <span>提交的申请</span>
            </li>
            <li :class="{tabActive:2 == num}" @click='toggleTabs(2)' >
              <span>抢的红包</span>
            </li>
            <li :class="{tabActive:3 == num}" @click='toggleTabs(3)' >
              <span>进行的互动</span>
            </li>
        </ul>
        <div class="part_textarea">
          <div class="part_text">
          注：大虾得到红包任务后1天内未回应金主，红包失效，红包自动更新，重新开放，此时大虾可靠度减1 大虾提交申请之后1天内金主未回应，大虾可以主动联系金主了解情况，如果矛盾不好调和，可向平台投诉
          </div> 
        </div>
        <div class="part_tabsCont">
            <ul class="part_one_tabs" v-show="num === 2">
                    <li @click='toogleOneTabs(0)' :class="{activeIndex:0 === oneNum}">全部</li>              
                    <li @click='toogleOneTabs(1)' :class="{activeIndex:1 === oneNum}">未回答</li>
                    <li @click='toogleOneTabs(2)' :class="{activeIndex:2 === oneNum}">金主请求确认红包金额</li>
                    <li @click='toogleOneTabs(3)' :class="{activeIndex:3 === oneNum}">金主已打赏</li>                    
            </ul>
            <div class="part_one_Cont">
                <div v-for="item in data" :key="item.id">
                    <!-- <Parttabs :data="item"></Parttabs>  -->
                    <Onetabs :data="item" type="participate"></Onetabs> 
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Parttabs from "../common/parttabs";
import Onetabs from "../common/Onetabs";

import axios from "axios";
import AllData from "../../../data/data.json";
import openData from "../../../data/openData.json";
import noOpenData from "../../../data/noOpenData.json";
export default {
  data() {
    return {
      data: null,
      activeIndex: 0,
      num: 0,
      oneNum: 0,
      isOnetabs: [{ name: "无人抢包" }, { name: "有人抢包" }],
      newData: []
    };
  },
  components: {
    // Parttabs
    Onetabs
  },
  mounted() {
    this.data = AllData;
  },
  methods: {
    toggleTabs(ind) {
      this.num = ind;
      if (this.num === 0) {
        this.$set(this, "data", AllData);
      } else if (this.num === 1) {
        this.$set(this, "data", openData);
      } else if (this.num === 2) {
        this.$set(this, "data", noOpenData);
      } else if (this.num === 3) {
        this.$set(this, "data", openData);
        this.isOne(this.oneNum);
      }
    },
    toogleOneTabs(ind) {
      this.oneNum = ind;
      this.isOne(ind);
    },
    isOne(ind) {
      var newData = [];
      const copyData = JSON.parse(JSON.stringify(openData));
      if (ind === 0) {
        copyData.forEach(item => {
          if (item.isOne) {
            newData.push(item);
          }
        });
      } else if (ind === 1) {
        copyData.forEach(item => {
          if (!item.isOne) {
            newData.push(item);
          }
        });
      } else if (ind === 2) {
        copyData.forEach(item => {
          if (!item.isOne) {
            newData.push(item);
          }
        });
      } else if (ind === 3) {
        copyData.forEach(item => {
          if (item.isOne) {
            newData.push(item);
          }
        });
      }
      this.$set(this, "data", newData);
    }
  }
};
</script>

<style lang="less">
.part_wrapper {
  width: 100%;
  padding: 0 65px;
  height: auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding-top: 20px;
  .part_submit_info {
    text-align: left;
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    span {
      color: #f75c5c;
    }
  }
  .part_tabs {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0;
    li {
      flex: 1;
      color: #2a2b2f;
      span {
        display: inline-block;
        padding: 3px 5px;
      }
    }
    li:hover {
      cursor: pointer;
    }
    .tabActive {
      color: #4671e1;
      span {
        border-bottom: 2px solid #4671e1;
      }
    }
  }
  .part_textarea {
    border: 1px dashed #4173e6;
    color: #91a1c2;
    border-radius: 15px;
    text-align: left;
    line-height: 25px;
    .part_text {
      padding: 20px 15px;
    }
  }
  .part_tabsCont {
    width: 100%;
    height: auto;
    .part_one_tabs {
      width: 100%;
      height: 40px;
      display: flex;
      padding: 0;
      border: 1px solid #9fa0bc;
      li:hover {
        cursor: pointer;
      }
      li {
        flex: 1;
        height: 40px;
        line-height: 40px;
        color: #a5b4c9;
        font-size: 12px;
        .el-dropdown {
          // width: 100%;
          height: 100%;
          .el-button {
            border: none;
            background: none;
          }
        }
      }
      .activeIndex {
        color: #fff;
        background: #3e6fe8;
        .el-dropdown {
          .el-button {
            span {
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>