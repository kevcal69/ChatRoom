var loginflag = false;
// code snippet for login button
$('.login-button').on('click', function() {
    if (!loginflag) {
        loginflag = true;
        var login = $('.login');
        $(this).html('authenticating...');
        /*** Code for logging in firebase ***/

        /*** end ***/

        //Supplementary Code login success
        setTimeout(function() {
            $(this).fadeOut(100, function() {
                login.fadeOut(100, loginSuccess);
            })
        }.bind(this), 1000);
    }
});

function loginSuccess() {
    // things to do in login
}
