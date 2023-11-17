import React from 'react';
import styles from './Description.module.css';


class RecipeDescription extends React.Component {
    render() {
       return(
        <div> 
        <div>
           <h1>Apple Pie Moonshine!</h1>
           <p>The Apple Pie Moonshine recipe is an incredibly delicious cocktail. It’s always the hit of the party and everyone goes crazy for it because it tastes just like apple pie.

            Plus, you  won’t believe how easy it is to make! Just make sure that you give yourself enough time. This is a great homemade version of Ole Smoky Apple Pie Moonshine but with more flavor.

            This recipe is completely legal to make. It’s not real moonshine, per se. Essentially, it’s flavored 190 proof grain alcohol that tastes like grandma’s apple pie. It’s incredibly delicious and everyone will rave about it. </p>
        </div>
        <RecipeAuthor />
        </div>
       );
    }
 }

function RecipeAuthor(){
    let authorLink = "https://www.itisakeeper.com/7929/apple-pie-moonshine/#recipe";
    let authorPhoto = "https://www.itisakeeper.com/wp-content/uploads/2022/06/IAK-Hitchcock-Headshot-2020-2048x1364.jpg";
    let authorName = "Christina Hitchcock";

    return (
        <>
         <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Author Christina Hitchcock" className={styles.imageUpdates} />
        <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Blog name</a> 
        </div>
        </div>
        </>
    );
}




export default RecipeDescription;