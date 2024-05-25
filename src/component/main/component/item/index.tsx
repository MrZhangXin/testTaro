import {Image, View} from "@tarojs/components";
import { PureComponent } from 'react';
import './index.scss';

export default class Item extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {}
    }
    render() {
      const { child } = this.props
      return (
        <View className='electrical-item'>
          <Image className='electrical-pic' src={child.url} mode='scaleToFill'></Image>
          <View className='electrical-text'>{child.title}</View>
        </View>
      )
    }
}
