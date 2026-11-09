// EDITA AQUÍ los productos, precios, imágenes y valores nutricionales.
// Todos los valores nutricionales son HIPOTÉTICOS por porción, no verificados.
window.PRODUCTS = [
['Smoothie Proteico de Fresa y Colágeno','Smoothies',22500,260,31,24,5,'personalizada-producto-0.jpg','Fresa, proteína y colágeno.'],
['Huevos Pochados sobre Pan de Almendra con Aguacate','Brunch',32900,430,22,18,30,'p3_3.png','Huevos pochados, pan de almendra y aguacate.'],
['Brownie Proteico sin Azúcar','Bakery',14500,235,15,17,13,'personalizada-producto-2.jpg','Chocolate intenso, textura suave y proteína.'],
['Smoothie Tropical de Mango y Maracuyá','Smoothies',20500,210,24,31,3,'personalizada-producto-3.jpg','Mango y maracuyá con base proteica.'],
['Smoothie Verde Detox (Espinaca, Piña, Jengibre)','Smoothies',19500,145,4,29,2,'personalizada-producto-4.jpg','Espinaca, piña y jengibre.'],
['Muffin de Zanahoria y Nuez sin Gluten','Bakery',13900,285,9,26,17,'personalizada-producto-5.jpg','Zanahoria, nueces y especias.'],
['Wrap de Pollo Grillado con Hummus y Vegetales','Brunch',34900,470,37,38,19,'personalizada-producto-6.jpg','Pollo, hummus y vegetales frescos.'],
['Iced Matcha Latte (leche de almendra)','Café y matcha',16500,95,3,12,4,'personalizada-producto-7.jpg','Matcha servido frío con leche de almendra.'],
['Latte Clásico de Especialidad','Café y matcha',13500,135,8,12,6,'personalizada-producto-8.jpg','Espresso y leche cremosa.'],
['Bowl de Avena Proteica con Frutos Rojos','Brunch',26900,365,26,45,9,'personalizada-producto-9.jpg','Avena y frutos rojos.'],
['Cold Brew Proteico con Colágeno','Café y matcha',18500,155,25,8,3,'personalizada-producto-10.jpg','Café frío, proteína y colágeno.'],
['Pancakes Fit de Banano y Avena','Brunch',28900,390,23,48,12,'personalizada-producto-11.jpg','Banano, avena y una textura esponjosa.'],
['Matcha Latte Ceremonial','Café y matcha',17500,145,7,15,6,'personalizada-producto-12.jpg','Matcha ceremonial preparado al momento.'],
['Banana Bread Proteico','Bakery',14900,265,14,30,10,'personalizada-producto-13.jpg','Pan de banano con proteína.'],
['Espresso Origen Único','Café y matcha',8900,5,0,1,0,'personalizada-producto-14.jpg','Espresso de café de especialidad.']
].map((p,id)=>({id,name:p[0],category:p[1],price:p[2],kcal:p[3],protein:p[4],carbs:p[5],fat:p[6],image:'assets/'+p[7],description:p[8]}));
