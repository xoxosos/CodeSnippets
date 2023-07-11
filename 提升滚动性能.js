/*
 * @Author: LinRenJie
 * @Date: 2023-07-11 14:33:41
 * @LastEditTime: 2023-07-11 14:33:59
 * @Description:  避免在滚动时鼠标频繁触发包括hover在内的任何鼠标事件，从而提升了页面滚动时的性能。
 * @FilePath: \MyProjects\前端\提升滚动性能.js
 * @Email: xoxosos666@gmail.com
 */
let timer = null
window.addEventListener("scroll", function () {
    document.body.style.pointerEvents = 'none'; // 滚动时禁用鼠标事件
    if (timer) { clearTimeout(timer) }
    timer = setTimeout(() => {
        document.body.style.pointerEvents = 'auto'; // 释放
    }, 100);
})
