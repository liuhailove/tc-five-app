<template>
  <div>
    <div v-if="!isShowLoading">
      <!-- 轮播图 -->
      <ad-carousel :advertList="advertList"/>

      <!-- 分类导航 -->
      <category-nav :categoryList="categoryList"/>

      <!-- 秒杀专区 -->
      <spike :seckillGoodsList="seckillGoodsList"/>

      <hot :hotGoodsList="hotGoodsList"/>

      <!-- 回到顶部按钮 -->
      <v-top/>
    </div>
    <!-- 数据加载提示gif -->
    <loading :show="isShowLoading"/>
  </div>
</template>
<script>
import {advertList} from '@/api/home'
import {categoryList} from '@/api/category'
import {goodsList} from '@/api/goods'

import loading from '@/components/loading/LoadingGif.vue';
import AdCarousel from './components/AdCarousel/Index.vue';
import CategoryNav from './components/CategoryNav/Index.vue';
import Spike from './components/Seckill/Index.vue';
import Hot from './components/Hot/Index.vue';


export default {
  created() {
    this._initData()
  },
  data() {
    return {
      isShowLoading: false,  // 是否加载动画
      advertList: [], // 广告轮播图
      categoryList: [], // 商品分类
      seckillGoodsList: {},   // 秒杀商品
      hotGoodsList: [],
    }
  },
  components: {
    loading,
    AdCarousel,
    CategoryNav,
    Spike,
    Hot,
  },
  methods: {
    _initData() {

      // 广告轮播
      let params = {
        limit: 5, // 广告条数
      }

      advertList(params).then(response => {
        //this.advertList = response.data
        var data = [{
          "pic_url": "src/assets/images/ali_pay.png",
          "name": "ali_pay",
        },
          {
            "pic_url": "src/assets/images/order_no_data.png",
            "name": "order_no_data",
          },
          {
            "pic_url": "src/assets/images/payment_success.png",
            "name": "payment_success",
          }]

        this.advertList = data
      })

      params = {
        limit: 10, // 分类条数
        level: 1, //分类级别
      }

      categoryList(params).then(response => {
        //this.categoryList = response.data


        var data = [
          {
            "icon_url": "src/assets/images/order_no_data.png",
            "name": "order_no_data",
          },
          {
            "icon_url": "src/assets/images/payment_success.png",
            "name": "payment_success",
          },
          {
            "icon_url": "src/assets/images/payment_success.png",
            "name": "payment_success",
          },
          {
            "icon_url": "src/assets/images/payment_success.png",
            "name": "女装",
          },
          {
            "icon_url": "src/assets/images/payment_success.png",
            "name": "男装",
          },
        ]

        this.categoryList = data
      })

      goodsList().then(response => {
        this.hotGoodsList = response.data;
        var data = [
          // {
          //   "id": "1",
          //   "retail_price": "100",
          //   "counter_price": "101",
          //   "pic_url":"",
          //   "name":"goods1",
          //   "description":"goods1",
          // },
          // {
          //   "id": "2",
          //   "retail_price": "200",
          //   "counter_price": "202",
          //   "pic_url":"",
          //   "name":"goods2",
          //   "description":"goods2",
          // },
        ]
        //this.hotGoodsList = data;
      })

      goodsList().then(response => {
        this.seckillGoodsList = response.data
        var data = [
          {
            "id": "1",
            "retail_price": "100",
            "counter_price": "500",
            "pic_url":"src/assets/images/order_no_data.png",
            "name":"goods1",
            "description":"goods1",
          },
          {
            "id": "2",
            "retail_price": "200",
            "counter_price": "1000",
            "pic_url":"src/assets/images/trumpet.png",
            "name":"goods2",
            "description":"goods2",
          },
          {
            "id": "3",
            "retail_price": "300",
            "counter_price": "3000",
            "pic_url":"src/assets/images/trumpet.png",
            "name":"goods3",
            "description":"goods3",
          },
        ]
        this.seckillGoodsList =data

      })

      this.isShowLoading = false

    }
  }
}
</script>