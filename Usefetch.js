function fetchData(){
  const response = fetch("https://dummyjson.com/recipes");
  response.then((data) => {
    
    data.json().then((res) => {
      let output = `${res.recipes[0].id + " " + res.recipes[0].name + " " + res.recipes[0].ingredients}`;
      res.recipes.map(dat => {
        <table>
          <h2>Recipes</h2>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Ingredients</th>
          </tr>
          <tr>
            <td>`${dat.id}`</td>
            <td></td>
            <td></td>
          </tr>
          
        </table>
        console.log(dat)
      });
      id1.innerHTML=(res.recipes[0].id);
      id2.innerHTML=(res.recipes[1].id);
      name1.innerHTML=(res.recipes[0].name);
      name2.innerHTML=(res.recipes[1].name);
      ingredients1.innerHTML=(res.recipes[0].ingredients[0]);
      ingredients2.innerHTML=(res.recipes[1].ingredients[0]);
      console.log(res.recipes[0]);
    })
  })
  .catch(error => console.log(error))
  .finally(() => console.log("Hi, finally closed alll the resources"))
}
