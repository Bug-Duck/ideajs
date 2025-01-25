import * as  idea from '../src'

// 创建画布
const canvas = idea.field(1000, 800)
document.body.appendChild(canvas.node())

// 创建坐标系
const coord = idea.coordinate(1000, 800)
    .origin(500, 400)  // 设置原点在中心
    .unit(50)          // 设置单位长度
    .grid(50)          // 设置网格大小
    .ticks(50)         // 设置刻度间隔
    .labels(50)        // 设置标签间隔
    .draggable()       // 启用拖拽功能

// 创建线段
const line = idea.line(100, 100, 200, 200)
    // .from(50, 50)
    .to(200, 200)
    .stroke("#FFFF00")
    .style({
        pointSize: 10,
        pointColor: "#FFFF00",
        pointOpacity: 0.5,
        pointFill: "#FFFF00",
        pointStroke: "#FFFF00",
        pointStrokeWidth: 1
    })
    .transform({ origin: [50, 50] })
    .transform({ scale: 0.5 })
    .transform({ skew: [10, 20] })
    .transform({ rotate: 180 })
    .transform({ translate: [-50, -50] })
    .animation({
        duration: 5000,
        delay: 1000,
        properties: {
            // 样式属性动画
            'fill': {from: "#FF000", to: "#00FF00"},
            'stroke': {from: "#FF0000", to: "#00FF00"},
            'opacity': {from: "1", to: "0.5"},
            
            // 顶点位置动画
            'x1': {from: -500, to: 200},
            'y1': {from: -100, to: 300},
            'x2': {from: 0, to: 200},
            'y2': {from: 0, to: 200},
        },
        onStart: () => {
            console.log("Animation started");
        },
        onEnd: () => {
            console.log("Animation completed");
        }
    })
    // // .tooltip("向量<br>from (100, 100) to (100, 200)", {
    // //     position: 'top',
    // //     className: 'tooltip',
    // //     style: {
    // //         'color': 'black',
    // //         'padding': '0.5em'
    // //     },
    // // })
    .annotate("线段A")
    // // .trace("FF0000")
    .draggable()

// 绘制向量
coord.add(line)
canvas.add(coord)