/**
 * 
 * 格式化发表时间
 * @param {any} time 
 * @returns 
 */
export const formatDate = (time) => {
    const interval = (new Date().getTime() - new Date(time).getTime()) / 3600000;
    if (interval / 24 / 365 >= 1) {
        return Math.floor(interval / 24 / 365) + ' 年前';
    } else if (interval / 24 >= 1) {
        return Math.floor(interval / 24) + ' 天前';
    } else if (interval > 1) {
        return Math.floor(interval) + ' 小时前';
    } else if (interval < 1) {
        return Math.ceil(interval * 60) + ' 分钟前';
    }
}