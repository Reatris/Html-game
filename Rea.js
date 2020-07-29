


function part0() {
    
    
}
function bossrun(){

    setInterval(function(){
        //var mainscreen=document.getElementById('mainscreen');
        console.info(Boss)
        if(Boss!=undefined){
            console.info('sss')
            mainscreen.removeChild(Boss);
            //Boss.remove(); 
        }
        var Boss = document.createElement('div');
        Boss.className = 'boss';
        Boss.style.backgroundColor='red';
        Boss.style.width='100px';
        Boss.style.position='absolute';
        Boss.style.height='100px';
        Boss.style.left = plane.offsetLeft + 53 +'px';/* 定义子弹出现的位置 */
        Boss.style.top = plane.offsetTop -10 + 'px';
        mainscreen.appendChild(Boss);//创建一个子弹
    },500)
}