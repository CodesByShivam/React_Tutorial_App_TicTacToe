(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(1),s=a(2),i=a(4),u=a(3),c=a(0),l=a.n(c),o=a(6),m=a.n(o);a(14);function h(e){return l.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"renderSquare",value:function(e){var t=this;return l.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return l.a.createElement("div",{style:{"justify-content":"right",display:"grid"}},l.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),l.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),l.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(l.a.Component),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0},r}return Object(s.a)(a,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();v(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,r=a[this.state.stepNumber],n=v(r.squares),s=a.map((function(e,a){var r=a?"Goto move number: "+a:"Reset Game";return l.a.createElement("li",{key:a},l.a.createElement("button",{onClick:function(){return t.jumpTo(a)}},r))}));return e=n?"Winner: "+n:"Next Player: "+(this.state.xIsNext?"X":"O"),l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement(d,{squares:r.squares,onClick:function(e){t.handleClick(e)}})),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",{className:"game-status"},e),l.a.createElement("ol",null,s)))}}]),a}(l.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(r.a)(t[a],3),s=n[0],i=n[1],u=n[2];if(e[s]&&e[s]===e[i]&&e[s]===e[u])return e[s]}return null}m.a.render(l.a.createElement(p,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.e3a0f8c1.chunk.js.map