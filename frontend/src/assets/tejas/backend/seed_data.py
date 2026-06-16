import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
django.setup()

from products.models import Category, Product, ProductImage
from django.utils.text import slugify

def seed():
    # Create Categories
    categories = [
        {'name': 'Cell', 'slug': 'cell'},
        {'name': 'Lithium Battery Pack', 'slug': 'lithium-battery-pack'},
        {'name': 'Battery Testers', 'slug': 'battery-testers'},
        {'name': 'BMS & Smart BMS', 'slug': 'bms-smart-bms'},
        {'name': 'Chargers & Accessories', 'slug': 'chargers-accessories'},
    ]

    for cat_data in categories:
        Category.objects.get_or_create(name=cat_data['name'], defaults={'slug': cat_data['slug']})

    # Create Products
    products = [
        {
            'name': '3.2V 100Ah LiFePO4 Prismatic Cell',
            'category': 'Cell',
            'price': 4500,
            'description': 'High quality Grade A Prismatic Cell for EV and Solar applications.',
            'min_order_quantity': 4,
            'stock': 100,
            'specifications': {'Voltage': '3.2V', 'Capacity': '100Ah', 'Type': 'LiFePO4'}
        },
        {
            'name': '48V 100Ah Lithium Ion Battery Pack',
            'category': 'Lithium Battery Pack',
            'price': 85000,
            'description': 'Smart Lithium Battery Pack with built-in BMS for Electric Cycles and Scooters.',
            'min_order_quantity': 1,
            'stock': 10,
            'specifications': {'Voltage': '48V', 'Capacity': '100Ah', 'Cycles': '2000+'}
        },
        {
            'name': 'Daly Smart BMS 16S 48V 100A',
            'category': 'BMS & Smart BMS',
            'price': 6500,
            'description': 'Daly Smart BMS with Bluetooth and UART communication for LiFePO4 packs.',
            'min_order_quantity': 1,
            'stock': 50,
            'specifications': {'Series': '16S', 'Current': '100A', 'Type': 'Smart'}
        }
    ]

    for p_data in products:
        cat = Category.objects.get(name=p_data['category'])
        product, created = Product.objects.get_or_create(
            name=p_data['name'],
            defaults={
                'category': cat,
                'slug': slugify(p_data['name']),
                'price': p_data['price'],
                'description': p_data['description'],
                'min_order_quantity': p_data['min_order_quantity'],
                'stock': p_data['stock'],
                'specifications': p_data['specifications']
            }
        )
        if created:
            # Add a placeholder image
            ProductImage.objects.create(product=product, image='https://via.placeholder.com/600x600?text=' + p_data['name'].replace(' ', '+'))

    print("Seeding completed!")

if __name__ == '__main__':
    seed()
