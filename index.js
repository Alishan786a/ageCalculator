var dateOfBirth=document.querySelector('#ddate');
var currentDate=document.querySelector('#cdate');
var calculate=document.querySelector('#calculate');
var years=document.querySelector('#years');
var month=document.querySelector('#month');
var days=document.querySelector('#days');


calculate.setAttribute('disabled',true)



let inpchk=()=>{



    if (dateOfBirth.value !='' && currentDate.value !='') {
        if (dateOfBirth.value > currentDate.value) {
         alert('Please Enter Correct value');
        
            window.location.reload();
         
          
            
        }
        calculate.removeAttribute("disabled")

        
    }
}
currentDate.addEventListener('input',inpchk);
dateOfBirth.addEventListener('input',inpchk);

// this button is use to calculate the date 
calculate.addEventListener("click",(e)=>{
e.preventDefault();
let birth_y=(dateOfBirth.value).slice(0,4);
let birth_m=(dateOfBirth.value).slice(5,7);
let birth_d= (dateOfBirth.value).slice(8,10);

let birth=[birth_y,birth_m,birth_d];

let current_y=(currentDate.value).slice(0,4);
let current_m=(currentDate.value).slice(5,7);
let current_d=(currentDate.value).slice(8,10);
let current=[current_y,current_m,current_d];


// console.log(current_y);
// console.log(current_m);
// console.log(current_d);
let age=calculate_fn([...birth],[...current])
years.innerHTML=`Total Years: ${age.years}`;
month.innerHTML=`Total Month : ${age.month}`;

days.innerHTML=`Total days : ${age.days}`;



// console.log(Number(currentDate.value) - Number(dateOfBirth.value));


})

// main function that calculate date
function calculate_fn(birth,current) {
    if (birth[2] > current[2]) {
        // console.log(30 - (birth[2] - current[2]));
        var age_d=30 - (birth[2] - current[2]);
        ++birth[1];
        
    }else{
        // console.log(current[2] - birth[2]);
        var age_d=current[2] - birth[2];

    }
    if (birth[1] > current[1]) {
        // console.log(12 - (birth[1] - current[1]));
        var age_m= (12 - (birth[1] - current[1]));
        ++birth[0];

        
    }else{
        // console.log(current[1] - birth[1])
        var age_m=current[1] - birth[1];

    }
    
        // console.log(current[0] - birth[0])
        let age_y=current[0] - birth[0];
        // for leap yaer
    //    console.log(age_y / 4);
    var leapYearDay=parseInt(age_y / 4);
        return age={
            years:age_y,
            month: age_m,
            days: age_d+ leapYearDay

        }

    

    
}
