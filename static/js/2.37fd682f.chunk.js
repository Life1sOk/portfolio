(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{50:function(n,e,t){"use strict";var a,i=t(0),r=t.n(i),o=t(1),s=t(2).a.h1(a||(a=Object(o.a)(["\n    font-size: 32.97px;\n    color: ",";\n\n    .name {\n        font-size: 37px;\n        color: #f1a845;\n    }\n\n    @media only screen and (min-width: 768px) {\n        /* font-size: 39.97px;\n\n        .name {\n            font-size: 44px;\n        } */\n    };\n"])),function(n){return n.tier?"#a9c6d9":"white"});e.a=function(n){var e=n.tier,t=n.children;return r.a.createElement(s,{tier:e},t)}},58:function(n,e,t){"use strict";t.r(e);var a,i,r,o,s,p,c,l,d,x,m,f,h=t(0),u=t.n(h),w=t(14),g=t(1),b=t(2),y=b.a.div(a||(a=Object(g.a)(["\n    min-width: 80px;\n    padding: 3px;\n    border-radius: 20px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n\n    animation-name: zero;\n    animation-duration: ",";\n\n    @keyframes zero {\n        from {\n            transform: scale(0);\n        }\n        to {\n            transform: scale(1);\n        }\n    };\n\n    @media only screen and (min-width: 500px) and (max-width: 767.98px) {\n        \n    };\n"])),function(n){var e=n.time;return e?"".concat(e,"s"):"2s"}),v=b.a.div(i||(i=Object(g.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #f1a845;\n\n    svg {\n        width: 27px;\n        height: 27px;\n    }\n\n    @media only screen and (min-width: 500px) {\n        svg {\n            width: 35px;\n            height: 35px;\n        }\n    };\n"]))),j=b.a.span(r||(r=Object(g.a)(["\n    font-size: .8rem;\n"]))),E=function(n){var e=n.icon,t=n.name,a=n.time;return u.a.createElement(y,{time:a},u.a.createElement(v,null,e),u.a.createElement(j,null,t))},k=t(50),O=b.a.div(o||(o=Object(g.a)(["\n    perspective: 750px;\n    perspective-origin: 50% 100px;\n    transform: scale(.5);\n\n    animation: animationBox 2s ease-in;\n\n    @keyframes animationBox {\n        0%{\n            transform: translateY(-100px) scale(.5);\n        }\n\n        100%{\n            transform: translateY(0px) scale(.5);\n        }\n    };\n\n    @media only screen and (min-width: 992px) {\n        transform: scale(1);\n\n        @keyframes animationBox {\n            0%{\n                transform: translateY(-100px);\n            }\n\n            100%{\n                transform: translateY(0px);\n            }\n        };\n    };\n"]))),z=b.a.div(s||(s=Object(g.a)(["\n    position: relative;\n    height: 300px;\n    width: 300px;\n    transform-style: preserve-3d;\n    animation: spinner 45s linear infinite;\n\n    @keyframes spinner {\n        0%{\n            transform: rotateY(0);\n        }\n\n        100%{\n            transform: rotateY(1turn);\n        }\n    };\n\n    #front {\n        transform: translateZ(150px);\n        box-shadow: inset 0 20px 100px #02203c;\n    };\n\n    #back {\n        transform: translateZ(-150px) rotateY(180deg);\n        box-shadow: inset 0 0 30px #02203c;\n    };\n\n    #left {\n        right: 150px;\n        transform: rotateY(-90deg);\n        box-shadow: inset 0 0 35px #02203c;\n    };\n\n    #rigth {\n        left: 150px;\n        transform: rotateY(90deg);\n        box-shadow: inset 0 0 35px #02203c;\n    };\n\n    #top{\n        bottom: 150px;\n        transform: rotateX(90deg);\n        box-shadow: inset 0 0 35px #02203c;\n    };\n\n    #bottom {\n        top: 150px;\n        transform: rotateX(-90deg);\n        box-shadow: inset 0 0 35px #02203c;\n        filter: drop-shadow(0px 0px 100px #7E57C2);\n\n        animation: shadow 2s ease-in;\n\n        @keyframes shadow {\n            0%{\n                filter: drop-shadow(0px 0px 0px #7E57C2);\n            }\n\n            100%{\n                filter: drop-shadow(0px 0px 40px #7E57C2);\n            }\n        };\n    };\n"]))),Y=b.a.div(p||(p=Object(g.a)(["\n    position: absolute;\n    height: 300px;\n    width: 300px;\n    text-align: center;\n    color: white;\n    background-color: rgba(64, 87, 143, .6);\n    border: 1px solid white;\n    font-size: 14px;\n    box-sizing: border-box;\n    transition: all 1s;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),B=b.a.div(c||(c=Object(g.a)(["\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: ",";\n\n    svg {\n        width: 60%;\n        height: 60%;\n    };\n"])),function(n){var e=n.color;return e||"white"}),C=function(){return u.a.createElement(O,null,u.a.createElement(z,null,w.a.map(function(n){return u.a.createElement(Y,{id:n.side,key:n.id},u.a.createElement(B,{color:n.color},n.icon))})))},J=b.a.div(l||(l=Object(g.a)(["\n    width: 100%;\n    height: calc(var(--vh, 1vh) * 100 - 65.5px);\n    max-width: 1117px;\n    min-width: 320px;\n    margin: 0 auto;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    @media only screen and (min-width: 992px) {\n        height: 100%;\n        height: calc(100vh - 65.5px);\n        justify-content: space-around;\n    };\n"]))),X=b.a.div(d||(d=Object(g.a)(["\n    display: none;\n\n    @media only screen and (min-width: 992px) {\n        display: initial;\n    };\n"]))),Z=b.a.div(x||(x=Object(g.a)(["\n    max-width: 400px;\n    width: 90%;\n    padding: 20px 30px 0px 30px;\n    border-radius: 10px;\n    background-color: rgba(0, 21, 40, .8);\n\n    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);\n    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);\n    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n"]))),S=b.a.div(m||(m=Object(g.a)(["\n    width: 100%;\n    margin: 20px 0;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    gap: 20px;\n    flex-wrap: wrap;\n"]))),q=b.a.div(f||(f=Object(g.a)(["\n    width: 100%;\n    padding: 20px 0px;\n    border-top: 1px solid grey;\n    border-bottom: 1px solid grey;\n\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: center;\n    gap: 20px;\n"])));e.default=function(){return u.a.createElement(J,null,u.a.createElement(X,null,u.a.createElement(C,null)),u.a.createElement(Z,null,u.a.createElement(k.a,{tier:!0},"Skill sets"),u.a.createElement(S,null,w.c.map(function(n,e){return u.a.createElement(E,{name:n.name,time:n.time,icon:n.icon,key:e})})),u.a.createElement(q,null,w.e.map(function(n,e){return u.a.createElement(E,{name:n.name,time:n.time,icon:n.icon,key:e})})),u.a.createElement(S,null,w.d.map(function(n,e){return u.a.createElement(E,{name:n.name,time:n.time,icon:n.icon,key:e})}))))}}}]);
//# sourceMappingURL=2.37fd682f.chunk.js.map