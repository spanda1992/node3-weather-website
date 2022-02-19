console.log('Client Side JS is running');


const form_ran= document.querySelector('form');
const search= document.querySelector('input');
const message_1=document.querySelector('#message_1')
const message_2=document.querySelector('#message_2')
const message_3=document.querySelector('#message_3')
const message_4=document.querySelector('#message_4')



form_ran.addEventListener('submit', (e) =>{
   e.preventDefault();
    console.log('testing')
    const serach_user=search.value;
    message_1.textContent='Loading'
    message_2.textContent='';
    message_3.textContent='';
    message_4.textContent='';

    fetch('/weather?search='+serach_user).then((response) =>{
    response.json().then((data) =>{
        console.log(data)

        if(data.error){
            message_1.textContent=data.error
            
        }else{
            message_1.textContent=data.Creator_name
            message_2.textContent=data.search
            message_3.textContent=data.user_name
            message_4.textContent=data.user_address
        }
        
    })
})
    
})


