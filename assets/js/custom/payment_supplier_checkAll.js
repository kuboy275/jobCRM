$(document).ready(function() {

    var two = $("input.styled").attr("checked", "checked");
    $.uniform.update(two);

    let checkAll = $("input.checkAll");
    let checkSingle = $("input.checkSingle");

    checkAll.on('change', function() {
        if ($(this).is(":checked")) {
            $("input.checkSingle").each(function(i, e) {
                $(e).prop('checked', true).uniform();
            });
        } else {
            $("input.checkSingle").each(function(i, e) {
                $(e).prop('checked', false).uniform();
            });
        };
    });

    checkSingle.click(function() {
        if ($(this).is(":checked")) {
            let isAllCheck = 0;
            $(checkSingle).each(function() {
                if (!this.checked) {
                    isAllCheck = 1
                }
            })

            if (isAllCheck == 0) {
                $(checkAll).prop("checked", true).uniform();
            }

        } else {
            $(checkAll).prop("checked", false).uniform();
        }
    });


});





















// $('#checkedAll').change(function(event) {
//     if (this.checked) {
//         $('.checkSingle span').each(function(a, b) {
//             $(this).addClass("checked");
//         });
//     } else {
//         $('.checkSingle span').each(function() {
//             $(this).removeClass("checked");
//         });
//     }
// });