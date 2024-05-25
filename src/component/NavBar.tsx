import { View, Text } from '@tarojs/components'
import { getSystemInfo, getMenuButtonBoundingClientRect } from '@tarojs/taro'
import { PureComponent } from 'react';
import './index.scss';
interface DataType {
  title?: string;
}
export default class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      system: {},
      menu: getMenuButtonBoundingClientRect()
    }
    getSystemInfo().then((res) => {
      this.setState({
        system: res
      })
    })
  }
  render() {
    const { title } :DataType = this.props;
    const  { system, menu } = this.state
    const styleTop = {
      paddingTop: system?.statusBarHeight
    }
    const style = {
      height: ((menu?.top - system?.statusBarHeight) * 2 + menu?.height),
    }
    return (
      <View className='nav-box'>
        <View style={styleTop}></View>
        <View style={style} className='title-box'>{title}</View>
      </View>
    )
  }
}
