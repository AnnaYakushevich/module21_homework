// Ищем кнопку запроса 
const btnNode = document.querySelector('.j-btn-request');

// Ищем ноду для вывода на страницу результата
const resultNode = document.querySelector('.j-result');

// Ищем ноду для вывода на страницу сообщения, что пользователь не найден
const noResultNode = document.querySelector('.no-result');

// Функция запроса данных API
const useRequest = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
    .then((response) => {
        // console.log('response', response);
        return response.json();
    })
    .then((json) => {   
        // console.log('json', json);    
        return json;
    })
    .catch(() => { console.log('error') });
}

//Функция вывода результата на страницу
function displayResult(apiData) {
    let tasks = '';     
    apiData.forEach(item => {
        const taskItem = (item.completed) ? (
            `<li class = "j-result"> <s> ${item.id}. ${item.completed}. ${item.title} </s> </li>`
            ) : (
            `<li class = "j-result"> ${item.id}. ${item.completed}. ${item.title} </li>`
        );
        tasks = tasks + taskItem;    
        });        
    resultNode.innerHTML = tasks;
}

//Функция вывода на страницу сообщения, если пользователь не найден
function displayUserIsNotFound() { 
    const message = `Пользователь с указанным id не найден`;
    resultNode.innerHTML = '';   
    noResultNode.innerHTML = message;
}

// Обработчик кнопки запроса 
btnNode.addEventListener('click', async () => {

    // Получаем ID пользователя из поля ввода
    const userId = document.querySelector('input').value;

    // Делаем запрос
    const requestResult = await useRequest(userId);

    if (requestResult.length == 0) {  
        // Если в результате запроса пустой массив, то выводим на страницу сообщение, что пользователь не найден
        displayUserIsNotFound();    
    } else {
        // Иначе выводим результат запроса на страницу
        displayResult(requestResult);
    }    
});