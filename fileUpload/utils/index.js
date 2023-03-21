// 引入模块依赖
const fs = require('fs');
const path = require('path');

var jsonWebToken = require('jsonwebtoken');


const keyWord = 'sss///w/fw9843257cd321438577870.832fejwkjjcjv.beejhdew==3-0-=-4345/*+ls324$#.43%06.64=+{fr  `324#@!~~!@#@$^&&&*(())**(&*&^&^%&%$&$&$^&$%^$%)(BBCZX||\)}s00s'

// 创建 token 类
class jwt {

    constructor(data) {
        this.data = data;
        this._id = null; // 用户自定义 存放userid
        this._date = null; // 过期时间
        this._creatDate = null; // 创建时间
    }

    // 重新生成 token
    refreshToken() {
        let data = this.data;
        let created = Math.floor(Date.now() / 1000);
        let cert = fs.readFileSync(path.join(__dirname, './pem/private_key.pem'));//私钥 可以自己生成
        let token = jsonWebToken.sign({
            data,
            exp: created + 60 * 30, // 过期时间 
            iat: created, // 创建时间
        }, cert, { algorithm: 'RS256' });
        return token;
    }

    //生成token
    generateToken(data) {
        if (data) {
            this.data = data;
        }
        data = this.data;

        let created = Math.floor(Date.now() / 1000);
        // let cert = fs.readFileSync(path.join(__dirname, './private_key.pem'));//私钥 可以自己生成
        const value = {
            data,
            exp: created + 60 * 30, // 过期时间 30 分钟
            iat: created, // 创建时间
        }

        let token = jsonWebToken.sign(value, keyWord);

        return token;
    }

    // 校验token
    verifyToken(data) {
        if (data) {
            this.data = data;
        }
        let token = this.data;
        // let cert = fs.readFileSync(path.join(__dirname, './pem/public_key.pem'));//公钥 可以自己生成
        let res;
        try {
            let result = jsonWebToken.verify(token, keyWord) || {};
            this._id = result.data;
            this._date = result.exp;
            this._creatDate = result.iat;
            let { exp = 0 } = result, current = Math.floor(Date.now() / 1000);
            if (current <= exp) {
                res = result.data || {};
            }
        } catch (e) {
            res = 'err';
        }
        return res;
    }
}


module.exports = jwt;