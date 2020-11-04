function errorHandler(e) {
    var problemHandling = {
        'error': false,
        'errorMsg': null
    };
    try {
        console.error(e);
        return problemHandling;
    } catch (error) {
        problemHandling.error = true;
        problemHandling.errorMsg = error;
        return problemHandling;
    }
}
