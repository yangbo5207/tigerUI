const supportAnimation = 'AnimationEvent' in window || 'WebKitAnimationEvent' in window || 'MozAnimationEvent' in window;
const animationendEvents = 'animationend webkitAnimationEnd mozAnimationEnd';

// 消失动画
const hideAnimationClass = 'modal-animation-hide';

const bindOnce = (element, events, handler) => {
    let executed = false;
    const eventsArray = events.split(' ');

    const onceHandler = e => {
        if (executed) {
            return;
        }
        eventsArray.forEach(eventName => element.removeEventListener(eventName, onceHandler, false));
        handler(e);
        executed = true;
    }

    eventsArray.forEach(eventName => element.addEventListener(eventName, onceHandler, false));
}


const makeAnimation = (element, duration) => {
    return new Promise(resolve => {
        if (!element || !supportAnimation) {
            resolve();
        } else {
            // 执行时首先添加退出动画，动画结束后执行删除组件等操作
            element.classList.add(hideAnimationClass);
            bindOnce(element, animationendEvents, () => {
                element.classList.remove(hideAnimationClass);
                resolve();
            })

            if (duration) {
                setTimeout(resolve, duration);
            }
        }
    })
}

export default makeAnimation;
