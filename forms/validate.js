jQuery('#contact-form').validate({
    rules:{
        name:"required",
        email:{
            required:true,
            email:true
        },
        subject:{
            required:true
        },
        message:{
            required:true,
            minlength:5
        },
        
    },messages:{
        name:"Please enter your name",
        email:{
            required:"Please enter email",
            email:"Please enter valid email",
        },
        subject:{
          required:"please enter subject"
        },
        message:{
            required:"Please enter your message",
            
        },
    },
    submitHandler:function(form){
        form.submit();
    }
    
});
