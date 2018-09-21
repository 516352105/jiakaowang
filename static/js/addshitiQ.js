$(function (){
    $('#submit').on('click',function(){
        $.ajax({
            url: '/admin/addshiti',
            type: 'POST',
            dataType: 'JSON',
            data: $('#add').serialize(),
            // data:data.field,
            success: function (result) {
                alert('添加成功')
                $('#reset').click()
            }
        }); 
    })

})