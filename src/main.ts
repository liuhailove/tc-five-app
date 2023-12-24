import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import vant, {
    ActionSheet, AddressEdit, AddressList, Area,
    Button,
    Card, Cell, CellGroup, Checkbox, CheckboxGroup, Col, ContactCard, ContactEdit, ContactList,
    CountDown, CouponCell, CouponList,
    Divider, Field, Form,
    Grid,
    GridItem,
    Lazyload,
    Loading, NavBar, Popup, Radio, RadioGroup, Row, Search, Sidebar, SidebarItem, Stepper, SubmitBar,
    Swipe,
    SwipeItem, Tab,
    Tabbar,
    TabbarItem, Tabs
} from 'vant';
import {Icon} from "vant";
import 'vant/lib/index.css';
import router from './router';
import Vuex from 'vuex'

import SvgIcon from '@/components/SvgIcon/Index.vue' // svg组件
import VTop from '@/components/backToTop/Index.vue'
// register globally
//
// const req = require.context('./svg', false, /\.svg$/)
// const requireAll = requireContext => requireContext.keys().map(requireContext)
// requireAll(req)

// 导入阿里图标
// import './assets/icons'
// import './assets/font/iconfont.css';
// 导入vuex
// import store from './mock/db.json';

import {Toast, Dialog, Notify, ImagePreview} from 'vant';


const app = createApp(App);

app.component('svg-icon', SvgIcon);
app.constructor('v-top', VTop);
// 路由加载
app.use(router);
app.use(vant);
app.use(Toast);
app.use(Dialog);
app.use(Notify);
app.use(ImagePreview);
// Tabbar底部
app.use(Tabbar);
app.use(TabbarItem);
// loading组件
app.use(Loading);
// 轮播组件
app.use(Swipe);
app.use(SwipeItem);
// // 懒加载
// app.use(Lazyload);
// 栅栏宫格
app.use(Grid);
app.use(GridItem);
// icon图标
app.use(Icon);
// panel面板
// app.use(Panel);
// 倒计时
app.use(CountDown);
// 分割线
app.use(Divider);
// // image
// app.use(Image);
// 商品卡片
app.use(Card);
// 按钮
app.use(Button);
// 导航栏
app.use(NavBar);
// 上拉菜单
app.use(ActionSheet);
// 布局
app.use(Cell).use(CellGroup).use(Col).use(Row);
// tab标签
app.use(Tab).use(Tabs);
// 表单
app.use(Form).use(Field);
// 复选框
app.use(Checkbox).use(CheckboxGroup);
// 提交栏
app.use(SubmitBar);
// 步进器
app.use(Stepper);
// 联系人卡片
app.use(ContactCard).use(ContactList).use(ContactEdit);
// 收货人地址
app.use(AddressList).use(AddressEdit);
// 省市区选择
app.use(Area);
// 单选框
app.use(RadioGroup).use(Radio);
// 弹出层
app.use(Popup);
// 优惠券
app.use(CouponCell).use(CouponList);
// 商品搜索
app.use(Search);
// 边框
app.use(Sidebar).use(SidebarItem);
// 懒加载
app.use(Lazyload);
app.use(store);
app.mount('#app');



