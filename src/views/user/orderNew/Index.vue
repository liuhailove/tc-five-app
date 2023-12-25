<template>
  <div class="order">
    <van-nav-bar
        title="我的订单"
        :fixed="true"
        left-arrow
        @click-left="onClickLeft"/>
    <van-tabs class="order-category" v-model="activeName" @change="onClickOrder" sticky>
      <van-tab title="全部" :name="0">
        <OrderList :orderListValue="orderList"></OrderList>
      </van-tab>
      <van-tab title="待付款" :name="1">
        <OrderList :orderListValue="orderList"></OrderList>
      </van-tab>
      <van-tab title="待发货" :name="2">
        <OrderList :orderListValue="orderList"></OrderList>
      </van-tab>
      <van-tab title="待收货" :name="3">
        <OrderList :orderListValue="orderList"></OrderList>
      </van-tab>
      <van-tab title="待评价" :name="4">
        <OrderList :orderListValue="orderList"></OrderList>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>

import OrderList from "./components/OrderList.vue";
import {getOrderList} from '@/api/order'

export default {
  components: {
    OrderList,
  },
  setup() {
    const orderList = ref([]);
    const activeName = ref(0);

    const router = useRouter();


    onMounted(() => {
      // 在下次 DOM 更新循环结束后执行回调
      nextTick(() => {
        // 确保子组件已经获取到修改后的属性值
        initData()
      });
    })

    const initData = () => {
      getOrderLists()
    }

    const onClickOrder = (index) => {
      activeName.value=index
      getOrderLists()
    }
    const getOrderLists = () => {
      getOrderList().then(response => {
        if (response.data && response.data.length > 0) {
          if (activeName.value === 0) {
            orderList.value = response.data
          } else {
            orderList.value = response.data.filter(item => item.status === activeName.value)
          }
        }
      })
    }

    const onClickLeft=()=> {
      router.back();
    }

    return {
      orderList,
      activeName,
      getOrderLists,
      onClickOrder,
      onClickLeft
    };
  }
};


</script>

<style lang="less" scoped>

.order {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 2000;
  padding-top: 44px;
  overflow: auto;
}
</style>