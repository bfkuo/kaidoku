import { REQUEST_BODY_TYPES } from "./constants";

function bodyToFormEncoded(o) {
    if (o == null) return "";
    let formBody = [];

    Object.keys(o).forEach((key) => {
        console.log(`key ${key} ok ${o[key]}`)
        formBody.push(encodeURIComponent(key) + "=" + encodeURIComponent(o[key]));
    });

    formBody = formBody.join("&");
    return formBody;
}


function bodyToBodyFormat(type, body) {
    switch(type) {
        case REQUEST_BODY_TYPES.JSON:
            return JSON.stringify(body);
        case REQUEST_BODY_TYPES.URLENCODED:
            return bodyToFormEncoded(body);
        default:
            throw new Error(`Unknown body type`);
        }
}

export function apiRequest(method = "POST", body, bodyType = REQUEST_BODY_TYPES.JSON) {
    return fetch('http://127.0.0.1:5000/login', {
        method,
        headers: {
            'Content-Type': bodyType,
        },
        body:bodyToBodyFormat(bodyType, body)
    });
}
