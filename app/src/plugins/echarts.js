import * as echarts from 'echarts';
const intall=(Vue,options)=>{
    Object.defineProperties(Vue.prototype,{
        $myEcharts:{
            get(){
                return{
                    line(id){
                        var myCharts=echarts.init(document.getElementById(id))
                        var options={
                            title: {
                              text: 'ECharts 入门示例'
                            },
                            tooltip: {},
                            xAxis: {
                              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                            },
                            yAxis: {},
                            series: [
                              {
                                name: '销量',
                                type: 'bar',
                                data: [5, 20, 36, 10, 10, 20]
                              }
                            ]
                          }
                          myCharts.setOption(options)
                    }
                }
            }
        }
    })
}

export default intall