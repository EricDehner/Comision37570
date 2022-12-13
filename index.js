class ProductManager {
  constructor() {
    this.products = [];
    this.product = Product;
  }

  getProducts() {
    console.log(this.products);
  }

  addProducts(product) {
    if (this.getProducts().find((p) => p.code == product.code)) console.log(`El producto con el codigo ${product.code} ya está agregado`)
    else product.id = this.getProducts().length + 1; this.products.push(product)
  }

  getProductById(id) {
    const find = this.products.find(prod => prod.id === id)
    if (find) {
      console.log(find)
    }
    else {
      console.log(`Producto no encotrado`)
    }
  }
}


class Product extends ProductManager {
  constructor(_title, _description, _price, _thumbnail, _code, _stock) {
    super()
    this.title = _title
    this.description = _description
    this.price = _price
    this.thumbnail = _thumbnail
    this.code = _code
    this.stock = _stock
  }
}

const gabinete = {
  title: "H5 Flow",
  description: "Panel frontal perforado para generar un mayor flujo de aire.",
  price: 110,
  thumbnail: "https://nzxt.com/assets/cms/34299/1666138830-h5-flow-hero-white.png?auto=format&fit=crop&h=1000&w=1000",
  code: "1",
  stock: 100
}
const refrigeracion = {
  title: "Kraken X53",
  description: "Posee dos ventiladores AER P de 120 mm para el radiador",
  price: 140,
  thumbnail: "https://nzxt.com/assets/cms/34299/1615583243-kraken-x53frontbnwith-fanpurple.png?auto=format&fit=crop&h=1000&w=1000",
  code: "2",
  stock: 100
}
const mother = {
  title: "N7 Z690",
  description: "Chipset Z690 de Intel minimalista",
  price: 260,
  thumbnail: "https://nzxt.com/assets/cms/34299/1654052211-motherboard_n7-z690_black_main_png-clear-background.png?auto=format&fit=crop&h=1000&w=1000",
  code: "3",
  stock: 100
}



const newProd = new ProductManager()

newProd.addProducts(gabinete)
newProd.addProducts(refrigeracion)
newProd.addProducts(mother)
console.log(newProd.getProducts());