from rest_framework import serializers
from .models import Cart, CartItem, Order, OrderItem
from products.serializers import ProductSerializer

class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    product_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = CartItem
        fields = ('id', 'product', 'product_id', 'quantity', 'total_price')

class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ('id', 'items', 'total_price')

class OrderItemSerializer(serializers.ModelSerializer):
    product_name = serializers.ReadOnlyField(source='product.name')
    product_image = serializers.SerializerMethodField()

    class Meta:
        model = OrderItem
        fields = ('id', 'product', 'product_name', 'product_image', 'price', 'quantity', 'total_price')

    def get_product_image(self, obj):
        first_image = obj.product.images.first()
        if first_image:
            return first_image.image.url if hasattr(first_image.image, 'url') else str(first_image.image)
        return None

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ('id', 'user', 'full_name', 'phone', 'email', 'address', 'city', 'pincode', 'total_amount', 'status', 'items', 'created_at')
        read_only_fields = ('user', 'total_amount', 'status')
