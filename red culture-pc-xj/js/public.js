;
(function (win, doc) {
    function change() {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 38.4 + 'px';
        document.getElementsByTagName('body')[0].style.fontSize = document.documentElement.clientWidth /
            38.4 + 'px';
    }
    win.addEventListener('resize', change, false);
    win.addEventListener('DOMContentLoaded', change, false);
})(window, document);