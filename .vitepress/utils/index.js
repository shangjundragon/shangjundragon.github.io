/**
 * 前端数组分页
 * @param {Array} list - 原始数据数组
 * @param {Number} pageNum - 当前页码（从1开始）
 * @param {Number} pageSize - 每页数量
 * @returns {Array} 当前页数据
 */
export function paginateArray(list, pageNum, pageSize) {
    // 处理非法输入
    if (!Array.isArray(list)) return []
    if (pageNum < 1 || pageSize < 1) return []

    // 计算起止索引
    const startIndex = (pageNum - 1) * pageSize
    const endIndex = startIndex + pageSize

    // 返回分页后的数组
    return list.slice(startIndex, endIndex)
}
