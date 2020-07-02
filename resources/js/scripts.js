$(document).ready(
    function(){
        //sticky nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            },{
                offset: '800px'
            }
        )

        //scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            event.preventDefault();
        });

        //mobile nav
        $('.mobile-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);
                if($('.mobile-nav-icon').hasClass('fa-bars'))
                {
                    $('.mobile-nav-icon').addClass('fa-times')
                    $('.mobile-nav-icon').removeClass('fa-bars')
                }else
                {
                    $('.mobile-nav-icon').addClass('fa-bars')
                    $('.mobile-nav-icon').removeClass('fa-times')
                }
            }
        ) 
    }
)

// form sign up
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var clickSignup = document.getElementsByClassName('SignupBtn')[0];
var clickLogin = document.getElementsByClassName('LoginBtn')[0];
var login = document.getElementById('login');
var signup = document.getElementById('signup');


window.addEventListener('click',clickOutside);

modalBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);
clickSignup.addEventListener('click',openSignup);
clickLogin.addEventListener('click',openLogin);

function openModal(){
    modal.style.display='block';
}

function closeModal(){
    modal.style.display='none'; 
}

function clickOutside(e){
    if(e.target == modal){
        modal.style.display='none';
    }
}

function openLogin(){
    signup.style.display='none';
    login.style.display='block';
}

function openSignup(){
    login.style.display='none';
    signup.style.display='block';
}

// check form
function emailformat(a){
    var str = document.getElementById(a).value;
    var chars = str.split("@");
    if(chars[1]==null || chars[0]==""){
        alert("Email have to format sth@sth.sth")   
        return 1  
    }
    chars1 = chars[1].split(".");
    if(chars1[1]=="" || chars1[0]==""){
        alert("Email have to format sth@sth.sth")
        return 1    
    }
    return 0
}

function checkcharacter(a,b){
    var str = document.getElementById(a).value;
    var chars = str.split("");
    if (chars.length<2 || chars.length>30){
        alert( b + " only 2-30 characters")
        return 1
    }
    return 0
}

function f_signup(){
    if(checkcharacter("fname","First name")==1)
        return;
    else if(checkcharacter("lname","Last name")==1)
        return;
    else if(emailformat("email")==1)
        return;
    else if(checkcharacter("password",'Password')==1)
        return;

}

function f_login(){
    if(emailformat("username")==1)
        return;
    else if(checkcharacter("pass_username",'Password')==1)
        return;
    else
        alert("Complete!")
}

