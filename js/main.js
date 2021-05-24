var num = document.querySelector('.num')
var colorDiv = document.querySelector('.colorDiv')
var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')
var generate = document.querySelector('.generate')
var inputBox = document.querySelector('#inputBox')
var Confirm = document.querySelector('#confirm')
var inputBalance = document.querySelector('.inputBalance')


var count = 0
var btnColor = ''
var colorArr = ['red', 'green']

var password1 = 123456
var password2


generate.addEventListener('click', function() {
   
    if (total == 0) {
        this.setAttribute('disabled', 'disabled')
        console.log('vl')
    } 
    
    else {
        generate.removeAttribute('disabled', 'disabled')
        console.log('vl')

            // generate.style.display = 'none'
    // generate.setAttribute('disabled','disabled');
    counter = 9;
    var inter = setInterval(() => {
        generate.innerHTML = counter;
        counter--;
    }, 100);

    setTimeout(() => {
        clearInterval(inter)
        generate.innerHTML = 'Generate';
        generate.removeAttribute('disabled','disabled')
        // generate.style.display = 'block'
        // generate.style.textAlign = 'center'
        // document.querySelector('.generateDiv').style.display = 'flex'
        // document.querySelector('.generateDiv').style.justifyContent= 'center'
    }, 1000);

    console.log();
    if (btnColor == '') {
        
    } else{
        var color = colorDiv.style.backgroundColor = colorArr[Math.floor(Math.random()*colorArr.length)]
        this.style.border = '2px solid #FFF'
        // btn1.style.border = 'none'
        // btn2.style.border = 'none'
        // console.log(color);

        if (color==btnColor) {
            count++
            // num.innerHTML = count
            // inputBalance.innerHTML = count + inputBox.value

            // inputBalance.innerHTML =  inputBalance.innerHTML +  num.innerHTML
            // '$' + inputBox.value + '.00' + 

            total = total + 1
            inputBalance.innerHTML =  '$' + total + '.00'
            num.innerHTML = 'Win'
            console.log('win');
        }else{
            count--
            total = total - 1
            inputBalance.innerHTML =  '$' + total + '.00'
            // num.innerHTML = count
            // inputBalance.innerHTML = count
            
            num.innerHTML = 'Lose'
            console.log('lose');
        }
    }
    }

    

})

btn1.addEventListener('click', function() {
    this.style.border = '2px solid yellow'
    btn2.style.border = 'none'
    btnColor = 'red'
    // console.log(btnColor);
})

btn2.addEventListener('click', function() {
    this.style.border = '2px solid yellow'
    btn1.style.border = 'none'
    btnColor = 'green'
    // console.log(btnColor);
})


var total = 0
Confirm.addEventListener('click', function (e) {
    // e.preventDefault()
    // total = total + Number.parseInt(inputBox.value)
    // inputBalance.innerHTML =  '$' + total + '.00'
    // inputBox.value = ''
    // generate.removeAttribute('disabled', 'disabled')
    password2 = prompt('Please Enter Your Password')

       
        if (password1 == password2) {
            e.preventDefault()
            total = total + Number.parseInt(inputBox.value)
            inputBalance.innerHTML =  '$' + total + '.00'
            inputBox.value = ''
            generate.removeAttribute('disabled', 'disabled')
            alert('Password Correct! Click Ok To Enjoy Your Game!') 
        } else{
            inputBox.value = ''
            e.preventDefault()
            generate.setAttribute('disabled', 'disabled')
             alert('Please Enter Your Correct Password!')  
        }
    
})
