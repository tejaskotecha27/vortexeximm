const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const data = [
  {
    "category": "Peanut Butter",
    "name": "Natural Creamy",
    "description": "Delicious high-quality natural creamy peanut butter",
    "image": "https://images.unsplash.com/photo-1590080875515-8a3a8dc2fe0a?q=80&w=2000"
  },
  {
    "category": "Peanut Butter",
    "name": "Natural Crunchy",
    "description": "Delicious high-quality natural crunchy peanut butter",
    "image": "https://images.unsplash.com/photo-1590080875515-8a3a8dc2fe0a?q=80&w=2000"
  },
  {
    "category": "Peanut Butter",
    "name": "Classic Creamy",
    "description": "Classic creamy peanut butter with perfect consistency",
    "image": "https://images.unsplash.com/photo-1590080875515-8a3a8dc2fe0a?q=80&w=2000"
  },
  {
    "category": "Peanut Butter",
    "name": "Classic Crunchy",
    "description": "Classic crunchy peanut butter with roasted bits",
    "image": "https://images.unsplash.com/photo-1590080875515-8a3a8dc2fe0a?q=80&w=2000"
  },
  {
    "category": "Peanut Butter",
    "name": "Chocolate Creamy",
    "description": "Rich chocolate flavored creamy peanut butter",
    "image": "https://images.unsplash.com/photo-1534119394514-94ad0d31d81e?q=80&w=2000"
  },
  {
    "category": "Peanut Butter",
    "name": "Chocolate Crunchy",
    "description": "Rich chocolate flavored crunchy peanut butter",
    "image": "https://images.unsplash.com/photo-1534119394514-94ad0d31d81e?q=80&w=2000"
  },
  {
    "category": "Peanut Butter",
    "name": "High Protein Chocolate Creamy",
    "description": "Whey protein infused chocolate creamy peanut butter",
    "image": "https://images.unsplash.com/photo-1534119394514-94ad0d31d81e?q=80&w=2000"
  },
  {
    "category": "Peanut Butter",
    "name": "High Protein Chocolate Crunchy",
    "description": "Whey protein infused chocolate crunchy peanut butter",
    "image": "https://images.unsplash.com/photo-1534119394514-94ad0d31d81e?q=80&w=2000"
  },
  {
    "category": "Biodegradable Items",
    "name": "Round Plate",
    "description": "High-strength compostable round plates",
    "image": "https://images.unsplash.com/photo-1516103360292-0bd1844c830a?q=80&w=2000"
  },
  {
    "category": "Biodegradable Items",
    "name": "Compartment Round Plate",
    "description": "Sustainable compartment plates for events",
    "image": "https://images.unsplash.com/photo-1516103360292-0bd1844c830a?q=80&w=2000"
  },
  {
    "category": "Biodegradable Items",
    "name": "Meal Tray",
    "description": "Eco-friendly multi-compartment meal trays",
    "image": "https://images.unsplash.com/photo-1516103360292-0bd1844c830a?q=80&w=2000"
  },
  {
    "category": "Biodegradable Items",
    "name": "Bowl",
    "description": "Eco-friendly compostable bowls",
    "image": "https://images.unsplash.com/photo-1629837943588-348615c0e0b3?q=80&w=2000"
  },
  {
    "category": "Biodegradable Items",
    "name": "Anti-Leak Container Round",
    "description": "Premium anti-leak food containers",
    "image": "https://images.unsplash.com/photo-1629168128373-8bc6a9876251?q=80&w=2000"
  },
  {
    "category": "Biodegradable Items",
    "name": "Anti-Leak Container Rectangle",
    "description": "Sustainable rectangular food storage",
    "image": "https://images.unsplash.com/photo-1629168128373-8bc6a9876251?q=80&w=2000"
  },
  {
    "category": "Biodegradable Items",
    "name": "Clamshells",
    "description": "Compostable clamshell food boxing",
    "image": "https://images.unsplash.com/photo-1634818462211-aa952300b847?q=80&w=2000"
  },
  {
    "category": "Biodegradable Items",
    "name": "Tray and Cutlery",
    "description": "Eco-friendly cutlery and serving trays",
    "image": "https://images.unsplash.com/photo-1516103360292-0bd1844c830a?q=80&w=2000"
  },
  {
    "category": "Biodegradable Items",
    "name": "Sipper Lid",
    "description": "Compostable lids for hot and cold drinks",
    "image": "https://images.unsplash.com/photo-1629168128224-4f056d6b8109?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Nutmeg",
    "description": "Whole aromatic Nutmeg seeds",
    "image": "https://images.unsplash.com/photo-1612760233068-15cf46614144?q=80&w=2000",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "name": "Mustard Seeds",
    "description": "Bold and pungent mustard seeds",
    "image": "https://images.unsplash.com/photo-1626284693741-26279f061218?q=80&w=2000",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "name": "Saffron",
    "description": "Premium Kashmiri/Iranian Saffron",
    "image": "https://images.unsplash.com/photo-1601050634129-01ea92a43927?q=80&w=2000",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "name": "Bay Leaf",
    "description": "Dried aromatic whole bay leaves",
    "image": "/imgs/Bay Leaf.jpg.jpeg",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "name": "Asafoetida (Hing)",
    "description": "Strong aromatic Asafoetida (Hing) and pure powder",
    "image": "/imgs/Asafoetida (Hing).png",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "name": "Star Anise",
    "description": "Aromatic star anise for culinary use",
    "image": "/imgs/Aniseed.png",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "name": "Curry Leaves",
    "description": "Fresh aromatic curry leaves (Kadi Patta)",
    "image": "/imgs/Curry Leaves.jpg.jpeg",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "subCategory": "SPICES",
    "name": "Tamarind",
    "description": "Premium quality Tamarind sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "SPICES",
    "name": "Poppy Seeds",
    "description": "Premium quality Poppy Seeds sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "SPICES",
    "name": "Mace",
    "description": "Premium quality Mace sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "SPICES",
    "name": "Aniseed",
    "description": "Premium quality Aniseed sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Turmeric Powder",
    "description": "High Curcumin Pure Turmeric Powder",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2000",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "subCategory": "SPICES",
    "name": "Ground Ginger",
    "description": "Premium quality Ground Ginger sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Black Cardamom",
    "description": "Green/Black flavorful cardamom pods",
    "image": "https://images.unsplash.com/photo-1601321742461-8ff97d5a570c?q=80&w=2000",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "name": "Ajwain",
    "description": "Premium quality digestive carom seeds (Ajwain)",
    "image": "/imgs/Ajwain (Carom Seeds).jpg.jpeg",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "subCategory": "SPICES",
    "name": "White Pepper",
    "description": "Premium quality White Pepper sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Celery Seeds",
    "description": "Aromatic and flavorful premium celery seeds",
    "image": "/imgs/Celery Seeds.webp",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "subCategory": "SPICES",
    "name": "Vanilla",
    "description": "Premium quality Vanilla sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Cinnamon Powder",
    "description": "Premium quality cinnamon sticks and freshly ground powder",
    "image": "/imgs/Cinnamon.png",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "subCategory": "SPICES",
    "name": "Kashmiri Chili Powder",
    "description": "Premium quality Kashmiri Chili Powder sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Curry Powder",
    "description": "Premium blend aromatic curry powder",
    "image": "/imgs/curry powder.png",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "subCategory": "SPICES",
    "name": "Szechuan Pepper",
    "description": "Premium quality Szechuan Pepper sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Nutmeg Powder",
    "description": "Whole aromatic Nutmeg seeds",
    "image": "https://images.unsplash.com/photo-1612760233068-15cf46614144?q=80&w=2000",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "subCategory": "SPICES",
    "name": "Pomegranate Seeds",
    "description": "Premium quality Pomegranate Seeds sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "SPICES",
    "name": "Mace Powder",
    "description": "Premium quality Mace sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Clove Powder",
    "description": "Rich oil aromatic whole cloves and premium clove powder",
    "image": "/imgs/Clove Powder.png",
    "subCategory": "SPICES"
  },
  {
    "category": "Agriculture",
    "subCategory": "PULSES & LEGUMES",
    "name": "Lima Beans",
    "description": "Premium quality Lima Beans sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "PULSES & LEGUMES",
    "name": "Pigeon Pea (Toor Dal)",
    "description": "Premium quality Pigeon Pea (Toor Dal) sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Black Chickpeas",
    "description": "Premium quality Desi Chickpeas (Kala Chana)",
    "image": "/imgs/Black Chickpeas.jpg.jpeg",
    "subCategory": "PULSES & LEGUMES"
  },
  {
    "category": "Agriculture",
    "name": "Chickpeas",
    "description": "Premium quality Desi Chickpeas (Kala Chana)",
    "image": "/imgs/Black Chickpeas.jpg.jpeg",
    "subCategory": "PULSES & LEGUMES"
  },
  {
    "category": "Agriculture",
    "subCategory": "PULSES & LEGUMES",
    "name": "Matar Dal",
    "description": "Premium quality Matar Dal sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "PULSES & LEGUMES",
    "name": "Moong Dal",
    "description": "Premium quality Moong Dal sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "PULSES & LEGUMES",
    "name": "Black Eyed Pea",
    "description": "Premium quality Black Eyed Pea sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "PULSES & LEGUMES",
    "name": "Kidney Beans (Rajma)",
    "description": "Premium quality Kidney Beans (Rajma) sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "PULSES & LEGUMES",
    "name": "White Peas",
    "description": "Premium quality White Peas sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Green Gram",
    "description": "Export quality Green Gram (Moong Dal)",
    "image": "https://images.unsplash.com/photo-1606101273044-2f22b8296996?q=80&w=2000",
    "subCategory": "PULSES & LEGUMES"
  },
  {
    "category": "Agriculture",
    "subCategory": "PULSES & LEGUMES",
    "name": "Lentils",
    "description": "Premium quality Lentils sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Black Gram (Urad)",
    "description": "Export quality whole Black Gram (Urad Dal)",
    "image": "/imgs/Black Gram (Urad) 2.jpeg",
    "subCategory": "PULSES & LEGUMES"
  },
  {
    "category": "Agriculture",
    "name": "Pearl Millet (Bajra)",
    "description": "Pearl Millet (Bajra) - Nutrient rich grain",
    "image": "https://images.unsplash.com/photo-1536511132770-e5069b990972?q=80&w=2000",
    "subCategory": "GRAINS & CEREALS"
  },
  {
    "category": "Agriculture",
    "name": "Wheat",
    "description": "Premium quality raw Buckwheat groats",
    "image": "/imgs/Buckwheat.jpeg",
    "subCategory": "GRAINS & CEREALS"
  },
  {
    "category": "Agriculture",
    "name": "Rice",
    "description": "Premium grade long-grain Basmati Rice",
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2000",
    "subCategory": "GRAINS & CEREALS"
  },
  {
    "category": "Agriculture",
    "subCategory": "GRAINS & CEREALS",
    "name": "Sorghum (Jowar)",
    "description": "Premium quality Sorghum (Jowar) sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Barley",
    "description": "Premium quality malting and feed grade Barley",
    "image": "/imgs/Barley.jpeg",
    "subCategory": "GRAINS & CEREALS"
  },
  {
    "category": "Agriculture",
    "subCategory": "GRAINS & CEREALS",
    "name": "Amaranth Seeds",
    "description": "Premium quality Amaranth Seeds sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Buckwheat",
    "description": "Premium quality raw Buckwheat groats",
    "image": "/imgs/Buckwheat.jpeg",
    "subCategory": "GRAINS & CEREALS"
  },
  {
    "category": "Agriculture",
    "subCategory": "GRAINS & CEREALS",
    "name": "Proso Millet",
    "description": "Premium quality Proso Millet sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "GRAINS & CEREALS",
    "name": "Oats",
    "description": "Premium quality Oats sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "OILSEEDS & COMMODITIES",
    "name": "Peanuts",
    "description": "Premium quality Peanuts sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "OILSEEDS & COMMODITIES",
    "name": "Soybean Bran",
    "description": "Premium quality Soybean sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Castor Seeds",
    "description": "High oil content premium castor seeds",
    "image": "/imgs/Castor Seeds.jpg.jpeg",
    "subCategory": "OILSEEDS & COMMODITIES"
  },
  {
    "category": "Agriculture",
    "subCategory": "PROCESSED & VALUE-ADDED PRODUCTS",
    "name": "Psyllium Husk (Isabgol)",
    "description": "Premium quality Psyllium Husk (Isabgol) sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "PROCESSED & VALUE-ADDED PRODUCTS",
    "name": "Gram Flour",
    "description": "Premium quality Gram Flour sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "PROCESSED & VALUE-ADDED PRODUCTS",
    "name": "Sago (Sabudana)",
    "description": "Premium quality Sago (Sabudana) sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "PROCESSED & VALUE-ADDED PRODUCTS",
    "name": "Vermicelli",
    "description": "Premium quality Vermicelli sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "PROCESSED & VALUE-ADDED PRODUCTS",
    "name": "Semolina (Sooji)",
    "description": "Premium quality Semolina (Sooji) sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "subCategory": "PROCESSED & VALUE-ADDED PRODUCTS",
    "name": "Fine Flour (Maida/Atta)",
    "description": "Premium quality Fine Flour (Maida/Atta) sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Puffed Rice",
    "description": "Premium grade long-grain Basmati Rice",
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2000",
    "subCategory": "PROCESSED & VALUE-ADDED PRODUCTS"
  },
  {
    "category": "Agriculture",
    "name": "Flattened Rice (Poha)",
    "description": "Premium grade long-grain Basmati Rice",
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2000",
    "subCategory": "PROCESSED & VALUE-ADDED PRODUCTS"
  },
  {
    "category": "Agriculture",
    "name": "Corn (Maize)",
    "description": "Yellow/White Maize kernels - Premium export quality",
    "image": "/imgs/Corn (Maize).jpeg",
    "subCategory": "VEGETABLES & DRY PRODUCTS"
  },
  {
    "category": "Agriculture",
    "name": "Coconut",
    "description": "Premium quality brown/green coconuts",
    "image": "/imgs/Coconut.jpeg",
    "subCategory": "VEGETABLES & DRY PRODUCTS"
  },
  {
    "category": "Agriculture",
    "subCategory": "VEGETABLES & DRY PRODUCTS",
    "name": "Potato",
    "description": "Premium quality Potato sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  },
  {
    "category": "Agriculture",
    "name": "Onion",
    "description": "Premium quality dehydrated red onion flakes",
    "image": "https://images.unsplash.com/photo-1606913084603-3e75677a201c?q=80&w=2000",
    "subCategory": "VEGETABLES & DRY PRODUCTS"
  },
  {
    "category": "Agriculture",
    "subCategory": "VEGETABLES & DRY PRODUCTS",
    "name": "Ginger Powder",
    "description": "Premium quality Ginger Powder sourced for export excellence.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000"
  }
];

module.exports.seedData = data;

// Seeding function
const seedDB = async () => {
  try {
    const mongoose = require('mongoose');
    const Product = require('./models/Product');
    const { MongoMemoryServer } = require('mongodb-memory-server');

    let mongoUri = process.env.MONGO_URI;
    
    if (!mongoUri || mongoUri.includes('127.0.0.1')) {
      try {
        await mongoose.connect('mongodb://127.0.0.1:27017/vortexexim', { serverSelectionTimeoutMS: 2000 });
        console.log('Local MongoDB Connected for seeding');
      } catch (e) {
        console.log('Local MongoDB not running. Using Memory Server...');
        const mongoServer = await MongoMemoryServer.create();
        mongoUri = mongoServer.getUri();
        await mongoose.connect(mongoUri);
      }
    } else {
      await mongoose.connect(mongoUri);
    }

    console.log('Cleaning existing products...');
    await Product.deleteMany({});
    
    console.log('Seeding new data...');
    await Product.insertMany(data);
    
    console.log('Database Seeded Successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

if (require.main === module) {
  seedDB();
}
