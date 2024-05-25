import { View, Text, ScrollView, Image } from '@tarojs/components'
import Skeleton from 'taro-skeleton'
import { PureComponent } from 'react';
import './index.scss';
import bg from '@/assets/images/bg.png';
import ricon from '@/assets/images/rigicon.png';
import ItemDom from './component/item'
export default class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    const { listData, tabNum, offBol, scrollTop } = this.props;
    console.log('sdfsdf', scrollTop)
    return (
      <ScrollView
        className='scroll-main'
        scrollY={true}
        scrollX={false}
        // scrollTop={{scrollTop}}
        scrollWithAnimation={true}
      >
        <View className='main-box'>
          <Image hidden={offBol} className='main-bg' src={bg} mode='scaleToFill'>
          </Image>
          <View className='main-electrical'>

            {
              Array.isArray(listData[tabNum])?
                listData[tabNum].map((item) => {
                  return (<View className='electrical-box' id={tabNum}>
                    {/*   电器组件 */}
                    <View className='electrical-title'>
                      <View className='title'>
                        {item.subTitle}
                      </View>
                      <Image className='ricon' src={ricon} mode='scaleToFill'></Image>
                    </View>
                    <View>
                      <View className='at-row at-row--wrap'>
                        {
                          item.subList.map((child) => {
                            return (
                              <View className='at-col at-item at-col-4' key={child.id}>
                                <View className='electrical-item'>
                                  {
                                    offBol ? <ItemDom child={child}></ItemDom> : <Skeleton type='column' title titleWidth={'80%'} avatar />
                                  }
                                </View>
                              </View>
                            )
                          })
                        }
                      </View>
                    </View>
                  </View>)
                })
              :(
                <View className='data-empty'>无数据</View>
              )
            }
          </View>
        </View>
      </ScrollView>
    )
  }
}
