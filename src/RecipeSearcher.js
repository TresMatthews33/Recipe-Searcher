import React, { Component } from 'react';
import axios from 'axios';

class RecipeSearcher extends Component {

    getRandomRecipe = () => {
        axios({
            method: "GET",
            url:"https://www.themealdb.com/api/json/v1/1/random.php"
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render() {
        return(
            <div>

            </div>
        );
    }
}

export default RecipeSearcher;