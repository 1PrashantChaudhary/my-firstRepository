let a=document.getElementsByClassName("mouseover")[0];
let b=document.getElementsByClassName("mouseover")[1];
let c=document.getElementsByClassName("mouseover")[2];
let d=document.getElementsByClassName("mouseover")[3];
let e=document.getElementsByClassName("mouseover")[4];
let f=document.getElementsByClassName("mouseover")[5];
let g=document.getElementsByClassName("line")[0];
let h=document.getElementsByClassName("line2")[0];
let i=document.getElementsByClassName("line3")[0];
let j=document.getElementsByClassName("line4")[0];
let k=document.getElementsByClassName("line5")[0];
let l=document.getElementsByClassName("line6")[0];
a.onmouseover=function(){g.style.display="block";}
a.onmouseout=function(){g.style.display="none";}
b.onmouseover=function(){h.style.display="block";}
b.onmouseout=function(){h.style.display="none";}
c.onmouseover=function(){i.style.display="block";}
c.onmouseout=function(){i.style.display="none";}
d.onmouseover=function(){j.style.display="block";}
d.onmouseout=function(){j.style.display="none";}
e.onmouseover=function(){k.style.display="block";}
e.onmouseout=function(){k.style.display="none";}
f.onmouseover=function(){l.style.display="block";}
f.onmouseout=function(){l.style.display="none";}

let navbar=document.getElementsByClassName("navbar")[0];
let unicode=document.getElementsByClassName("unicode")[0];
let search=document.getElementsByClassName("search-container")[0];
let searchicon=document.getElementsByClassName("search1")[0];
searchicon.onclick=function(){
navbar.style.display="none";
unicode.style.display="none";
// search.setAttribute("style", "display:block;")
search.style.display="block";
}
let cross1=document.getElementsByClassName("cross")[0];
cross1.onclick=function(){
    search.style.display="none";
    navbar.setAttribute("style", "display:none;display:flex");
unicode.setAttribute("style", "display:none;display:flex");
    // navbar.style.display="block";  
    //  unicode.style.display="block";
}
let cross2=document.getElementsByClassName("cross2")[0];
let breaking=document.getElementsByClassName("breaking-news")[0];

cross2.onclick=()=>{
    breaking.style.display="none";
// breaking.setAttribute("style", "display:none;position:relative;background-color:red;");
}