console.log('Hello from app.js')
const $username = document.getElementById('username');
const $password = document.getElementById('password')
const $submitBtn = document.getElementById('submitBtn')
const $userList = document.querySelector('.userList')


$submitBtn.addEventListener('click', async (event) => {

    event.preventDefault();
    const username = $username.value;
    const password = $password.value;


    if (!username || !password) {
        alert('Please enter a username and password');
        return;
    };

try {

    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            username,password,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    console.log('this log' + data);
    // create li html 
    const $li = document.createElement('li');
    // create anchor tag
    const $a = document.createElement('a');
    // set href attribute
    $a.setAttribute('href', `/users/${data.id}`);
    // set text content
    $a.textContent = data.username;
    // create a p tag
    const $p = document.createElement('p');
    // set text content
    $p.textContent = data.password;

    // append anchor tag to li
    $li.appendChild($a);
    // append p tag to li
    $li.appendChild($p);

    // append li to ul
    $userList.appendChild($li);

    $username.value = '';
    $password.value = '';

    console.log(data);
} catch (err) {
    console.log(err);
}

});