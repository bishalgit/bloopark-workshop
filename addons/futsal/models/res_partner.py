from odoo import _, api, fields, models


class ResPartner(models.Model):
    _inherit = 'res.partner'
    _description = "Ground Owner"

    has_ground = fields.Boolean('The owner has a ground')
