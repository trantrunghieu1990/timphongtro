jQuery(document).ready(function($) {
    var width_windows = $(window).width();
    if(width_windows < 480){
        $('input#btn_search').attr('value','');
    }
    $( window ).resize(function() {
        var width_windows = $(window).width();
        if(width_windows < 480){
            $('input#btn_search').attr('value','');
        }
        else{
            $('input#btn_search').attr('value','Tìm Kiếm');
        }
    });

    $('#widget_bounds .Ul span.hma').empty();

    $('input.validateFields').each(function () {
       var value = $(this).val();
       $(this).on("focus",function () {
          if($(this).hasClass("error_fields")){
              $(this).removeClass("error_fields");
              $(this).next().css("display","none");
          }
       });
       $(this).on("blur",function () {
           var name_error = $(this).attr('name') + " không được để trống";
           if($(this).val() === ""){
               $(this).addClass("error_fields");
               $(this).next().css('display','block');
               $(this).next().text(name_error);
           }
           else{
               if($(this).attr("type") === "email"){
                   var value = $(this).val();
                   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                   var email_error = "email không đúng định dạng";;
                   if(value.match(mailformat)){}
                   else{
                       $(this).addClass("error_fields");
                       $(this).next().css('display','block');
                       $(this).next().text(email_error);
                   }
               }
           }
       })
    });

    $('.content_info_detail .items_info .item').matchHeight();

    $('.icon_avatar').on('click',function(event){
        if($(".cd-popup").hasClass("is-visible")){
            $(".cd-popup").removeClass("is-visible")
        }
        else{
            event.preventDefault();
            $('.cd-popup').addClass("is-visible");
        }

    });
    // $(window).on("click",function(event){
    //    if($('.cd-popup').has(event.target).length == 0 && !$('.cd-popup').is(event.target)){
    //        if($('.cd-popup').hasClass("is-visible")){
    //            $('.cd-popup').removeClass("is-visible");
    //        }
    //    }
    //    else{
    //
    //    }
    // });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.cd-popup').removeClass('is-visible');
        }
    });
});
function sendMail(form_name) {
    $("form#"+form_name +" input.validateFields").each(function () {
        var value = $(this).val();
        var type = $(this).attr("type");
        var blank_error = $(this).attr('name') + " không được để trống";
        if (value === "") {
            $(this).addClass("error_fields");
            $(this).next().css('display','block');
            $(this).next().text(blank_error);
        }
        else{
            if(type === "email"){
                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                var email_error = "email không đúng định dạng";
                if(value.match(mailformat)){
                    $("div.before_send_email").css("display","none");
                    $("div.after_send_email").css("display","block");
                }
                else{
                    $("form#"+form_name +" input[type='email']").addClass("error_fields");
                    $("form#"+form_name +" input[type='email']").next().css('display','block');
                    $("form#"+form_name +" input[type='email']").next().text(email_error);
                    return false;
                }
            }

        }
    });

}

function validateForm(form_name) {
    $("form#"+form_name +" input.validateFields").each(function () {
        var value = $(this).val();
        var type = $(this).attr("type");
        var blank_error = $(this).attr('name') + " không được để trống";
        if (value === "") {
            $(this).addClass("error_fields");
            $(this).next().css('display','block');
            $(this).next().text(blank_error);

        }
        else{
            if(type === "email"){
                validateEmail(form_name,value);
            }
        }
    });

}
function validateEmail(form_name,email){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email_error = "email không đúng định dạng";
    if(email.match(mailformat)){}
    else{
        $("form#"+form_name +" input[type='email']").addClass("error_fields");
        $("form#"+form_name +" input[type='email']").next().css('display','block');
        $("form#"+form_name +" input[type='email']").next().text(email_error);
        return false;
    }
}

//remove text theo doi trong google button

