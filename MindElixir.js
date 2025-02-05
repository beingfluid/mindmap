(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".mind-elixir{--gap: 30px;--root-radius: 30px;--main-radius: 20px;--root-color: #ffffff;--root-bgcolor: #4c4f69;--root-border-color: rgba(0, 0, 0, 0);--main-color: #444446;--main-bgcolor: #ffffff;--topic-padding: 3px;--color: #777777;--bgcolor: #f6f6f6;--selected: #4dc4ff;--panel-color: #444446;--panel-bgcolor: #ffffff;--panel-border-color: #eaeaea;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif}.mind-elixir .hyper-link{text-decoration:none;margin-left:.3em}.map-container{-webkit-user-select:none;user-select:none;height:100%;width:100%;overflow:scroll;font-size:15px}.map-container *{box-sizing:border-box}.map-container::-webkit-scrollbar{width:0px;height:0px}.map-container .selected{outline:2px solid var(--selected);outline-offset:1px}.map-container .lhs{direction:rtl}.map-container .lhs me-tpc{direction:ltr}.map-container .map-canvas{height:20000px;width:20000px;position:relative;-webkit-user-select:none;user-select:none;transition:transform .3s;transform:scale(1);background-color:var(--bgcolor)}.map-container .map-canvas me-nodes{position:absolute;display:flex;justify-content:center;align-items:center;height:fit-content;width:fit-content}.map-container .map-canvas me-root{position:relative}.map-container .map-canvas me-root me-tpc{display:block;font-size:25px;color:var(--root-color);padding:10px var(--gap);border-radius:var(--root-radius);border:var(--root-border-color) 2px solid;white-space:pre-wrap;background-color:var(--root-bgcolor)}.map-container me-main>me-wrapper{position:relative;margin:45px 65px}.map-container me-main>me-wrapper>me-parent{margin:10px;padding:0}.map-container me-main>me-wrapper>me-parent>me-tpc{border-radius:var(--main-radius);background-color:var(--main-bgcolor);border:2px solid var(--main-color);color:var(--main-color);padding:8px 25px}.map-container me-wrapper{display:block;pointer-events:none;width:fit-content}.map-container me-children,.map-container me-parent{display:inline-block;vertical-align:middle}.map-container me-parent{position:relative;cursor:pointer;padding:6px var(--gap);margin-top:10px}.map-container me-parent me-tpc{position:relative;display:block;border-radius:3px;color:var(--color);pointer-events:all;max-width:35em;white-space:pre-wrap;padding:var(--topic-padding)}.map-container me-parent me-tpc .insert-preview{position:absolute;width:100%;left:0;z-index:9}.map-container me-parent me-tpc .show{background:#7ad5ff;pointer-events:none;opacity:.7}.map-container me-parent me-tpc .before{height:14px;top:-14px}.map-container me-parent me-tpc .in{height:100%;top:0}.map-container me-parent me-tpc .after{height:14px;bottom:-14px}.map-container me-parent me-epd{position:absolute;height:18px;width:18px;opacity:.8;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdD0iMTY1NjY1NDcxNzI0MiIgY2xhc3M9Imljb24iIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgICA8cGF0aCBkPSJNNTEyIDc0LjY2NjY2N0MyNzAuOTMzMzMzIDc0LjY2NjY2NyA3NC42NjY2NjcgMjcwLjkzMzMzMyA3NC42NjY2NjcgNTEyUzI3MC45MzMzMzMgOTQ5LjMzMzMzMyA1MTIgOTQ5LjMzMzMzMyA5NDkuMzMzMzMzIDc1My4wNjY2NjcgOTQ5LjMzMzMzMyA1MTIgNzUzLjA2NjY2NyA3NC42NjY2NjcgNTEyIDc0LjY2NjY2N3oiIHN0cm9rZS13aWR0aD0iNTQiIHN0cm9rZT0nYmxhY2snIGZpbGw9J3doaXRlJyA+PC9wYXRoPgogICAgPHBhdGggZD0iTTY4Mi42NjY2NjcgNDgwaC0xMzguNjY2NjY3VjM0MS4zMzMzMzNjMC0xNy4wNjY2NjctMTQuOTMzMzMzLTMyLTMyLTMycy0zMiAxNC45MzMzMzMtMzIgMzJ2MTM4LjY2NjY2N0gzNDEuMzMzMzMzYy0xNy4wNjY2NjcgMC0zMiAxNC45MzMzMzMtMzIgMzJzMTQuOTMzMzMzIDMyIDMyIDMyaDEzOC42NjY2NjdWNjgyLjY2NjY2N2MwIDE3LjA2NjY2NyAxNC45MzMzMzMgMzIgMzIgMzJzMzItMTQuOTMzMzMzIDMyLTMydi0xMzguNjY2NjY3SDY4Mi42NjY2NjdjMTcuMDY2NjY3IDAgMzItMTQuOTMzMzMzIDMyLTMycy0xNC45MzMzMzMtMzItMzItMzJ6Ij48L3BhdGg+Cjwvc3ZnPg==);background-repeat:no-repeat;background-size:contain;background-position:center;pointer-events:all;z-index:9}.map-container me-parent me-epd.minus{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdD0iMTY1NjY1NTU2NDk4NSIgY2xhc3M9Imljb24iIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgICA8cGF0aCBkPSJNNTEyIDc0LjY2NjY2N0MyNzAuOTMzMzMzIDc0LjY2NjY2NyA3NC42NjY2NjcgMjcwLjkzMzMzMyA3NC42NjY2NjcgNTEyUzI3MC45MzMzMzMgOTQ5LjMzMzMzMyA1MTIgOTQ5LjMzMzMzMyA5NDkuMzMzMzMzIDc1My4wNjY2NjcgOTQ5LjMzMzMzMyA1MTIgNzUzLjA2NjY2NyA3NC42NjY2NjcgNTEyIDc0LjY2NjY2N3oiIHN0cm9rZS13aWR0aD0iNTQiIHN0cm9rZT0nYmxhY2snIGZpbGw9J3doaXRlJyA+PC9wYXRoPgogICAgPHBhdGggZD0iTTY4Mi42NjY2NjcgNTQ0SDM0MS4zMzMzMzNjLTE3LjA2NjY2NyAwLTMyLTE0LjkzMzMzMy0zMi0zMnMxNC45MzMzMzMtMzIgMzItMzJoMzQxLjMzMzMzNGMxNy4wNjY2NjcgMCAzMiAxNC45MzMzMzMgMzIgMzJzLTE0LjkzMzMzMyAzMi0zMiAzMnoiPjwvcGF0aD4KPC9zdmc+)!important;transition:opacity .3s;opacity:0}.map-container me-parent me-epd.minus:hover{opacity:.8}.map-container .icon{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}.map-container .lines,.map-container .summary,.map-container .subLines,.map-container .topiclinks,.map-container .linkcontroller{position:absolute;height:102%;width:100%;top:0;left:0}.map-container .topiclinks,.map-container .linkcontroller,.map-container .summary{pointer-events:none}.map-container .topiclinks text,.map-container .linkcontroller text,.map-container .summary text{pointer-events:all}.map-container .topiclinks .selected,.map-container .linkcontroller .selected,.map-container .summary .selected{pointer-events:none}.map-container .lines,.map-container .subLines{pointer-events:none;z-index:-1}.map-container .topiclinks *,.map-container .linkcontroller *{z-index:100}.map-container .topiclinks g{cursor:pointer}.map-container #input-box{position:absolute;top:0;left:0;width:max-content;max-width:35em;z-index:11;direction:ltr;-webkit-user-select:auto;user-select:auto;pointer-events:auto;background-color:var(--bgcolor)}.map-container me-tpc>*{pointer-events:none}.map-container me-tpc>a{pointer-events:auto}.map-container me-tpc>img{display:block;margin-bottom:8px;object-fit:cover}.map-container me-tpc>.text{display:inline-block}.map-container .circle{position:absolute;height:10px;width:10px;margin-top:-5px;margin-left:-5px;border-radius:100%;background:#757575;border:2px solid #ffffff;cursor:pointer}.map-container .tags{direction:ltr}.map-container .tags span{display:inline-block;border-radius:3px;padding:2px 4px;background:#d6f0f8;color:#276f86;margin:2px 4px 0 0;font-size:12px;line-height:1.3em}.map-container .icons{display:inline-block;direction:ltr;margin-left:5px}.map-container .icons span{display:inline-block;line-height:1.3em}.map-container .mind-elixir-ghost{position:fixed;top:-100%;left:-100%;box-sizing:content-box;opacity:.5;background-color:#f6f6f6;max-width:200px;width:fit-content;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:8px 16px;border-radius:6px;border:#666666 2px solid}.map-container .selection-area{background:#4f90f22d;border:1px solid #4f90f2}.mind-elixir .context-menu{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99}.mind-elixir .context-menu .menu-list{position:fixed;list-style:none;margin:0;padding:0;color:var(--panel-color);box-shadow:0 12px 15px #0003;border-radius:5px;overflow:hidden}.mind-elixir .context-menu .menu-list li{min-width:200px;overflow:hidden;white-space:nowrap;padding:6px 10px;background:var(--panel-bgcolor);border-bottom:1px solid var(--panel-border-color);cursor:pointer}.mind-elixir .context-menu .menu-list li span{line-height:20px}.mind-elixir .context-menu .menu-list li a{color:#333;text-decoration:none}.mind-elixir .context-menu .menu-list li.disabled{display:none}.mind-elixir .context-menu .menu-list li:hover{filter:brightness(.95)}.mind-elixir .context-menu .menu-list li:last-child{border-bottom:0}.mind-elixir .context-menu .menu-list li span:last-child{float:right}.mind-elixir .context-menu .key{font-size:10px;background-color:#f1f1f1;color:#333;padding:2px 5px;border-radius:3px}.mind-elixir .tips{position:absolute;bottom:20px;left:50%;transform:translate(-50%);color:var(--panel-color);font-weight:bolder}.mind-elixir-toolbar{font-family:iconfont;position:absolute;color:var(--panel-color);background:var(--panel-bgcolor);padding:10px;border-radius:5px;box-shadow:0 1px 2px #0003}.mind-elixir-toolbar svg{display:inline-block}.mind-elixir-toolbar span:active{opacity:.5}.mind-elixir-toolbar.rb{right:20px;bottom:20px}.mind-elixir-toolbar.rb span+span{margin-left:10px}.mind-elixir-toolbar.lt{font-size:20px;left:20px;top:20px}.mind-elixir-toolbar.lt span{display:block}.mind-elixir-toolbar.lt span+span{margin-top:10px}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
(function(e) {
  var t, n, o, s, i, r, c = '<svg><symbol id="icon-edit" viewBox="0 0 1024 1024"><path d="M423.765333 128a42.666667 42.666667 0 0 1 3.2 85.205333L423.765333 213.333333H234.666667a64 64 0 0 0-63.872 60.245334L170.666667 277.333333v512a64 64 0 0 0 60.245333 63.872L234.666667 853.333333h512a64 64 0 0 0 63.872-60.245333L810.666667 789.333333v-189.098666a42.666667 42.666667 0 0 1 85.205333-3.2l0.128 3.2V789.333333a149.333333 149.333333 0 0 1-144.213333 149.248L746.666667 938.666667h-512a149.333333 149.333333 0 0 1-149.248-144.213334L85.333333 789.333333v-512a149.333333 149.333333 0 0 1 144.213334-149.248L234.666667 128h189.098666z m324.949334-53.248a42.666667 42.666667 0 0 1 60.330666 0l150.869334 150.869333a42.666667 42.666667 0 0 1 0 60.330667l-329.386667 329.386667a42.666667 42.666667 0 0 1-29.44 12.458666l-153.386667 2.517334a42.666667 42.666667 0 0 1-43.349333-43.349334l2.56-153.386666a42.666667 42.666667 0 0 1 12.458667-29.44z m30.165333 90.496L491.946667 452.266667l-1.493334 91.989333 92.032-1.493333 286.976-286.976-90.538666-90.538667z"  ></path></symbol><symbol id="icon-rising" viewBox="0 0 1024 1024"><path d="M553.173333 803.84h-64l0.021334-474.581333-224.021334 224-45.269333-45.226667L521.6 206.293333l301.717333 301.696-45.269333 45.269334-224.853333-224.896v475.477333z"  ></path></symbol><symbol id="icon-falling" viewBox="0 0 1024 1024"><path d="M553.173333 238.314667h-64l0.021334 474.602666-224.021334-224-45.269333 45.226667L521.6 835.861333l301.717333-301.717333-45.269333-45.226667-224.853333 224.853334V238.336z"  ></path></symbol><symbol id="icon-shanchu2" viewBox="0 0 1024 1024"><path d="M516.60601807 107.93026734c-82.64382935 0-149.71865844 65.51751709-152.5729065 147.77160644H171.37136841c-21.40603638 0-38.92044068 17.38504028-38.92044068 38.92126465 0 21.40686036 17.38504028 38.92208862 38.92126466 38.92208862h42.94308471v435.40136719c0 81.73498536 55.39828492 148.55026245 123.90106201 148.55026245h348.99444581c68.37341309 0 123.90106201-66.42553711 123.901062-148.55026245V333.80477906h38.92126465c21.40686036 0 38.92126464-17.38586426 38.92126465-38.92208863 0-21.40686036-17.38504028-38.92126464-38.92126465-38.92126465H668.91854859C666.45321656 173.44860839 599.24902344 107.93109131 516.60601807 107.93109131z m-79.65939331 147.77160644c2.85424805-42.16442872 37.2354126-74.85809326 79.78875732-74.85809326s76.93450927 32.82302857 79.39984131 74.85809326H436.94662476z m-98.86047364 589.01165771c-24.2611084 0-50.98754883-31.13717651-50.98754883-75.76693725V333.80477906h450.97036744V769.33551026c0 44.50039673-26.72644043 75.76776123-50.98754884 75.76776122H338.08615112v-0.38973999z m0 0"  ></path><path d="M390.37063599 751.17263794c17.77313232 0 32.43411255-17.7739563 32.43411255-40.08883667V482.35504151c0-22.31488037-14.53079224-40.08966065-32.43411255-40.08966065-17.77478027 0-32.43493653 17.77478027-32.43493653 40.08966065v228.72875976c0 22.18469239 14.27124023 40.08883667 32.43493653 40.08883667z m117.41308594 0c17.7739563 0 32.43411255-17.7739563 32.43411255-40.08883667V482.35504151c0-22.31488037-14.53079224-40.08966065-32.43411255-40.08966065-17.7739563 0-32.43493653 17.77478027-32.43493653 40.08966065v228.72875976c0 22.18469239 14.66098023 40.08883667 32.43493653 40.08883667z m123.51049804 0c17.7739563 0 32.43493653-17.7739563 32.43493652-40.08883667V482.35504151c0-22.31488037-14.53079224-40.08966065-32.43493652-40.08966065-17.7739563 0-32.43411255 17.77478027-32.43411255 40.08966065v228.72875976c0 22.18469239 14.14105224 40.08883667 32.43411255 40.08883667z m0 0"  ></path></symbol><symbol id="icon-zijiedian" viewBox="0 0 1024 1024"><path d="M312.208 472c19.568-157.856 153.432-280 315.656-280 175.68 0 318.112 143.272 318.112 320S803.552 832 627.864 832c-162.224 0-296.08-122.144-315.656-280H120a40 40 0 0 1 0-80h192.208zM632 752c132.552 0 240-107.448 240-240 0-132.552-107.448-240-240-240-132.552 0-240 107.448-240 240 0 132.552 107.448 240 240 240z m-40-280v-80a40 40 0 0 1 80 0v80h80a40 40 0 0 1 0 80h-80v80a40 40 0 0 1-80 0v-80h-80a40 40 0 0 1 0-80h80z"  ></path></symbol><symbol id="icon-tongjijiedian-" viewBox="0 0 1024 1024"><path d="M803.84 131.626667H410.24A59.733333 59.733333 0 0 0 350.506667 192v45.226667H199.68a51.626667 51.626667 0 0 0-51.626667 51.626666v465.92a51.626667 51.626667 0 0 0 51.626667 51.626667h187.52v-55.466667h-162.133333a21.333333 21.333333 0 0 1-21.333334-21.333333V313.386667a21.333333 21.333333 0 0 1 21.333334-21.333334h125.653333v64a59.733333 59.733333 0 0 0 59.733333 59.733334h393.386667a59.733333 59.733333 0 0 0 59.733333-59.733334V192a59.733333 59.733333 0 0 0-59.733333-60.373333z m4.266667 224.64a4.266667 4.266667 0 0 1-4.266667 4.266666H410.24a4.266667 4.266667 0 0 1-4.266667-4.266666V192a4.266667 4.266667 0 0 1 4.266667-4.266667h393.6a4.266667 4.266667 0 0 1 4.266667 4.266667zM716.16 749.44h-81.28v-81.493333a27.733333 27.733333 0 0 0-55.466667 0v81.28h-81.493333a27.733333 27.733333 0 1 0 0 55.466666h81.28v81.28a27.733333 27.733333 0 1 0 55.466667 0v-81.066666h81.28a27.733333 27.733333 0 0 0 0-55.466667z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128L512.128 467.904l-263.04-263.84c-12.448-12.48-32.704-12.544-45.248-0.064-12.512 12.48-12.544 32.736-0.064 45.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248a31.937 31.937 0 0 0 22.688 9.44c8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408a31.94 31.94 0 0 0 22.592-9.344c12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z" fill="" ></path></symbol><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M109.714 292.571h804.572c21.943 0 36.571-21.942 36.571-43.885 0-14.629-14.628-29.257-36.571-29.257H109.714c-21.943 0-36.571 14.628-36.571 36.571 0 14.629 14.628 36.571 36.571 36.571zM914.286 512H109.714c-21.943 0-36.571 14.629-36.571 36.571 0 14.629 14.628 36.572 36.571 36.572h804.572c21.943 0 36.571-21.943 36.571-43.886 0-14.628-14.628-29.257-36.571-29.257z m0 292.571H109.714c-21.943 0-36.571 14.629-36.571 36.572s14.628 36.571 36.571 36.571h804.572c21.943 0 36.571-21.943 36.571-36.571 0-21.943-14.628-36.572-36.571-36.572z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M385 560.69999999L385 738.9c0 36.90000001 26.4 68.5 61.3 68.5l150.2 0c1.5 0 3-0.1 4.5-0.3 10.2 38.7 45.5 67.3 87.5 67.3 50 0 90.5-40.5 90.5-90.5s-40.5-90.5-90.5-90.5c-42 0-77.3 28.6-87.5 67.39999999-1.4-0.3-2.9-0.4-4.5-0.39999999L446.3 760.4c-6.8 0-14.3-8.9-14.3-21.49999999l0-427.00000001c0-12.7 7.40000001-21.5 14.30000001-21.5l150.19999999 0c1.5 0 3-0.2 4.5-0.4 10.2 38.8 45.5 67.3 87.5 67.3 50 0 90.5-40.5 90.5-90.4 0-49.9-40.5-90.6-90.5-90.59999999-42 0-77.3 28.6-87.5 67.39999999-1.4-0.2-2.9-0.4-4.49999999-0.4L446.3 243.3c-34.80000001 0-61.3 31.6-61.3 68.50000001L385 513.7l-79.1 0c-10.4-38.5-45.49999999-67-87.4-67-50 0-90.5 40.5-90.5 90.5s40.5 90.5 90.5 90.5c41.79999999 0 77.00000001-28.4 87.4-67L385 560.69999999z" fill="" ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M639 463.30000001L639 285.1c0-36.90000001-26.4-68.5-61.3-68.5l-150.2 0c-1.5 0-3 0.1-4.5 0.3-10.2-38.7-45.5-67.3-87.5-67.3-50 0-90.5 40.5-90.5 90.5s40.5 90.5 90.5 90.5c42 0 77.3-28.6 87.5-67.39999999 1.4 0.3 2.9 0.4 4.5 0.39999999L577.7 263.6c6.8 0 14.3 8.9 14.3 21.49999999l0 427.00000001c0 12.7-7.40000001 21.5-14.30000001 21.5l-150.19999999 0c-1.5 0-3 0.2-4.5 0.4-10.2-38.8-45.5-67.3-87.5-67.3-50 0-90.5 40.5-90.5 90.4 0 49.9 40.5 90.6 90.5 90.59999999 42 0 77.3-28.6 87.5-67.39999999 1.4 0.2 2.9 0.4 4.49999999 0.4L577.7 780.7c34.80000001 0 61.3-31.6 61.3-68.50000001L639 510.3l79.1 0c10.4 38.5 45.49999999 67 87.4 67 50 0 90.5-40.5 90.5-90.5s-40.5-90.5-90.5-90.5c-41.79999999 0-77.00000001 28.4-87.4 67L639 463.30000001z" fill="" ></path></symbol><symbol id="icon-side" viewBox="0 0 1024 1024"><path d="M851.91168 328.45312c-59.97056 0-108.6208 48.47104-108.91264 108.36992l-137.92768 38.4a109.14304 109.14304 0 0 0-63.46752-46.58688l1.39264-137.11872c47.29344-11.86816 82.31936-54.66624 82.31936-105.64096 0-60.15488-48.76288-108.91776-108.91776-108.91776s-108.91776 48.76288-108.91776 108.91776c0 49.18784 32.60928 90.75712 77.38368 104.27392l-1.41312 138.87488a109.19936 109.19936 0 0 0-63.50336 48.55808l-138.93632-39.48544 0.01024-0.72704c0-60.15488-48.76288-108.91776-108.91776-108.91776s-108.91776 48.75776-108.91776 108.91776c0 60.15488 48.76288 108.91264 108.91776 108.91264 39.3984 0 73.91232-20.92032 93.03552-52.2496l139.19232 39.552-0.00512 0.2304c0 25.8304 9.00096 49.5616 24.02816 68.23424l-90.14272 132.63872a108.7488 108.7488 0 0 0-34.2528-5.504c-60.15488 0-108.91776 48.768-108.91776 108.91776 0 60.16 48.76288 108.91776 108.91776 108.91776 60.16 0 108.92288-48.75776 108.92288-108.91776 0-27.14624-9.9328-51.968-26.36288-71.04l89.04704-131.03104a108.544 108.544 0 0 0 37.6832 6.70208 108.672 108.672 0 0 0 36.48512-6.272l93.13792 132.57216a108.48256 108.48256 0 0 0-24.69888 69.0688c0 60.16 48.768 108.92288 108.91776 108.92288 60.16 0 108.91776-48.76288 108.91776-108.92288 0-60.14976-48.75776-108.91776-108.91776-108.91776a108.80512 108.80512 0 0 0-36.69504 6.3488l-93.07136-132.48a108.48768 108.48768 0 0 0 24.79616-72.22784l136.09984-37.888c18.99008 31.93856 53.84192 53.3504 93.69088 53.3504 60.16 0 108.92288-48.75776 108.92288-108.91264-0.00512-60.15488-48.77312-108.92288-108.92288-108.92288z"  ></path></symbol><symbol id="icon-B" viewBox="0 0 1024 1024"><path d="M98.067692 65.457231H481.28c75.854769 0 132.411077 3.150769 169.668923 9.452307 37.336615 6.301538 70.656 19.534769 100.036923 39.620924 29.459692 20.007385 53.956923 46.710154 73.570462 80.029538 19.692308 33.398154 29.459692 70.734769 29.459692 112.167385 0 44.898462-12.130462 86.094769-36.233846 123.588923a224.886154 224.886154 0 0 1-98.461539 84.283077c58.368 17.092923 103.266462 46.08 134.695385 87.04 31.350154 40.96 47.025231 89.088 47.025231 144.462769 0 43.638154-10.082462 86.016-30.404923 127.212308-20.243692 41.196308-47.891692 74.043077-83.02277 98.697846-35.052308 24.654769-78.296615 39.778462-129.732923 45.449846-32.295385 3.465846-110.119385 5.671385-233.472 6.537846H98.067692V65.457231z m193.536 159.507692V446.621538h126.818462c75.460923 0 122.328615-1.024 140.603077-3.229538 33.083077-3.938462 59.155692-15.36 78.139077-34.343385 18.904615-18.904615 28.435692-43.874462 28.435692-74.830769 0-29.696-8.192-53.720615-24.497231-72.310154-16.384-18.510769-40.644923-29.696-72.940307-33.634461-19.140923-2.205538-74.279385-3.308308-165.415385-3.308308h-111.064615z m0 381.243077v256.315077h179.2c69.710769 0 113.979077-1.969231 132.726154-5.907692 28.750769-5.198769 52.145231-17.959385 70.262154-38.281847 18.116923-20.243692 27.096615-47.340308 27.096615-81.368615 0-28.750769-6.931692-53.169231-20.873846-73.255385a118.232615 118.232615 0 0 0-60.494769-43.795692c-26.387692-9.137231-83.574154-13.705846-171.638154-13.705846H291.603692z"  ></path></symbol><symbol id="icon-a" viewBox="0 0 1024 1024"><path d="M757.76 665.6q0 20.48 1.536 34.304t7.68 22.016 18.944 12.288 34.304 4.096q-3.072 25.6-15.36 44.032-11.264 16.384-33.28 29.696t-62.976 13.312q-11.264 0-20.48-0.512t-17.408-2.56l-6.144-2.048-1.024 0q-4.096-1.024-10.24-4.096-2.048-2.048-4.096-2.048-1.024-1.024-2.048-1.024-14.336-8.192-23.552-17.408t-14.336-17.408q-6.144-10.24-9.216-20.48-63.488 75.776-178.176 75.776-48.128 0-88.064-15.36t-69.12-44.032-45.056-68.096-15.872-88.576 16.896-89.088 47.616-67.584 74.24-42.496 96.768-14.848q48.128 0 88.576 17.408t66.048 49.152q0-8.192 0.512-16.384t0.512-15.36q0-71.68-39.936-104.448t-128-32.768q-43.008 0-84.992 6.656t-84.992 17.92q14.336-28.672 25.088-47.616t24.064-29.184q30.72-24.576 158.72-24.576 79.872 0 135.168 13.824t90.624 43.52 51.2 75.264 15.872 108.032l0 200.704zM487.424 743.424q50.176 0 79.872-33.28t29.696-95.744q0-61.44-28.672-93.696t-76.8-32.256q-52.224 0-82.944 33.28t-30.72 94.72q0 58.368 31.744 92.672t77.824 34.304z"  ></path></symbol><symbol id="icon-full" viewBox="0 0 1024 1024"><path d="M639.328 416c8.032 0 16.096-3.008 22.304-9.056l202.624-197.184-0.8 143.808c-0.096 17.696 14.144 32.096 31.808 32.192 0.064 0 0.128 0 0.192 0 17.6 0 31.904-14.208 32-31.808l1.248-222.208c0-0.672-0.352-1.248-0.384-1.92 0.032-0.512 0.288-0.896 0.288-1.408 0.032-17.664-14.272-32-31.968-32.032L671.552 96l-0.032 0c-17.664 0-31.968 14.304-32 31.968C639.488 145.632 653.824 160 671.488 160l151.872 0.224-206.368 200.8c-12.672 12.32-12.928 32.608-0.64 45.248C622.656 412.736 630.976 416 639.328 416z"  ></path><path d="M896.032 639.552 896.032 639.552c-17.696 0-32 14.304-32.032 31.968l-0.224 151.872-200.832-206.4c-12.32-12.64-32.576-12.96-45.248-0.64-12.672 12.352-12.928 32.608-0.64 45.248l197.184 202.624-143.808-0.8c-0.064 0-0.128 0-0.192 0-17.6 0-31.904 14.208-32 31.808-0.096 17.696 14.144 32.096 31.808 32.192l222.24 1.248c0.064 0 0.128 0 0.192 0 0.64 0 1.12-0.32 1.76-0.352 0.512 0.032 0.896 0.288 1.408 0.288l0.032 0c17.664 0 31.968-14.304 32-31.968L928 671.584C928.032 653.952 913.728 639.584 896.032 639.552z"  ></path><path d="M209.76 159.744l143.808 0.8c0.064 0 0.128 0 0.192 0 17.6 0 31.904-14.208 32-31.808 0.096-17.696-14.144-32.096-31.808-32.192L131.68 95.328c-0.064 0-0.128 0-0.192 0-0.672 0-1.248 0.352-1.888 0.384-0.448 0-0.8-0.256-1.248-0.256 0 0-0.032 0-0.032 0-17.664 0-31.968 14.304-32 31.968L96 352.448c-0.032 17.664 14.272 32 31.968 32.032 0 0 0.032 0 0.032 0 17.664 0 31.968-14.304 32-31.968l0.224-151.936 200.832 206.4c6.272 6.464 14.624 9.696 22.944 9.696 8.032 0 16.096-3.008 22.304-9.056 12.672-12.32 12.96-32.608 0.64-45.248L209.76 159.744z"  ></path><path d="M362.368 617.056l-202.624 197.184 0.8-143.808c0.096-17.696-14.144-32.096-31.808-32.192-0.064 0-0.128 0-0.192 0-17.6 0-31.904 14.208-32 31.808l-1.248 222.24c0 0.704 0.352 1.312 0.384 2.016 0 0.448-0.256 0.832-0.256 1.312-0.032 17.664 14.272 32 31.968 32.032L352.448 928c0 0 0.032 0 0.032 0 17.664 0 31.968-14.304 32-31.968s-14.272-32-31.968-32.032l-151.936-0.224 206.4-200.832c12.672-12.352 12.96-32.608 0.64-45.248S375.008 604.704 362.368 617.056z"  ></path></symbol><symbol id="icon-add" viewBox="0 0 1024 1024"><path d="M863.328 482.56l-317.344-1.12L545.984 162.816c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 318.4L159.616 480.064c-0.032 0-0.064 0-0.096 0-17.632 0-31.936 14.24-32 31.904C127.424 529.632 141.728 544 159.392 544.064l322.592 1.152 0 319.168c0 17.696 14.336 32 32 32s32-14.304 32-32l0-318.944 317.088 1.12c0.064 0 0.096 0 0.128 0 17.632 0 31.936-14.24 32-31.904C895.264 496.992 880.96 482.624 863.328 482.56z"  ></path></symbol><symbol id="icon-move" viewBox="0 0 1024 1024"><path d="M863.744 544 163.424 544c-17.664 0-32-14.336-32-32s14.336-32 32-32l700.32 0c17.696 0 32 14.336 32 32S881.44 544 863.744 544z"  ></path></symbol><symbol id="icon-living" viewBox="0 0 1024 1024"><path d="M514.133333 488.533333m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="" ></path><path d="M512 64C264.533333 64 64 264.533333 64 512c0 236.8 183.466667 428.8 416 445.866667v-134.4c-53.333333-59.733333-200.533333-230.4-200.533333-334.933334 0-130.133333 104.533333-234.666667 234.666666-234.666666s234.666667 104.533333 234.666667 234.666666c0 61.866667-49.066667 153.6-145.066667 270.933334l-59.733333 68.266666V960C776.533333 942.933333 960 748.8 960 512c0-247.466667-200.533333-448-448-448z" fill="" ></path></symbol></svg>', l = (l = document.getElementsByTagName("script"))[l.length - 1].getAttribute("data-injectcss");
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch {
    }
  }
  function u() {
    i || (i = !0, o());
  }
  t = function() {
    var d, a, f, g;
    (g = document.createElement("div")).innerHTML = c, c = null, (f = g.getElementsByTagName("svg")[0]) && (f.setAttribute("aria-hidden", "true"), f.style.position = "absolute", f.style.width = 0, f.style.height = 0, f.style.overflow = "hidden", d = f, (a = document.body).firstChild ? (g = d, (f = a.firstChild).parentNode.insertBefore(g, f)) : a.appendChild(d));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (n = function() {
    document.removeEventListener("DOMContentLoaded", n, !1), t();
  }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = t, s = e.document, i = !1, (r = function() {
    try {
      s.documentElement.doScroll("left");
    } catch {
      return void setTimeout(r, 50);
    }
    u();
  })(), s.onreadystatechange = function() {
    s.readyState == "complete" && (s.onreadystatechange = null, u());
  });
})(window);
const L = 0, $ = 1, re = 2, Pe = {
  name: "Latte",
  type: "light",
  palette: ["#dd7878", "#ea76cb", "#8839ef", "#e64553", "#fe640b", "#df8e1d", "#40a02b", "#209fb5", "#1e66f5", "#7287fd"],
  cssVar: {
    "--gap": "30px",
    "--main-color": "#444446",
    "--main-bgcolor": "#ffffff",
    "--color": "#777777",
    "--bgcolor": "#f6f6f6",
    "--panel-color": "#444446",
    "--panel-bgcolor": "#ffffff",
    "--panel-border-color": "#eaeaea"
  }
}, He = {
  name: "Dark",
  type: "dark",
  palette: ["#848FA0", "#748BE9", "#D2F9FE", "#4145A5", "#789AFA", "#706CF4", "#EF987F", "#775DD5", "#FCEECF", "#DA7FBC"],
  cssVar: {
    "--main-color": "#ffffff",
    "--main-bgcolor": "#4c4f69",
    "--color": "#cccccc",
    "--bgcolor": "#252526",
    "--panel-color": "#ffffff",
    "--panel-bgcolor": "#2d3748",
    "--panel-border-color": "#696969"
  }
};
function ne(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}
const oe = function(e, t) {
  if (t.id === e)
    return t;
  if (t.children && t.children.length) {
    for (let n = 0; n < t.children.length; n++) {
      const o = oe(e, t.children[n]);
      if (o)
        return o;
    }
    return null;
  } else
    return null;
}, O = (e, t) => {
  if (e.parent = t, e.children)
    for (let n = 0; n < e.children.length; n++)
      O(e.children[n], e);
};
function he(e) {
  if (e.id = X(), e.children)
    for (let t = 0; t < e.children.length; t++)
      he(e.children[t]);
}
const ot = (e, t) => {
  let n = Date.now();
  return function(...o) {
    Date.now() - n < t || (e(...o), n = Date.now());
  };
};
function Be(e, t, n, o) {
  const s = o - t, i = e - n;
  let r = Math.atan(Math.abs(s) / Math.abs(i)) / 3.14 * 180;
  i < 0 && s > 0 && (r = 180 - r), i < 0 && s < 0 && (r = 180 + r), i > 0 && s < 0 && (r = 360 - r);
  const c = 15, l = 30, u = r + l, d = r - l;
  return {
    x1: n + Math.cos(Math.PI * u / 180) * c,
    y1: o - Math.sin(Math.PI * u / 180) * c,
    x2: n + Math.cos(Math.PI * d / 180) * c,
    y2: o - Math.sin(Math.PI * d / 180) * c
  };
}
function X() {
  return ((/* @__PURE__ */ new Date()).getTime().toString(16) + Math.random().toString(16).substr(2)).substr(2, 16);
}
const st = function() {
  const e = X();
  return {
    topic: this.newTopicName,
    id: e
  };
};
function ue(e) {
  return JSON.parse(
    JSON.stringify(e, (n, o) => {
      if (n !== "parent")
        return o;
    })
  );
}
const P = (e, t) => {
  let n = 0, o = 0;
  for (; t && t !== e; )
    n += t.offsetLeft, o += t.offsetTop, t = t.offsetParent;
  return { offsetLeft: n, offsetTop: o };
}, E = (e, t) => {
  for (const n in t)
    e.setAttribute(n, t[n]);
}, le = (e) => e ? e.tagName === "ME-TPC" : !1, ce = (e) => e.filter((t) => {
  for (let n = 0; n < e.length; n++) {
    if (t === e[n])
      continue;
    if (e[n].parentElement.parentElement.contains(t))
      return !1;
  }
  return !0;
}), _ = {
  moved: !1,
  // diffrentiate click and move
  mousedown: !1,
  onMove(e, t) {
    if (this.mousedown) {
      this.moved = !0;
      const n = e.movementX, o = e.movementY;
      t.scrollTo(t.scrollLeft - n, t.scrollTop - o);
    }
  },
  clear() {
    setTimeout(() => {
      this.moved = !1, this.mousedown = !1;
    }, 0);
  }
};
function it(e) {
  e.map.addEventListener("click", (t) => {
    var o, s;
    if (t.button !== 0)
      return;
    if ((o = e.helper1) != null && o.moved) {
      e.helper1.clear();
      return;
    }
    if ((s = e.helper2) != null && s.moved) {
      e.helper2.clear();
      return;
    }
    if (_.moved) {
      _.clear();
      return;
    }
    e.clearSelection();
    const n = t.target;
    if (n.tagName === "ME-EPD")
      e.expandNode(n.previousSibling);
    else if (le(n))
      e.selectNode(n, !1, t);
    else if (e.editable)
      n.tagName === "text" ? n.dataset.type === "custom-link" ? e.selectArrow(n.parentElement) : e.selectSummary(n.parentElement) : n.className;
    else
      return;
  }), e.map.addEventListener("dblclick", (t) => {
    if (!e.editable)
      return;
    const n = t.target;
    le(n) ? e.beginEdit(n) : n.tagName === "text" && (n.dataset.type === "custom-link" ? e.editArrowLabel(n.parentElement) : e.editSummary(n.parentElement));
  }), e.map.addEventListener("mousemove", (t) => {
    t.target.contentEditable !== "true" && _.onMove(t, e.container);
  }), e.map.addEventListener("mousedown", (t) => {
    const n = e.mouseSelectionButton === 0 ? 2 : 0;
    t.button === n && t.target.contentEditable !== "true" && (_.moved = !1, _.mousedown = !0);
  }), e.map.addEventListener("mouseleave", (t) => {
    const n = e.mouseSelectionButton === 0 ? 2 : 0;
    t.button === n && _.clear();
  }), e.map.addEventListener("mouseup", (t) => {
    const n = e.mouseSelectionButton === 0 ? 2 : 0;
    t.button === n && _.clear();
  });
}
const rt = {
  create() {
    return {
      handlers: {},
      showHandler: function() {
      },
      addListener: function(e, t) {
        this.handlers[e] === void 0 && (this.handlers[e] = []), this.handlers[e].push(t);
      },
      fire: function(e, ...t) {
        if (this.handlers[e] instanceof Array) {
          const n = this.handlers[e];
          for (let o = 0; o < n.length; o++)
            n[o](...t);
        }
      },
      removeListener: function(e, t) {
        if (!this.handlers[e])
          return;
        const n = this.handlers[e];
        if (!t)
          n.length = 0;
        else if (n.length)
          for (let o = 0; o < n.length; o++)
            n[o] === t && this.handlers[e].splice(o, 1);
      }
    };
  }
};
var C = /* @__PURE__ */ ((e) => (e.LHS = "lhs", e.RHS = "rhs", e))(C || {});
const se = document, ct = function() {
  this.nodes.innerHTML = "";
  const e = this.createTopic(this.nodeData);
  fe(e, this.nodeData), e.draggable = !1;
  const t = se.createElement("me-root");
  t.appendChild(e);
  const n = this.nodeData.children || [];
  if (this.direction === re) {
    let o = 0, s = 0;
    n.map((i) => {
      i.direction === L ? o += 1 : i.direction === $ ? s += 1 : o <= s ? (i.direction = L, o += 1) : (i.direction = $, s += 1);
    });
  }
  lt(this, n, t);
}, lt = function(e, t, n) {
  const o = se.createElement("me-main");
  o.className = C.LHS;
  const s = se.createElement("me-main");
  s.className = C.RHS;
  for (let i = 0; i < t.length; i++) {
    const r = t[i], { grp: c } = e.createWrapper(r);
    e.direction === re ? r.direction === L ? o.appendChild(c) : s.appendChild(c) : e.direction === L ? o.appendChild(c) : s.appendChild(c);
  }
  e.nodes.appendChild(o), e.nodes.appendChild(n), e.nodes.appendChild(s), e.nodes.appendChild(e.lines);
}, at = function(e, t) {
  const n = se.createElement("me-children");
  for (let o = 0; o < t.length; o++) {
    const s = t[o], { grp: i } = e.createWrapper(s);
    n.appendChild(i);
  }
  return n;
}, M = document, N = (e, t) => {
  const o = (t ? t.mindElixirBox : M).querySelector(`[data-nodeid=me${e}]`);
  if (!o)
    throw new Error(`FindEle: Node ${e} not found, maybe it's collapsed.`);
  return o;
}, fe = function(e, t) {
  if (e.innerHTML = "", t.style && (e.style.color = t.style.color || "", e.style.background = t.style.background || "", e.style.fontSize = t.style.fontSize + "px", e.style.fontWeight = t.style.fontWeight || "normal"), t.dangerouslySetInnerHTML) {
    e.innerHTML = t.dangerouslySetInnerHTML;
    return;
  }
  if (t.image) {
    const n = t.image;
    if (n.url && n.width && n.height) {
      const o = M.createElement("img");
      o.src = n.url, o.style.width = n.width + "px", o.style.height = n.height + "px", n.fit && (o.style.objectFit = n.fit), e.appendChild(o), e.image = o;
    }
  } else
    e.image && (e.image = void 0);
  {
    const n = M.createElement("span");
    n.className = "text", n.textContent = t.topic, e.appendChild(n), e.text = n;
  }
  if (t.hyperLink) {
    const n = M.createElement("a");
    n.className = "hyper-link", n.target = "_blank", n.innerText = "🔗", n.href = t.hyperLink, e.appendChild(n), e.link = n;
  } else
    e.link && (e.link = void 0);
  if (t.icons && t.icons.length) {
    const n = M.createElement("span");
    n.className = "icons", n.innerHTML = t.icons.map((o) => `<span>${ne(o)}</span>`).join(""), e.appendChild(n), e.icons = n;
  } else
    e.icons && (e.icons = void 0);
  if (t.tags && t.tags.length) {
    const n = M.createElement("div");
    n.className = "tags", n.innerHTML = t.tags.map((o) => `<span>${ne(o)}</span>`).join(""), e.appendChild(n), e.tags = n;
  } else
    e.tags && (e.tags = void 0);
}, dt = function(e, t) {
  const n = M.createElement("me-wrapper"), { p: o, tpc: s } = this.createParent(e);
  if (n.appendChild(o), !t && e.children && e.children.length > 0) {
    const i = pe(e.expanded);
    if (o.appendChild(i), e.expanded !== !1) {
      const r = at(this, e.children);
      n.appendChild(r);
    }
  }
  return { grp: n, top: o, tpc: s };
}, ht = function(e) {
  const t = M.createElement("me-parent"), n = this.createTopic(e);
  return fe(n, e), t.appendChild(n), { p: t, tpc: n };
}, ut = function(e) {
  const t = M.createElement("me-children");
  return t.append(...e), t;
}, ft = function(e) {
  const t = M.createElement("me-tpc");
  return t.nodeObj = e, t.dataset.nodeid = "me" + e.id, t.draggable = this.draggable, t;
};
function Re(e) {
  const t = M.createRange();
  t.selectNodeContents(e);
  const n = window.getSelection();
  n && (n.removeAllRanges(), n.addRange(t));
}
const pt = function(e) {
  if (!e)
    return;
  const t = M.createElement("div"), n = e.text.textContent;
  e.appendChild(t), t.id = "input-box", t.textContent = n, t.contentEditable = "true", t.spellcheck = !1;
  const o = getComputedStyle(e);
  t.style.cssText = `min-width:${e.offsetWidth - 8}px;
  color:${o.color};
  padding:${o.padding};
  margin:${o.margin};
  font:${o.font};
  background-color:${o.backgroundColor !== "rgba(0, 0, 0, 0)" && o.backgroundColor};
  border-radius:${o.borderRadius};`, this.direction === L && (t.style.right = "0"), t.focus(), Re(t), this.bus.fire("operation", {
    name: "beginEdit",
    obj: e.nodeObj
  }), t.addEventListener("keydown", (s) => {
    s.stopPropagation();
    const i = s.key;
    if (i === "Enter" || i === "Tab") {
      if (s.shiftKey)
        return;
      s.preventDefault(), t.blur(), this.map.focus();
    }
  }), t.addEventListener("blur", () => {
    var r;
    if (!t)
      return;
    const s = e.nodeObj, i = ((r = t.textContent) == null ? void 0 : r.trim()) || "";
    i === "" ? s.topic = n : s.topic = i, t.remove(), i !== n && (e.text.textContent = s.topic, this.linkDiv(), this.bus.fire("operation", {
      name: "finishEdit",
      obj: s,
      origin: n
    }));
  });
}, pe = function(e) {
  const t = M.createElement("me-epd");
  return t.expanded = e !== !1, t.className = e !== !1 ? "minus" : "", t;
}, I = document, V = "http://www.w3.org/2000/svg", ze = function(e, t, n) {
  const o = I.createElementNS(V, "path");
  return E(o, {
    d: e,
    stroke: t || "#666",
    fill: "none",
    "stroke-width": n
  }), o;
}, Y = function(e) {
  const t = I.createElementNS(V, "svg");
  return t.setAttribute("class", e), t.setAttribute("overflow", "visible"), t;
}, be = function() {
  const e = I.createElementNS(V, "line");
  return e.setAttribute("stroke", "#bbb"), e.setAttribute("fill", "none"), e.setAttribute("stroke-width", "2"), e;
}, mt = function(e, t) {
  const n = {
    stroke: "rgb(235, 95, 82)",
    fill: "none",
    "stroke-linecap": "cap",
    "stroke-width": "2"
  }, o = I.createElementNS(V, "g"), s = I.createElementNS(V, "path"), i = I.createElementNS(V, "path");
  return E(i, {
    d: t,
    ...n
  }), E(s, {
    d: e,
    ...n,
    "stroke-dasharray": "8,2"
  }), o.appendChild(s), o.appendChild(i), o;
}, Fe = function(e, t, n) {
  if (!t)
    return;
  const o = document.createElement("div");
  e.nodes.appendChild(o);
  const s = t.innerHTML;
  o.id = "input-box", o.textContent = s, o.contentEditable = "true", o.spellcheck = !1;
  const i = t.getBBox();
  o.style.cssText = `
    min-width:${Math.max(88, i.width)}px;
    position:absolute;
    left:${i.x}px;
    top:${i.y}px;
    padding: 2px 4px;
    margin: -2px -4px; 
  `, o.focus(), Re(o), o.addEventListener("keydown", (r) => {
    r.stopPropagation();
    const c = r.key;
    if (c === "Enter" || c === "Tab") {
      if (r.shiftKey)
        return;
      r.preventDefault(), o.blur(), e.map.focus();
    }
  }), o.addEventListener("blur", () => {
    o && n(o);
  });
}, gt = function(e) {
  const t = this.map.querySelector("me-root"), n = t.offsetTop, o = t.offsetLeft, s = t.offsetWidth, i = t.offsetHeight;
  this.nodes.style.top = `${1e4 - this.nodes.offsetHeight / 2}px`, this.nodes.style.left = `${1e4 - o - s / 2}px`;
  const r = this.map.querySelectorAll("me-main > me-wrapper");
  this.lines.innerHTML = "";
  for (let c = 0; c < r.length; c++) {
    const l = r[c], u = l.querySelector("me-tpc"), { offsetLeft: d, offsetTop: a } = P(this.nodes, u), f = u.offsetWidth, g = u.offsetHeight, p = l.parentNode.className, m = this.generateMainBranch({ pT: n, pL: o, pW: s, pH: i, cT: a, cL: d, cW: f, cH: g, direction: p, containerHeight: this.nodes.offsetHeight }), h = this.theme.palette, v = u.nodeObj.branchColor || h[c % h.length];
    u.style.borderColor = v, this.lines.appendChild(ze(m, v, "3"));
    const y = l.children[0].children[1];
    if (y && (y.style.top = (y.parentNode.offsetHeight - y.offsetHeight) / 2 + "px", p === C.LHS ? y.style.left = "-10px" : y.style.right = "-10px"), e && e !== l)
      continue;
    const b = Y("subLines"), x = l.lastChild;
    x.tagName === "svg" && x.remove(), l.appendChild(b), qe(this, b, v, l, p, !0);
  }
  this.renderArrow(), this.renderSummary(), this.bus.fire("linkDiv");
}, qe = function(e, t, n, o, s, i) {
  const r = o.firstChild, c = o.children[1].children;
  if (c.length === 0)
    return;
  const l = r.offsetTop, u = r.offsetLeft, d = r.offsetWidth, a = r.offsetHeight;
  for (let f = 0; f < c.length; f++) {
    const g = c[f], p = g.firstChild, m = p.offsetTop, h = p.offsetLeft, v = p.offsetWidth, y = p.offsetHeight, b = p.firstChild.nodeObj.branchColor || n, x = e.generateSubBranch({ pT: l, pL: u, pW: d, pH: a, cT: m, cL: h, cW: v, cH: y, direction: s, isFirst: i });
    t.appendChild(ze(x, b, "2"));
    const w = p.children[1];
    if (w) {
      if (w.style.bottom = -(w.offsetHeight / 2) + "px", s === C.LHS ? w.style.left = "10px" : s === C.RHS && (w.style.right = "10px"), !w.expanded)
        continue;
    } else
      continue;
    qe(e, t, b, g, s);
  }
}, xe = {
  addChild: "插入子节点",
  addParent: "插入父节点",
  addSibling: "插入同级节点",
  removeNode: "删除节点",
  focus: "专注",
  cancelFocus: "取消专注",
  moveUp: "上移",
  moveDown: "下移",
  link: "连接",
  clickTips: "请点击目标节点",
  summary: "摘要"
}, we = {
  cn: xe,
  zh_CN: xe,
  zh_TW: {
    addChild: "插入子節點",
    addParent: "插入父節點",
    addSibling: "插入同級節點",
    removeNode: "刪除節點",
    focus: "專注",
    cancelFocus: "取消專注",
    moveUp: "上移",
    moveDown: "下移",
    link: "連接",
    clickTips: "請點擊目標節點",
    summary: "摘要"
  },
  en: {
    addChild: "Add child",
    addParent: "Add parent",
    addSibling: "Add sibling",
    removeNode: "Remove node",
    focus: "Focus Mode",
    cancelFocus: "Cancel Focus Mode",
    moveUp: "Move up",
    moveDown: "Move down",
    link: "Link",
    clickTips: "Please click the target node",
    summary: "Summary"
  },
  ru: {
    addChild: "Добавить дочерний элемент",
    addParent: "Добавить родительский элемент",
    addSibling: "Добавить на этом уровне",
    removeNode: "Удалить узел",
    focus: "Режим фокусировки",
    cancelFocus: "Отменить режим фокусировки",
    moveUp: "Поднять выше",
    moveDown: "Опустить ниже",
    link: "Ссылка",
    clickTips: "Пожалуйста, нажмите на целевой узел",
    summary: "Описание"
  },
  ja: {
    addChild: "子ノードを追加する",
    addParent: "親ノードを追加します",
    addSibling: "兄弟ノードを追加する",
    removeNode: "ノードを削除",
    focus: "集中",
    cancelFocus: "集中解除",
    moveUp: "上へ移動",
    moveDown: "下へ移動",
    link: "コネクト",
    clickTips: "ターゲットノードをクリックしてください",
    summary: "概要"
  },
  pt: {
    addChild: "Adicionar item filho",
    addParent: "Adicionar item pai",
    addSibling: "Adicionar item irmao",
    removeNode: "Remover item",
    focus: "Modo Foco",
    cancelFocus: "Cancelar Modo Foco",
    moveUp: "Mover para cima",
    moveDown: "Mover para baixo",
    link: "Link",
    clickTips: "Favor clicar no item alvo",
    summary: "Resumo"
  },
  it: {
    addChild: "Aggiungi figlio",
    addParent: "Aggiungi genitore",
    addSibling: "Aggiungi fratello",
    removeNode: "Rimuovi nodo",
    focus: "Modalità Focus",
    cancelFocus: "Annulla Modalità Focus",
    moveUp: "Sposta su",
    moveDown: "Sposta giù",
    link: "Collega",
    clickTips: "Si prega di fare clic sul nodo di destinazione",
    summary: "Unisci nodi"
  },
  es: {
    addChild: "Agregar hijo",
    addParent: "Agregar padre",
    addSibling: "Agregar hermano",
    removeNode: "Eliminar nodo",
    focus: "Modo Enfoque",
    cancelFocus: "Cancelar Modo Enfoque",
    moveUp: "Mover hacia arriba",
    moveDown: "Mover hacia abajo",
    link: "Enlace",
    clickTips: "Por favor haga clic en el nodo de destino",
    summary: "Resumen"
  },
  fr: {
    addChild: "Ajout enfant",
    addParent: "Ajout parent",
    addSibling: "Ajout voisin",
    removeNode: "Supprimer",
    focus: "Cibler",
    cancelFocus: "Retour",
    moveUp: "Monter",
    moveDown: "Descendre",
    link: "Lier",
    clickTips: "Cliquer sur le noeud cible",
    summary: "Annoter"
  },
  ko: {
    addChild: "자식 추가",
    addParent: "부모 추가",
    addSibling: "형제 추가",
    removeNode: "노드 삭제",
    focus: "포커스 모드",
    cancelFocus: "포커스 모드 취소",
    moveUp: "위로 이동",
    moveDown: "아래로 이동",
    link: "연결",
    clickTips: "대상 노드를 클릭하십시오",
    summary: "요약"
  }
};
function vt(e, t) {
  const n = (b) => {
    const x = document.createElement("div");
    return x.innerText = b, x.className = "tips", x;
  }, o = (b, x, w) => {
    const S = document.createElement("li");
    return S.id = b, S.innerHTML = `<span>${ne(x)}</span><span ${w ? 'class="key"' : ""}>${ne(w)}</span>`, S;
  }, s = we[e.locale] ? e.locale : "en", i = we[s], r = o("cm-add_child", i.addChild, "Tab"), c = o("cm-add_parent", i.addParent, "Ctrl + Enter"), l = o("cm-add_sibling", i.addSibling, "Enter"), u = o("cm-remove_child", i.removeNode, "Delete"), d = o("cm-fucus", i.focus, ""), a = o("cm-unfucus", i.cancelFocus, ""), f = o("cm-up", i.moveUp, "PgUp"), g = o("cm-down", i.moveDown, "Pgdn"), p = o("cm-link", i.link, ""), m = o("cm-summary", i.summary, ""), h = document.createElement("ul");
  if (h.className = "menu-list", h.appendChild(r), h.appendChild(c), h.appendChild(l), h.appendChild(u), (!t || t.focus) && (h.appendChild(d), h.appendChild(a)), h.appendChild(f), h.appendChild(g), h.appendChild(m), (!t || t.link) && h.appendChild(p), t && t.extend)
    for (let b = 0; b < t.extend.length; b++) {
      const x = t.extend[b], w = o(x.name, x.name, x.key || "");
      h.appendChild(w), w.onclick = (S) => {
        x.onclick(S);
      };
    }
  const v = document.createElement("div");
  v.className = "context-menu", v.appendChild(h), v.hidden = !0, e.container.append(v);
  let y = !0;
  return e.container.oncontextmenu = function(b) {
    if (b.preventDefault(), !e.editable || _.moved)
      return;
    const x = b.target;
    if (le(x)) {
      x.parentElement.tagName === "ME-ROOT" ? y = !0 : y = !1, y ? (d.className = "disabled", f.className = "disabled", g.className = "disabled", c.className = "disabled", l.className = "disabled", u.className = "disabled") : (d.className = "", f.className = "", g.className = "", c.className = "", l.className = "", u.className = ""), e.currentNodes || e.selectNode(x), v.hidden = !1, _.mousedown && (_.mousedown = !1), h.style.top = "", h.style.bottom = "", h.style.left = "", h.style.right = "";
      const w = h.getBoundingClientRect(), S = h.offsetHeight, H = h.offsetWidth, W = b.clientY - w.top, B = b.clientX - w.left;
      S + W > window.innerHeight ? (h.style.top = "", h.style.bottom = "0px") : (h.style.bottom = "", h.style.top = W + 15 + "px"), H + B > window.innerWidth ? (h.style.left = "", h.style.right = "0px") : (h.style.right = "", h.style.left = B + 10 + "px");
    }
  }, v.onclick = (b) => {
    b.target === v && (v.hidden = !0);
  }, r.onclick = () => {
    e.addChild(), v.hidden = !0;
  }, c.onclick = () => {
    e.insertParent(), v.hidden = !0;
  }, l.onclick = () => {
    y || (e.insertSibling("after"), v.hidden = !0);
  }, u.onclick = () => {
    y || (e.removeNode(), v.hidden = !0);
  }, d.onclick = () => {
    y || (e.focusNode(e.currentNode), v.hidden = !0);
  }, a.onclick = () => {
    e.cancelFocus(), v.hidden = !0;
  }, f.onclick = () => {
    y || (e.moveUpNode(), v.hidden = !0);
  }, g.onclick = () => {
    y || (e.moveDownNode(), v.hidden = !0);
  }, p.onclick = () => {
    v.hidden = !0;
    const b = e.currentNode, x = n(i.clickTips);
    e.container.appendChild(x), e.map.addEventListener(
      "click",
      (w) => {
        w.preventDefault(), x.remove();
        const S = w.target;
        (S.parentElement.tagName === "ME-PARENT" || S.parentElement.tagName === "ME-ROOT") && e.createArrow(b, S);
      },
      {
        once: !0
      }
    );
  }, m.onclick = () => {
    v.hidden = !0, e.createSummary(), e.unselectNodes();
  }, () => {
    r.onclick = null, c.onclick = null, l.onclick = null, u.onclick = null, d.onclick = null, a.onclick = null, f.onclick = null, g.onclick = null, p.onclick = null, m.onclick = null, v.onclick = null, e.container.oncontextmenu = null;
  };
}
const yt = (e) => {
  const t = e.map.querySelectorAll(".lhs>me-wrapper>me-parent>me-tpc");
  e.selectNode(t[Math.ceil(t.length / 2) - 1]);
}, bt = (e) => {
  const t = e.map.querySelectorAll(".rhs>me-wrapper>me-parent>me-tpc");
  e.selectNode(t[Math.ceil(t.length / 2) - 1]);
}, xt = (e) => {
  e.selectNode(e.map.querySelector("me-root>me-tpc"));
}, wt = function(e, t) {
  const n = t.parentElement.parentElement.parentElement.previousSibling;
  if (n) {
    const o = n.firstChild;
    e.selectNode(o);
  }
}, Et = function(e, t) {
  const n = t.parentElement.nextSibling;
  if (n && n.firstChild) {
    const o = n.firstChild.firstChild.firstChild;
    e.selectNode(o);
  }
}, Ee = function(e, t) {
  var i, r;
  const n = e.currentNode || ((i = e.currentNodes) == null ? void 0 : i[0]);
  if (!n)
    return;
  const o = n.nodeObj, s = n.offsetParent.offsetParent.parentElement;
  o.parent ? s.className === t ? Et(e, n) : (r = o.parent) != null && r.parent ? wt(e, n) : xt(e) : t === C.LHS ? yt(e) : bt(e);
}, Ne = function(e, t) {
  var r;
  const n = e.currentNode || ((r = e.currentNodes) == null ? void 0 : r[0]);
  if (!n || !n.nodeObj.parent)
    return;
  const s = t + "Sibling", i = n.parentElement.parentElement[s];
  i && e.selectNode(i.firstChild.firstChild);
}, Z = function(e, t, n = 1) {
  switch (t) {
    case "in":
      if (e.scaleVal * n > 1.6)
        return;
      e.scale(e.scaleVal += 0.2);
      break;
    case "out":
      if (e.scaleVal * n < 0.6)
        return;
      e.scale(e.scaleVal -= 0.2);
  }
};
function Nt(e) {
  const t = () => {
    e.currentArrow ? e.removeArrow() : e.currentSummary ? e.removeSummary(e.currentSummary.summaryObj.id) : e.currentNode ? e.removeNode() : e.currentNodes && e.removeNodes(e.currentNodes);
  }, n = {
    Enter: (o) => {
      o.shiftKey ? e.insertSibling("before") : o.ctrlKey ? e.insertParent() : e.insertSibling("after");
    },
    Tab: () => {
      e.addChild();
    },
    F1: () => {
      e.toCenter();
    },
    F2: () => {
      e.beginEdit();
    },
    ArrowUp: (o) => {
      if (o.altKey)
        e.moveUpNode();
      else {
        if (o.metaKey || o.ctrlKey)
          return e.initSide();
        Ne(e, "previous");
      }
    },
    ArrowDown: (o) => {
      o.altKey ? e.moveDownNode() : Ne(e, "next");
    },
    ArrowLeft: (o) => {
      if (o.metaKey || o.ctrlKey)
        return e.initLeft();
      Ee(e, C.LHS);
    },
    ArrowRight: (o) => {
      if (o.metaKey || o.ctrlKey)
        return e.initRight();
      Ee(e, C.RHS);
    },
    PageUp: () => e.moveUpNode(),
    PageDown: () => {
      e.moveDownNode();
    },
    c: (o) => {
      (o.metaKey || o.ctrlKey) && (e.currentNode ? e.waitCopy = [e.currentNode] : e.currentNodes && (e.waitCopy = e.currentNodes));
    },
    x: (o) => {
      (o.metaKey || o.ctrlKey) && (e.currentNode ? e.waitCopy = [e.currentNode] : e.currentNodes && (e.waitCopy = e.currentNodes), t());
    },
    v: (o) => {
      !e.waitCopy || !e.currentNode || (o.metaKey || o.ctrlKey) && (e.waitCopy.length === 1 ? e.copyNode(e.waitCopy[0], e.currentNode) : e.copyNodes(e.waitCopy, e.currentNode));
    },
    "+": (o) => {
      (o.metaKey || o.ctrlKey) && Z(e, "in");
    },
    "-": (o) => {
      (o.metaKey || o.ctrlKey) && Z(e, "out");
    },
    0: (o) => {
      (o.metaKey || o.ctrlKey) && e.scale(1);
    },
    Delete: t,
    Backspace: t
  };
  e.map.onkeydown = (o) => {
    if (o.preventDefault(), !e.editable || o.target !== o.currentTarget)
      return;
    const s = n[o.key];
    s && s(o);
  }, e.map.onwheel = (o) => {
    if (o.ctrlKey || o.metaKey) {
      o.preventDefault();
      const s = Math.abs(o.deltaY / 100);
      o.deltaY < 0 ? Z(e, "in", s) : e.scaleVal - 0.2 > 0 && Z(e, "out", s), o.stopPropagation();
    }
  };
}
const ae = document, St = function(e, t) {
  if (!t)
    return de(e), e;
  let n = e.querySelector(".insert-preview");
  const o = `insert-preview ${t} show`;
  return n || (n = ae.createElement("div"), e.appendChild(n)), n.className = o, e;
}, de = function(e) {
  if (!e)
    return;
  const t = e.querySelectorAll(".insert-preview");
  for (const n of t || [])
    n.remove();
}, Se = function(e, t) {
  for (const n of t) {
    const o = n.parentElement.parentElement.contains(e);
    if (!(e && e.tagName === "ME-TPC" && e !== n && !o && e.nodeObj.parent))
      return !1;
  }
  return !0;
}, Ct = function(e) {
  const t = document.createElement("div");
  return t.className = "mind-elixir-ghost", e.map.appendChild(t), t;
};
function _t(e) {
  let t = null, n = null, o = null;
  const s = Ct(e), i = 12;
  e.map.addEventListener("dragstart", (r) => {
    var l, u;
    const c = r.target;
    if ((c == null ? void 0 : c.tagName) !== "ME-TPC") {
      r.preventDefault();
      return;
    }
    (l = e.currentNodes) != null && l.includes(c) || (e.unselectNodes(), e.selectNode(c)), e.currentNodes ? (t = e.currentNodes, s.innerHTML = e.currentNodes.length + " nodes") : (t = [c], s.innerHTML = c.innerHTML);
    for (const d of t)
      d.parentElement.parentElement.style.opacity = "0.5";
    (u = r.dataTransfer) == null || u.setDragImage(s, 0, 0), _.clear();
  }), e.map.addEventListener("dragend", async (r) => {
    if (!t)
      return;
    for (const l of t)
      l.parentElement.parentElement.style.opacity = "1";
    const c = r.target;
    c.style.opacity = "", o && (de(o), n === "before" ? e.moveNodeBefore(t, o) : n === "after" ? e.moveNodeAfter(t, o) : n === "in" && e.moveNodeIn(t, o), t = null);
  }), e.map.addEventListener(
    "dragover",
    ot(function(r) {
      if (!t)
        return;
      de(o);
      const c = ae.elementFromPoint(r.clientX, r.clientY - i);
      if (Se(c, t)) {
        o = c;
        const l = c.getBoundingClientRect().y;
        r.clientY > l + c.clientHeight ? n = "after" : n = "in";
      } else {
        const l = ae.elementFromPoint(r.clientX, r.clientY + i);
        if (Se(l, t)) {
          o = l;
          const u = l.getBoundingClientRect().y;
          r.clientY < u ? n = "before" : n = "in";
        } else
          n = o = null;
      }
      o && St(o, n);
    }, 100)
  );
}
const Mt = function(e) {
  return ["createSummary", "removeSummary", "finishEditSummary"].includes(e.name) ? {
    type: "summary",
    value: e.obj.id
  } : ["createArrow", "removeArrow", "finishEditArrowLabel"].includes(e.name) ? {
    type: "arrow",
    value: e.obj.id
  } : ["removeNodes", "copyNodes", "moveNodeBefore", "moveNodeAfter", "moveNodeIn"].includes(e.name) ? {
    type: "nodes",
    value: e.objs.map((t) => t.id)
  } : {
    type: "node",
    value: e.obj.id
  };
};
function kt(e) {
  let t = [], n = -1, o = e.getData();
  e.bus.addListener("operation", (s) => {
    if (s.name === "beginEdit")
      return;
    t = t.slice(0, n + 1);
    const i = e.getData();
    t.push({ prev: o, currentObject: Mt(s), next: i }), o = i, n = t.length - 1;
  }), e.undo = function() {
    if (n > -1) {
      const s = t[n];
      o = s.prev, e.refresh(s.prev);
      try {
        s.currentObject.type === "node" ? e.selectNode(N(s.currentObject.value)) : s.currentObject.type === "nodes" && e.selectNodes(s.currentObject.value.map((i) => N(i)));
      } catch {
      } finally {
        n--;
      }
    }
  }, e.redo = function() {
    if (n < t.length - 1) {
      n++;
      const s = t[n];
      o = s.next, e.refresh(s.next), s.currentObject.type === "node" ? e.selectNode(N(s.currentObject.value)) : s.currentObject.type === "nodes" && e.selectNodes(s.currentObject.value.map((i) => N(i)));
    }
  }, e.map.addEventListener("keydown", (s) => {
    (s.metaKey || s.ctrlKey) && s.shiftKey && s.key === "Z" ? e.redo() : (s.metaKey || s.ctrlKey) && s.key === "z" && e.undo();
  });
}
const z = (e, t) => {
  const n = document.createElement("span");
  return n.id = e, n.innerHTML = `<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-${t}"></use>
  </svg>`, n;
};
function Lt(e) {
  const t = document.createElement("div"), n = z("fullscreen", "full"), o = z("toCenter", "living"), s = z("zoomout", "move"), i = z("zoomin", "add"), r = document.createElement("span");
  return r.innerText = "100%", t.appendChild(n), t.appendChild(o), t.appendChild(s), t.appendChild(i), t.className = "mind-elixir-toolbar rb", n.onclick = () => {
    e.mindElixirBox.requestFullscreen();
  }, o.onclick = () => {
    e.toCenter();
  }, s.onclick = () => {
    e.scaleVal < 0.6 || e.scale(e.scaleVal - 0.2);
  }, i.onclick = () => {
    e.scaleVal > 1.6 || e.scale(e.scaleVal + 0.2);
  }, t;
}
function Tt(e) {
  const t = document.createElement("div"), n = z("tbltl", "left"), o = z("tbltr", "right"), s = z("tblts", "side");
  return t.appendChild(n), t.appendChild(o), t.appendChild(s), t.className = "mind-elixir-toolbar lt", n.onclick = () => {
    e.initLeft();
  }, o.onclick = () => {
    e.initRight();
  }, s.onclick = () => {
    e.initSide();
  }, t;
}
function At(e) {
  e.container.append(Lt(e)), e.container.append(Tt(e));
}
/*! @viselect/vanilla v3.7.1 MIT | https://github.com/Simonwep/selection/tree/master/packages/vanilla */
class jt {
  constructor() {
    this._listeners = /* @__PURE__ */ new Map(), this.on = this.addEventListener, this.off = this.removeEventListener, this.emit = this.dispatchEvent;
  }
  addEventListener(t, n) {
    const o = this._listeners.get(t) ?? /* @__PURE__ */ new Set();
    return this._listeners.set(t, o), o.add(n), this;
  }
  removeEventListener(t, n) {
    var o;
    return (o = this._listeners.get(t)) == null || o.delete(n), this;
  }
  dispatchEvent(t, ...n) {
    let o = !0;
    for (const s of this._listeners.get(t) ?? [])
      o = s(...n) !== !1 && o;
    return o;
  }
  unbindAllListeners() {
    this._listeners.clear();
  }
}
const Ce = (e, t = "px") => typeof e == "number" ? e + t : e, j = ({ style: e }, t, n) => {
  if (typeof t == "object")
    for (const [o, s] of Object.entries(t))
      s !== void 0 && (e[o] = Ce(s));
  else
    n !== void 0 && (e[t] = Ce(n));
}, _e = (e = 0, t = 0, n = 0, o = 0) => {
  const s = { x: e, y: t, width: n, height: o, top: t, left: e, right: e + n, bottom: t + o };
  return { ...s, toJSON: () => JSON.stringify(s) };
}, Dt = (e) => {
  let t, n = -1, o = !1;
  return {
    next: (...s) => {
      t = s, o || (o = !0, n = requestAnimationFrame(() => {
        e(...t), o = !1;
      }));
    },
    cancel: () => {
      cancelAnimationFrame(n), o = !1;
    }
  };
}, Me = (e, t, n = "touch") => {
  switch (n) {
    case "center": {
      const o = t.left + t.width / 2, s = t.top + t.height / 2;
      return o >= e.left && o <= e.right && s >= e.top && s <= e.bottom;
    }
    case "cover":
      return t.left >= e.left && t.top >= e.top && t.right <= e.right && t.bottom <= e.bottom;
    case "touch":
      return e.right >= t.left && e.left <= t.right && e.bottom >= t.top && e.top <= t.bottom;
  }
}, $t = () => matchMedia("(hover: none), (pointer: coarse)").matches, Ot = () => "safari" in window, Ie = (e) => (t, n, o, s = {}) => {
  t instanceof HTMLCollection || t instanceof NodeList ? t = Array.from(t) : Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  for (const i of t)
    if (i)
      for (const r of n)
        i[e](r, o, { capture: !1, ...s });
  return [t, n, o, s];
}, D = Ie("addEventListener"), T = Ie("removeEventListener"), Q = (e) => {
  var t;
  const { clientX: n, clientY: o, target: s } = ((t = e.touches) == null ? void 0 : t[0]) ?? e;
  return { x: n, y: o, target: s };
}, F = (e, t = document) => {
  const n = Array.isArray(e) ? e : [e];
  let o = [];
  for (let s = 0, i = n.length; s < i; s++) {
    const r = n[s];
    typeof r == "string" ? o = o.concat(Array.from(t.querySelectorAll(r))) : r instanceof Element && o.push(r);
  }
  return o;
}, Pt = (e, t) => {
  for (const n of t) {
    if (typeof n == "number")
      return e.button === n;
    if (typeof n == "object") {
      const o = n.button === e.button, s = n.modifiers.every((i) => {
        switch (i) {
          case "alt":
            return e.altKey;
          case "ctrl":
            return e.ctrlKey || e.metaKey;
          case "shift":
            return e.shiftKey;
        }
      });
      return o && s;
    }
  }
  return !1;
}, { abs: R, max: ke, min: Le, ceil: Te } = Math, Ae = (e = []) => ({
  stored: e,
  selected: [],
  touched: [],
  changed: { added: [], removed: [] }
}), Ve = class extends jt {
  constructor(t) {
    var n, o, s, i, r;
    super(), this._selection = Ae(), this._targetBoundaryScrolled = !0, this._selectables = [], this._areaLocation = { y1: 0, x2: 0, y2: 0, x1: 0 }, this._areaRect = _e(), this._singleClick = !0, this._scrollAvailable = !0, this._scrollingActive = !1, this._scrollSpeed = { x: 0, y: 0 }, this._scrollDelta = { x: 0, y: 0 }, this._lastMousePosition = { x: 0, y: 0 }, this.disable = this._toggleStartEvents.bind(this, !1), this.enable = this._toggleStartEvents, this._options = {
      selectionAreaClass: "selection-area",
      selectionContainerClass: void 0,
      selectables: [],
      document: window.document,
      startAreas: ["html"],
      boundaries: ["html"],
      container: "body",
      ...t,
      behaviour: {
        overlap: "invert",
        intersect: "touch",
        triggers: [0],
        ...t.behaviour,
        startThreshold: (n = t.behaviour) != null && n.startThreshold ? typeof t.behaviour.startThreshold == "number" ? t.behaviour.startThreshold : { x: 10, y: 10, ...t.behaviour.startThreshold } : { x: 10, y: 10 },
        scrolling: {
          speedDivider: 10,
          manualSpeed: 750,
          ...(o = t.behaviour) == null ? void 0 : o.scrolling,
          startScrollMargins: {
            x: 0,
            y: 0,
            ...(i = (s = t.behaviour) == null ? void 0 : s.scrolling) == null ? void 0 : i.startScrollMargins
          }
        }
      },
      features: {
        range: !0,
        touch: !0,
        deselectOnBlur: !1,
        ...t.features,
        singleTap: {
          allow: !0,
          intersect: "native",
          ...(r = t.features) == null ? void 0 : r.singleTap
        }
      }
    };
    for (const d of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
      typeof this[d] == "function" && (this[d] = this[d].bind(this));
    const { document: c, selectionAreaClass: l, selectionContainerClass: u } = this._options;
    this._area = c.createElement("div"), this._clippingElement = c.createElement("div"), this._clippingElement.appendChild(this._area), this._area.classList.add(l), u && this._clippingElement.classList.add(u), j(this._area, {
      willChange: "top, left, bottom, right, width, height",
      top: 0,
      left: 0,
      position: "fixed"
    }), j(this._clippingElement, {
      overflow: "hidden",
      position: "fixed",
      transform: "translate3d(0, 0, 0)",
      // https://stackoverflow.com/a/38268846
      pointerEvents: "none",
      zIndex: "1"
    }), this._frame = Dt((d) => {
      this._recalculateSelectionAreaRect(), this._updateElementSelection(), this._emitEvent("move", d), this._redrawSelectionArea();
    }), this.enable();
  }
  _toggleStartEvents(t = !0) {
    const { document: n, features: o } = this._options, s = t ? D : T;
    s(n, "mousedown", this._onTapStart), o.touch && s(n, "touchstart", this._onTapStart, { passive: !1 });
  }
  _onTapStart(t, n = !1) {
    const { x: o, y: s, target: i } = Q(t), { document: r, startAreas: c, boundaries: l, features: u, behaviour: d } = this._options, a = i.getBoundingClientRect();
    if (t instanceof MouseEvent && !Pt(t, d.triggers))
      return;
    const f = F(c, r), g = F(l, r);
    this._targetElement = g.find(
      (v) => Me(v.getBoundingClientRect(), a)
    );
    const p = t.composedPath(), m = f.find((v) => p.includes(v));
    if (this._targetBoundary = g.find((v) => p.includes(v)), !this._targetElement || !m || !this._targetBoundary || !n && this._emitEvent("beforestart", t) === !1)
      return;
    this._areaLocation = { x1: o, y1: s, x2: 0, y2: 0 };
    const h = r.scrollingElement ?? r.body;
    this._scrollDelta = { x: h.scrollLeft, y: h.scrollTop }, this._singleClick = !0, this.clearSelection(!1, !0), D(r, ["touchmove", "mousemove"], this._delayedTapMove, { passive: !1 }), D(r, ["mouseup", "touchcancel", "touchend"], this._onTapStop), D(r, "scroll", this._onScroll), u.deselectOnBlur && (this._targetBoundaryScrolled = !1, D(this._targetBoundary, "scroll", this._onStartAreaScroll));
  }
  _onSingleTap(t) {
    const { singleTap: { intersect: n }, range: o } = this._options.features, s = Q(t);
    let i;
    if (n === "native")
      i = s.target;
    else if (n === "touch") {
      this.resolveSelectables();
      const { x: c, y: l } = s;
      i = this._selectables.find((u) => {
        const { right: d, left: a, top: f, bottom: g } = u.getBoundingClientRect();
        return c < d && c > a && l < g && l > f;
      });
    }
    if (!i)
      return;
    for (this.resolveSelectables(); !this._selectables.includes(i); )
      if (i.parentElement)
        i = i.parentElement;
      else {
        this._targetBoundaryScrolled || this.clearSelection();
        return;
      }
    const { stored: r } = this._selection;
    if (this._emitEvent("start", t), t.shiftKey && o && this._latestElement) {
      const c = this._latestElement, [l, u] = c.compareDocumentPosition(i) & 4 ? [i, c] : [c, i], d = [...this._selectables.filter(
        (a) => a.compareDocumentPosition(l) & 4 && a.compareDocumentPosition(u) & 2
      ), l, u];
      this.select(d), this._latestElement = c;
    } else
      r.includes(i) && (r.length === 1 || t.ctrlKey || r.every((c) => this._selection.stored.includes(c))) ? this.deselect(i) : (this.select(i), this._latestElement = i);
  }
  _delayedTapMove(t) {
    const { container: n, document: o, behaviour: { startThreshold: s } } = this._options, { x1: i, y1: r } = this._areaLocation, { x: c, y: l } = Q(t);
    if (
      // Single number for both coordinates
      typeof s == "number" && R(c + l - (i + r)) >= s || // Different x and y threshold
      typeof s == "object" && R(c - i) >= s.x || R(l - r) >= s.y
    ) {
      if (T(o, ["mousemove", "touchmove"], this._delayedTapMove, { passive: !1 }), this._emitEvent("beforedrag", t) === !1) {
        T(o, ["mouseup", "touchcancel", "touchend"], this._onTapStop);
        return;
      }
      D(o, ["mousemove", "touchmove"], this._onTapMove, { passive: !1 }), j(this._area, "display", "block"), F(n, o)[0].appendChild(this._clippingElement), this.resolveSelectables(), this._singleClick = !1, this._targetRect = this._targetElement.getBoundingClientRect(), this._scrollAvailable = this._targetElement.scrollHeight !== this._targetElement.clientHeight || this._targetElement.scrollWidth !== this._targetElement.clientWidth, this._scrollAvailable && (D(this._targetElement, "wheel", this._wheelScroll, { passive: !1 }), D(this._options.document, "keydown", this._keyboardScroll, { passive: !1 }), this._selectables = this._selectables.filter((u) => this._targetElement.contains(u))), this._setupSelectionArea(), this._emitEvent("start", t), this._onTapMove(t);
    }
    this._handleMoveEvent(t);
  }
  _setupSelectionArea() {
    const { _clippingElement: t, _targetElement: n, _area: o } = this, s = this._targetRect = n.getBoundingClientRect();
    this._scrollAvailable ? (j(t, {
      top: s.top,
      left: s.left,
      width: s.width,
      height: s.height
    }), j(o, {
      marginTop: -s.top,
      marginLeft: -s.left
    })) : (j(t, {
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }), j(o, {
      marginTop: 0,
      marginLeft: 0
    }));
  }
  _onTapMove(t) {
    const { _scrollSpeed: n, _areaLocation: o, _options: s, _frame: i } = this, { speedDivider: r } = s.behaviour.scrolling, c = this._targetElement, { x: l, y: u } = Q(t);
    if (o.x2 = l, o.y2 = u, this._lastMousePosition.x = l, this._lastMousePosition.y = u, this._scrollAvailable && !this._scrollingActive && (n.y || n.x)) {
      this._scrollingActive = !0;
      const d = () => {
        if (!n.x && !n.y) {
          this._scrollingActive = !1;
          return;
        }
        const { scrollTop: a, scrollLeft: f } = c;
        n.y && (c.scrollTop += Te(n.y / r), o.y1 -= c.scrollTop - a), n.x && (c.scrollLeft += Te(n.x / r), o.x1 -= c.scrollLeft - f), i.next(t), requestAnimationFrame(d);
      };
      requestAnimationFrame(d);
    } else
      i.next(t);
    this._handleMoveEvent(t);
  }
  _handleMoveEvent(t) {
    const { features: n } = this._options;
    (n.touch && $t() || this._scrollAvailable && Ot()) && t.preventDefault();
  }
  _onScroll() {
    const { _scrollDelta: t, _options: { document: n } } = this, { scrollTop: o, scrollLeft: s } = n.scrollingElement ?? n.body;
    this._areaLocation.x1 += t.x - s, this._areaLocation.y1 += t.y - o, t.x = s, t.y = o, this._setupSelectionArea(), this._frame.next(null);
  }
  _onStartAreaScroll() {
    this._targetBoundaryScrolled = !0, T(this._targetElement, "scroll", this._onStartAreaScroll);
  }
  _wheelScroll(t) {
    const { manualSpeed: n } = this._options.behaviour.scrolling, o = t.deltaY ? t.deltaY > 0 ? 1 : -1 : 0, s = t.deltaX ? t.deltaX > 0 ? 1 : -1 : 0;
    this._scrollSpeed.y += o * n, this._scrollSpeed.x += s * n, this._onTapMove(t), t.preventDefault();
  }
  _keyboardScroll(t) {
    const { manualSpeed: n } = this._options.behaviour.scrolling, o = t.key === "ArrowLeft" ? -1 : t.key === "ArrowRight" ? 1 : 0, s = t.key === "ArrowUp" ? -1 : t.key === "ArrowDown" ? 1 : 0;
    this._scrollSpeed.x += Math.sign(o) * n, this._scrollSpeed.y += Math.sign(s) * n, t.preventDefault(), this._onTapMove({
      clientX: this._lastMousePosition.x,
      clientY: this._lastMousePosition.y,
      preventDefault: () => {
      }
    });
  }
  _recalculateSelectionAreaRect() {
    const { _scrollSpeed: t, _areaLocation: n, _targetElement: o, _options: s } = this, { scrollTop: i, scrollHeight: r, clientHeight: c, scrollLeft: l, scrollWidth: u, clientWidth: d } = o, a = this._targetRect, { x1: f, y1: g } = n;
    let { x2: p, y2: m } = n;
    const { behaviour: { scrolling: { startScrollMargins: h } } } = s;
    p < a.left + h.x ? (t.x = l ? -R(a.left - p + h.x) : 0, p = p < a.left ? a.left : p) : p > a.right - h.x ? (t.x = u - l - d ? R(a.left + a.width - p - h.x) : 0, p = p > a.right ? a.right : p) : t.x = 0, m < a.top + h.y ? (t.y = i ? -R(a.top - m + h.y) : 0, m = m < a.top ? a.top : m) : m > a.bottom - h.y ? (t.y = r - i - c ? R(a.top + a.height - m - h.y) : 0, m = m > a.bottom ? a.bottom : m) : t.y = 0;
    const v = Le(f, p), y = Le(g, m), b = ke(f, p), x = ke(g, m);
    this._areaRect = _e(v, y, b - v, x - y);
  }
  _redrawSelectionArea() {
    const { x: t, y: n, width: o, height: s } = this._areaRect, { style: i } = this._area;
    i.left = `${t}px`, i.top = `${n}px`, i.width = `${o}px`, i.height = `${s}px`;
  }
  _onTapStop(t, n) {
    var o;
    const { document: s, features: i } = this._options, { _singleClick: r } = this;
    T(this._targetElement, "scroll", this._onStartAreaScroll), T(s, ["mousemove", "touchmove"], this._delayedTapMove), T(s, ["touchmove", "mousemove"], this._onTapMove), T(s, ["mouseup", "touchcancel", "touchend"], this._onTapStop), T(s, "scroll", this._onScroll), this._keepSelection(), t && r && i.singleTap.allow ? this._onSingleTap(t) : !r && !n && (this._updateElementSelection(), this._emitEvent("stop", t)), this._scrollSpeed.x = 0, this._scrollSpeed.y = 0, T(this._targetElement, "wheel", this._wheelScroll, { passive: !0 }), T(this._options.document, "keydown", this._keyboardScroll, { passive: !0 }), this._clippingElement.remove(), (o = this._frame) == null || o.cancel(), j(this._area, "display", "none");
  }
  _updateElementSelection() {
    const { _selectables: t, _options: n, _selection: o, _areaRect: s } = this, { stored: i, selected: r, touched: c } = o, { intersect: l, overlap: u } = n.behaviour, d = u === "invert", a = [], f = [], g = [];
    for (let m = 0; m < t.length; m++) {
      const h = t[m];
      if (Me(s, h.getBoundingClientRect(), l)) {
        if (r.includes(h))
          i.includes(h) && !c.includes(h) && c.push(h);
        else if (d && i.includes(h)) {
          g.push(h);
          continue;
        } else
          f.push(h);
        a.push(h);
      }
    }
    d && f.push(...i.filter((m) => !r.includes(m)));
    const p = u === "keep";
    for (let m = 0; m < r.length; m++) {
      const h = r[m];
      !a.includes(h) && !// Check if the user wants to keep previously selected elements, e.g.,
      // not make them part of the current selection as soon as they're touched.
      (p && i.includes(h)) && g.push(h);
    }
    o.selected = a, o.changed = { added: f, removed: g }, this._latestElement = void 0;
  }
  _emitEvent(t, n) {
    return this.emit(t, {
      event: n,
      store: this._selection,
      selection: this
    });
  }
  _keepSelection() {
    const { _options: t, _selection: n } = this, { selected: o, changed: s, touched: i, stored: r } = n, c = o.filter((l) => !r.includes(l));
    switch (t.behaviour.overlap) {
      case "drop": {
        n.stored = [
          ...c,
          ...r.filter((l) => !i.includes(l))
          // Elements not touched
        ];
        break;
      }
      case "invert": {
        n.stored = [
          ...c,
          ...r.filter((l) => !s.removed.includes(l))
          // Elements not removed from selection
        ];
        break;
      }
      case "keep": {
        n.stored = [
          ...r,
          ...o.filter((l) => !r.includes(l))
          // Newly added
        ];
        break;
      }
    }
  }
  /**
   * Manually triggers the start of a selection
   * @param evt A MouseEvent / TouchEvent-like object
   * @param silent If beforestart should be fired,
   */
  trigger(t, n = !0) {
    this._onTapStart(t, n);
  }
  /**
   * Can be used if during a selection elements have been added.
   * Will update everything that can be selected.
   */
  resolveSelectables() {
    this._selectables = F(this._options.selectables, this._options.document);
  }
  /**
   * Same as deselecting, but for all elements currently selected.
   * @param includeStored If the store should also get cleared
   * @param quiet If move / stop events should be fired
   */
  clearSelection(t = !0, n = !1) {
    const { selected: o, stored: s, changed: i } = this._selection;
    i.added = [], i.removed.push(
      ...o,
      ...t ? s : []
    ), n || (this._emitEvent("move", null), this._emitEvent("stop", null)), this._selection = Ae(t ? [] : s);
  }
  /**
   * @returns {Array} Selected elements
   */
  getSelection() {
    return this._selection.stored;
  }
  /**
   * @returns {HTMLElement} The selection area element
   */
  getSelectionArea() {
    return this._area;
  }
  /**
   * Cancel the current selection process, pass true to fire a stop event after cancel.
   */
  cancel(t = !1) {
    this._onTapStop(null, !t);
  }
  /**
   * Unbinds all events and removes the area-element.
   */
  destroy() {
    this.cancel(), this.disable(), this._clippingElement.remove(), super.unbindAllListeners();
  }
  /**
   * Adds elements to the selection
   * @param query - CSS Query, can be an array of queries
   * @param quiet - If this should not trigger the move event
   */
  select(t, n = !1) {
    const { changed: o, selected: s, stored: i } = this._selection, r = F(t, this._options.document).filter(
      (c) => !s.includes(c) && !i.includes(c)
    );
    return i.push(...r), s.push(...r), o.added.push(...r), o.removed = [], this._latestElement = void 0, n || (this._emitEvent("move", null), this._emitEvent("stop", null)), r;
  }
  /**
   * Removes a particular element from the selection.
   * @param query - CSS Query, can be an array of queries
   * @param quiet - If this should not trigger the move event
   */
  deselect(t, n = !1) {
    const { selected: o, stored: s, changed: i } = this._selection, r = F(t, this._options.document).filter(
      (c) => o.includes(c) || s.includes(c)
    );
    this._selection.stored = s.filter((c) => !r.includes(c)), this._selection.selected = o.filter((c) => !r.includes(c)), this._selection.changed.added = [], this._selection.changed.removed.push(
      ...r.filter((c) => !i.removed.includes(c))
    ), this._latestElement = void 0, n || (this._emitEvent("move", null), this._emitEvent("stop", null));
  }
};
Ve.version = "3.7.1";
let Ht = Ve;
function Bt(e) {
  const t = e.mouseSelectionButton === 2 ? [2] : [0], n = new Ht({
    selectables: [".map-container me-tpc"],
    boundaries: [e.container],
    container: e.selectionContainer,
    behaviour: {
      triggers: t,
      // Scroll configuration.
      scrolling: {
        // On scrollable areas the number on px per frame is devided by this amount.
        // Default is 10 to provide a enjoyable scroll experience.
        speedDivider: 10,
        // Browsers handle mouse-wheel events differently, this number will be used as
        // numerator to calculate the mount of px while scrolling manually: manualScrollSpeed / scrollSpeedDivider.
        manualSpeed: 750,
        // This property defines the virtual inset margins from the borders of the container
        // component that, when crossed by the mouse/touch, trigger the scrolling. Useful for
        // fullscreen containers.
        startScrollMargins: { x: 10, y: 10 }
      }
    }
  }).on("beforestart", ({ event: o }) => {
    if (o.target.tagName === "ME-TPC" || o.target.id === "input-box" || o.target.className === "circle")
      return !1;
    const s = n.getSelectionArea();
    return s.style.background = "#4f90f22d", s.style.border = "1px solid #4f90f2", s.parentElement && (s.parentElement.style.zIndex = "9999"), !0;
  }).on("start", ({ event: o }) => {
    !o.ctrlKey && !o.metaKey && (e.clearSelection(), n.clearSelection(!0, !0));
  }).on(
    "move",
    ({
      store: {
        changed: { added: o, removed: s }
      }
    }) => {
      _.moved = !0;
      for (const i of o)
        i.classList.add("selected");
      for (const i of s)
        i.classList.remove("selected");
    }
  ).on("stop", ({ store: { stored: o } }) => {
    e.selectNodes(o);
  });
  e.selection = n;
}
const Rt = function(e, t = !0) {
  this.theme = e;
  const n = this.theme.cssVar, o = Object.keys(n);
  this.mindElixirBox.style.cssText = "";
  for (let s = 0; s < o.length; s++) {
    const i = o[s];
    this.mindElixirBox.style.setProperty(i, n[i]);
  }
  e.cssVar["--gap"] || this.mindElixirBox.style.setProperty("--gap", "30px"), t && this.refresh();
}, K = (e) => {
  var o;
  const t = (o = e.parent) == null ? void 0 : o.children, n = (t == null ? void 0 : t.indexOf(e)) ?? 0;
  return { siblings: t, index: n };
};
function zt(e) {
  const { siblings: t, index: n } = K(e);
  if (t === void 0)
    return;
  const o = t[n];
  n === 0 ? (t[n] = t[t.length - 1], t[t.length - 1] = o) : (t[n] = t[n - 1], t[n - 1] = o);
}
function Ft(e) {
  const { siblings: t, index: n } = K(e);
  if (t === void 0)
    return;
  const o = t[n];
  n === t.length - 1 ? (t[n] = t[0], t[0] = o) : (t[n] = t[n + 1], t[n + 1] = o);
}
function me(e) {
  const { siblings: t, index: n } = K(e);
  return t === void 0 ? 0 : (t.splice(n, 1), t.length);
}
function qt(e, t, n) {
  const { siblings: o, index: s } = K(n);
  o !== void 0 && (t === "before" ? o.splice(s, 0, e) : o.splice(s + 1, 0, e));
}
function It(e, t) {
  const { siblings: n, index: o } = K(e);
  n !== void 0 && (n[o] = t, t.children = [e]);
}
function Ke(e, t, n) {
  if (me(t), e === "in")
    n.children ? n.children.push(t) : n.children = [t];
  else {
    t.direction !== void 0 && (t.direction = n.direction);
    const { siblings: o, index: s } = K(n);
    if (o === void 0)
      return;
    e === "before" ? o.splice(s, 0, t) : o.splice(s + 1, 0, t);
  }
}
const Vt = function(e, t) {
  var n, o;
  if (e === L)
    return L;
  if (e === $)
    return $;
  if (e === re) {
    const s = ((n = document.querySelector(".lhs")) == null ? void 0 : n.childElementCount) || 0, i = ((o = document.querySelector(".rhs")) == null ? void 0 : o.childElementCount) || 0;
    return s <= i ? (t.direction = L, L) : (t.direction = $, $);
  }
}, We = function(e, t, n) {
  var i, r;
  const o = n.children[0].children[0], s = t.parentElement;
  if (s.tagName === "ME-PARENT") {
    if (G(o), s.children[1])
      s.nextSibling.appendChild(n);
    else {
      const c = e.createChildren([n]);
      s.appendChild(pe(!0)), s.insertAdjacentElement("afterend", c);
    }
    e.linkDiv(n.offsetParent);
  } else
    s.tagName === "ME-ROOT" && (Vt(e.direction, o.nodeObj) === L ? (i = e.container.querySelector(".lhs")) == null || i.appendChild(n) : (r = e.container.querySelector(".rhs")) == null || r.appendChild(n), e.linkDiv());
}, Ue = function(e, t) {
  const n = e.parentNode;
  if (t === 0) {
    const o = n.parentNode.parentNode;
    o.tagName !== "ME-MAIN" && o.previousSibling.children[1].remove();
  }
  n.parentNode.remove();
}, Ye = {
  before: "beforebegin",
  after: "afterend"
}, G = function(e) {
  const n = e.parentElement.parentElement.lastElementChild;
  (n == null ? void 0 : n.tagName) === "svg" && (n == null || n.remove());
}, Kt = function(e, t) {
  const n = e.nodeObj, o = ue(n);
  o.style && t.style && (t.style = Object.assign(o.style, t.style));
  const s = Object.assign(n, t);
  fe(e, s), this.linkDiv(), this.bus.fire("operation", {
    name: "reshapeNode",
    obj: s,
    origin: o
  });
}, ge = function(e, t, n) {
  if (!t)
    return null;
  const o = t.nodeObj;
  o.expanded === !1 && (e.expandNode(t, !0), t = N(o.id));
  const s = n || e.generateNewObj();
  o.children ? o.children.push(s) : o.children = [s], O(e.nodeData);
  const { grp: i, top: r } = e.createWrapper(s);
  return We(e, t, i), { newTop: r, newNodeObj: s };
}, Wt = function(e, t, n) {
  var u, d, a, f;
  const o = t || this.currentNode;
  if (!o)
    return;
  const s = o.nodeObj;
  if (s.parent) {
    if (!((u = s.parent) != null && u.parent) && ((a = (d = s.parent) == null ? void 0 : d.children) == null ? void 0 : a.length) === 1) {
      this.addChild(N(s.parent.id), n);
      return;
    }
  } else {
    this.addChild();
    return;
  }
  const i = n || this.generateNewObj();
  if (!((f = s.parent) != null && f.parent)) {
    const g = o.closest("me-main").className === C.LHS ? L : $;
    i.direction = g;
  }
  qt(i, e, s), O(this.nodeData);
  const r = o.parentElement, { grp: c, top: l } = this.createWrapper(i);
  r.parentElement.insertAdjacentElement(Ye[e], c), this.linkDiv(c.offsetParent), n || this.editTopic(l.firstChild), this.selectNode(l.firstChild, !0), this.bus.fire("operation", {
    name: "insertSibling",
    type: e,
    obj: i
  });
}, Ut = function(e, t) {
  const n = e || this.currentNode;
  if (!n)
    return;
  G(n);
  const o = n.nodeObj;
  if (!o.parent)
    return;
  const s = t || this.generateNewObj();
  It(o, s), O(this.nodeData);
  const i = n.parentElement.parentElement, { grp: r, top: c } = this.createWrapper(s, !0);
  c.appendChild(pe(!0)), i.insertAdjacentElement("afterend", r);
  const l = this.createChildren([i]);
  c.insertAdjacentElement("afterend", l), this.linkDiv(), t || this.editTopic(c.firstChild), this.selectNode(c.firstChild, !0), this.bus.fire("operation", {
    name: "insertParent",
    obj: s
  });
}, Yt = function(e, t) {
  const n = e || this.currentNode;
  if (!n)
    return;
  const o = ge(this, n, t);
  if (!o)
    return;
  const { newTop: s, newNodeObj: i } = o;
  this.bus.fire("operation", {
    name: "addChild",
    obj: i
  }), t || this.editTopic(s.firstChild), this.selectNode(s.firstChild, !0);
}, Xt = function(e, t) {
  const n = ue(e.nodeObj);
  he(n);
  const o = ge(this, t, n);
  if (!o)
    return;
  const { newNodeObj: s } = o;
  this.selectNode(N(s.id)), this.bus.fire("operation", {
    name: "copyNode",
    obj: s
  });
}, Gt = function(e, t) {
  e = ce(e);
  const n = [];
  for (let o = 0; o < e.length; o++) {
    const s = e[o], i = ue(s.nodeObj);
    he(i);
    const r = ge(this, t, i);
    if (!r)
      return;
    const { newNodeObj: c } = r;
    n.push(c);
  }
  this.selectNodes(n.map((o) => N(o.id))), this.bus.fire("operation", {
    name: "copyNodes",
    objs: n
  });
}, Jt = function(e) {
  const t = e || this.currentNode;
  if (!t)
    return;
  const n = t.nodeObj;
  zt(n);
  const o = t.parentNode.parentNode;
  o.parentNode.insertBefore(o, o.previousSibling), this.linkDiv(), this.bus.fire("operation", {
    name: "moveUpNode",
    obj: n
  });
}, Zt = function(e) {
  const t = e || this.currentNode;
  if (!t)
    return;
  const n = t.nodeObj;
  Ft(n);
  const o = t.parentNode.parentNode;
  o.nextSibling ? o.nextSibling.insertAdjacentElement("afterend", o) : o.parentNode.prepend(o), this.linkDiv(), this.bus.fire("operation", {
    name: "moveDownNode",
    obj: n
  });
}, Qt = function(e) {
  var r;
  const t = e || this.currentNode;
  if (!t)
    return;
  const n = t.nodeObj;
  if (!n.parent)
    throw new Error("Can not remove root node");
  const o = n.parent.children, s = o.findIndex((c) => c === n), i = me(n);
  if (Ue(t, i), o.length !== 0) {
    const c = o[s] || o[s - 1];
    this.selectNode(N(c.id));
  } else
    this.selectNode(N(n.parent.id));
  this.linkDiv(), this.bus.fire("operation", {
    name: "removeNode",
    obj: n,
    originIndex: s,
    originParentId: (r = n == null ? void 0 : n.parent) == null ? void 0 : r.id
  });
}, en = function(e) {
  e = ce(e);
  for (const t of e) {
    const n = t.nodeObj;
    if (!n.parent)
      continue;
    const o = me(n);
    Ue(t, o);
  }
  this.linkDiv(), this.bus.fire("operation", {
    name: "removeNodes",
    objs: e.map((t) => t.nodeObj)
  });
}, tn = function(e, t) {
  e = ce(e);
  const n = t.nodeObj;
  n.expanded === !1 && (this.expandNode(t, !0), t = N(n.id));
  for (const o of e) {
    const s = o.nodeObj;
    Ke("in", s, n), O(this.nodeData);
    const i = o.parentElement;
    We(this, t, i.parentElement);
  }
  this.linkDiv(), this.bus.fire("operation", {
    name: "moveNodeIn",
    objs: e.map((o) => o.nodeObj),
    toObj: n
  });
}, Xe = (e, t, n, o) => {
  e = ce(e), t === "after" && (e = e.reverse());
  const s = n.nodeObj;
  for (const i of e) {
    const r = i.nodeObj;
    Ke(t, r, s), O(o.nodeData), G(i);
    const c = i.parentElement.parentNode;
    n.parentElement.parentNode.insertAdjacentElement(Ye[t], c);
  }
  o.linkDiv(), o.bus.fire("operation", {
    name: t === "before" ? "moveNodeBefore" : "moveNodeAfter",
    objs: e.map((i) => i.nodeObj),
    toObj: s
  });
}, nn = function(e, t) {
  Xe(e, "before", t, this);
}, on = function(e, t) {
  Xe(e, "after", t, this);
}, sn = function(e) {
  const t = e || this.currentNode;
  t && (t.nodeObj.dangerouslySetInnerHTML || this.editTopic(t));
}, rn = function(e, t) {
  e.text.textContent = t, e.nodeObj.topic = t, this.linkDiv();
}, Ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addChild: Yt,
  beginEdit: sn,
  copyNode: Xt,
  copyNodes: Gt,
  insertParent: Ut,
  insertSibling: Wt,
  moveDownNode: Zt,
  moveNodeAfter: on,
  moveNodeBefore: nn,
  moveNodeIn: tn,
  moveUpNode: Jt,
  removeNode: Qt,
  removeNodes: en,
  reshapeNode: Kt,
  rmSubline: G,
  setNodeTopic: rn
}, Symbol.toStringTag, { value: "Module" }));
function Je(e) {
  return {
    nodeData: e.isFocusMode ? e.nodeDataBackup : e.nodeData,
    arrows: e.arrows,
    summaries: e.summaries,
    direction: e.direction,
    theme: e.theme
  };
}
const cn = function(e, t, n) {
  if (e) {
    if (this.clearSelection(), typeof e == "string") {
      const o = N(e);
      return o ? this.selectNode(o) : void 0;
    }
    e.className = "selected", e.scrollIntoView({ block: "nearest", inline: "nearest" }), this.currentNode = e, t ? this.bus.fire("selectNewNode", e.nodeObj) : this.bus.fire("selectNode", e.nodeObj, n);
  }
}, ln = function() {
  this.currentNode && (this.currentNode.className = ""), this.currentNode = null, this.bus.fire("unselectNode");
}, an = function(e) {
  this.clearSelection();
  for (const t of e)
    t.className = "selected";
  this.currentNodes = e, this.bus.fire(
    "selectNodes",
    e.map((t) => t.nodeObj)
  );
}, dn = function() {
  if (this.currentNodes)
    for (const e of this.currentNodes)
      e.classList.remove("selected");
  this.currentNodes = null, this.bus.fire("unselectNodes");
}, hn = function() {
  this.unselectNode(), this.unselectNodes(), this.unselectSummary(), this.unselectArrow();
}, un = function() {
  const e = Je(this);
  return JSON.stringify(e, (t, n) => {
    if (!(t === "parent" && typeof n != "string"))
      return n;
  });
}, fn = function() {
  return JSON.parse(this.getDataString());
}, pn = function() {
  const e = Je(this).nodeData;
  let t = "# " + e.topic + `

`;
  function n(o, s) {
    for (let i = 0; i < o.length; i++)
      s <= 6 ? t += "".padStart(s, "#") + " " + o[i].topic + `

` : t += "".padStart(s - 7, "	") + "- " + o[i].topic + `
`, o[i].children && n(o[i].children || [], s + 1);
  }
  return n(e.children || [], 2), t;
}, mn = function() {
  this.editable = !0;
}, gn = function() {
  this.editable = !1;
}, vn = function(e) {
  this.scaleVal = e, this.map.style.transform = "scale(" + e + ")", this.bus.fire("scale", e);
}, yn = function() {
  this.container.scrollTo(1e4 - this.container.offsetWidth / 2, 1e4 - this.container.offsetHeight / 2);
}, bn = function(e) {
  e(this);
}, xn = function(e) {
  e.nodeObj.parent && (this.tempDirection === null && (this.tempDirection = this.direction), this.isFocusMode || (this.nodeDataBackup = this.nodeData, this.isFocusMode = !0), this.nodeData = e.nodeObj, this.initRight(), this.toCenter());
}, wn = function() {
  this.isFocusMode = !1, this.tempDirection !== null && (this.nodeData = this.nodeDataBackup, this.direction = this.tempDirection, this.tempDirection = null, this.refresh(), this.toCenter());
}, En = function() {
  this.direction = 0, this.refresh();
}, Nn = function() {
  this.direction = 1, this.refresh();
}, Sn = function() {
  this.direction = 2, this.refresh();
}, Cn = function(e) {
  this.locale = e, this.refresh();
}, _n = function(e, t) {
  const n = e.nodeObj;
  typeof t == "boolean" ? n.expanded = t : n.expanded !== !1 ? n.expanded = !1 : n.expanded = !0;
  const o = e.parentNode, s = o.children[1];
  if (s.expanded = n.expanded, s.className = n.expanded ? "minus" : "", G(e), n.expanded) {
    const l = this.createChildren(
      n.children.map((u) => this.createWrapper(u).grp)
    );
    o.parentNode.appendChild(l);
  } else
    o.parentNode.children[1].remove();
  this.linkDiv(e.closest("me-main > me-wrapper"));
  const i = e.getBoundingClientRect(), r = this.container.getBoundingClientRect();
  (i.bottom > r.bottom || i.top < r.top || i.right > r.right || i.left < r.left) && e.scrollIntoView({ block: "center", inline: "center" }), this.bus.fire("expandNode", n);
}, Mn = function(e) {
  e && (e = JSON.parse(JSON.stringify(e)), this.nodeData = e.nodeData, this.arrows = e.arrows || [], this.summaries = e.summaries || []), O(this.nodeData), this.layout(), this.linkDiv();
}, kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cancelFocus: wn,
  clearSelection: hn,
  disableEdit: gn,
  enableEdit: mn,
  expandNode: _n,
  focusNode: xn,
  getData: fn,
  getDataMd: pn,
  getDataString: un,
  initLeft: En,
  initRight: Nn,
  initSide: Sn,
  install: bn,
  refresh: Mn,
  scale: vn,
  selectNode: cn,
  selectNodes: an,
  setLocale: Cn,
  toCenter: yn,
  unselectNode: ln,
  unselectNodes: dn
}, Symbol.toStringTag, { value: "Module" })), Ln = function(e) {
  return {
    dom: e,
    moved: !1,
    // diffrentiate click and move
    mousedown: !1,
    handleMouseMove(t) {
      this.mousedown && (this.moved = !0, this.cb && this.cb(t.movementX, t.movementY));
    },
    handleMouseDown(t) {
      t.button === 0 && (this.mousedown = !0);
    },
    handleClear(t) {
      this.mousedown = !1;
    },
    cb: null,
    init(t, n) {
      this.cb = n, this.handleClear = this.handleClear.bind(this), this.handleMouseMove = this.handleMouseMove.bind(this), this.handleMouseDown = this.handleMouseDown.bind(this), t.addEventListener("mousemove", this.handleMouseMove), t.addEventListener("mouseleave", this.handleClear), t.addEventListener("mouseup", this.handleClear), this.dom.addEventListener("mousedown", this.handleMouseDown);
    },
    destory(t) {
      t.removeEventListener("mousemove", this.handleMouseMove), t.removeEventListener("mouseleave", this.handleClear), t.removeEventListener("mouseup", this.handleClear), this.dom.removeEventListener("mousedown", this.handleMouseDown);
    },
    clear() {
      this.moved = !1, this.mousedown = !1;
    }
  };
}, je = {
  create: Ln
};
function ie(e, t, n) {
  const { offsetLeft: o, offsetTop: s } = P(e.nodes, t), i = t.offsetWidth, r = t.offsetHeight, c = o + i / 2, l = s + r / 2, u = c + n.x, d = l + n.y;
  return {
    w: i,
    h: r,
    cx: c,
    cy: l,
    ctrlX: u,
    ctrlY: d
  };
}
function q(e) {
  let t, n;
  const o = (e.cy - e.ctrlY) / (e.ctrlX - e.cx);
  return o > e.h / e.w || o < -e.h / e.w ? e.cy - e.ctrlY < 0 ? (t = e.cx - e.h / 2 / o, n = e.cy + e.h / 2) : (t = e.cx + e.h / 2 / o, n = e.cy - e.h / 2) : e.cx - e.ctrlX < 0 ? (t = e.cx + e.w / 2, n = e.cy - e.w * o / 2) : (t = e.cx - e.w / 2, n = e.cy + e.w * o / 2), {
    x: t,
    y: n
  };
}
const Tn = function(e, t, n, o) {
  const s = document.createElementNS("http://www.w3.org/2000/svg", "text");
  return E(s, {
    "text-anchor": "middle",
    x: t + "",
    y: n + "",
    fill: o || "#666"
  }), s.dataset.type = "custom-link", s.innerHTML = e, s;
}, Ze = function(e, t, n, o, s) {
  if (!t || !n)
    return;
  performance.now();
  const i = ie(e, t, o.delta1), r = ie(e, n, o.delta2), { x: c, y: l } = q(i), { ctrlX: u, ctrlY: d } = i, { ctrlX: a, ctrlY: f } = r, { x: g, y: p } = q(r), m = Be(a, f, g, p), h = mt(
    `M ${c} ${l} C ${u} ${d} ${a} ${f} ${g} ${p}`,
    `M ${m.x1} ${m.y1} L ${g} ${p} L ${m.x2} ${m.y2}`
  ), v = c / 8 + u * 3 / 8 + a * 3 / 8 + g / 8, y = l / 8 + d * 3 / 8 + f * 3 / 8 + p / 8, b = Tn(o.label, v, y, e.theme.cssVar["--color"]);
  h.appendChild(b), h.arrowObj = o, h.dataset.linkid = o.id, e.linkSvgGroup.appendChild(h), s || (e.arrows.push(o), e.currentArrow = h, et(e, o, i, r)), performance.now();
}, An = function(e, t) {
  const n = {
    id: X(),
    label: "Custom Link",
    from: e.nodeObj.id,
    to: t.nodeObj.id,
    delta1: {
      x: 0,
      y: -200
    },
    delta2: {
      x: 0,
      y: -200
    }
  };
  Ze(this, e, t, n), this.bus.fire("operation", {
    name: "createArrow",
    obj: n
  });
}, jn = function(e) {
  let t;
  if (e ? t = e : t = this.currentArrow, !t)
    return;
  Qe(this);
  const n = t.arrowObj.id;
  this.arrows = this.arrows.filter((o) => o.id !== n), t.remove(), this.bus.fire("operation", {
    name: "removeArrow",
    obj: {
      id: n
    }
  });
}, Dn = function(e) {
  this.currentArrow = e;
  const t = e.arrowObj, n = N(t.from), o = N(t.to), s = ie(this, n, t.delta1), i = ie(this, o, t.delta2);
  et(this, t, s, i);
}, $n = function() {
  this.currentArrow = null, Qe(this);
}, Qe = function(e) {
  e.linkController.style.display = "none", e.P2.style.display = "none", e.P3.style.display = "none";
}, et = function(e, t, n, o) {
  var f;
  e.linkController.style.display = "initial", e.P2.style.display = "initial", e.P3.style.display = "initial", e.nodes.appendChild(e.linkController), e.nodes.appendChild(e.P2), e.nodes.appendChild(e.P3);
  let { x: s, y: i } = q(n), { ctrlX: r, ctrlY: c } = n, { ctrlX: l, ctrlY: u } = o, { x: d, y: a } = q(o);
  e.P2.style.cssText = `top:${c}px;left:${r}px;`, e.P3.style.cssText = `top:${u}px;left:${l}px;`, E(e.line1, {
    x1: s + "",
    y1: i + "",
    x2: r + "",
    y2: c + ""
  }), E(e.line2, {
    x1: l + "",
    y1: u + "",
    x2: d + "",
    y2: a + ""
  }), e.helper1 && (e.helper1.destory(e.map), (f = e.helper2) == null || f.destory(e.map)), e.helper1 = je.create(e.P2), e.helper2 = je.create(e.P3), e.helper1.init(e.map, (g, p) => {
    var y;
    r = r + g / e.scaleVal, c = c + p / e.scaleVal;
    const m = q({ ...n, ctrlX: r, ctrlY: c });
    s = m.x, i = m.y;
    const h = s / 8 + r * 3 / 8 + l * 3 / 8 + d / 8, v = i / 8 + c * 3 / 8 + u * 3 / 8 + a / 8;
    e.P2.style.top = c + "px", e.P2.style.left = r + "px", (y = e.currentArrow) == null || y.children[0].setAttribute("d", `M ${s} ${i} C ${r} ${c} ${l} ${u} ${d} ${a}`), E(e.currentArrow.children[2], {
      x: h + "",
      y: v + ""
    }), E(e.line1, {
      x1: s + "",
      y1: i + "",
      x2: r + "",
      y2: c + ""
    }), t.delta1.x = r - n.cx, t.delta1.y = c - n.cy;
  }), e.helper2.init(e.map, (g, p) => {
    var b, x;
    l = l + g / e.scaleVal, u = u + p / e.scaleVal;
    const m = q({ ...o, ctrlX: l, ctrlY: u });
    d = m.x, a = m.y;
    const h = s / 8 + r * 3 / 8 + l * 3 / 8 + d / 8, v = i / 8 + c * 3 / 8 + u * 3 / 8 + a / 8, y = Be(l, u, d, a);
    e.P3.style.top = u + "px", e.P3.style.left = l + "px", (b = e.currentArrow) == null || b.children[0].setAttribute("d", `M ${s} ${i} C ${r} ${c} ${l} ${u} ${d} ${a}`), (x = e.currentArrow) == null || x.children[1].setAttribute("d", `M ${y.x1} ${y.y1} L ${d} ${a} L ${y.x2} ${y.y2}`), E(e.currentArrow.children[2], {
      x: h + "",
      y: v + ""
    }), E(e.line2, {
      x1: l + "",
      y1: u + "",
      x2: d + "",
      y2: a + ""
    }), t.delta2.x = l - o.cx, t.delta2.y = u - o.cy;
  });
};
function On() {
  this.linkSvgGroup.innerHTML = "";
  for (let e = 0; e < this.arrows.length; e++) {
    const t = this.arrows[e];
    try {
      Ze(this, N(t.from), N(t.to), t, !0);
    } catch {
    }
  }
  this.nodes.appendChild(this.linkSvgGroup);
}
function Pn(e) {
  if (!e)
    return;
  const t = e.children[2];
  Fe(this, t, (n) => {
    var i;
    const o = e.arrowObj, s = ((i = n.textContent) == null ? void 0 : i.trim()) || "";
    s === "" ? o.label = origin : o.label = s, n.remove(), s !== origin && (t.innerHTML = o.label, this.linkDiv(), this.bus.fire("operation", {
      name: "finishEditArrowLabel",
      obj: o
    }));
  });
}
function Hn() {
  this.arrows = this.arrows.filter((e) => oe(e.from, this.nodeData) && oe(e.to, this.nodeData));
}
const Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createArrow: An,
  editArrowLabel: Pn,
  removeArrow: jn,
  renderArrow: On,
  selectArrow: Dn,
  tidyArrow: Hn,
  unselectArrow: $n
}, Symbol.toStringTag, { value: "Module" })), Rn = function(e) {
  var l, u;
  if (e.length === 0)
    throw new Error("No selected node.");
  if (e.length === 1) {
    const d = e[0].nodeObj, a = e[0].nodeObj.parent;
    if (!a)
      throw new Error("Can not select root node.");
    const f = a.children.findIndex((g) => d === g);
    return {
      parent: a.id,
      start: f,
      end: f
    };
  }
  let t = 0;
  const n = e.map((d) => {
    let a = d.nodeObj;
    const f = [];
    for (; a.parent; ) {
      const g = a.parent, p = g.children, m = p == null ? void 0 : p.indexOf(a);
      a = g, f.unshift({ node: a, index: m });
    }
    return f.length > t && (t = f.length), f;
  });
  let o = 0;
  e:
    for (; o < t; o++) {
      const d = (l = n[0][o]) == null ? void 0 : l.node;
      for (let a = 1; a < n.length; a++)
        if (((u = n[a][o]) == null ? void 0 : u.node) !== d)
          break e;
    }
  if (!o)
    throw new Error("Can not select root node.");
  const s = n.map((d) => d[o - 1].index).sort(), i = s[0] || 0, r = s[s.length - 1] || 0, c = n[0][o - 1].node;
  if (!c.parent)
    throw new Error("Please select nodes in the same main topic.");
  return {
    parent: c.id,
    start: i,
    end: r
  };
}, zn = function(e) {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "g");
  return t.setAttribute("id", e), t;
}, De = function(e, t) {
  const n = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return E(n, {
    d: e,
    stroke: t || "#666",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-width": "2"
  }), n;
}, $e = function(e, t, n, o, s) {
  const i = document.createElementNS("http://www.w3.org/2000/svg", "text");
  return E(i, {
    "text-anchor": o,
    x: t + "",
    y: n + "",
    fill: s || "#666"
  }), i.innerHTML = e, i;
}, Fn = (e) => N(e).parentElement.parentElement, qn = function({ parent: e, start: t }) {
  const n = N(e), o = n.nodeObj;
  let s;
  return o.parent ? s = n.closest("me-main").className : s = N(o.children[t].id).closest("me-main").className, s;
}, tt = function(e, t) {
  var S;
  const { id: n, text: o, parent: s, start: i, end: r } = t, c = e.nodes, u = N(s).nodeObj, d = qn(t);
  let a = 1 / 0, f = 0, g = 0, p = 0;
  for (let H = i; H <= r; H++) {
    const W = (S = u.children) == null ? void 0 : S[H];
    if (!W)
      return e.removeSummary(n), null;
    const B = Fn(W.id), { offsetLeft: J, offsetTop: ve } = P(c, B), ye = i === r ? 10 : 20;
    H === i && (g = ve + ye), H === r && (p = ve + B.offsetHeight - ye), J < a && (a = J), B.offsetWidth + J > f && (f = B.offsetWidth + J);
  }
  let m, h;
  const v = g + 10, y = p + 10, b = (v + y) / 2, x = e.theme.cssVar["--color"];
  d === C.LHS ? (m = De(`M ${a + 10} ${v} c -5 0 -10 5 -10 10 L ${a} ${y - 10} c 0 5 5 10 10 10 M ${a} ${b} h -10`, x), h = $e(o, a - 20, b + 6, "end", x)) : (m = De(`M ${f - 10} ${v} c 5 0 10 5 10 10 L ${f} ${y - 10} c 0 5 -5 10 -10 10 M ${f} ${b} h 10`, x), h = $e(o, f + 20, b + 6, "start", x));
  const w = zn("s-" + n);
  return w.appendChild(m), w.appendChild(h), w.summaryObj = t, e.summarySvg.appendChild(w), w;
}, In = function() {
  let e = [];
  this.currentNode ? e = [this.currentNode] : this.currentNodes && (e = this.currentNodes);
  const { parent: t, start: n, end: o } = Rn(e), s = { id: X(), parent: t, start: n, end: o, text: "summary" }, i = tt(this, s);
  this.summaries.push(s), this.editSummary(i), this.bus.fire("operation", {
    name: "createSummary",
    obj: s
  });
}, Vn = function(e) {
  var n;
  const t = this.summaries.findIndex((o) => o.id === e);
  t > -1 && (this.summaries.splice(t, 1), (n = document.querySelector("#s-" + e)) == null || n.remove()), this.bus.fire("operation", {
    name: "removeSummary",
    obj: { id: e }
  });
}, Kn = function(e) {
  const t = e.children[1].getBBox(), n = 6, o = 3, s = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  E(s, {
    x: t.x - n + "",
    y: t.y - n + "",
    width: t.width + n * 2 + "",
    height: t.height + n * 2 + "",
    rx: o + "",
    stroke: this.theme.cssVar["--selected"] || "#4dc4ff",
    "stroke-width": "2",
    fill: "none"
  }), e.appendChild(s), this.currentSummary = e;
}, Wn = function() {
  var e, t;
  (t = (e = this.currentSummary) == null ? void 0 : e.querySelector("rect")) == null || t.remove(), this.currentSummary = null;
}, Un = function() {
  this.summarySvg.innerHTML = "", this.summaries.forEach((e) => {
    try {
      tt(this, e);
    } catch {
    }
  }), this.nodes.insertAdjacentElement("beforeend", this.summarySvg);
}, Yn = function(e) {
  if (!e)
    return;
  const t = e.childNodes[1];
  Fe(this, t, (n) => {
    var i;
    const o = e.summaryObj, s = ((i = n.textContent) == null ? void 0 : i.trim()) || "";
    s === "" ? o.text = origin : o.text = s, n.remove(), s !== origin && (t.innerHTML = o.text, this.linkDiv(), this.bus.fire("operation", {
      name: "finishEditSummary",
      obj: o
    }));
  });
}, Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createSummary: In,
  editSummary: Yn,
  removeSummary: Vn,
  renderSummary: Un,
  selectSummary: Kn,
  unselectSummary: Wn
}, Symbol.toStringTag, { value: "Module" })), k = "http://www.w3.org/2000/svg";
function Gn(e, t) {
  const n = document.createElementNS(k, "svg");
  return E(n, {
    version: "1.1",
    xmlns: k,
    height: e,
    width: t
  }), n;
}
function Jn(e, t) {
  return (parseInt(e) - parseInt(t)) / 2;
}
function Zn(e, t, n, o) {
  const s = document.createElementNS(k, "g");
  let i = "";
  return e.text ? i = e.text.textContent : i = e.childNodes[0].textContent, i.split(`
`).forEach((c, l) => {
    const u = document.createElementNS(k, "text");
    E(u, {
      x: n + parseInt(t.paddingLeft) + "",
      y: o + parseInt(t.paddingTop) + Jn(t.lineHeight, t.fontSize) * (l + 1) + parseFloat(t.fontSize) * (l + 1) + "",
      "text-anchor": "start",
      "font-family": t.fontFamily,
      "font-size": `${t.fontSize}`,
      "font-weight": `${t.fontWeight}`,
      fill: `${t.color}`
    }), u.innerHTML = c, s.appendChild(u);
  }), s;
}
function Qn(e, t, n, o) {
  var c;
  let s = "";
  (c = e.nodeObj) != null && c.dangerouslySetInnerHTML ? s = e.nodeObj.dangerouslySetInnerHTML : e.text ? s = e.text.textContent : s = e.childNodes[0].textContent;
  const i = document.createElementNS(k, "foreignObject");
  E(i, {
    x: n + parseInt(t.paddingLeft) + "",
    y: o + parseInt(t.paddingTop) + "",
    width: t.width,
    height: t.height
  });
  const r = document.createElement("div");
  return E(r, {
    xmlns: "http://www.w3.org/1999/xhtml",
    style: `font-family: ${t.fontFamily}; font-size: ${t.fontSize}; font-weight: ${t.fontWeight}; color: ${t.color}; white-space: pre-wrap;`
  }), r.innerHTML = s, i.appendChild(r), i;
}
function eo(e, t) {
  const n = getComputedStyle(t), { offsetLeft: o, offsetTop: s } = P(e.nodes, t), i = document.createElementNS(k, "rect");
  return E(i, {
    x: o + "",
    y: s + "",
    rx: n.borderRadius,
    ry: n.borderRadius,
    width: n.width,
    height: n.height,
    fill: n.backgroundColor,
    stroke: n.borderColor,
    "stroke-width": n.borderWidth
  }), i;
}
function ee(e, t, n = !1) {
  const o = getComputedStyle(t), { offsetLeft: s, offsetTop: i } = P(e.nodes, t), r = document.createElementNS(k, "rect");
  E(r, {
    x: s + "",
    y: i + "",
    rx: o.borderRadius,
    ry: o.borderRadius,
    width: o.width,
    height: o.height,
    fill: o.backgroundColor,
    stroke: o.borderColor,
    "stroke-width": o.borderWidth
  });
  const c = document.createElementNS(k, "g");
  c.appendChild(r);
  let l;
  return n ? l = Qn(t, o, s, i) : l = Zn(t, o, s, i), c.appendChild(l), c;
}
function to(e, t) {
  const n = getComputedStyle(t), { offsetLeft: o, offsetTop: s } = P(e.nodes, t), i = document.createElementNS(k, "a"), r = document.createElementNS(k, "text");
  return E(r, {
    x: o + "",
    y: s + parseInt(n.fontSize) + "",
    "text-anchor": "start",
    "font-family": n.fontFamily,
    "font-size": `${n.fontSize}`,
    "font-weight": `${n.fontWeight}`,
    fill: `${n.color}`
  }), r.innerHTML = t.textContent, i.appendChild(r), i.setAttribute("href", t.href), i;
}
function no(e, t) {
  const n = getComputedStyle(t), { offsetLeft: o, offsetTop: s } = P(e.nodes, t), i = document.createElementNS(k, "image");
  return E(i, {
    x: o + "",
    y: s + "",
    width: n.width + "",
    height: n.height + "",
    href: t.src
  }), i;
}
const te = 100, oo = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">', so = (e, t = !1) => {
  var a, f, g;
  const n = e.nodes, o = n.offsetHeight + te * 2, s = n.offsetWidth + te * 2, i = Gn(o + "px", s + "px"), r = document.createElementNS(k, "svg"), c = document.createElementNS(k, "rect");
  E(c, {
    x: "0",
    y: "0",
    width: `${s}`,
    height: `${o}`,
    fill: e.theme.cssVar["--bgcolor"]
  }), i.appendChild(c), n.querySelectorAll(".subLines").forEach((p) => {
    const m = p.cloneNode(!0), { offsetLeft: h, offsetTop: v } = P(n, p.parentElement);
    m.setAttribute("x", `${h}`), m.setAttribute("y", `${v}`), r.appendChild(m);
  });
  const l = (a = n.querySelector(".lines")) == null ? void 0 : a.cloneNode(!0);
  l && r.appendChild(l);
  const u = (f = n.querySelector(".topiclinks")) == null ? void 0 : f.cloneNode(!0);
  u && r.appendChild(u);
  const d = (g = n.querySelector(".summary")) == null ? void 0 : g.cloneNode(!0);
  return d && r.appendChild(d), n.querySelectorAll("me-tpc").forEach((p) => {
    p.nodeObj.dangerouslySetInnerHTML ? r.appendChild(ee(e, p, !t)) : (r.appendChild(eo(e, p)), r.appendChild(ee(e, p.text, !t)));
  }), n.querySelectorAll(".tags > span").forEach((p) => {
    r.appendChild(ee(e, p));
  }), n.querySelectorAll(".icons > span").forEach((p) => {
    r.appendChild(ee(e, p));
  }), n.querySelectorAll(".hyper-link").forEach((p) => {
    r.appendChild(to(e, p));
  }), n.querySelectorAll("img").forEach((p) => {
    r.appendChild(no(e, p));
  }), E(r, {
    x: te + "",
    y: te + "",
    overflow: "visible"
  }), i.appendChild(r), i;
}, io = (e, t) => (t && e.insertAdjacentHTML("afterbegin", "<style>" + t + "</style>"), oo + e.outerHTML);
function ro(e) {
  return new Promise((t, n) => {
    const o = new FileReader();
    o.onload = (s) => {
      t(s.target.result);
    }, o.onerror = (s) => {
      n(s);
    }, o.readAsDataURL(e);
  });
}
const co = function(e = !1, t) {
  const n = so(this, e), o = io(n, t);
  return new Blob([o], { type: "image/svg+xml" });
}, lo = async function(e = !1, t) {
  const n = this.exportSvg(e, t), o = await ro(n);
  return new Promise((s, i) => {
    const r = new Image();
    r.setAttribute("crossOrigin", "anonymous"), r.onload = () => {
      const c = document.createElement("canvas");
      c.width = r.width, c.height = r.height, c.getContext("2d").drawImage(r, 0, 0), c.toBlob(s, "image/png", 1);
    }, r.src = o, r.onerror = i;
  });
}, ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportPng: lo,
  exportSvg: co
}, Symbol.toStringTag, { value: "Module" }));
function ho(e, t) {
  return async function(...n) {
    const o = this.before[t];
    o && !await o.apply(this, n) || e.apply(this, n);
  };
}
const Oe = Object.keys(Ge), nt = {};
for (let e = 0; e < Oe.length; e++) {
  const t = Oe[e];
  nt[t] = ho(Ge[t], t);
}
const uo = {
  getObjById: oe,
  generateNewObj: st,
  layout: ct,
  linkDiv: gt,
  editTopic: pt,
  createWrapper: dt,
  createParent: ht,
  createChildren: ut,
  createTopic: ft,
  findEle: N,
  changeTheme: Rt,
  ...kn,
  ...nt,
  ...Bn,
  ...Xn,
  ...ao,
  init(e) {
    if (!e || !e.nodeData)
      return new Error("MindElixir: `data` is required");
    e.direction !== void 0 && (this.direction = e.direction), this.changeTheme(e.theme || this.theme, !1), this.nodeData = e.nodeData, O(this.nodeData), this.arrows = e.arrows || [], this.summaries = e.summaries || [], this.tidyArrow(), this.toolBar && At(this), this.keypress && Nt(this), this.editable && Bt(this), this.contextMenu && this.disposable.push(vt(this, this.contextMenuOption)), this.draggable && _t(this), this.allowUndo && kt(this), this.toCenter(), this.layout(), this.linkDiv();
  },
  destroy() {
    var e;
    this.disposable.forEach((t) => t()), this.mindElixirBox && (this.mindElixirBox.innerHTML = ""), this.mindElixirBox = void 0, this.nodeData = void 0, this.arrows = void 0, this.summaries = void 0, this.currentArrow = void 0, this.currentNode = void 0, this.currentNodes = void 0, this.currentSummary = void 0, this.waitCopy = void 0, this.theme = void 0, this.direction = void 0, this.bus = void 0, this.container = void 0, this.map = void 0, this.lines = void 0, this.linkController = void 0, this.linkSvgGroup = void 0, this.P2 = void 0, this.P3 = void 0, this.line1 = void 0, this.line2 = void 0, this.nodes = void 0, (e = this.selection) == null || e.destroy(), this.selection = void 0;
  }
};
function fo({ pT: e, pL: t, pW: n, pH: o, cT: s, cL: i, cW: r, cH: c, direction: l, containerHeight: u }) {
  let d = t + n / 2;
  const a = e + o / 2;
  let f;
  l === C.LHS ? f = i + r : f = i;
  const g = s + c / 2, m = (1 - Math.abs(g - a) / u) * 0.25 * (n / 2);
  return l === C.LHS ? d = d - n / 10 - m : d = d + n / 10 + m, `M ${d} ${a} Q ${d} ${g} ${f} ${g}`;
}
function po({ pT: e, pL: t, pW: n, pH: o, cT: s, cL: i, cW: r, cH: c, direction: l, isFirst: u }) {
  const d = parseInt(this.mindElixirBox.style.getPropertyValue("--gap"));
  let a = 0, f = 0;
  u ? a = e + o / 2 : a = e + o;
  const g = s + c;
  let p = 0, m = 0, h = 0;
  const v = Math.abs(a - g) / 300 * d;
  return l === C.LHS ? (h = t, p = h + d, m = h - d, f = i + d, `M ${p} ${a} C ${h} ${a} ${h + v} ${g} ${m} ${g} H ${f}`) : (h = t + n, p = h - d, m = h + d, f = i + r - d, `M ${p} ${a} C ${h} ${a} ${h - v} ${g} ${m} ${g} H ${f}`);
}
const mo = "4.3.6", U = document;
function A({
  el: e,
  direction: t,
  locale: n,
  draggable: o,
  editable: s,
  contextMenu: i,
  contextMenuOption: r,
  toolBar: c,
  keypress: l,
  mouseSelectionButton: u,
  selectionContainer: d,
  before: a,
  newTopicName: f,
  allowUndo: g,
  generateMainBranch: p,
  generateSubBranch: m,
  overflowHidden: h,
  theme: v
}) {
  let y = null;
  const b = Object.prototype.toString.call(e);
  if (b === "[object HTMLDivElement]" ? y = e : b === "[object String]" && (y = document.querySelector(e)), !y)
    throw new Error("MindElixir: el is not a valid element");
  y.className += " mind-elixir", y.innerHTML = "", this.mindElixirBox = y, this.disposable = [], this.before = a || {}, this.locale = n || "en", this.contextMenuOption = r, this.contextMenu = i === void 0 ? !0 : i, this.toolBar = c === void 0 ? !0 : c, this.keypress = l === void 0 ? !0 : l, this.mouseSelectionButton = u || 0, this.direction = typeof t == "number" ? t : 1, this.draggable = o === void 0 ? !0 : o, this.newTopicName = f || "new node", this.editable = s === void 0 ? !0 : s, this.allowUndo = g === void 0 ? !1 : g, this.currentNode = null, this.currentArrow = null, this.scaleVal = 1, this.tempDirection = null, this.generateMainBranch = p || fo, this.generateSubBranch = m || po, this.overflowHidden = h || !1, this.bus = rt.create(), this.container = U.createElement("div"), this.selectionContainer = d || this.container, this.container.className = "map-container";
  const x = window.matchMedia("(prefers-color-scheme: dark)");
  this.theme = v || (x.matches ? He : Pe);
  const w = U.createElement("div");
  w.className = "map-canvas", this.map = w, this.map.setAttribute("tabindex", "0"), this.container.appendChild(this.map), this.mindElixirBox.appendChild(this.container), this.nodes = U.createElement("me-nodes"), this.nodes.className = "main-node-container", this.lines = Y("lines"), this.summarySvg = Y("summary"), this.linkController = Y("linkcontroller"), this.P2 = U.createElement("div"), this.P3 = U.createElement("div"), this.P2.className = this.P3.className = "circle", this.P2.style.display = this.P3.style.display = "none", this.line1 = be(), this.line2 = be(), this.linkController.appendChild(this.line1), this.linkController.appendChild(this.line2), this.linkSvgGroup = Y("topiclinks"), this.map.appendChild(this.nodes), this.overflowHidden ? this.container.style.overflow = "hidden" : it(this);
}
A.prototype = uo;
A.LEFT = L;
A.RIGHT = $;
A.SIDE = re;
A.THEME = Pe;
A.DARK_THEME = He;
A.version = mo;
A.E = N;
A.new = (e) => ({
  nodeData: {
    id: X(),
    topic: e || "new topic",
    children: []
  }
});
A.dragMoveHelper = _;
export {
  C as DirectionClass,
  A as default
};
