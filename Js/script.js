	//header menu btn click
	var menu_open = true;//打开菜单
	var opened = false;//判断是否点击过
	var ele_Menu = document.getElementById("hd-menu-btn");
	var menu_list = document.getElementById("hd-menu-list");
	ele_Menu.onclick = function(){
		if(menu_open){ //打开菜单
			if(opened){
				return false;
			}else{
				ele_Menu.className += " hd-menu-open";
				opened = true;
				document.getElementsByTagName("progress")[0].style.display = "none";
				setTimeout(function(){
					menu_list.className += " hd-mlist-open";
					menu_open = false;
					opened = false;
					
				},300)
			}
		}else{ //关闭菜单
			if(opened){
				return false;
			}else{
				ele_Menu.className = "hd-menu-btn";
				menu_list.className += " hd-mlist-closed";
				
				opened = true;
				setTimeout(function(){
					menu_list.className = "hd-menu-list detail-menu-list";
					menu_open = true;
					opened = false;
					document.getElementsByTagName("progress")[0].style.display = "block";
				},800);
			}
		}
	}