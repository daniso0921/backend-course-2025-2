const { URL, URLSearchParams } = require('url');

// Базова адреса
const base = "https://bank.gov.ua/NBUStatService/v1/statdirectory/inflation";

// Константи для твого варіанту (№7)
const date = "202302";      // лютий 2023
const time_period = "m";    // місяць

// Створюємо URL
const url = new URL(base);
url.search = new URLSearchParams({
    date: date,
    period: time_period,
    json: ""   // ключ без значення
});

// Виводимо URL
console.log("URL:", url.toString());

// Виконуємо запит
fetch(url.toString())
    .then(res => res.json())
    .then(data => {
        console.log("Дані з НБУ:");
        console.log(data);
    })
    .catch(err => console.error("Помилка:", err));
