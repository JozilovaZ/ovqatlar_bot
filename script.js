const recipes = {
    "Osh": {
        ingredients: [
            "500 g go'sht (qo'y yoki mol go'shti)",
            "2 stakan guruch",
            "3 ta sabzi",
            "2 ta piyoz",
            "100 ml yog'",
            "Tuz, murch, zira"
        ],
        instructions: "1. Go'shtni mayda to'grang va yog'da qovuring.\n2. Piyoz va sabzini qo'shing, qovurishda davom eting.\n3. Guruchni yuvib, qozonga soling, suv qo'shing.\n4. Tuz, murch va zirani qo'shing, 30-40 daqiqa pishiring.",
        image: "https://images.unsplash.com/photo-1512058564366-18578e6e2ed9?auto=webp",
        category: "asosiy"
    },
    "Manti": {
        ingredients: [
            "500 g un",
            "300 g go'sht (qiyma)",
            "1 ta piyoz",
            "Tuz, murch",
            "Suv"
        ],
        instructions: "1. Un, suv va tuzdan xamir qoring.\n2. Qiyma, piyoz, tuz va murchdan ich tayyorlang.\n3. Xamirni yupqa yoying, ichni solib, manti shaklini bering.\n4. Bug'da 30-40 daqiqa pishiring.",
        image: "https://images.unsplash.com/photo-1623241432183-3b6b0ab6b9d4?auto=webp",
        category: "xamir"
    },
    "Sho'rva": {
        ingredients: [
            "400 g go'sht",
            "2 ta kartoshka",
            "1 ta sabzi",
            "1 ta piyoz",
            "Tuz, murch, dafna yaprog'i"
        ],
        instructions: "1. Go'shtni suvda qaynatib, ko'pikni olib tashlang.\n2. Kartoshka, sabzi va piyozni to'g'rab qo'shing.\n3. Tuz, murch va dafna yaprog'ini qo'shing.\n4. 1 soat past olovda pishiring.",
        image: "https://images.unsplash.com/photo-1547592180-2f1a1b3c3d1b?auto=webp",
        category: "shorva"
    },
    "Lag'mon": {
        ingredients: [
            "400 g un",
            "300 g go'sht (qo'y yoki mol)",
            "2 ta sabzi",
            "1 ta piyoz",
            "2 ta pomidor",
            "100 ml yog'",
            "Tuz, murch, paprika"
        ],
        instructions: "1. Un va suvdan xamir qoring, yupqa lag'mon qilib kesing.\n2. Go'shtni to'g'rab, yog'da qovuring.\n3. Sabzi, piyoz va pomidorni qo'shing, qovurishda davom eting.\n4. Lag'monni qaynoq suvda pishiring, so'ng sous bilan aralashtiring.",
        image: "https://images.unsplash.com/photo-1563241527-3a9b8d46f9ed?auto=webp",
        category: "xamir"
    },
    "Somsa": {
        ingredients: [
            "500 g un",
            "300 g go'sht (qiyma)",
            "2 ta piyoz",
            "100 g sariyog'",
            "Tuz, murch, zira"
        ],
        instructions: "1. Un, suv va tuzdan xamir qoring.\n2. Qiyma, piyoz, tuz, murch va ziradan ich tayyorlang.\n3. Xamirni yupqa yoying, ichni solib, somsa shaklini bering.\n4. 180°C tandirda 25-30 daqiqa pishiring.",
        image: "https://images.unsplash.com/photo-1608221666764-dcd36a0804ed?auto=webp",
        category: "xamir"
    },
    "Non kabob": {
        ingredients: [
            "500 g go'sht (qiyma)",
            "2 ta piyoz",
            "2 dona non (qora yoki oq)",
            "Tuz, murch, zira",
            "Yog'"
        ],
        instructions: "1. Qiyma, piyoz, tuz, murch va zirani aralashtiring.\n2. Nonni ingichka bo'laklarga bo'ling.\n3. Qiymani non bo'laklari orasiga soling.\n4. Yog'da yoki tandirda 15-20 daqiqa pishiring.",
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=webp",
        category: "asosiy"
    }
};

const foodList = document.getElementById('foodList');
const recipeDiv = document.getElementById('recipe');
const categoryLinks = document.querySelectorAll('.category');

function displayFoods(category = 'all') {
    foodList.innerHTML = '';
    for (const food in recipes) {
        if (category === 'all' || recipes[food].category === category) {
            const foodCard = document.createElement('div');
            foodCard.className = 'food-card';
            foodCard.innerHTML = `
                <img src="${recipes[food].image}" alt="${food}">
                <h3>${food}</h3>
            `;
            foodCard.addEventListener('click', () => displayRecipe(food));
            foodList.appendChild(foodCard);
        }
    }
}

function displayRecipe(food) {
    const recipe = recipes[food];
    recipeDiv.innerHTML = `
        <h2>${food}</h2>
        <img src="${recipe.image}" alt="${food}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
        <h3>Masalliqlar:</h3>
        <ul>
            ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <h3>Tayyorlash:</h3>
        <p>${recipe.instructions.replace(/\n/g, '<br>')}</p>
    `;
}

categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        categoryLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        const category = link.getAttribute('data-category');
        displayFoods(category);
    });
});

displayFoods();