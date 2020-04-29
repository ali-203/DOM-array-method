const main = document.getElementById('main');
const addUserBth = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');z
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBt = document.getElementById('calculate-wealth');



let data = [];

// Fetch random user and add money
async function getRandomUser() {
 const res = await fatch('https://randomuser.me/api');
 const data = await res.json(); 
const user = data.results[0];
const newUser = {
    name:  '${user.name.first} ${user.name.last}',
    money: Math.floor()
}
 
}
