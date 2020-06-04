// 柱状图1模块
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {   //修改图的大小
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",  //x轴触发类型category，插入类型
        data: [
          "0-20",
          "20-30",
          "30-40",
          "40-50",
          "50-60",
          "60-70",
          "70+",
        ],
        axisTick: {
          alignWithLabel: false   //x轴刻度
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {   //x轴样式不显示(图线本身颜色)
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",  //插入数值类型
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12",
          },
          show: true,  
          interval: 'auto',  
          formatter: '{value} %'  
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {   //分割线样式
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "年龄占比",
        type: "bar",   //图表类型
        barWidth: "30%",  //柱子宽度
        data: [0.06457319770013269, 0.1468376824413976, 0.23706324635117204, 0.2410437859354268, 0.16585581601061478, 0.0946483856700575, 0.04997788589119858],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  myChart.setOption(option);   // 把配置给实例对象
  window.addEventListener("resize", function() {   //图标大小跟随屏幕自适应
    myChart.resize();
  });

  // 数据变化
  var dataAll = [
    { sex: "男", data: [0.06457319770013269, 0.1468376824413976, 0.23706324635117204, 0.2410437859354268, 0.16585581601061478, 0.0946483856700575, 0.04997788589119858] },
    { sex: "女", data: [0.049172102358253894,0.11339688911189162, 0.21274460612142498, 0.2488710486703462, 0.1996989463120923, 0.11991971901655796,0.055694932262920216] }
  ];

  $(".bar h2 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  // (1)准备数据 已经改为下方series内部取data
  // var data = {
  //   year: [
  //     [52.6, 53.2, 51.3, 27.8, 54.1],
  //     [51.3, 51.2, 51.4, 29.3, 52],
  //     [46.4, 45.6, 46, 46.1, 49.1]
  //   ]
  // };

  // 2. 指定配置和数据
  option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        borderWidth: 0,
        top: "10%",
        bottom:"23%",
        textStyle: {
       
        }
    },
    legend: {
        top: '0%',
        textStyle: {
            color: '#90979c',
        },
        data: ['生产指数', '新订单指数','成产成品库存指数']
    },


    calculable: true,
    xAxis: [{
        type: "category",
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.5)"
          }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: [
        "8月",  
        "9月",
        "10月",
        "11月",
        "12月",
        "1月",
        "2月",
        "3月",
      ],
    }],

    yAxis: [{
        type: "value",
        min: 25,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 10
          },
          show: true,  
          interval: 'auto',  
          formatter: '{value} %'
        },
        splitLine: {
            show: false
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.5)"
          }
        },
    }],
    dataZoom: [{
        show: true,
        xAxisIndex: [0],
        bottom: 0,
        height:20,
        left:"28",
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "rgba(0, 191, 255, 0.7)",
        },
        textStyle:{
          color:"rgba(204,187,225,0.8)",
      },
      

    }, {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 35
    }],
    series: [{
        name: "生产指数",
        type: "line",
        symbolSize: 2,
        symbol: 'circle',
        itemStyle: {
            color: "#00f2f1",
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
        },
        data: [
          51.9, 52.3, 50.8, 52.6, 53.2, 51.3, 27.8, 54.1
        ],
    }, {
        name: "新订单指数",
        type: "line",
        symbolSize: 2,
        symbol: 'circle',
        itemStyle: {
            color: "#EAADEA",
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
        },
        data: [
          49.7,50.5,49.6,51.3,51.2,51.4,29.3,52
        ]
    },{
      name: "成产成品库存指数",
      type: "line",
      symbolSize: 2,
      symbol: 'circle',
      itemStyle: {
          color: "#FF6EC7",
      },
      markPoint: {
          label: {
              normal: {
                  textStyle: {
                      color: '#fff'
                  }
              }
          },
      },
      data: [
        47.8,47.1,46.7,46.4,45.6,46,46.1,49.1
      ]
  } ]
}
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie  .chart"));
myChart.on('click', function(params) {
  console.log(params.name);
  window.open('https://s.weibo.com/weibo?q=' + encodeURIComponent(params.name) +'&wvr=6&b=1&Refer=SWeibo_box');
});

var colorList = [[
  '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
  '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
  '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
  '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
  ],
  [
  '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
  '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
  '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
  '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
  ],
  [
  '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
  '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51', 
  '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe', 
  '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
  ]][2];

