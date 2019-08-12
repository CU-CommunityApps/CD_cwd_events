// XMLHttpRequest wrapper using callbacks
export default obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method || 'GET', obj.url);
        if (obj.headers) {
            Object.keys(obj.headers).forEach(key => {
                // console.log( key, obj.headers[key] )
                xhr.setRequestHeader(key, obj.headers[key]);
            });
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(obj.body);
    });
};
