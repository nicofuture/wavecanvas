(function() {
    var tees = [
    'img/t1.jpg',
    'img/t2.jpg'
     ],
    tee_i = 0,
    strHtml= '';
    for( var j = 0; j < tees.length; j++){
        strHtml += '<img id="shirt" src="' + tees[j] + '" />';
    }
    $("#img_container1").append(strHtml);
    $("#img_container1 img").eq(0).addClass("visible");
    $("#img_container1 img").eq(0).css("z-index", "10");
    document.getElementById('img_container1').addEventListener('click', function() {
        var curId = tee_i;
        tee_i >= tees.length - 1 ? tee_i = 0 : ++tee_i;
        var nextId = tee_i;
        $("#img_container1 img").eq(curId).toggleClass("visible");
        $("#img_container1 img").eq(nextId).toggleClass("visible");
        $("#img_container1 img").css("z-index", "0");
        $("#img_container1 img").eq(nextId).css("z-index", "10");
    }, false);
}());