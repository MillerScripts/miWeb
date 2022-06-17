const object = document.querySelector('#number')
let number = object.innerHTML = 0;
const container = document.querySelector('.container-button');
const textReverse = document.querySelector('#count')

//functions 
const finallyCountReverse = () => {
    Swal.fire({
        title: "Account terminated",
        icon: 'success',
        background: '#202020', 
        customClass: {
            title: 'colorTitle'
        }
    })
}

const elementClass = () => {
    textReverse.classList.add('textBig')
}

const createButtonFinally = () => {
    let newElement = document.createElement('button');
    newElement.textContent = 'another account';
    container.appendChild(newElement);
    newElement.onclick = (e) => {
        e.preventDefault()
        location.reload()
    }
}

const reverseNumber = () => {
    const interval = setInterval(() => {
        if(number >= 1){
            number--;
            object.innerHTML = number;   
            if(number === 0){
                finallyCountReverse()
                btn2.style.display = 'none';
                createButtonFinally()
                
            }
        }else{
            clearInterval(interval)
        }
    },1000)    

    return interval
}

const errorButton = () => {
    btn2.disabled = true
}

const newButton = () => {
    const newBtn = document.createElement('button');
    container.appendChild(newBtn);
    newBtn.setAttribute('id', 'reverseButton');
    newBtn.innerHTML = "Start account";
    newBtn.onclick = () =>{
        reverseNumber()
        newBtn.style.display = "none";
        elementClass()
    }
}

const styles = () => {
    btn.classList.add("disabled")
}

const additionNumber = () => {
    btn2.disabled = false;
    number++;
    object.innerHTML = number;
}

const StoppedButtonClick = () => {
    btn.disabled = true;
    styles()  
    newButton()
    btn2.style.display = 'none';
}


//---------------------------------------------
const btn2 = document.getElementById('select');
btn2.addEventListener('click', StoppedButtonClick)
const btn = document.getElementById('addition');
btn.addEventListener("click", additionNumber)
// interval

//button is diseased
errorButton()
