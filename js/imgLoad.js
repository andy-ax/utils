(function () {
    function imgLoad (imgArr) {
        let promiseArr = [];
        let imageArr = [];
        imgArr.forEach((item, i)=>{
            let pro = new Promise((res, rej)=>{
                let img = new Image();
                img.src = item;
                img.onload = function (e) {
                    if (e.path && e.path[0]) {
                        imageArr[i] = e.path[0];
                        res();
                    } else {
                        rej();
                    }
                }
                img.onerror = function () {
                    rej();
                }
            })
            promiseArr.push(pro);
        });
        return Promise.all(promiseArr).then(()=>{
            return new Promise((res)=>{
                res(imageArr);
            })
        }).catch(()=>{
            return new Promise((res)=>{
                res();
            })
        });
    }
})()
