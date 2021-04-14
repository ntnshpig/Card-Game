// fetch("http://10.11.12.5:8000/test.php",{
//     type: 'POST',
//     crossDomain: true,
//     mode: 'cors',
//     data: 'name=Hello'
// }).then((data)=>{
//     alert(data)
//     console.log(data)
// })

let xhr = new XMLHttpRequest(); // у конструктора нет аргументов
xhr.open('GET', "http://10.11.12.5:8000/test.php")
// "http://10.11.12.4:8080/test.php"
// xhr.send('name=Hello')
xhr.send();
xhr.onload = ()=>{
    if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    } else { // если всё прошло гладко, выводим результат
        alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
        let responseObj = xhr.response;
        alert(responseObj);
        // alert(`Response: ${xhr.response} `); // response -- это ответ сервера
    }
}