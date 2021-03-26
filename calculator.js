// // the scripting of the entire page x
// function circle(pi,radius){
// return (pi* Math.pow(radius,2));
// }
// function displayArea(event){
//     event.preventDefault()
//       var display = document.getElementById('range-111');
//        radius= prompt('input your figures');
//        var area = circle(Math.PI,radius);
//       display.innerHTML = `the area of the circle with the radius ${radius} is ${area} `;

// }

// var form = document.getElementById('button-1');
// form.onsubmit = displayArea;



// my try out 


function circle(pi,radius){
    return(pi* Math.pow(radius,2));
}
function displayArea(event){
    event.preventDefault()
    var pi = Math.PI
    pi = prompt(`to find the area of the circle with the pie raise to the power of =`)
    radius = prompt(`to find the area of the circle of:`);
    var display = document.getElementById(`range-111`);
    var area = circle(pi*(Math.PI),radius);
    if (isNaN(radius) || isNaN(pi)){
        display.innerHTML = `pls input a number`;
    }
    else{
    display.innerHTML = `the area of the circle with the pie : ${pi} and  raduis : ${radius} is ${area}`;
    }



}
var form = document.getElementById(`button-1`);
form.onclick = displayArea;    
console.log(form)
// the triangle



function triangle(carrot,base,height){
return(carrot*base*height);
}
function displayArea1(event){
event.preventDefault()
base = prompt(`to find the area of the triangle of base:`);
height = prompt(`and height:`)
var display1 = document.getElementById(`range-111`);
var area1 = triangle(0.5,base,height);

display1.innerHTML = `the area of the triangle with the base of ${base} and the height of ${height} is ${area1}`;

}

var form1 = document.getElementById(`button-2`);
form1.onclick = displayArea1
// the end of the triangle section 


// the square section 

function square(a){
return(Math.pow(a,2));

}
function displayArea2(event){
event.preventDefault()
a = prompt(`to find the area of the square with the length of:`);
var display2 = document.getElementById(`range-111`);
var area2 = square(a);

display2.innerHTML =`the area of the square with the length of ${a} is = ${area2}`;
}
var form2 = document.getElementById(`button-3`);
form2.onclick = displayArea2;


// the end of the square section 



// the paralelogram section 

function paralelogram(base,height){
return(base*height)
}
function displayArea3(event){
event.preventDefault();
base = prompt(`to find the area of the paralelogram with the length of :`);
height = prompt(`And the height of :`);
var display3 = document.getElementById(`range-111`);
var area3 = paralelogram(base,height);

display3.innerHTML = `the area of the paralelogram with the base of ${base} and the length of ${height} is = ${area3}`;


}
var form3 = document.getElementById(`button-4`);
form3.onclick = displayArea3;
// the end of the paralelogram section 



// the rombus section 

function rhombus(p,q,nonso){
return(p*q/nonso);
}
function displayArea4(event){
event.preventDefault();
p = prompt(`to find the area of the rhombus with diagonal _p_ : `);
q = prompt(`to find the area of the rhombus with diagonal _q_ : `);
var display4 = document.getElementById(`range-111`);
var area4 = rhombus(p,q,2);

display4.innerHTML = `The area of the paralelogram with the diagonal _p_ of ${p} and diagonal _q_ of ${q} is = ${area4}`;

}
var form4 = document.getElementById(`button-5`);
form4.onclick = displayArea4;

// the end of the rhombus section 


// the trapezuim section 

function trapezuim(a,b,tozo,h){
return(a+b/tozo*h);
}
function displayArea5(event){
    event.preventDefault();
a = prompt(`to find the area of the trapezium with the base1:`);
b = prompt(`to find the area of the trapezium with the base2 :`);
h = prompt(`to find the area of the trapezium with the height :`);

var display5 = document.getElementById(`range-111`);
var area5 = trapezuim(a,b,2,h);

display5.innerHTML = `The area of the trapezium with the base1 : ${a} and base2 : ${b} and a height of ${h} is = ${area5}`;

}
form5 = document.getElementById(`button-6`);
form5.onclick = displayArea5;

// the end of the trapezium section 



// the polygon section 


function polygon(senator,p,a){
    return(senator*p*a)
}
function displayArea6(event){
    event.preventDefault();
    p = prompt(`to find the area of a polygon with a perimeter of : `);
    a = prompt(`and the apothem of :`);
    var display6 = document.getElementById(`range-111`);
    var area6 = cylinder(0.5,p,a);

    display6.innerHTML = `the area of a polygon with a perimeter of : ${p} and apothem of : ${a} is = ${area6}`;

}
form6 = document.getElementById(`button-7`);
form6.onclick = displayArea6;

// the end of the polygon section 


// the cone section

function cone(pi,r,h,ik){
    return(pi*Math.pow(r,2)*h*ik);
}
function displayArea7(event){
    event.preventDefault()
    var pi = Math.PI
    pi = prompt(`to find the area of a cone with pie raise to the power of =`);
    r = prompt(`and raduis =`);
    h = prompt(`with the height of =`);


    var display7 = document.getElementById(`range-111`);
    var area7 = cone(Math.PI,r,h,0.5);
    display7.innerHTML = `the area of a cone with pi = ${pi} and raduis = ${r} and height = ${h} is = ${area7}`;
}
form7 = document.getElementById(`button-8`);
form7.onclick = displayArea7
console.log(form7)



// the end of the cone section 



// the cylinder section 

function cylinder(pi,r,h){
    return(pi*Math.pow(r,2)*h);
}

function displayArea8(event){
    event.preventDefault();
    r = prompt(`to find the area of the cylinder with the radius of :`);
    h = prompt(`and height of :`);
    var display8 = document.getElementById(`range-111`);
    var area8 = cylinder(Math.PI,r,h,0.5);

    display8.innerHTML = `the area of the cylinder with the radius of ${r} and height of ${h} is = ${area8}`;

}
form8 = document.getElementById(`button-9`);
form8.onclick = displayArea8;

// the end of the cylinder section 