
var currentHomeTryOnCount = 0;

$(document).ready(function () {
    console.log('Endless Script Loaded');

    $('.order-endless-items').click(function () {
        console.log('order endless items click');
        var customerId = $(this).attr('data-customer-id'),
            closet = JSON.parse(window.localStorage.getItem('closet'));
        $.ajax({
            type: "POST",
            url: '/community/endless?customer_id=' + customerId + '&q=' + 'orderEndlessItems',
            data: closet,
            success: function (res) {
                console.log('success: ', res);
                location.reload();
            },
            dataType: 'json'
        });
    });

    $('.update-closet').click(function () {
        var customerId = $(this).attr('data-customer-id'),
            closet = JSON.parse(window.localStorage.getItem('closet'));
        console.log('update closet button click', closet);
        $.ajax({
            type: "POST",
            url: '/community/endless?customer_id=' + customerId + '&q=' + 'updateCloset',
            data: closet,
            success: function (res) {
                console.log('success: ', res);
                location.reload();
            },
            dataType: 'json'
        });
    });

    $('.return-items').click(function () {
        var customerId = $(this).attr('data-customer-id'),
            closet = JSON.parse(window.localStorage.getItem('closet'));
        console.log('return items button click', closet);
        $.ajax({
            type: "POST",
            url: '/community/endless?customer_id=' + customerId + '&q=' + 'returnItems',
            data: closet,
            success: function (res) {
                console.log('success: ', res);
            },
            dataType: 'json'
        });
    });

    // Form updating items in local storage
    $('#endless-closet .note').change(function (e) {
        var value = $(e.target).val();
        var id = $(e.target).parents('.item').attr('data-id');
        var closet = JSON.parse(window.localStorage.getItem('closet'));
        closet.items = closet.items.map(
            function (item) {
                if (item.id == id) {
                    item.note = value;
                }
                return item;
            }
        );
        console.log('new closet', closet);
        window.localStorage.setItem('closet', JSON.stringify(closet));
    });
    $('#endless-closet .hearted').change(function (e) {
        var value = $(e.target).prop('checked');
        var id = $(e.target).parents('.item').attr('data-id');
        var closet = JSON.parse(window.localStorage.getItem('closet'));
        closet.items = closet.items.map(
            function (item) {
                if (item.id == id) {
                    item.hearted = value.toString();
                }
                return item;
            }
        );
        console.log('new closet', closet);
        window.localStorage.setItem('closet', JSON.stringify(closet));
    });

    //sortable
    $('.closet-container').sortable({
        scroll: true,
        tolerance: "intersect",
        stop: function (event, ui) {
            var closet = JSON.parse(window.localStorage.getItem('closet'));
            var sortedItems = [];
            var rest;
            // Get sorted items
            $('.closet-container .item').each(function (id, itemDiv) {
                if ($(itemDiv).attr('data-id')) {
                    closet.items.forEach(
                        function (item) {
                            if (item.id == $(itemDiv).attr('data-id')) {
                                sortedItems.push(item);
                            }
                        }
                    );
                }
            });
            console.log(sortedItems);
            // filter sorted item out
            rest = closet.items.filter(function (item) {
                if (!sortedItems.includes(item)) {
                    return item;
                }
            });

            closet.items = sortedItems.concat(rest);
            console.log('new closet', closet);
            window.localStorage.setItem('closet', JSON.stringify(closet));
        }
    });

    //Remove Item From Virtual CLoset
    $('.remove-item').click(function (e) {
        var id = $(e.target).parents('.item').attr('data-id');
        var closet = JSON.parse(window.localStorage.getItem('closet'));
        var freshcloset = [];
        closet.items = closet.items.map(
            function (item) {
                if (item.id !== id) {
                    freshcloset.push(item);
                }
            }
        );
        $(e.target).parents('.item').remove();
        closet.items = freshcloset;
        console.log('updated closet', closet);
        window.localStorage.setItem('closet', JSON.stringify(closet));
    });

    var closet = JSON.parse(window.localStorage.getItem('closet'));
    var limit = JSON.parse(window.localStorage.getItem('closet')).orderLimit;
    var orderItems = 0;
    var shippedItems = 0
    closet.items.forEach(function (i) {
        if (i.status == "Shipped") {
            shippedItems++;
            orderItems++;
        }
        if (i.status == "Selected") {
            orderItems++;
        }
    });
    console.log(shippedItems);
    if (orderItems < limit) {
        $('.order-endless-items').show();
    }
    if (shippedItems == limit) {
        $('.return-items').show();
    }
});
