// Функция генерации случайного числа от min до max
function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
  };

// Функция задержки на 3 секунды
function resolveAfter3Seconds(data){   
    return new Promise(resolve => {
        setTimeout(() => {resolve(data)}, 3000);
    });
}

async function usePromise() {    
    console.log("Пожалуйста, подождите...");
    
    // Генерация случайного числа с задержкой 3 секунды    
    const number = await resolveAfter3Seconds(randomInteger(1, 100));
    
    // Создание promise
    const myPromise = new Promise((resolve, reject) => {
        if (number % 2 == 0) {
            resolve(`Завершено успешно. Сгенерированное число — ${number}.`);        
        } else {
            reject(`Завершено с ошибкой. Сгенерированное число — ${number}.`);
        }
    });
    
    // Выполнение promise
    myPromise
        .then((result) => {        
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
};

// Вызов асинхронной функции
usePromise();