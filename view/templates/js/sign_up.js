function check_pass() {

    let pswd = document.getElementById('input_password');
    let conf_pswd = document.getElementById('input_repeat');
    
    if(pswd.value.localeCompare(conf_pswd.value)) {
        conf_pswd.style.border = '2px solid red';
    } else {
        conf_pswd.style.border = '2px solid green';
    }
}
