(function () {
    let sW = 720;
    let sH = 936;
    let lW = 720;
    let lH = 1600;
    let rW,rH,cW,cH,left,top,fontSize;

    function setSmallBox(boxWidth, boxHeight) {
        sW = boxWidth;
        sH = boxHeight;
    }
    function setLargeBox(boxWidth, boxHeight) {
        lW = boxWidth;
        lH = boxHeight;
    }
    function setContainerStyle() {
        rW = document.documentElement.clientWidth;
        rH = document.documentElement.clientHeight;
        /*
         * {
         *      1: 更瘦长
         *      2: 介于smallBox和largeBox之间
         *      3: 更胖
         * }
         *
         */
        let container_type = 2;

        if (rW/rH > sW/sH) {
            cW = rH/sH*sW;
            container_type = 3
        } else {
            cW = rW;
        }

        if (rW/rH < lW/lH){
            cH = rW/lW*lH;
            container_type = 1;
        } else {
            cH = rH;
        }

        left = (rW-cW) / 2;
        top = (rH-cH) / 2;
        fontSize = cW/rW;

        let body = document.body,
            container = document.getElementsByClassName('body-container');

        body.style.fontSize = (rW/360)+'rem';
        for (let i = 0; i < container.length; i++) {
            let cont = container[i];
            cont.style.width = cW+'px';
            cont.style.height = cH+'px';
            cont.style.top = top+'px';
            cont.style.left = left+'px';
            cont.style.fontSize = fontSize+'rem';
        }
        return container_type;
    }
    function setMain (iW, iH) {
        let rIW = rH/iH*iW;
        if (rIW > cW) {
            rIW = cW;
        }
        let rIH = iH/iW*rIW;
        let rILeft = (cW - rIW) / 2;
        let rITop = (cH - rIH) / 2;
        let rIFont = rIW / cW;

        let mains = document.getElementsByClassName('main-container');
        for (let i = 0; i < mains.length; i++) {
            let main = mains[i];
            main.style.width = rIW+'px';
            main.style.height = rIH+'px';
            main.style.top = rITop + 'px';
            main.style.left = rILeft+'px';
            main.style.fontSize = rIFont+'rem';
        }
    }
    window.bSS = {
        setSmallBox,
        setLargeBox,
        setContainerStyle,
        setMain,
    }
})();
