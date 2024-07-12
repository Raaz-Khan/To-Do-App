console.log('js is running');

let input = document.getElementById('input');
let works = document.querySelector('.works');
let clearAllBtn = document.querySelector('.clearAll');



// for refresh page

if (works.innerHTML=== "") {
    
    for (let i = (localStorage.length-1); i >= 0; i--) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        
        let newel = document.createElement("li");
        newel.setAttribute('id',key);
        newel.innerHTML = `${value} <button class="delete hid">Delete</button>`;
        works.appendChild(newel);
        
        newel.addEventListener('click', () => {
            newel.querySelector('.delete').classList.toggle('hid')
        })
        
        newel.querySelector('.delete').addEventListener('click', del)
        
        function del() {
            let key = newel.getAttribute('id');
            newel.remove();
            localStorage.removeItem(key);

            if (localStorage.length === 0) {
                clearAllBtn.classList.add('none');
            }
        }
        clearAllBtn.classList.remove('none');
    }
}


let iter=1;


function add() {
    if (input.value === "") {
        alert('please enter work');
    }
    else {
        
        localStorage.setItem(`w${iter}`,input.value);
        let newel = document.createElement("li");
        newel.setAttribute('id',`w${iter}`);
        
        newel.innerHTML = `${input.value} <button class="delete hid">Delete</button>`;
        works.appendChild(newel)
        input.value = '';
        
        newel.addEventListener('click', () => {
            newel.querySelector('.delete').classList.toggle('hid')
        })

        newel.querySelector('.delete').addEventListener('click', del)
        
        function del() {
            let key = newel.getAttribute('id');
            newel.remove();
            localStorage.removeItem(key);

            if (localStorage.length === 0) {
                clearAllBtn.classList.add('none');
            }
        }
        
        clearAllBtn.classList.remove('none');

        iter = iter+1;
    }



}


// for All Clear

function clearAll(){
    
    localStorage.clear();
    works.innerHTML = "";
    iter = 1;
    clearAllBtn.classList.add('none');
    
}

clearAllBtn.addEventListener('click',clearAll);

