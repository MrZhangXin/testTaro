import { View, Text, ScrollView } from '@tarojs/components'
import { PureComponent } from 'react';
import './index.scss';
export default class LeftMenu extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      tabNum: 0
    };
  }
  componentDidMount() {
    // 第一次获取右边数据
    this.props?.tabClickNum(1)
  }

  handleClick(data: any) {
    this.setState({
      tabNum: data.index
    });
    this.props?.tabClickNum(data.id)
  }
  render(){
    const  { list, tabClickNum } = this.props;
    const  { tabNum } = this.state;
    return (
      <ScrollView
        className='scroll-menu'
        scrollY={true}
        scrollX={false}
        scrollWithAnimation
      >
        {
          Array.isArray(list) ? (
          list.map((item, index) => {
            return (
              <View className={ tabNum === index ? 'l-menu active': 'l-menu'} id={item.id} key={item.id} onClick={this.handleClick.bind(this, {
                index,
                id: item.id
              })}>
                {item.name}
                <View className='line-select'></View>
              </View>
            )
          })): (
            <View className='l-menu'>
              无数据
            </View>
          )
        }
      {/*<View className='l-menu'>*/}
      {/*  生活用品*/}
      {/*  <View className='line-select'></View>*/}
      {/*</View>*/}
      {/*  <View className='l-menu active'>*/}
      {/*    生活用品*/}
      {/*    <View className='line-select'></View>*/}
      {/*  </View>*/}
      </ScrollView>
    )
  }
}
