// Datos de ejemplo para productos
const productsData = [
    {
      id: "1",
      name: "Smartphone XYZ",
      description: "Un smartphone de última generación con cámara de alta resolución y batería de larga duración.",
      price: 599.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "electronica",
      categoryName: "Electrónica",
      features: [
        'Pantalla OLED de 6.5"',
        "Cámara de 48MP",
        "Batería de 5000mAh",
        "Procesador octa-core",
        "128GB de almacenamiento",
      ],
    },
    {
      id: "2",
      name: "Laptop Pro",
      description: "Laptop potente para profesionales y gamers con gráficos de alta calidad.",
      price: 1299.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "electronica",
      categoryName: "Electrónica",
      features: ["Procesador Intel i7", "16GB RAM", "SSD 512GB", "Tarjeta gráfica dedicada", 'Pantalla 15.6" Full HD'],
    },
    {
      id: "3",
      name: "Auriculares Inalámbricos",
      description: "Auriculares con cancelación de ruido y sonido de alta fidelidad.",
      price: 149.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "electronica",
      categoryName: "Electrónica",
      features: [
        "Cancelación activa de ruido",
        "Bluetooth 5.0",
        "Batería de 30 horas",
        "Micrófono incorporado",
        "Diseño plegable",
      ],
    },
    {
      id: "4",
      name: "Zapatillas Deportivas",
      description: "Zapatillas cómodas y ligeras para correr o entrenar.",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "deportes",
      categoryName: "Deportes",
      features: [
        "Material transpirable",
        "Suela amortiguada",
        "Diseño ligero",
        "Disponible en varios colores",
        "Ideal para running",
      ],
    },
    {
      id: "5",
      name: "Camiseta Premium",
      description: "Camiseta de algodón de alta calidad con diseño exclusivo.",
      price: 29.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "ropa",
      categoryName: "Ropa",
      features: [
        "100% algodón orgánico",
        "Tejido de alta calidad",
        "Diseño exclusivo",
        "Disponible en varios colores",
        "Tallas S a XXL",
      ],
    },
    {
      id: "6",
      name: "Lámpara de Mesa",
      description: "Lámpara moderna con luz ajustable para tu hogar u oficina.",
      price: 49.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "hogar",
      categoryName: "Hogar",
      features: ["Luz LED ajustable", "Control táctil", "Bajo consumo energético", "Diseño moderno", "Material duradero"],
    },
    {
      id: "7",
      name: "Reloj Inteligente",
      description: "Reloj con múltiples funciones para monitorear tu actividad física y recibir notificaciones.",
      price: 199.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "electronica",
      categoryName: "Electrónica",
      features: [
        "Monitor de ritmo cardíaco",
        "GPS integrado",
        "Resistente al agua",
        "Batería de larga duración",
        "Compatible con iOS y Android",
      ],
    },
    {
      id: "8",
      name: "Mochila Viajera",
      description: "Mochila espaciosa y resistente para tus viajes y aventuras.",
      price: 79.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "accesorios",
      categoryName: "Accesorios",
      features: [
        "Material impermeable",
        "Múltiples compartimentos",
        "Acolchado ergonómico",
        "Capacidad de 30L",
        "Bolsillo para laptop",
      ],
    },
  ]
  
  // Datos de categorías
  const categoriesData = [
    {
      id: "electronica",
      name: "Electrónica",
      description: "Dispositivos y gadgets de última generación para mejorar tu vida digital.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "ropa",
      name: "Ropa",
      description: "Prendas de vestir de alta calidad para todos los estilos y ocasiones.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "hogar",
      name: "Hogar",
      description: "Todo lo que necesitas para hacer de tu casa un hogar acogedor y funcional.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "deportes",
      name: "Deportes",
      description: "Equipamiento y ropa deportiva para mantenerte activo y en forma.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "accesorios",
      name: "Accesorios",
      description: "Complementos para realzar tu estilo personal y añadir funcionalidad a tu día a día.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]
  
  // Función para obtener todos los productos o un número limitado
  export async function getProducts(limit) {
    // Simular una llamada a API con un pequeño retraso
    await new Promise((resolve) => setTimeout(resolve, 100))
  
    if (limit) {
      return productsData.slice(0, limit)
    }
  
    return productsData
  }
  
  // Función para obtener un producto por su ID
  export async function getProduct(id) {
    // Simular una llamada a API con un pequeño retraso
    await new Promise((resolve) => setTimeout(resolve, 100))
  
    return productsData.find((product) => product.id === id) || null
  }
  
  // Función para obtener productos relacionados
  export async function getRelatedProducts(id, limit = 4) {
    // Simular una llamada a API con un pequeño retraso
    await new Promise((resolve) => setTimeout(resolve, 100))
  
    const currentProduct = productsData.find((product) => product.id === id)
  
    if (!currentProduct) return []
  
    // Obtener productos de la misma categoría, excluyendo el producto actual
    const related = productsData
      .filter((product) => product.category === currentProduct.category && product.id !== id)
      .slice(0, limit)
  
    // Si no hay suficientes productos de la misma categoría, agregar otros productos
    if (related.length < limit) {
      const otherProducts = productsData
        .filter((product) => product.category !== currentProduct.category && product.id !== id)
        .slice(0, limit - related.length)
  
      return [...related, ...otherProducts]
    }
  
    return related
  }
  
  // Función para obtener todas las categorías
  export async function getCategories() {
    // Simular una llamada a API con un pequeño retraso
    await new Promise((resolve) => setTimeout(resolve, 100))
  
    // Contar productos por categoría
    const categoriesWithCount = categoriesData.map((category) => {
      const productCount = productsData.filter((product) => product.category === category.id).length
      return { ...category, productCount }
    })
  
    return categoriesWithCount
  }
  
  // Función para obtener una categoría por su ID
  export async function getCategoryById(id) {
    // Simular una llamada a API con un pequeño retraso
    await new Promise((resolve) => setTimeout(resolve, 100))
  
    return categoriesData.find((category) => category.id === id) || null
  }
  
  // Función para obtener productos por categoría
  export async function getProductsByCategory(categoryId) {
    // Simular una llamada a API con un pequeño retraso
    await new Promise((resolve) => setTimeout(resolve, 100))
  
    return productsData.filter((product) => product.category === categoryId)
  }