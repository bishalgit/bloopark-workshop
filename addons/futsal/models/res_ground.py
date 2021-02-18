from odoo import _, api, fields, models


class Ground(models.Model):
    _name = 'res.ground'
    _description = 'Ground'

    name = fields.Char("Ground name")
    places = fields.Integer("Number of places")
