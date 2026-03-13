import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const AddItems = () => {
  const { Fruits, SetFruits, Edit, SetEdit } = useOutletContext();
 const [Fruit,SetFruit] = useState({
          id: "",
    name: "",
    family: "",
    order: "",
    genus: "",
    calories: 1,
    fat: 0,
    sugar: "",
    carbs: "",
    protein: 0
       })
       useEffect(() => {
          if(Edit){
            SetFruit(Edit);
          }
           }, [Edit]);
  
          const handlechange = (e)=>{
          const {name,value} = e.target;
          SetFruit({...Fruit,[name]:value});
          }

          useEffect(()=>{
           localStorage.setItem("Fruits",JSON.stringify(Fruits))
          },[Fruits])
          
          const handlesubmit=(e)=>{
            e.preventDefault()
            if(Edit){
              const editedValues = Fruits.map((Fruits)=>(Fruits.id===Edit.id ? Fruit : Fruits))
              SetFruits(editedValues)
              SetEdit(null)
              SetFruit({
          id: "",
    name: "",
    family: "",
    order: "",
    genus: "",
    calories: 1,
    fat: 0,
    sugar: "",
    carbs: "",
    protein: 0
       })
            }
            else{
           SetFruits([...Fruits,{...Fruit}]);
           SetFruit({
          id: "",
    name: "",
    family: "",
    order: "",
    genus: "",
    calories: 1,
    fat: 0,
    sugar: "",
    carbs: "",
    protein: 0
       })
          }
        }

  return (
    <>
      <div className="form-container">
        <h2>Persimmon Details</h2>

        <form  onSubmit={handlesubmit}>
          <label>ID</label>
          <input name="id" type="number" value={Fruit.id} onChange={handlechange} />

          <label>Fruit Name</label>
          <input name="name" type="text" value={Fruit.name} onChange={handlechange} />

          <label>Family</label>
          <input name="family" type="text" value={Fruit.family} onChange={handlechange}  />

          <label>Order</label>
          <input name="order" type="text" value={Fruit.order} onChange={handlechange}  />
 
          <label>Genus</label>
          <input name = "genus" type="text" value={Fruit.genus} onChange={handlechange} />

          <label>Calories</label>
          <input name="calories" type="number" value={Fruit.calories} onChange={handlechange}  />

          <label>Fat (g)</label>
          <input name="fat" type="number" value={Fruit.fat} onChange={handlechange}  />

          <label>Sugar (g)</label>
          <input name="sugar" type="number" value={Fruit.sugar} onChange={handlechange}  />

          <label>Carbohydrates (g)</label>
          <input name="carbohydrates" type="number" value={Fruit.carbs} onChange={handlechange}  />

          <label>Protein (g)</label>
          <input name="protein" type="number" value={Fruit.protein} onChange={handlechange}  />

          <button onClick={()=>handlesubmit} type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddItems;
