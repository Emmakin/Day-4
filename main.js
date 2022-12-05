const btnE1 = document.getElementById('btn');
const pastMsg = document.getElementById('pastMsg');
const initialMsg = document.getElementById('initialMsg');
let text = document.getElementById('text');
let label = document.getElementById('label');


btnE1.addEventListener('click',function updateCurrentMsg(){
    if(text.value.length <= 0){
        label.innerHTML = "Pls leave a message";
    }

    if (text.value.length > 0){
    label.innerHTML = ""
    pastMsg.textContent = "Previous Message: " + initialMsg.innerText;
    initialMsg.innerText = text.value;
    document.getElementById('text').value = "";
}})
