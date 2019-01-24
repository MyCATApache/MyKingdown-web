<template>
	<div class="wrapper">
        <v-head></v-head>
        <div class="content">
        	<div class="person_wrapper">
                <div class="person_tx">
                    <img src="../../../static/img/aa.jpg" alt="">
                    <h3>谁是王者ID</h3>
                    <div class="position">架构师一枚</div>
                </div>
                <div class="person_info">
                    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                        <el-tab-pane label="王的综合评估" name="first">
                          <div class="comprehensive">
                            <div class="comprehensive_item">
                              <div class="theme">
                                个人特质:
                                <span>★★★★★</span>
                              </div>
                              <div class="cont">
                                <div>慷慨度：
                                  <span>★★★★★</span>
                                </div>
                                <div>可靠度：
                                  <span>★★★★★</span>
                                </div>
                                <div>信用度：
                                  <span>★★★★★</span>
                                </div>
                                <div>表达欲：
                                  <span>★★★★★</span>
                                </div>
                              </div>
                            </div>
                            <div class="comprehensive_item">
                              <div class="theme">
                                业务能力:
                                <span>★★★★★</span>
                              </div>
                              <div class="cont">
                                <div>理解力：
                                  <span>★★★★★</span>
                                </div>
                                <div>解决复杂问题的能力：
                                  <span>★★★★★</span>
                                </div>
                                <div>沟通协调力：
                                  <span>★★★★★</span>
                                </div>
                                <div>专业技术能力：
                                  <span>★★★★★</span>
                                </div>
                                <div>表达力：
                                  <span>★★★★★</span>
                                </div>
                              </div>
                            </div>
                            <div class="comprehensive_item">
                              <div class="theme">
                                工作特质:
                                <span>★★★★★</span>
                              </div>
                              <div class="cont">
                                <div>纪律性：
                                  <span>★★★★★</span>
                                </div>
                                <div>责任感：
                                  <span>★★★★★</span>
                                </div>
                                <div>协作性：
                                  <span>★★★★★</span>
                                </div>
                                <div>工作效率：
                                  <span>★★★★★</span>
                                </div>
                                <div>积极性：
                                  <span>★★★★★</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </el-tab-pane>
                        <el-tab-pane label="王的事迹" name="second">
                          <div class="deeds">
                            <ul>
                              <li><span>2011</span>年出版科幻类 技术书 <span>《狗大太空漫步》</span></li>
                              <li><span>2012年3月</span>加入My Kingdom开源鲜蘑菇，担任架构师一职</li>
                              <li><span>2013年</span>年出版科幻类 技术书 <span>《漫步》</span></li>
                              <li><span>2014年3月</span>加入My Kingdom开源鲜蘑菇，担任架构师一职，持续跟进3个月</li>
                              <li><span>2015年</span>年出版科幻类 技术书 <span>《太空漫步》</span></li>
                              <li><span>2014年3月</span>加入My Kingdom开源鲜蘑菇，担任架构师一职，持续跟进3个月，直到红包模块上线</li>
                              <li><span>2011</span>年出版科幻类 技术书 <span>《狗大太空漫步》</span></li>
                              <li><span>2012年3月</span>加入My Kingdom开源鲜蘑菇，担任架构师一职</li>
                              <li><span>2013年</span>年出版科幻类 技术书 <span>《漫步》</span></li>
                              <li><span>2014年3月</span>加入My Kingdom开源鲜蘑菇，担任架构师一职，持续跟进3个月</li>
                              <li><span>2015年</span>年出版科幻类 技术书 <span>《太空漫步》</span></li>
                              <li><span>2014年3月</span>加入My Kingdom开源鲜蘑菇，担任架构师一职，持续跟进3个月，直到红包模块上线</li>
                            </ul>
                          </div>
                        </el-tab-pane>
                        <el-tab-pane label="王的经历" name="third">
                         <div class="deeds">
                            <ul>
                              <li><span>2011</span>年出版科幻类 技术书 <span>《狗大太空漫步》</span></li>
                              <li><span>2012年3月</span>加入My Kingdom开源鲜蘑菇，担任架构师一职</li>
                              <li><span>2013年</span>年出版科幻类 技术书 <span>《漫步》</span></li>
                              <li><span>2014年3月</span>加入My Kingdom开源鲜蘑菇，担任架构师一职，持续跟进3个月</li>
                              <li><span>2015年</span>年出版科幻类 技术书 <span>《太空漫步》</span></li>
                              <li><span>2014年3月</span>加入My Kingdom开源鲜蘑菇，担任架构师一职，持续跟进3个月，直到红包模块上线</li>
                              <li><span>2011</span>年出版科幻类 技术书 <span>《狗大太空漫步》</span></li>
                              <li><span>2012年3月</span>加入My Kingdom开源鲜蘑菇，担任架构师一职</li>
                              <li><span>2013年</span>年出版科幻类 技术书 <span>《漫步》</span></li>
                              <li><span>2014年3月</span>加入My Kingdom开源鲜蘑菇，担任架构师一职，持续跟进3个月</li>
                              <li><span>2015年</span>年出版科幻类 技术书 <span>《太空漫步》</span></li>
                              <li><span>2014年3月</span>加入My Kingdom开源鲜蘑菇，担任架构师一职，持续跟进3个月，直到红包模块上线</li>
                            </ul>
                          </div>
                        </el-tab-pane>
                        <el-tab-pane label="王的账单" name="fourth">
                          <div class="bill">
                            <p>交易明细</p>
                            <div class="fourth_cont">
                                <p>
                                  <span class="balance">
                                    余额：00000元
                                    </span>
                                    <span class="recharge">
                                      充值
                                      </span>  
                                </p>   
                                <div class="transaction">
                                    <div class="transaction_type">
                                      <span>交易类型:</span>
                                        <el-dropdown size="mini" split-button type="primary">
                                          全部
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item>全部</el-dropdown-item>
                                                <el-dropdown-item>收入</el-dropdown-item>
                                                <el-dropdown-item>支出</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </div>
                                    <div class="transaction_time">
                                      <span>交易时间:</span>                                      
                                      <el-date-picker
                                        v-model="value6"
                                        type="daterange"
                                        size="mini"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                      </el-date-picker>
                                    </div>
                                    <div class="query">
                                      <span>查询</span>
                                      </div>
                                </div>
                                <div class="data_display">
                                   <el-table
                                    :data="data"
                                    style="width: 100%">
                                    <el-table-column
                                      prop="id"
                                      label="交易编号">
                                    </el-table-column>
                                    <el-table-column
                                      prop="QQ"
                                      label="交易类型">
                                    </el-table-column>
                                    <el-table-column
                                      prop="releasetime"
                                      label="交易时间"
                                      width="150">
                                    </el-table-column>
                                    <el-table-column
                                      prop="iphone"
                                      label="交易金额">
                                    </el-table-column>
                                    <el-table-column
                                      prop="QQ"
                                      label="金额">
                                    </el-table-column>
                                    <el-table-column
                                      prop="because"
                                      label="操作">
                                    </el-table-column>
                                  </el-table>
                                </div>
                            </div>
                          </div>
                        </el-tab-pane>
                        <el-tab-pane v-if="grade" label="平台运营" name="fifth">
                          <div class="operation_tabs">
                            <el-tabs v-model="operateActive" type="card" @tab-click="handleClick">
                              <el-tab-pane label="申诉申请" name="first"></el-tab-pane>
                              <el-tab-pane label="投诉申请" name="second"></el-tab-pane>
                              <el-tab-pane label="提交知识库申请" name="third"></el-tab-pane>
                            </el-tabs>
                          </div>
                          <div class="operation">
                            <el-table
                              :data="data"
                              style="width: 100%">
                              <el-table-column
                                prop="id"
                                label="编号">
                              </el-table-column>
                              <el-table-column
                                prop="name"
                                label="申诉人">
                              </el-table-column>
                              <el-table-column
                                prop="QQ"
                                label="QQ">
                              </el-table-column>
                              <el-table-column
                                prop="iphone"
                                label="手机">
                              </el-table-column>
                              <el-table-column
                                prop="releasetime"
                                label="申诉时间"
                                width="150">
                              </el-table-column>
                              <el-table-column
                                prop="because"
                                label="原因">
                              </el-table-column>
                              <el-table-column
                                prop="operation"
                                label="操作">
                              </el-table-column>
                            </el-table>
                          </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vHead from "../common/Header.vue";
