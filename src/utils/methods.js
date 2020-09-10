import { Notification } from 'element-ui'

// 错误提示
export function nfError(message) {
    Notification.error({title: '错误提示', message, duration: 2000})
}

// 错误提示
export function nfWarning (message) {
    Notification.warning({ title : '错误提示' , message , duration : 2000 })
}

// 成功提示
export function nfSuccess(message) {
    Notification.success({title: '成功提示', message, duration: 2000})
}