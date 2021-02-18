# -*- coding: utf-8 -*-
# © 2021 bloopark systems (<http://bloopark.de>)
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
from odoo import fields, models


class ResPartner(models.Model):
    """Inherit to add Futsal Process"""

    _inherit = "res.partner"

    ground_ids = fields.One2many(
        comodel_name="res.ground", inverse_name="owner_id"
    )
    slot_ids = fields.One2many(
        comodel_name="res.slot", inverse_name="partner_id"
    )
