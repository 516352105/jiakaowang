$(function(){
    
    $('.coder').click(function(){
        $('.coder').attr('src','/coder?'+new Date().toLocaleString())
    })
    
    $('.login').click(function(){
        $.ajax({
            url:'/user/userlogin',
            type:'POST',
            dataType:'JSON',

            data:$('#form').serialize(),
            success:function(result){
                if(result.r == 'coder_err'){
                    alert('验证码错误，请从新输入！')
                    return;
                }
                if(result.r == 'u_err'){
                    $('.u').html('账号不存在！')
                    return;
                }
                if(result.r == 'p_err'){
                    $('.p').html('密码错误！')
                    return;
                }
                if(result.r == 'ok'){

                    window.location.href='###';
                }
            }
        })
    })
})