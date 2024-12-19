function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const recipeItems = document.querySelectorAll('.recipe-item');

    recipeItems.forEach(item => {
        const title = item.querySelector('.recipe-title').textContent.toLowerCase();
        const ingredients = item.querySelector('.recipe-ingredients').textContent.toLowerCase();
        
        // Check if the search term matches either the recipe title or ingredients
        if (title.includes(searchInput) || ingredients.includes(searchInput)) {
            item.style.display = 'flex'; // Show item
        } else {
            item.style.display = 'none'; // Hide item
        }
    });
}
