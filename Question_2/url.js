function getUrlParameterValue(url, parameter) { // declared parameters and function
    var urll = new URL(url);    // URL() is constructor returns newy created url object 
    var c = urll.searchParams.get(parameter); 
    return c;
    }

var url = prompt();
var parameter = prompt();
console.log(getUrlParameterValue(url,parameter))