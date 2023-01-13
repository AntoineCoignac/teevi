'use strict'

$(document).ready(function () {
    $('.search').keyup(function (event) {
        if (event.which === 13) {
            var value = $('.search').val();
            if (value != ""){
                if ($(".search").attr("id") == "twitch-search"){
                    value = value.replaceAll("https", "").replaceAll("http", "").replaceAll(":", "").replaceAll("/", "").replaceAll("www", "").replaceAll("twitch", "").replaceAll(".tv", "").replaceAll(".", "");
                    var nom = window.location.origin.replaceAll("https://", "");
                    $(".container").append('<div class="content" id="content_'+value+'"><button class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button><iframe class="stream" src="https://player.twitch.tv/?channel=' + value + '&parent=' + nom + '" frameborder="0" allowfullscreen="true"></iframe><div>');
                }else if($(".search").attr("id") == "youtube-search"){
                    value = value.replaceAll("https", "").replaceAll("http", "").replaceAll(":", "").replaceAll("/", "").replaceAll("www", "").replaceAll("youtube", "").replaceAll(".com", "").replaceAll(".", "").replaceAll("embed", "").replaceAll("watch?v=","").replaceAll("watch","").replaceAll("v=", "").replaceAll("&", "").replaceAll("t=", "").replaceAll("=", "").replaceAll("?", "").substr(0, 11);
                    $(".container").append('<div class="content" id="content_'+value+'"><button class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button><iframe class="stream" src="https://www.youtube.com/embed/'+value+'" frameborder="0" allowfullscreen="true"></iframe><div>');
                }
            }
        }
    });

    $('.search-icon').on("click", function () {
        var value = $('.search').val();
        if (value != ""){
            var nom = window.location.origin + '/';
            $(".container").append('<div class="content" id="content_'+value+'"><button class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button><iframe class="stream" src="https://player.twitch.tv/?channel=' + value + '&parent=' + nom + '" frameborder="0" allowfullscreen="true"></iframe><div>');
        }
    });

    $(".container").on("click", ".delete", function(){
        var content = $(this).parent(".content");
        content.fadeOut(300);
        setTimeout(function() {
            content.remove();
        }, 300);
    });

    $(".youtube-icon").on("click", function(){
        $(".search").attr("id", "youtube-search");
        $(".search").attr("placeholder", "Youtube content id or link");
        $(".twitch-icon").removeClass("selected");
        $(".youtube-icon").removeClass("selected");
        $(".youtube-icon").addClass("selected");
    });

    $(".twitch-icon").on("click", function(){
        $(".search").attr("id", "twitch-search");
        $(".search").attr("placeholder", "Twitch channel or link");
        $(".youtube-icon").removeClass("selected");
        $(".twitch-icon").removeClass("selected");
        $(".twitch-icon").addClass("selected");
    });

    $(".choice-arrow").on("click", function(){
        $(this).toggleClass("clicked");
    });

    $('.search').on("click", function(){
        $(".choice-arrow").removeClass("clicked");
    });

});