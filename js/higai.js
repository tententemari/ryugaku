var tabs = document.getElementById('left_menu_tab').getElementsByClassName('menu-tab');
var pages = document.getElementById('tab_content').getElementsByClassName('tab-content');


function changeTab() {
    var targetid = this.href.substring(this.href.indexOf('#') + 1, this.href.length);

    for(var i=0; i<pages.length; i++) {
           tabs[i].removeAttribute('style');

        if( pages[i].id != targetid ) {
           pages[i].style.display = "none";

        }
        else {
           pages[i].style.display = "block";
           tabs[i].style.color = "var(--color-black)";
           tabs[i].style.backgroundColor = "var(--white-alternative)";
        }
    }
    return false;
}

for(var i=0; i<tabs.length; i++) {
   tabs[i].onclick = changeTab;
}


var param = location.search;
var selected_tabs = param.slice(1);

if(selected_tabs.length != 0){
    for(var i=0; i<tabs.length; i++) {
        var tab_content = tabs[i].href.substring(tabs[i].href.indexOf('#') + 1, tabs[i].href.length);
        if( tab_content == selected_tabs){
            tabs[i].onclick();
            break;
        }
        else {
            tabs[0].onclick();
        }
    }
}
else{
    tabs[0].onclick();
}
