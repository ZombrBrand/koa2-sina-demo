/**
 * @description user 数据格式校验
 * @author ZombieBrand
 */

const _validate = require('./_vaildate')
//规则校验
const SCHEMA = {
    type: 'object',
    properties: {
        userName: {
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9]+$',
            maxLength: 255,
            minLength: 2
        },
        password: {
            type: 'string',
            maxLength: 255,
            minLength: 3
        },
        newPassword: {
            type: 'string',
            maxLength: 255,
            minLength: 3
        },
        nickName: {
            type: 'string',
            maxLength: 255
        },
        picture: {
            type: 'string',
            maxLength: 255
        },
        city: {
            type: 'string',
            maxLength: 255,
            minLength: 2
        },
        gender: {
            type: 'number',
            minimum: 1,
            maximum: 3
        }
    }
}

/**
 * 校验用户数据格式
 * @param {Object} data 用户数据 
 */
function userValidate(data = {}) {
    return _validate(SCHEMA, data)
}

module.exports = userValidate