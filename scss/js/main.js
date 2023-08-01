function Validate(){

    let mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let entered_email = document.forms["myForm"]["email_field"].value;
    let error_hint = document.querySelector('.error_hint');
    let error_icon = document.querySelector('.error_icon');
    
    
    if(entered_email.match(mail_format))
    {
        if(!error_hint.classList.contains('hide') && !error_icon.classList.contains('hide'))
        {
        error_hint.classList.add('hide');
        error_icon.classList.add('hide');
        }
        alert("Validate Email Address");
        return true;
    }
    else{
        
            if(error_hint.classList.contains('hide') && error_icon.classList.contains('hide'))
            {
            
                error_hint.classList.remove('hide');
                error_icon.classList.remove('hide');
            }
        return false;
    }

}