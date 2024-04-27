var pathSegments = window.location.pathname.split('/');
var relativePath = '';
for (var i = 1; i < pathSegments.length - 1; i++) {
    relativePath += '../';
}
var timestamp = new Date().getTime();
document.getElementById('style-link').href = relativePath + 'css/style.css?v=' + timestamp;
