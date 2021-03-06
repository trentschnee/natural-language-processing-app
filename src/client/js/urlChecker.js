const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

function checkForUrl(inputUrl,cb) {

    // Test if the url is valid, if so return true
   if(urlRegex.test(inputUrl)) {
        cb(true)
    }
   else {
        cb(false)
    }
}

export { checkForUrl }
