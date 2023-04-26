// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');

// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');

// Функция запроса данных из API
const useRequest = (page, limit) => {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then((response) => {
        return response.json();
    })
    .then((json) => {   
        return json;
    })
    .catch(() => { console.log('error') });
}

// Функция отображения на странице результата запроса
function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
    const cardBlock = `
        <div class="card">
        <img
            src="${item.download_url}"
            class="card-image"
        />
        <p>${item.author}</p>
        </div>
    `;
    cards = cards + cardBlock;
    });
    resultNode.innerHTML = cards;
}

// При обновлении страницы выводим данные последнего запроса, взятые из localStorage
const lastRequestResult = JSON.parse(localStorage.getItem('lastRequestResult'));
if (lastRequestResult) {
    displayResult(JSON.parse(localStorage.getItem('lastRequestResult')));
}

// Обработчик кнопки запроса 
btnNode.addEventListener('click', async () => {

    // Записываем данные из полей ввода
    let page = document.getElementById('page').value;
    let limit = document.getElementById('limit').value;

    // Делаем запрос и дожидаемся результата
    const requestResult = await useRequest(page,limit);

    // Проверяем номер страницы и лимит на вхождение в диапазон 1-10    
    const flagPage = (page > 0 && page < 11) ? true : false; 
    const flagLimit = (limit > 0 && limit < 11) ? true : false; 
    
    if (flagPage && flagLimit ) {    
        // Выводим результат и записываем результат в localStorage
        displayResult(requestResult);      
        localStorage.setItem('lastRequestResult', JSON.stringify(requestResult));         
    } else {
        // Выводим соответствующее сообщение
        if (!flagPage && flagLimit) {resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';}; 
        if (flagPage && !flagLimit) {resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10';};   
        if (!flagPage && !flagLimit) {resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';};
    }; 

});