import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { getSystemInfo, getMenuButtonBoundingClientRect } from '@tarojs/taro'
import NavBar from '@/component/NavBar';
import Search from '@/component/search';
import LeftMenu from '@/component/leftMenu';
import Main from '@/component/main';
import { listMenu , listMenuData} from './testData'
import './index.scss';

interface DataType {
  title?: string;
  system?:any;
  menu?:any;
  listMenu?:any;
  listMenuData?:any;
  tabNum?: any;
  offBol?:Boolean;
  scrollTop?: any;
}
export default class Index extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '商品分类',
      menu: getMenuButtonBoundingClientRect(),
      listMenu: [],
      listMenuData: {},
      tabNum: null,
      offBol: false,
      scrollTop: 0
    }
    getSystemInfo().then((res) => {
      this.setState({
        system: res
      })
    })
  }
  componentDidMount() {
    this.setState({
      listMenu,
      listMenuData
    })
    setTimeout(() => {
      this.setState({
        offBol: true
      })
    }, 1200)
  }
  // 获取第一个数据
  tabClickNum(num: number) {
    this.setState({
      tabNum: num,
      offBol: false,
    })
    setTimeout(() => {
      this.setState({
        offBol: true,
        scrollTop: 0
      })
    }, 1200)
  }
  render() {
    const { title, system, menu, listMenu, listMenuData, tabNum, offBol, scrollTop }:DataType = this.state;
    const navH = ((menu?.top - system?.statusBarHeight) * 2 + menu?.height) + system?.statusBarHeight
    const styleH = {
      height: system?.windowHeight - navH
    }
    // console.log('system11', system?.windowHeight - navH)
    return (
      <View className='test-page'>
        {/*  自定义导航  */}
        <NavBar title={title}></NavBar>
        {/*  自定义导航  */}
        <View className='test-main' style={styleH}>
          {/*  搜索  */}
          <View className='search-box'>
            <View className='search-con'>
              <Search></Search>
            </View>
          </View>
          {/*  搜索  */}
          {/*  主体内容  */}
          <View className='test-con'>
            <View className='left-box'>
              {/*  菜单  */}
              <LeftMenu list={listMenu} tabClickNum={this.tabClickNum.bind(this)}></LeftMenu>
            </View>
            <View className='right-box'>
              {/*  右边内容  */}
              <Main listData={listMenuData} tabNum={tabNum} offBol={offBol} scrollTop={scrollTop}></Main>
            </View>
          </View>
          {/*  主体内容  */}
        </View>
      </View>
    )
  }
}
