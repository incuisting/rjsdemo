import '../style.css';

let $ = require('jquery'),
    GoTop = require('./com/GoTop.js'),
    SliderShow = require('./com/SliderShow.js'),
    WaterFull = require('./com/WaterFull.js');

let $sliderShowContainer = $('.wrap');
// let imgHeight = $sliderShowContainer.height();
// let imgWidth = $sliderShowContainer.width();
// let imgCount = 1080;
// let imgSrc = `https://unsplash.it/${imgWidth}/${imgHeight}/?image=${imgCount}`



// let imgList = $sliderShowContainer.find('img');
// console.log('imgList', imgList);
// console.log('imgList[0]', $(imgList[0]));
// $(imgList[0]).load(function() {
//     //列表里的第一张图片加载完毕之后，为了得到图片的宽高
//     console.log('要开始设置轮播了');
// })
new SliderShow($('.wrap'));




new GoTop($('body'));

let $container = $('.portfolio-list'),
    $targetNode = $('.portfolio-list>li'),
    $loadMoreButton = $('.load-more'),
    WaterFullImage = $targetNode.find('img');

$(WaterFullImage[WaterFullImage.length - 1]).load(function() {
    new WaterFull($container, $targetNode, $loadMoreButton);
    console.log('aa');
    //初始列表里的第一张图片加载完毕后开始瀑布流布局
})