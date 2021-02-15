# Useful Commands

```bash
# Start docker
docker-compose up

# Open new terminal
# Login to odoo container as odoo using container name
docker exec -it workshop-odoo14 bash
cd /odoo

# Run odoo from container
cd /odoo/odoo
python3 ./odoo-bin --config=/etc/odoo.conf

# Create and install your module
python3 ./odoo-bin --config=/etc/odoo.conf -d <dbname> -i sale,account --stop-after-init --without-demo all

# Scaffold new module
python3 ./odoo-bin scaffold module_name folder_name 
# Eg:
python3 ./odoo-bin scaffold test_module ../custom-addons/ 

# If you want to run odoo directly from host machine use service name
# Run odoo from host machine
docker-compose exec odoo14 python3 /odoo/odoo/odoo-bin --config=/etc/odoo.conf
```
