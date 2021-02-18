odoo.define('portal_ronba.EmployeeOrderList', (require) => {

    const { Widget, registry } = require('web.public.widget');
    const Dialog = require('web.Dialog');
    const rpc = require('web.rpc');

    var orders_count = 0;

    const WidgetEmployeeOrderList = Widget.extend({
        selector: '.employee_order_list',
        init: function () {
            this._super.apply(this, arguments);
            this.$order_counter = null;
            this.$no_records_found = null;
            this.orders_count = 0;
            this.order_lists = null;
        },
        start () {
            const def = this._super(...arguments);
            var self = this;
            this._rpc({
                route: '/my/blanket_orders/list_json',
                params: {},
            }).then(function (data) {
                // get values from controller to fill the list
                var values = [];
                for (const [key, value] of Object.entries(data)) {
                  values.push({
                    name: value["name"],
                    state: value["state"],
                    date_order: value["date_order"],
                    id: value["id"], //order id will be assigned to html item
                    url: value["url"], // to use in href
                    edit_url: value["edit_url"],
                    action_edit: value["action_edit"]
                  })
                }
                var options = {
                  valueNames: [ 'name', 'state', 'date_order' ],
                  // Since there are no elements in the list,
                  // this will be used as template.
                  item: function(values) {
                  // the edit icon will be shown only on some records.
                  // the condition comes from the controller from 'edit'
                  let edit_section = values.action_edit ? `<div class="order-icon">
                                                            <a href=${values.edit_url}><i class="fa fa-edit"></i></a>
                                                        </div>` : "";
                    res = `<div class="order-row">
                              <a id=${values.id} href=${values.url}></a>
                                  <div class="order-row-data order-list-item list-group-item list-group-item-action">
                                    <div class="order-name name">${values.name}</div>
                                    <div class="order-state state">${values.state}</div>
                                    <div class="order-date date_order">${values.date_order}</div>
                                    ${edit_section}
                                  </div>
                              </a>
                          </div>`;
                    return res;
                  }
                };
                // previous lines will generate one HTML element like this:
                //  <a id="24" href="/order/24/details" class="order-row order-list-item list-group-item list-group-item-action"><div class="order-name name">SO0024</div><div class="order-state state">Draft</div><div class="order-date date_order">20/01/2021</div></a>
                self.order_lists = new List('orders', options, values);
                // Declare values for widget
                self.orders_count = values.length;
                self.$order_counter = self.$('#order-counter');
                self.$no_records_found = $('#no-records-found');

                // Call onupdatelist first time
                self._onUpdateList();
                // Bind update event
                self.order_lists.on("updated", _.bind(self._onUpdateList, self));
            });

            return def;
        },
        _onUpdateList: function () {
            var order_rows = this.$('.order-row').length;
            this.$order_counter.text(order_rows);

            if(order_rows == 0 && this.orders_count > 0){
                this.$no_records_found.removeClass('hide');
            } else {
                this.$no_records_found.addClass('hide');
            }
        }
    });

   // add widget to registry
   registry.WidgetEmployeeOrderList = WidgetEmployeeOrderList;

});
