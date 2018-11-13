if (document.getElementById('img_container')) {
    (function () {
        var images = [
            'img/1.jpg',
            'img/4.gif'
        ]
        i = 0;
        var strHtml = "";
        for (var j = 0; j < images.length; j++) {
            strHtml += '<img id="gallery" src="' + images[j] + '" />';
        }
        $("#img_container").append(strHtml);

        $("#img_container img").eq(0).addClass("visible");
        $("#img_container img").eq(0).css("z-index", "10");

        document.getElementById('img_container').addEventListener('click', function () {
            var curId = i;
            i >= images.length - 1 ? i = 0 : ++i;
            var nextId = i;
            $("#img_container img").eq(curId).toggleClass("visible");
            $("#img_container img").eq(nextId).toggleClass("visible");
            $("#img_container img").css("z-index", "0");
            $("#img_container img").eq(nextId).css("z-index", "10");
        }, false);
    }());
}
