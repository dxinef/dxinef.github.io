// 列表页文章收起与展开
function articleFolder(thisbtn) {
    var allArc = $(".post__content")
    var arc = $(thisbtn).parent(".post__content");
    if(arc.hasClass("is-show")) {
        arc.removeClass("is-show");
    }
    else {
        allArc.removeClass("is-show");
        arc.addClass("is-show");
    }
}