# -*- coding: utf-8 -*-
# © 2021 bloopark systems (<http://bloopark.de>)
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
from odoo import fields, models


class ResGrounds(models.Model):
    """Adding Ground module"""
    _name = "res.ground"
    _description = "Futsal Ground"

    name = fields.Char()
    owner_id = fields.Many2one(comodel_name="res.partner")