import vFooter from "../common/Footer.vue";
import bus from "../common/bus";
import data from "../../../data/data.json";
export default {
  data() {
    return {
      activeName2: "fourth",
      operateActive: "first",
      grade: true,
      data: [],
      value6: ""
    };
  },
  components: {
    vHead,
    vFooter
  },
  created() {},
  watch: {},
  mounted() {
    data.forEach(item => {
      if (item.solve) {
        item["operation"] = "已解决";
      } else {
        item["operation"] = "等待解决";
      }
    });
    this.data = data;
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="less">
.content {
  width: 100%;
  padding: 40px 15% 40px;
  box-sizing: border-box;
  display: flex;
  /* padding-top: 15px; */
  background: #f5f8ff;
}
.person_wrapper {
  width: 100%;
  display: flex;
  padding: 20px;
  background: #fff;
  margin-top: 30px;
  .person_tx {
    flex: 1;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .position {
      color: #ffa076;
    }
  }
  .person_info {
    flex: 4;
    margin-left: 20px;
    .el-tabs {
      .el-tabs__nav {
        width: 100%;
        display: flex;
        justify-content: center;
        .el-tabs__item {
          flex: 1;
        }
        .is-active {
          background: #409eff;
          color: #fff;
        }
      }
      .comprehensive {
        .comprehensive_item {
          margin: 10px 0;
          border-bottom: 1px dashed #ccc;
          text-align: left;
          font-size: 14px;
          padding: 10px 0;
          .theme {
            line-height: 25px;
            font-size: 16px;
            // div {
            span {
              font-size: 20px;
              color: #df6706;
            }
            // }
          }
          .cont {
            display: flex;
            flex-wrap: wrap;
            line-height: 25px;
            & > div {
              width: 50%;
              span {
                font-size: 18px;
                color: #eec025;
              }
            }
          }
        }
      }
      .deeds {
        ul {
          margin: 0;
          padding: 0;
          li {
            text-align: left;
            font-size: 14px;
            line-height: 30px;
            span {
              color: #7292b8;
            }
          }
        }
      }
      .bill {
        .fourth_cont {
          text-align: left;
          .transaction {
            font-size: 14px;
            display: flex;
            align-items: center;
            .transaction_type {
              flex: 2;
            }
            .transaction_time {
              flex: 3;
              .el-date-editor {
                width: 260px;
              }
            }
            .query {
              flex: 0.8;
              text-align: right;
              span {
                font-size: 12px;
                color: #fff;
                padding: 5px 15px;
                border-radius: 5px;
                background: #409eff;
              }
              span:hover {
                cursor: pointer;
              }
            }
          }
          .data_display {
            margin-top: 20px;
          }
          p {
            display: flex;
            align-items: center;
            .balance {
              width: 30%;
            }
            .recharge {
              // flex: 4;
              font-size: 12px;
              color: #fff;
              padding: 3px 10px;
              border-radius: 5px;
              background: #409eff;
              margin-left: 20px;
            }
            .recharge:hover {
              cursor: pointer;
            }
          }
        }
      }
      .operation {
        .el-table__row {
          td:last-child {
            .cell {
              border-radius: 5px;
              color: #409eff;
              background: #dceef8;
              border: 2px solid #409eff;
            }
          }
        }
      }
      .operation_tabs {
        width: 50%;
      }
    }
  }
}
</style>