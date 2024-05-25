import { View, Text, ScrollView, Input } from '@tarojs/components'
import { PureComponent } from 'react';
import { AtIcon } from 'taro-ui'
import './index.scss';
export default class Search extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      value1: ''
    };
  }
  render(){
    return (
      <View className='search-bar-con'>
        <View className='search-icon'>
          <AtIcon value='search' size='16' color='#F4811F'></AtIcon>
        </View>
        <View className='search-line'></View>
        <View className='search-input-box'>
          <Input className='search-input' type='text' placeholder='搜索'/>
        </View>
      </View>
    )
  }
}
