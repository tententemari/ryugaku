var tabs = document.getElementById('tab_panel').getElementsByClassName('menu-tab');
var pages = document.getElementById('content_panel').getElementsByClassName('tab-content');


function changeTab() {
    var targetid = this.href.substring(this.href.indexOf('#') + 1, this.href.length);

    for(var i=0; i<pages.length; i++) {

        if( pages[i].id == targetid ) {
            /* 選択されたタブのパラメータでurlを書き換える */
            history.replaceState('tab-change','','?' + targetid);

            /* ページのトップへスクロール */
            var current_scroll = Math.max(document.documentElement.scrollTop || document.body.scrollTop);
            scrollBy( 0, -current_scroll);

            /* 選択されたページの表示、タブのスタイル変更 */
            tabs[i].classList.add('selected-tab');
            pages[i].classList.add('selected-content');
        }
        else {
            tabs[i].classList.remove('selected-tab');
            pages[i].classList.remove('selected-content');
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
