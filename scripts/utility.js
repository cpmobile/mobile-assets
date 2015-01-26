// This is a general Javascript file for resuable utility functions.

// Get available screen width

function getWidth() {
    if (self.innerWidth) {
        return self.innerWidth;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientWidth;
    } else if (document.body) {
        return document.body.clientWidth;
    }
    return 0;
}

// Get available screen height

function getHeight() {
    if (self.innerHeight) {
        return self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientHeight;
    } else if (document.body) {
        return document.body.clientHeight;
    }
    return 0;
}

// Print debug to console

function printDebug(message, data) {
    if (DEBUG) {
        if (message) {
            console.log(message);
            if (data) {
                console.log('--->>');
                console.log('');
                console.log(data);
                console.log('');
                console.log('<<---');
            }
        }
    }
}

// Get device orientation

function doOnOrientationChange() {
    var old = ORIENTATION;
    switch (window.orientation) {
        case -90:
        case 90:
            ORIENTATION = 'landscape';
            break;
        default:
            ORIENTATION = 'portrait';
            break;
    }
    angular.element(document.querySelector('body')).addClass(ORIENTATION);
    angular.element(document.querySelector('body')).removeClass(old);
}