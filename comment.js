function addState(el,bool){
    //el.className = el.className.replace(/\ssuccess|\serror/,"");
    //console.log(el.className)
    if(bool){
      
        //el.className += " success";
        el.nextElementSibling.innerHTML = "";
        el.nextElementSibling.style.color = ""
    }else{
        el.nextElementSibling.innerHTML = "请按要求输入"
        el.nextElementSibling.style.color = "orange"
        //el.className +=" error";
        //throw "验证错误"
    }
}
    function Valid(el,str){
        var strength = 0;
        if(/\d/g.test(str)){
            strength++
        }
        if(/[a-z]/g.test(str)){
            strength++
        }
        if(/[\u0021-\u002f]/g.test(str)){
            strength++
        }
   
        switch(strength){
            case 1:
            el.style.color = "red";
            break;
            case 2:
            el.style.color = "yellow";
            break;
            case 3:
            el.style.color = "green";
            break;
            default:
            el.style.color = "#fff";
        }
    }
    function $(selector){
        return document.getElementById(selector)
    }

