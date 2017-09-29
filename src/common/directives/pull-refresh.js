/**
 * Created by francis.su on 21/03/2017.
 */

import Vue from 'vue';

const STATS = {
    init: '',
    pulling: 'pulling',
    enough: 'pulling enough',
    refreshing: 'refreshing',
    refreshed: 'refreshed',
    reset: 'reset',
    loading: 'loading'// loading more
};

const MESSAGE = {
    init:'下拉可以刷新',
    pulling: '下拉可以刷新',
    enough: '松开立即刷新',
    refreshing: '正在加载数据...',
    refreshed: '刷新成功',
    reset: '下拉可以刷新'
};

const DISTANCE_TO_REFRESH = 40 ;
const DISTANCE_TO_LOAD_MORE = 40 ;
const DISTANCE_TO_AUTO_LOAD_MORE = -20 ;

let staticParentEle;
let onRefresh = function () {};

let state = {
    banScroll: false,
    loaderState: STATS.init|| '',
    pullHeight: 0,
    progressed: 0
};

function canRefresh() {
    return [STATS.refreshing, STATS.loading].indexOf(state.loaderState) < 0;
}

// 拖拽的缓动公式 - easeOutSine
function easing (distance) {
    // t: current time, b: begInnIng value, c: change In value, d: duration
    var t = distance;
    var b = 0;
    var d = screen.availHeight; // 允许拖拽的最大距离
    var c = d / 2.5; // 提示标签最大有效拖拽距离

    return c * Math.sin(t / d * (Math.PI / 2)) + b;
}

function css(ele, cssName) {
    let _cssName = cssName.replace(/(-(\w))/g, function(matched, $1, $2){ return String.prototype.toUpperCase.call($2); });

    return window.getComputedStyle(ele)[_cssName];
}

function getStaticParent(ele) {
    if (css(ele, 'overflow-y') == 'auto' || css(ele, 'overflow-y') == 'scroll') {
        return ele;
    } else {
        return getStaticParent(ele.parentElement);
    }
}

function setState(newState, ele) {
    let parentEl = ele.parentElement;
    if (state.loaderState != newState.loaderState) {
        `state-${state.loaderState}`.split(' ').map(cls => {
            parentEl.classList.remove(cls);
        });
        `state-${newState.loaderState}`.split(' ').map(cls => {
            parentEl.classList.add(cls);
        });
    }
    Object.assign(state, newState);
    ele.style.transform = `translate3d(0, ${state.pullHeight}px, 0)`;
    ele.style.WebkitTransform = `translate3d(0, ${state.pullHeight}px, 0)`;
}

function initTouchEvent(ele) {
    let startX = 0,
        endX = 0,
        startY = 0,
        endY = 0,
        _initialWrapperScrollTop = 0;

    ele._on = ele.addEventListener || ele.attachEvent;

    ele._on('touchstart', function(e) {
        if(!canRefresh()) return;
       

        let point = e.touches[0];
        let parentWrapper = ele.parentElement;

        startX = point.screenX;
        startY = point.screenY;
        _initialWrapperScrollTop = parentWrapper.scrollTop;
    }, false);

    ele._on('touchmove', function(e) {
        //e.preventDefault();

        let point = e.touches[0];

        endX = point.screenX;
        endY = point.screenY;

        if(!canRefresh()) return;
        let parentWrapper = ele.parentElement;
        var scrollTop = staticParentEle.scrollTop;
        var distance = diffY();

        if(distance > 0 && scrollTop <= 0) {
            var pullDistance = distance - _initialWrapperScrollTop;
            if(pullDistance < 0) {
            // 修复webview滚动过程中touchstart时计算panel.scrollTop不准
                pullDistance = 0;
                _initialWrapperScrollTop = distance;
            }
            var pullHeight = easing(pullDistance);
            if(pullHeight) {
                e.preventDefault();// 减弱滚动
            }
            setState({
                loaderState: pullHeight > DISTANCE_TO_REFRESH ? STATS.enough : STATS.pulling,
                pullHeight: pullHeight
            }, ele);
        }
    });

    ele._on('touchend', function(e) {

        if(!canRefresh()) return;
        var endState = {
            loaderState: STATS.reset,
            pullHeight: 0
        };

        if (state.loaderState == STATS.enough) {
            // refreshing
            setState({
                loaderState: STATS.refreshing
            }, ele);

            // trigger refresh action
            onRefresh(function(){
                // resolve
                setState({
                    loaderState: STATS.refreshed,
                    pullHeight: 0
                }, ele);
            }.bind(this), function(){
            // reject
                setState(endState, ele);// reset
            }.bind(this));
        }else {
            setState(endState, ele);// reset
        }
    }, false);

    function diffY () {
        return endY - startY;
    }
}

function initLoadingIcon(targetEl) {

    targetEl.parentElement.classList.add('tloader');
    targetEl.classList.add('tloader-body');
    targetEl.insertAdjacentHTML('beforebegin',
        '<div class="tloader-symbol">'+
          '<div class="tloader-msg" >'+
            '<i class = "com-icon com-icon-arrow-down"></i>'+
          '</div>'+
          '<div class ="tloader-loading" >'+
            '<i class="ui-loading"></i>'+
          '</div>'+
        '</div>'
    );

}

export default Vue.directive('pull-refresh', {
    inserted: function (el, binding, vnode) {
        onRefresh = binding.value;
        staticParentEle = getStaticParent(el);
        initTouchEvent(el);
        initLoadingIcon(el);
    },
    unbind: function (el) {
        let loaderSymbol = el.parentElement && el.parentElement.querySelector('.tloader-symbol');

        if (loaderSymbol && loaderSymbol.parentNode) {
            loaderSymbol.parentNode.removeChild(loaderSymbol);
        }
    }
});
