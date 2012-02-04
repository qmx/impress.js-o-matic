
$(function(){
    var m = new MersenneTwister(2);
    var maxOffset = 1000;
    var root = $("<div></div>").attr("id", "impress");
    for(var i = 0; i < 10; i++){
        var slide = $("<div></div>")
            .attr("data-x", m.nextInt(maxOffset))
            .attr("data-y", m.nextInt(maxOffset))
            .attr("data-z", m.nextInt(maxOffset))
            .attr("data-rotate-x", m.nextInt(maxOffset/10))
            .attr("data-rotate-y", m.nextInt(maxOffset/10))
            .attr("data-scale", m.nextInt(10))
            .append($("<h1>slide" + i + "</h1>"))
            .addClass("step");
        root.append(slide)
    }
    $("body").append(root);
    impress();
});
