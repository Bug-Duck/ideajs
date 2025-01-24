import * as  idea from '../src'

// 创建画布
const canvas = idea.field(800, 600)
document.body.appendChild(canvas.node())

// 创建坐标系
const coord = idea.coordinate(800, 600)
    .origin(400, 300)  // 设置原点在中心
    .unit(50)          // 设置单位长度
    .grid(50)          // 设置网格大小
    .ticks(50)         // 设置刻度间隔
    .labels(50)        // 设置标签间隔
    .draggable()       // 启用拖拽功能

// 创建向量
const vector = idea.vector(100, 100, 100, 200)
    .from(50, 50)
    .to(300, 400)
    .stroke("#FF0000")
    .transform({ origin: [50, 50] })
    .transform({ scale: 0.5 })
    .transform({ skew: [10, 20] })
    .transform({ rotate: 45 })
    .transform({ translate: [-50, -50] })
    .animation({
        duration: 5000,
        properties: {
            x1: { from: 100, to: 200 },
            y1: { from: 100, to: 200 },
            x2: { from: 100, to: 200 },
            y2: { from: 200, to: 300 }
        },
        easing: 'power2.inOut'
    })
    // .tooltip("向量<br>from (100, 100) to (100, 200)", {
    //     position: 'top',
    //     className: 'tooltip',
    //     style: {
    //         'color': 'black',
    //         'padding': '0.5em'
    //     },
    // })
    .annotate("线段A")
    // .trace("FF0000")
    .draggable()

// 绘制向量
coord.add(vector)
canvas.add(coord)