# -*- coding: utf-8 -*-
# © 2021 bloopark systems (<http://bloopark.de>)
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
from odoo import fields, models


class ResSlot(models.Model):
    """Adding Ground module"""
    _name = "res.slot"
    _description = "Futsal Slot"

    name = fields.Char()
    date = fields.Date()
    partner_id = fields.Many2one(comodel_name="res.partner")
    ground_id = fields.Many2one(comodel_name="res.ground")

    _sql_constraints = [
        ('slot_partner_uniq',
         'unique (partner_id,id)',
         'you can only select one slot per player')
    ]

