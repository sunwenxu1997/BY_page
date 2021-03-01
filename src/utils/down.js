export function toDown() {
    let blob = '/static/IOS端手动导出DJI FLY飞行记录.pdf'
    let fileName = 'IOS端手动导出DJI FLY飞行记录.pdf'
    if ('download' in document.createElement('a')) {
        // 非IE下载
        let elink = document.createElement('a')
        elink.download = fileName
        elink.style.display = 'none'
        elink.href = blob
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href) // 释放URL 对象
        document.body.removeChild(elink)
    } else {
        // IE10+下载
        navigator.msSaveBlob(blob, fileName)
    }
}