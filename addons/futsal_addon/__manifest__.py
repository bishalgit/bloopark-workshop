# -*- coding: utf-8 -*-
# © 2021 bloopark systems (<http://bloopark.de>)
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
{
    'name': 'Futsal CASE 3',
    'category': 'hidden',
    'summary': """Futsal CASE 3""",
    'author': 'bloopark systems GmbH & Co. KG',
    'website': 'http://www.bloopark.de',
    'version': '14.0.1.0',
    'license': 'AGPL-3',
    'depends': ['base'],
    'data': [
        'security/ir.model.access.csv',
        'views/res_partner_view.xml',
        'views/res_ground_view.xml',
        'views/res_slot_view.xml',
    ],
    'installable': True,
    'auto_install': False,
    'application': False,
}
