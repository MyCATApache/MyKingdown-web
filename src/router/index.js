import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/hairEnvelopes"
    },
    {
      path: "/index",
      component: resolve =>
        require(["../components/common/topHome.vue"], resolve),
      meta: {
        title: "首页"
      },
      children: [
        {
          path: "/hairEnvelopes",
          component: resolve =>
            require(["../components/page/hairEnvelopes.vue"], resolve),
          meta: { title: "发红包" }
        },
        {
          path: "/nextHair",
          component: resolve =>
            require(["../components/page/nextHair.vue"], resolve),
          meta: { title: "红包内容" }
        },
        {
          path: "/enclosure",
          component: resolve =>
            require(["../components/page/enclosure.vue"], resolve),
          meta: { title: "红包附件" }
        },
        {
          path: "/redlable",
          component: resolve =>
            require(["../components/page/redlable.vue"], resolve),
          meta: { title: "红包标签" }
        },
        {
          path: "/redMoney",
          component: resolve =>
            require(["../components/page/redMoney.vue"], resolve),
          meta: { title: "红包金额" }
        },
        {
          path: "/redExplain",
          component: resolve =>
            require(["../components/page/redExplain.vue"], resolve),
          meta: { title: "红包说明" }
        },
        {
          path: "/robEnvelopes",
          component: resolve =>
            require(["../components/page/robEnvelopes.vue"], resolve),
          meta: { title: "抢红包" }
        },
        {
          path: "/passEnvelopes",
          component: resolve =>
            require(["../components/page/passEnvelopes.vue"], resolve),
          meta: { title: "已发红包" }
        },
        {
          path: "/partEnvelopes",
          component: resolve =>
            require(["../components/page/partEnvelopes.vue"], resolve),
          meta: { title: "参与红包" }
        },
        {
          path: "/enveCrowd",
          component: resolve =>
            require(["../components/page/enveCrowd.vue"], resolve),
          meta: { title: "红包众筹" }
        },
        {
          path: "/nextEnve",
          component: resolve =>
            require(["../components/page/enve/nextEnve.vue"], resolve),
          meta: { title: "众筹内容" }
        },
        {
          path: "/enveEclosure",
          component: resolve =>
            require(["../components/page/enve/enveEclosure.vue"], resolve),
          meta: { title: "众筹附件" }
        },
        {
          path: "/enveLable",
          component: resolve =>
            require(["../components/page/enve/enveLable.vue"], resolve),
          meta: { title: "众筹标签" }
        },
        {
          path: "/enveAmount",
          component: resolve =>
            require(["../components/page/enve/enveAmount.vue"], resolve),
          meta: { title: "发起金额" }
        },
        {
          path: "/historyEnvelopes",
          component: resolve =>
            require(["../components/page/historyEnvelopes.vue"], resolve),
          meta: { title: "历史红包" }
        }
      ]
    },
    {
      path: "/passDetail",
      component: resolve =>
        require(["../components/common/passDetail.vue"], resolve),
      meta: { title: "我发的红包详情页" }
    },
    {
      path: "/robDetail",
      component: resolve =>
        require(["../components/common/robDetail.vue"], resolve),
      meta: { title: "抢红包详情页" }
    },
    {
      path: "/person",
      component: resolve =>
        require(["../components/page/personEnvelopes.vue"], resolve),
      meta: { title: "个人中心" }
    }
  ]
});
