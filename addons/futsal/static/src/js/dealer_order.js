odoo.define('portal_ronba.CopyButton', (require) => {

    // sample widget for adding a button to copy
    // one sample test into the Clipboard and
    // show one Dialog.
    // ref: https://www.youtube.com/watch?v=w3VtCsq-avo

    const { Widget, registry } = require('web.public.widget');
    const Dialog = require('web.Dialog');
    const rpc = require('web.rpc');

    const CreateOrderButton = Widget.extend({
        selector: '.btn_create_dealer_order_js',
        events: {
            'click button': 'clickEvent',
        },
        clickEvent (ev) {
            $('#hidden_box').modal('show');
        },
    });

    const SearchEmployeeButton = Widget.extend({
        selector: '.btn_search_employee_js',
        events: {
            'click button': 'clickEvent',
        },
        clickEvent (ev) {
            let search = $('#searchTerm').val();
            let domain = "email";
            rpc.query({
                route: '/dealer/search_customer_js',
                params: {
                    domain: domain,
                    search: search,
                }
            }).then(function (data) {
                // get values from controller to fill the list
                if(data["id"]) {
                    name = data["employee_name"]
                    url = data["url"]
                    $('.alert-employee-search').addClass('alert-success');
                    $('.alert-employee-search').removeClass('alert-danger');
                    $('#search-message').text(name);
                    $('#customer-data').attr("href", url);
                } else {
                    $('.alert-employee-search').addClass('alert-danger');
                    $('.alert-employee-search').removeClass('alert-success');
                    $('#search-message').text('Bike User not found.');
                    $('#customer-data').attr("href", "#");
                }
            });
        },
    });

   registry.CreateOrderButton = CreateOrderButton;
   registry.SearchEmployeeButton = SearchEmployeeButton;

});
