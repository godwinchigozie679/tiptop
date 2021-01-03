const formContact = document.querySelector('#contact-form'),
    numberOfWords = document.getElementById('numberOfWords'),
    numberOfPages = document.getElementById('numberOfPages'),
    manuscriptType = document.getElementById('manuscriptType'),    
    email = document.getElementById('email'),
    message = document.getElementById('message'),
    confirmEmail = document.getElementById('confirmEmail'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    phone = document.getElementById('phone'),
    bestTime = document.getElementById('bestTime')    
    

    formContact.addEventListener('submit', submitForm);

//DECLARE FORM

function submitForm(e){
    e.preventDefault();
    
    let formData = {
        numberOfWords: numberOfWords.value,
        numberOfPages: numberOfPages.value,
        manuscriptType: manuscriptType.value,
        email: email.value,
        confirmEmail: confirmEmail.value,
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        message: message.value,
        bestTime: bestTime.value
        

    }

   
    const xhr = new XMLHttpRequest();    
        xhr.open('POST', '/');        
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function(){
            console.log(xhr.responseText);
            if(xhr.responseText == 'success'){                
                alert('Email sent');
                numberOfWords.value = '';
                numberOfPages.value = '';
                manuscriptType.value = '';
                email.value = '';
                confirmEmail.value = '';
                firstName.value = '';
                lastName.value = '';
                phone.value = '';
                message.value = '';
                bestTime.value = '';
                

                

            }else{
                alert('something went wrong!');
            }            

            
        }
        xhr.send(JSON.stringify(formData));
}
