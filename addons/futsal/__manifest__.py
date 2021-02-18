{
    'name': "Futsal",

    'summary': """
        Our futsal module""",

    'description': """
    """,

    'author': "bloopark systems GmbH & Co. KG",
    'website': "http://www.bloopark.de",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/
    # ir_module_category_data.xml
    # for the full list
    'category': 'All',
    'version': '14.0.1.0.0',

    # any module necessary for this one to work correctly
    'depends': [
        'base',
    ],
    # always loaded
    'data': [
        'views/res_partner.xml',
    ],
}
