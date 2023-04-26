//localStorage.clear();

function saveDate(){
    const date = new Date();
    localStorage.setItem('dateEntry', date.toLocaleDateString('en-GB'));
    localStorage.setItem('timeEntry', date.toLocaleTimeString());
};

// Get data from localStorage
const dateEntry = localStorage.getItem('dateEntry');
const timeEntry = localStorage.getItem('timeEntry');
let userName = localStorage.getItem('userName');

if (!userName || userName === "null") {
    userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    //Save user data to localStorage
    localStorage.setItem('userName', userName);
    saveDate();
} else {
    alert(`Добрый день, ${userName}! Давно не виделись.В последний раз вы были у нас ${dateEntry} в ${timeEntry}.`);
    saveDate();
}