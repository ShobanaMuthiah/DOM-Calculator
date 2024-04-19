const div = document.createElement("div");
const div1 = document.createElement("input");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const div8 = document.createElement("div");
const div9 = document.createElement("div");
const title = document.createElement("h1");
const p = document.createElement("p");

const c = document.createElement("button");
const back = document.createElement("button");
const dot = document.createElement("button");
const mul = document.createElement("button");
const seven = document.createElement("button");
const eight = document.createElement("button");
const nine = document.createElement("button");
const divid = document.createElement("button");
const four = document.createElement("button");
const five = document.createElement("button");
const six = document.createElement("button");
const sub = document.createElement("button");
const one = document.createElement("button");
const two = document.createElement("button");
const three = document.createElement("button");
const add = document.createElement("button");
const zero = document.createElement("button");
const dec = document.createElement("button");
const equal = document.createElement("button");

title.innerHTML = "DOM Calculator";
p.innerHTML = "Calculator using DOM";

c.innerHTML = "C";
back.innerHTML = "<=";
dot.innerHTML = ".";
mul.innerHTML = "*";
seven.innerHTML = "7";
eight.innerHTML = "8";
nine.innerHTML = "9";
divid.innerHTML = "/";
four.innerHTML = "4";
five.innerHTML = "5";
six.innerHTML = "6";
sub.innerHTML = "-";
one.innerHTML = "1";
two.innerHTML = "2";
three.innerHTML = "3";
add.innerHTML = "+";
zero.innerHTML = "0";
dec.innerHTML = "00";
equal.innerHTML = "=";

div1.setAttribute("type", "text");
div1.setAttribute("id", "result");
div1.setAttribute("class", "display");
div1.setAttribute("placeholder", "0");

// div1.setAttribute("id","result");
div1.readOnly = true;
div2.setAttribute("class", "btns");

div4.setAttribute("class", "row");
div4.classList.add("calculator");
div3.setAttribute("class", "divi");
div5.setAttribute("class", "btn-group");
div6.setAttribute("class", "btn-group");
div7.setAttribute("class", "btn-group");
div8.setAttribute("class", "btn-group");
div9.setAttribute("class", "btn-group");
div9.setAttribute("id", "btn-group");

c.setAttribute("type", "button");
c.setAttribute("id", "clear");
c.classList.add("btn", "bor", "c");

back.setAttribute("type", "button");
back.setAttribute("id", "back");
back.classList.add("btn", "bor", "bl");

dot.setAttribute("type", "button");
dot.setAttribute("id", "dot");
dot.classList.add("btn", "bor", "bl");

mul.setAttribute("type", "button");
mul.setAttribute("id", "mul");
mul.classList.add("btn", "bor", "bl");

seven.setAttribute("type", "button");
seven.setAttribute("id", "7");
seven.classList.add("btn", "bor");

eight.setAttribute("type", "button");
eight.setAttribute("id", "8");
eight.classList.add("btn", "bor");

nine.setAttribute("type", "button");
nine.setAttribute("id", "9");
nine.classList.add("btn", "bor");

divid.setAttribute("type", "button");
divid.setAttribute("id", "divid");
divid.classList.add("btn", "bor", "bl");

four.setAttribute("type", "button");
four.setAttribute("id", "4");
four.classList.add("btn", "bor");

five.setAttribute("type", "button");
five.setAttribute("id", "5");
five.classList.add("btn", "bor");

six.setAttribute("type", "button");
six.setAttribute("id", "6");
six.classList.add("btn", "bor");

sub.setAttribute("type", "button");
sub.setAttribute("id", "subtract");
sub.classList.add("btn", "bor", "bl");

one.setAttribute("type", "button");
one.setAttribute("id", "1");
one.setAttribute("value", "1");
one.classList.add("btn", "bor");

two.setAttribute("type", "button");
two.setAttribute("id", "2");
two.setAttribute("value", "2");
two.classList.add("btn", "bor");

three.setAttribute("type", "button");
three.setAttribute("id", "3");
three.setAttribute("value", "3");
three.classList.add("btn", "bor");

add.setAttribute("type", "button");
add.setAttribute("id", "add");
add.classList.add("btn", "bor", "bl");

zero.setAttribute("type", "button");
zero.setAttribute("id", "0");
zero.classList.add("btn", "bor");

dec.setAttribute("type", "button");
dec.setAttribute("id", "dec");
dec.classList.add("btn", "bor");

equal.setAttribute("type", "button");
equal.setAttribute("id", "equal");
equal.setAttribute("value", "equal");
equal.classList.add("btn", "bor", "col-4", "blu");

title.setAttribute("id", "title");
p.setAttribute("id", "description");

div5.append(c, back, dot, mul);
div6.append(seven, eight, nine, divid);
div7.append(four, five, six, sub);
div8.append(one, two, three, add);
div9.append(zero, dec, equal);
div4.append(div1, div5, div6, div7, div8, div9);
div2.append(div4);
div3.append(div2);
document.body.append(title, p, div3);
