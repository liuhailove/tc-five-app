<template>
  <div class="edit-address">
    <van-nav-bar
      title="选择地址"
      :fixed="true"
      left-arrow
      @click-left="onClickLeft"/>
    <!-- 添加地址 -->
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :address-info="addressInfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"/>
  </div>
</template>

<script>
import areaList from '@/utils/area'
import {addAddress,updateAddress,deleteAddress} from '@/api/user/address'
import {showSuccessToast} from 'vant'

export default {
  data() {
    return {
      areaList: areaList,
      addressInfo: {},
      searchResult: [],
      addressId: this.$route.params.addressId
    }
  },
  mounted() {
    this.initData()
  },
  methods: {

    initData() {
      addAddress(this.addressId).then(response => {
        this.addressInfo = response.data
        this.addressInfo.areaCode=response.data.area_code
        this.addressInfo.postalCode = response.data.postal_code
        this.addressInfo.addressDetail=response.data.address_detail
        this.addressInfo.isDefault=response.data.is_default
      })
    },
    onClickLeft() {
      this.$router.back()
    },
    onSave(content) {
      let id = content.id
      updateAddress(id, content).then(response => {
        if (response.code === 0) {
          showSuccessToast('修改成功')
          this.$router.back()
        }
      })
    },
    onDelete(content) {
      let id = content.id;
      deleteAddress(id).then(response =>{
        if (response.code===0){
          showSuccessToast('删除成功')
          this.$router.back()
        }
      })


    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>