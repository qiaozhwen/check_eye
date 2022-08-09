import {type_dictionary} from "./type";

function checkEye() {
    const traceKeys = type_dictionary.list
    this.traceKeys = traceKeys
}
checkEye.prototype.initDocument=function () {
    var dom = document.querySelector("[trace_name=scroll]")
    window.addEventListener('scroll', () => {
        // 处理滚动事件
        var reactVision = dom.getBoundingClientRect()
        var canSeeTop = document.documentElement.clientHeight - reactVision.y >=(reactVision.height/2)
        console.log(dom,`${canSeeTop?'已':'未'}浏览`)
    });
}
export  default  checkEye