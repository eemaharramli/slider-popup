const container = document.querySelector('.container')
const submit = document.querySelector('#submit')
const username = document.querySelector('#username')
const firstPage = document.querySelector('.username')
const title = document.querySelector('h1')

submit.addEventListener('click', (e)=>{
    e.preventDefault()
    checkUser(username)
})

function checkUser(username){
    if (username.value.length !== 0 && username.value !== 'null'){
        container.style.display = 'flex'
        firstPage.style.display = 'none'
        title.textContent = username.value
    }else console.log('is null')
}