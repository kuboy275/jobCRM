$(document).ready(function() {

    $(".task-box").on("click", ".check-task", function(e) {
        let taskBox = e.delegateTarget;
        var two = $(this).attr("checked", this.checked);
        $.uniform.update(two);
        if ($(taskBox).find(".check-task").is(':checked')) {
            $(taskBox).addClass("active");
        } else {
            $(taskBox).removeClass("active");
        }
    })

});