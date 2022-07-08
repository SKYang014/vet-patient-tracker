loginBtn = document.getElementById("login")
logoutBtn = document.getElementById("logout")

function replacePage(event){
    event.preventDefault()
    document.location.replace('/login')
}

async function logoutPress(event) {
    event.preventDefault();
    console.log("Hello, pressed")
    const response = await fetch('/api/techs/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
    }

  
logoutBtn.addEventListener('click', logoutPress);
loginBtn.addEventListener("click", replacePage)
