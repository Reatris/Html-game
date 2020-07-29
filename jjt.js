//键盘上下左右控制飞机移动
var fj=document.getElementById("airplane");
				document.onkeydown=function(e){
					var e=window.event||e;
				switch(e.keyCode){
				case 37: //左
				fj.style.left=(fj.offsetLeft-20)+"px";
				console.log("向左");
				break; 
				case 38: //上
				fj.style.top=(fj.offsetTop-20)+"px";
				console.log("向上");
				break;
				case 39:  //右
				fj.style.left=(fj.offsetLeft+20)+"px";
				console.log("向右");
				break;	
				case 40:  //下
				fj.style.top=(fj.offsetTop+20)+"px";
				console.log("向下");
				break;			
					}
					
				}
				//随机生成小行星，增加难度
				function create(){
					var div=document.getElementById("bg");
			        var x = (Math.floor(Math.random()*div.offsetWidth)).toString();
					var y = (Math.floor(Math.random()*div.offsetHeight)).toString();
				    var pl= document.createElement("div");
					pl.className = 'pl';
				        pl.style.position ='absolute';
				        pl.style.width = "50px";
				        pl.style.height = "37px";
						pl.style.backgroundImage = 'url(img/jjtxxx.png)';
						pl.style.backgroundSize='cover';
				        pl.style.left = x +"px";
				        pl.style.top = y+"px";
						// pl.style.border-radius="10px";
				        div.appendChild(pl);
				
				};
			   var timer = setInterval(function(){ create() }, 10000);
				//小行星和敌人碰撞检测
				setInterval(function(){
					var alltanks = document.getElementsByClassName('tank');//用于获取敌人的数据
					var allpls = document.getElementsByClassName('pl');//用于获取小行星的数据
					for(var i = 0;i < allpls.length;i++){
						for(var j = 0;j < alltanks.length;j++){
							var b = allpls[i];
							var t = alltanks[j];
							//小行星和敌人碰撞检测，然后全部移除
							if(pzjcfun(b,t)){
								mainscreen.removeChild(b);
								mainscreen.removeChild(t);
							}
						}
					}
				},10)
				var pzjcfun = function(obj1,obj2){//检测飞机是否与敌人相遇
					var obj1left = obj1.offsetLeft;
					var obj1top = obj1.offsetTop;
					var obj1width = obj1left + obj1.offsetWidth;
					var obj1height = obj1top + obj1.offsetHeight ;
					
					var obj2left = obj2.offsetLeft;
					var obj2top = obj2.offsetTop;
					var obj2width = obj2left + obj2.offsetWidth;
					var obj2height = obj2top + obj2.offsetHeight ;
					
					if( !(obj1left > obj2width || obj1width < obj2left ||obj1top > obj2height ||obj1height < obj2top)){
						console.info('sss212')
						return true;
					}else{
						return false;
					}
				}
				//飞机碰到小行星,飞机坠毁
				setInterval(function(){
					var allpls = document.getElementsByClassName('pl')
				
					for(var i = 0;i < allpls.length;i++){
						if(pzjcfun(allpls[i],plane)){
							for(var j = 0;j<100;j++){
								clearInterval(j);
							}
							var gameover = document.createElement('p');
							gameover.className = 'gameover';
							gameover.innerHTML = '你失败了，游戏结束';
							mainscreen.appendChild(gameover);
							break;
						}
					}
				},100)