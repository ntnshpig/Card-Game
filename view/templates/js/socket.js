// sendData({name: 'Hello'},(data)=>{alert(data);})
function sendData( data,callback ) {
    const XHR = new XMLHttpRequest(),
        FD  = new FormData();
    // Push our data into our FormData object
    for(let name in data ) {
        FD.append( name, data[ name ] );
    }
    // Define what happens on successful data submission
    XHR.addEventListener( 'load', function( event ) {
        alert( 'Yeah! Data sent and response loaded.' );
        if (XHR.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            alert(`Ошибка ${XHR.status}: ${XHR.statusText}`); // Например, 404: Not Found
        } else { // если всё прошло гладко, выводим результат
            let responseObj = XHR.response;
            callback(responseObj)
            // alert(`Response: ${xhr.response} `); // response -- это ответ сервера
        }
    } );
    // Define what happens in case of error
    XHR.addEventListener('error', function( event ) {
        alert( 'Oops! Something went wrong.' );
    } );
    // Set up our request
    XHR.open('POST', 'http://10.11.12.5:8888/Router_login.php' );
    // Send our FormData object; HTTP headers are set automatically
    XHR.send( FD );
}
