let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_name')
if(displayName)
{
    form.name.value = displayName;
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    sessionStorage.setItem('display_name', e.target.name.value);

    inviteCode = String(Math.floor(Math.random() * 999999))        
    window.location = `room.html?room=${inviteCode}`;
})