function boss() {
     // 获取元素值
     var wrap = document.getElementById('wrap');
     var roll = document.getElementById('roll');
     var imgs = roll.getElementsByTagName('img');

     var lefts = document.getElementById('left');
     var rights = document.getElementById('right');


     var step = 0;

     var width = imgs[0].offsetWidth*imgs.length;

     // 自动滚

     function gun() {
     	// 定时
     	time = setInterval(function () {

            dong();

     	},2000);    
     }
     // 动
    function dong() {

         step = step - 790;

         if (step <= -width) {
            step = 0;
         }
    	roll.style.left = step +"px";
    }
    
    // 点击左移动
    lefts.onclick = function () {
     var step = roll.offsetLeft/-790;
     console.log(step);

       step--;

        if (step<0) {
            step = 7;
        }
       roll.style.left=-790*step+"px";
    }
    // 点击右移动
     rights.onclick = function () {
     var step = roll.offsetLeft/-790;
     console.log(step);

       step++;

        if (step >7) {
            step = 0;
        }
       roll.style.left=-790*step+"px";
    }

    // ===========
    
    function init() {
    	gun();
    }
    init();
}
boss();