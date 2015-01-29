$(document).ready(function () {

    var pullDown = $("#pullDown");
    var navYpos = $("header").height();
    var logoFixed = $("#logoFixed");

    pullDown.hide();
    logoFixed.hide();

    window.onresize = function () {     // als het venster veranderd van grote, zal die een nieuwe ypos toekennen.
        navYpos = $("header").height();
    };
                                        // 
    function ShowPulldown() {
        if (pullDown.not(":visible") && $(window).scrollTop() < navYpos) {
            $("html, body").animate({
                scrollTop: navYpos
            }).promise().done(function () {
                pullDown.slideToggle("fast");
            });
        } else {
            pullDown.slideToggle("fast");
        }
    };
    
    //--------------placeholders
    // als ik meerdere <li> toevoeg aan mijn projecten en ik geef ze een class "test" dan zal er een placeholder        afbeelding worden ingeladen.
    
    var placeholders = $(".test");
    for(var i = 0; i < placeholders.length; i++){
        placeholders[i].style.backgroundImage = "none";
        placeholders[i].style.backgroundImage = "url(../images/placeholders/"+ (i+1) +".jpg)";
    }
    
    //-----------------------
    
                                                        // bij elke scroll gaan we checken of de sticky navigation, sticky moet zijn of niet.
    $(window).bind("scroll", function () {  

        if ($(window).scrollTop() >= navYpos) {
            $("#navBlock").addClass("stickyNav");
            $("#superSection").addClass("sectionMargin");
            $("#fullNav").width("750px");
            $("#fullNavWork").css("marginLeft", "150px");
            logoFixed.show();
        } else {
            $("#navBlock").removeClass("stickyNav");
            $("#superSection").removeClass("sectionMargin");
            $("#fullNav").width("600px");
            $("#fullNavWork").css("marginLeft", "0px");
            logoFixed.hide();
            pullDown.hide();
        }
    });

    $("#hamburger").on("click", function () {
        ShowPulldown();
    });

    $("#menu").on("click", function () {
        ShowPulldown();
    });

    $(".pullDownLinks").on("click", function () {
        pullDown.slideUp("fast");
    });

    // scroll to internal links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });

    $(window).bind("scroll", function () {
        if ($(window).scrollTop() <= 0) {
            $("#menu").fadeIn("fast");
        } else {
            $("#menu").fadeOut("fast");
        }
    });

    // valideren trigger

    $("#firstname").on("keyup", function () {
        if ($(this).val() == "") {
            $(this).css("borderColor", "#f00");
        } else {
            $(this).css("borderColor", "#435f71");
        }
    });
    $("#lastname").on("keyup", function () {
        if ($(this).val() == "") {
            $(this).css("borderColor", "#f00");
        } else {
            $(this).css("borderColor", "#435f71");
        }
    });
    $("#email").on("keyup", function () {
        var email = $(this).val();
        var punt = email.indexOf(".");
        var at = email.indexOf("@");
        if (punt == -1 || at == -1) {
            $(this).css("borderColor", "#f00");
        } else {
            $(this).css("borderColor", "#435f71");
        }
    });
    $("#message").on("keyup", function () {
        if ($(this).val() == "") {
            $(this).css("borderColor", "#f00");
        } else {
            $(this).css("borderColor", "#435f71");
        }
    });
    $("button").on("click", function () {

        var email = $("#email").val();
        var punt = email.indexOf(".");
        var at = email.indexOf("@");

        if ($("#firstname").val() != "" && $("#lastname").val() != "" 
            && punt != -1 && at != -1 && $("#message").val() != "") {
            $("button").text("Message has been send");
            
            //$("form").submit();
            
            
        } else {
            $("#errorMessenger").css("color", "#f00");
            $("#errorMessenger").css("font-weight", "bold");
        }
    });
});