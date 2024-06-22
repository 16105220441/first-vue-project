import requestUtil from "@/utils/requestUtil.js";

export const getPicCode = () => {
    return requestUtil('/ImageCaptcha')
}
export const verifyPicCode = (uid, imageCode) => {
    return requestUtil({
        url: "/verify/imageCode", method: 'post', params: {
            'uid': uid,
            'imageCode': imageCode
        }
    })
}
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
    return requestUtil({
        url: '/messageCode',
        method: 'get',

    })
}
export const verifyMsgCode = (msgCodeId, msgCode) => {
    return requestUtil({
        url: "/verify/messageCode", method: 'post', params: {
            'msgCodeId': msgCodeId,
            'msgCode': msgCode
        }
    })
}
export const codeLogin = (phone) => {
    return requestUtil({
        method: 'post',
        url: '/logIn',
        data: {
            phone
        },
        headers: {
            platform: ['H5']
        }
    })
}
