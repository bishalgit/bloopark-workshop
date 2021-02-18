/*
 * This file is used in all portals (employee, dealer and manager) in order to
 *      1- Filter models based on brands
 *      2- Fill the product overview in the right side
 *      3- Get some price calculations
 */

odoo.define('portal_ronba.orders', function (require) {
    "use strict";

    require('web.dom_ready');

    $('#select-brands').change(function() { 
            let selectedBrand = $(this).children("option:selected").val();
            let itemsInDropDownList;
            let index;
            let indexProduct;

            // Filters models by brand
            itemsInDropDownList = $("#select-models option").length;
            index = 0;
            while (index < itemsInDropDownList) {
                    indexProduct = $('#select-models option')[index];
                    $('#select-models option')[index].hidden = false;
                    index = index + 1;
            };
            itemsInDropDownList = $("#select-models option").length;
            index = 0;
            while (index < itemsInDropDownList) {
                    let indexModel = $($('#select-models option')[index]);
                    if (!(indexModel.data('brand') == selectedBrand)) {
                            $('#select-models option')[index].hidden = true;
                    };
                    index = index + 1;
            };

            // Filters products by brand
            itemsInDropDownList = $("#select-products option").length;
            index = 0;
            while (index < itemsInDropDownList) {
                    indexProduct = $('#select-products option')[index];
                    $('#select-products option')[index].hidden = false;
                    index = index + 1;
            };
            itemsInDropDownList = $("#select-products option").length;
            index = 0;
            while (index < itemsInDropDownList) {
                    indexProduct = $($('#select-products option')[index]);
                    if (!(indexProduct.data('brand') == selectedBrand)) {
                            $('#select-products option')[index].hidden = true;
                    };
                    index = index + 1;
            };
    });

    $('#select-models').change(function() {
            let selectedModel = $(this).children("option:selected").val();
            let itemsInDropDownList;
            let index;
            let indexProduct;

            itemsInDropDownList = $("#select-products option").length;
            index = 0;
            while (index < itemsInDropDownList) {
                    indexProduct = $('#select-products option')[index];
                    $('#select-products option')[index].hidden = false;
                    index = index + 1;
            };
            itemsInDropDownList = $("#select-products option").length;
            index = 0;
            while (index < itemsInDropDownList) {
                    indexProduct = $($('#select-products option')[index]);
                    if (!(indexProduct.data('model') == selectedModel)) {
                            $('#select-products option')[index].hidden = true;
                    };
                    index = index + 1;
            };
    });

    $('#sales_price_gross').change(function() {
            // TODO: We should not hardcode this calculation. So in the future we'll use some configurations to do this
            let price = parseFloat($('#sales_price_gross').val()) + ($('#sales_price_gross').val() * 19 / 100)
            $('#sales_price_net').val(price)
            $('#list_price_gross').val($('#sales_price_net').val())

            // FIXME: when input are disabled, the value is not submitted
            //  $('#sales_price_net').prop( "disabled", true );
            //  $('#list_price_gross').prop( "disabled", true );
    });

    $('#select-brands').change(function() {
        $('.brand-name').text($('#select-brands').find(":selected").text())
    });

    $('#select-models').change(function() {
        $('.model-name').text($('#select-models').find(":selected").text())
    });

    $('#select-size').change(function() {
        $('.size-name').text($('#select-size').find(":selected").text())
    });

    $('#select-color').change(function() {
        $('.color-name').text($('#select-color').find(":selected").text())
    });

    $('#select-products').change(function() {
        $('.product-name').text($('#select-products').find(":selected").text())
    });

    $('#sales_price_gross').change(function() {
        $('#product_price').text($('#sales_price_net').val())
    });

});
