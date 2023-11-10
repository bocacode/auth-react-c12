export default function RecipeForm({ token, setRecipes }) {

  const submitRecipe = (event) => {
    event.preventDefault()
    const { name, recipe, ingredients } = event.target
    const ingredientsArray = ingredients.value.split(', ')
    fetch('https://auth-api-c12.web.app/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        name: name.value,
        recipe: recipe.value,
        ingredients: ingredientsArray,
      }),
    })
      .then(res => res.json())
      .then(setRecipes)
      .catch(alert)
  }

  return (
    <section>
      <form onSubmit={submitRecipe}>
        <h2>Add Recipe</h2>
        <label htmlFor="name">
          Name:
          <input type="name" name="name" />
        </label>
        <label htmlFor="ingredients">
          Ingredients:
          <input type="text" name="ingredients" />
        </label>
        <label htmlFor="recipe">
          Recipe:
          <input type="text" name="recipe" />
        </label>
        <button type="submit">Add</button>
      </form>
    </section>
  )
}