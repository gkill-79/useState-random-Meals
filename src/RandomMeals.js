

import React, { useState, useEffect } from 'react'

const RandomMeals = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchMeals = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const data = await response.json()
    setMeals(data.meals)
    setLoading(false)
  }

  useEffect(() => {
    fetchMeals()
  }, [])

  const handleRefresh = () => {
    setLoading(true)
    setMeals([])
    fetchMeals()
  }

  if (loading) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <button onClick={handleRefresh}>C'est le Pastaga...</button>
        {meals.map((meal) => {
        //   const { idMeal, strMeal, strMealThumb, strInstructions } = meal
        const { idMeal, strMeal, strMealThumb } = meal
          return (
            <div key={idMeal}>
              <h2>{strMeal}</h2>
              <img src={strMealThumb} alt={strMeal} />
              {/* <p>{strInstructions}</p> */}
            </div>
          )
        })}
      </div>
    )
  }
}

export default RandomMeals



























