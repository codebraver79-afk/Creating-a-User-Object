const username = document.getElementById('name');
const userage = document.getElementById('age');
const btn = document.getElementById('save');
const text = document.getElementById('output')



btn.addEventListener('click', function(e){
    const user = {
        name: username.value,
        age: userage.value
    }
    
    text.innerHTML = 'Name: '+user.name +',Age: '+user.age;

    
})