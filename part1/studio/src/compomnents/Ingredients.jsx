import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    const ingredients = ["64 oz apple juice", "64 oz apple cider", "3 cups sugar", "14 cinnamon sticks, divided", "½ tsp ground nutmeg", "½ tsp ground cinnamon", "750 ml 190 proof Everclear grain alcohol, or the highest proof vodka you can find"];
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
            </ul>
        </div>

    );
}