option = {
  tooltip: {},
  animationDurationUpdate: function(idx) {
      // 越往后的数据延迟越大
      return idx * 100;
  },
  animationEasingUpdate: 'bounceIn',
  color: ['#fff', '#fff', '#fff'],
  series: [{
      type: 'graph',
      layout: 'force',
      force: {
          repulsion: 250,
          edgeLength: 10
      },
      roam: true,
      label: {
          normal: {
              show: true
          }
      },
      data: [
          
          {"name": "小米5G发布会", "value": 2226013, "symbolSize": 149, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[0], "color": colorList[0] } } },
          {"name": "美媒称美国抗疫成国家批准的屠杀", "value": 1741162, "symbolSize": 131, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[1], "color": colorList[1] } } },
          {"name": "舒兰传染链延长到22人", "value": 1531659, "symbolSize": 123, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[2], "color": colorList[2] } } },
          {"name": "北京天津武汉九毛九餐厅停止经营", "value": 1529599, "symbolSize": 123, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[3], "color": colorList[3] } } },
          {"name": "大头娃娃涉事生产方回应", "value": 1396359, "symbolSize": 118, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[4], "color": colorList[4] } } },
          {"name": "首艘国产航母研制总指挥落马", "value": 1326123, "symbolSize": 115, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[5], "color": colorList[5] } } },
          {"name": "翻译", "value": 1237092, "symbolSize": 111, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[6], "color": colorList[6] } } },
          {"name": "贝克汉姆快秃头了", "value": 1136802, "symbolSize": 106, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[7], "color": colorList[7] } } },
          {"name": "优步3分钟视频会议3500人失业", "value": 1096608, "symbolSize": 104, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[8], "color": colorList[8] } } },
          {"name": "中国世界经济坐标", "value": 1062177, "symbolSize": 103, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[9], "color": colorList[9] } } },
          {"name": "武汉新增确诊5例", "value": 916854, "symbolSize": 95, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[10], "color": colorList[10] } } },
          {"name": "近3000人放弃美国公民身份", "value": 909125, "symbolSize": 95, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[11], "color": colorList[11] } } },
          {"name": "罗志祥综艺照常播出", "value": 848313, "symbolSize": 92, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[12], "color": colorList[12] } } },
          {"name": "108位创作者云上集结", "value": 774922, "symbolSize": 88, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[13], "color": colorList[13] } } },
          {"name": "天津天海正式解散", "value": 631941, "symbolSize": 79, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[14], "color": colorList[14] } } },
          {"name": "演员刘江去世", "value": 608787, "symbolSize": 78, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[15], "color": colorList[15] } } },
          {"name": "科比参加选秀", "value": 607278, "symbolSize": 77, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[16], "color": colorList[16] } } },
          {"name": "香港海洋公园倒闭", "value": 599145, "symbolSize": 77, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[17], "color": colorList[17] } } },
          {"name": "新型冠状病毒", "value": 596433, "symbolSize": 77, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[18], "color": colorList[18] } } },
          {"name": "纽约疫情遭曝光", "value": 591945, "symbolSize": 76, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[19], "color": colorList[19] } } },
          {"name": "快手起诉抖音", "value": 588043, "symbolSize": 76, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[0], "color": colorList[0] } } },
          {"name": "全球新冠疫情", "value": 580264, "symbolSize": 76, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[1], "color": colorList[1] } } },
          {"name": "31省明确返校时间", "value": 580067, "symbolSize": 76, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[2], "color": colorList[2] } } },
          {"name": "1号台风黄蜂", "value": 575029, "symbolSize": 75, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[3], "color": colorList[3] } } },
          {"name": "全国企业信用信息公示系统", "value": 501908, "symbolSize": 70, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[4], "color": colorList[4] } } },
          {"name": "window10", "value": 499193, "symbolSize": 70, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[5], "color": colorList[5] } } },
          {"name": "最长寿爷爷112岁生日会因疫情取消", "value": 470461, "symbolSize": 68, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[6], "color": colorList[6] } } },
          {"name": "社保", "value": 465601, "symbolSize": 68, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[7], "color": colorList[7] } } },
          {"name": "魔兽世界怀旧服", "value": 416664, "symbolSize": 64, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[8], "color": colorList[8] } } },
          {"name": "特斯拉强行复工", "value": 415130, "symbolSize": 64, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[9], "color": colorList[9] } } },
          {"name": "世卫组织代表回应外媒对中国指责", "value": 411501, "symbolSize": 64, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[10], "color": colorList[10] } } },
          {"name": "2020艺考报名人数", "value": 376046, "symbolSize": 61, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[11], "color": colorList[11] } } },
          {"name": "美国失业率达25%", "value": 369299, "symbolSize": 60, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[12], "color": colorList[12] } } },
          {"name": "顺丰回应送外卖", "value": 360124, "symbolSize": 60, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[13], "color": colorList[13] } } },
          {"name": "疫情或持续一两年", "value": 338968, "symbolSize": 58, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[14], "color": colorList[14] } } },
          {"name": "富士康回应放假", "value": 315365, "symbolSize": 56, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[15], "color": colorList[15] } } },
          {"name": "房价会降还是会涨", "value": 282486, "symbolSize": 53, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[16], "color": colorList[16] } } },
          {"name": "美国拟与华为合作", "value": 275653, "symbolSize": 52, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[17], "color": colorList[17] } } },
          {"name": "北京严查户口违规", "value": 272135, "symbolSize": 52, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[18], "color": colorList[18] } } },
          {"name": "阿娇赖弘国离婚", "value": 261851, "symbolSize": 51, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[19], "color": colorList[19] } } },
          {"name": "40万辆奥迪被召回", "value": 259718, "symbolSize": 50, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[0], "color": colorList[0] } } },
          {"name": "两大股神跌落凡尘", "value": 225713, "symbolSize": 47, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[1], "color": colorList[1] } } },
          {"name": "羊驼抗体可灭新冠", "value": 208998, "symbolSize": 45, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[2], "color": colorList[2] } } },
          {"name": "阶段性友谊", "value": 208637, "symbolSize": 45, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[3], "color": colorList[3] } } },
          {"name": "小米日本道歉", "value": 207387, "symbolSize": 45, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[4], "color": colorList[4] } } },
          {"name": "疫情中爱情的模样", "value": 207262, "symbolSize": 45, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[5], "color": colorList[5] } } },
          {"name": "甜筒美妆蛋", "value": 206198, "symbolSize": 45, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[6], "color": colorList[6] } } },
          {"name": "美国预计有10万至24万人死于新冠", "value": 205726, "symbolSize": 45, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[7], "color": colorList[7] } } },
          {"name": "钟南山谈康复患者是否会有后遗症", "value": 198472, "symbolSize": 44, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[8], "color": colorList[8] } } },
          {"name": "查尔斯王子发视频谈患病感受", "value": 196940, "symbolSize": 44, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[9], "color": colorList[9] } } },
      ]
  }]
}
myChart.setOption(option);})();
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));   //实例化对象
  var myColor = ['#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
option = {
    grid: {
        left: '28%',
        top: '10%',
        bottom: '0%',
       
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '27',
        axisLabel: {
            textStyle: {
                
                fontSize: '12',
                color: "rgba(255,255,255,0.7)",
            }
        },
        data: ["2020年3月", "2020年2月", "2020年1月", "2019年12月", "2019年11月"]
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                fontSize: '6',
            }
        },
        data: ['5', '4', '3', '2', '1']
    }, {
        name: '',
        nameGap: '50',
        nameTextStyle: {
            fontSize: '12',
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [53, 28.9, 53, 53.4, 53.7],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: "{c}%"
                    
                }
            },
            barWidth: 6,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 3,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100],
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 0
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 20,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: 1,
                }
            },
            z: 2
        }
    ]
};


  // 将配置好的图标发送给实例化对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 折线图 优秀作品
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  option = {

    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },

        data: [
          "11月",
          "12月",
          "1月",
          "2月",
          "3月"
        ]
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          },
          show: true,  
          interval: 'auto',  
          formatter: '{value} %'
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "购进价格指数",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          49,
          51.8,
          53.8,
          51.4,
          45.5

        ]
      },
      {
        name: "采购量指数",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          51,
          51.3,
          51.6,
          29.3,
          52.7,
        ]
      },
      {
        name: "出厂价格指数",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#EEEE00",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(255, 255, 102, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(255, 255, 153, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#EEEE00",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          47.3,
          49.2,
          49,
          44.3,
          43.8

        ]
      }, 
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 点位分布统计模块
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: [
          { value: 113.6, name: "食品" },
          { value: 99.7, name: "衣着" },
          { value: 99.9, name: "居住" },
          { value: 100.3, name: "生活" },
          { value: 96.2, name: "交通" },
          { value: 102.5, name: "教育" },
          { value: 102.2, name: "医疗" },
          { value: 105.3, name: "其他" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
