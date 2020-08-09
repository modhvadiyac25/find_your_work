function showcontent() {
    document.getElementById("welcome").innerHTML = "Welcome!to the Fyw";
    document.getElementById("page").innerHTML = "This is employee page <br> <h3>VISITE THE PROFILE PAGE</h3>";
    document.getElementById("home_btn").style.display = 'none';
}
var fname = "chetan ";
var mname = "k ";
var lname = "modhvadiya ";
var address = "porbandar, Gujrat, india";
var mobile_no = 9974806891;
var email = "<br><br>modhvadiyac25@gmail.com";
var password;

function showProfile() {
    document.getElementById("name").innerHTML = fname + mname + lname;
    document.getElementById("mobile").innerHTML = "Mobile no. : " + mobile_no + email;
    document.getElementById("addr").innerHTML = address;
}

function login() {
    alert("login succesfully !!");
    window.location.href = "emp_index.html"
}

function signup() {
    alert("Registration succesfully !!");
    window.location.href = "emp_login.html"
}



function signup(fn, mn, ln, addr, mobile, eml, pass) {
    fname = this.fn;
    mname = this.mn;
    lname = this.ln;
    address = this.addr;
    mobile_no = this.mobile;
    email = this.eml;
    password = this.pass;
}