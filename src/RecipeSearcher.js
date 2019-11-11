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

    getRecipeByName = (name) => {
        axios ({
            method:"GET",
            url:"https://www.themealdb.com/api/json/v1/1/search.php",
            params: {
                s: name
            }
        })
        .then(function(response) {
            console.log(response);
        })
        .then(function(error) {
            console.log(error);
        })
    }

    getRecipeByLetter = (letter) => {
        axios ({
            mehtod:"GET",
            url:"https://www.themealdb.com/api/json/v1/1/search.php",
            params: {
                f: letter
            }
        })
        .then(function(response) {
            console.log(response);
        })
        .then(function(error) {
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