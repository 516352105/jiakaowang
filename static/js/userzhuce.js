$(function(){
    
    $('.coder').click(function(){
        $('.coder').attr('src','/coder?'+new Date().toLocaleString())
    })
    
    $('.login').click(function(){
        $.ajax({
            url:'/user/userzhuce',
            type:'POST',
            dataType:'JSON',

            data:$('#form').serialize(),
            success:function(result){
                if(result.r == 'coder_err'){
                    alert('验证码错误，请从新输入！')
                    return;
                }
                if(result.r == "ok"){

                    window.location.href='/user/userlogin';
                }
            }
        })
    })
})