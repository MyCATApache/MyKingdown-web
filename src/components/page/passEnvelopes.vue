<template>
	<div class="pass_wrapper">
        <div class="pass_submit_info">
          <img src="../../../static/img/submit_application.gif" alt="">
          <span>您还未给大虾们打赏红包，快去看看吧 >></span>
        </div>
        <ul class="pass_tabs">
            <li 
                v-for='(item,index) in isOpentabs'
                :key="index"
                :class="{tabActive:index == num}"
                @click='toggleTabs(item.name,index)'
	            ><span>{{item.name}}</span></li>
        </ul>
        <div class="pass_textarea">
          <div class="pass_text">
          注：大虾提交申请之后1天内金主未回应，大虾可以主动联系金主了解情况，如果矛盾不好调节，可向平台投诉，若红包在5天内没有确定接包大虾人选，红包主动开放
          </div> 
        </div>
        <div class="pass_tabsCont">
            <ul class="pass_one_tabs" v-show="num === 2">
                    <li @click='toogleOneTabs(0)' :class="{activeIndex:0 === oneNum}">无人抢包</li>
                    <li @click='toogleOneTabs(1)' :class="{activeIndex:1 === oneNum}">
                      <el-dropdown>
                        <el-button>
                          有人抢包<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>全部</el-dropdown-item>
                          <el-dropdown-item>已打赏</el-dropdown-item>
                          <el-dropdown-item>未打赏</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </li>
            </ul>
            <div class="pass_one_Cont">
                <div v-for="item in data" :key="item.id">
                    <Onetabs :data="item" type="redenvelope"></Onetabs> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
      isOpentabs: [
        {
          name: "全部"
        },
        {
          name: "未开放"
        },
        {
          name: "已开放"
        }
      ],
      oneNum: 0,
      isOnetabs: [{ name: "无人抢包" }, { name: "有人抢包" }],
      newData: []
    };
  },
  components: {
    Onetabs
  },
  mounted() {
    this.data = AllData;
  },
  methods: {
    toggleTabs(name, ind) {
      this.num = ind;
      if (this.num === 0) {
        this.$set(this, "data", AllData);
      } else if (this.num === 1) {
        this.$set(this, "data", noOpenData);
      } else if (this.num === 2) {
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
          if (!item.isOne && item.isOpen) {
            newData.push(item);
          }
        });
      } else if (ind === 1) {
        copyData.forEach(item => {
          if (item.isOne && item.isOpen) {
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
.pass_wrapper {
  width: 100%;
  padding: 0 65px;
  height: auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding-top: 20px;
  .pass_submit_info {
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
  .pass_tabs {
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
  .pass_textarea {
    border: 1px dashed #4173e6;
    color: #91a1c2;
    border-radius: 15px;
    text-align: left;
    line-height: 25px;
    .pass_text {
      padding: 20px 15px;
    }
  }
  .pass_tabsCont {
    width: 100%;
    height: auto;
    .pass_one_tabs {
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