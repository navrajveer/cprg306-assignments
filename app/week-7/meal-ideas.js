// "use client"
// import React, { useState, useEffect } from 'react';

// const fetchMealIdeas = async (ingredient) => {
//     try {
//         const response = await fetch(
//             `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
//         );
//         const data = await response.json();
//         return data.meals || [];
//     } catch (error) {
//         console.log('Error fetching meal ideas: ', error);
//         return [];
//     }
// };

// const MealIdeas = ({ ingredient }) => {
//     const [meals, setMeals] = useState([]);

//     useEffect(() => {
//         const loadMealIdeas = async () => {
//             if (ingredient) {
//                 const mealIdeas = await fetchMealIdeas(ingredient);
//                 setMeals(mealIdeas);
//             }
//         };

//         loadMealIdeas();
//     }, [ingredient]);

//     return (
//         <div className="max-w-md mx-auto p-4 bg-purple-100 rounded-lg shadow-md">
//             <h1 className="text-xl font-semibold mb-4">Here are some meal ideas using {ingredient}:</h1>
//             <ul className="list-disc list-inside">
//                 {meals.map((meal) => (
//                     <li key={meal.idMeal} className="mb-2">{meal.strMeal}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default MealIdeas;
"use client";
import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.log('Error fetching meal ideas: ', error);
        return [];
    }
};

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const loadMealIdeas = async () => {
            if (ingredient) {
                const mealIdeas = await fetchMealIdeas(ingredient);
                setMeals(mealIdeas);
            }
        };

        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4 text-center text-gray-700">
                Meal Ideas with {ingredient}
            </h1>
            <ul className="list-disc list-inside text-gray-600">
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="mb-2">
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;
