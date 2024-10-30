
document.addEventListener('DOMContentLoaded', evt => {
    getUsers();
})



async function getUsers(){
    try {
        const contentList = document.getElementById('USER_LIST');
        contentList.innerHTML = 'cargando...';
        const req = await fetch(`http://localhost:1000/api/users/getall`);
        const res = await req.json();
        const verify = (res && res.data.length > 0);

        contentList.innerHTML = '';
        if (!verify){
            contentList.innerHTML = '-- SIN DATOS. --';
            return;
        }

        res.data.forEach(user => {
            contentList.innerHTML += `
                <li>
                    ${user.username} <a href="http://localhost:1000/api/users/remove/${user.id}">Remove</a> 
                </li>
            `;
        });
    } catch (error) {
        
    }
}