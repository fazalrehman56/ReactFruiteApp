import { useOutletContext } from "react-router-dom";

const Items = ()=>{
   const { Fruits, SetFruits, Edit, SetEdit } = useOutletContext();
  const HandleDelete=(id)=>{
    const NONDeleted = Fruits.filter(deltete => deltete.id!==id)
    SetFruits(NONDeleted);
     localStorage.setItem("Fruits",JSON.stringify(NONDeleted));
  }
  return <>
  <div className="container my-4">
      <h2 className="text-center mb-4">🍎 Fruit Nutrition</h2>
      {Fruits.map((Fruits)=>( <div className="row" id="fruitContainer">
        
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <button onClick={()=>SetEdit(Fruits)} >edit</button>
              <h5 className="card-title text-primary"></h5>

              <p className="card-text"> 
                <strong>family:{Fruits.family}</strong><br />
                <strong>Order: {Fruits.order}</strong> <br />
                <strong>Genus:{Fruits.genus}</strong>
              </p>
              <button onClick={()=> HandleDelete(Fruits.id)} type="button" class="btn btn-danger">Delete</button>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Calories: {Fruits.calories}</li>
                <li className="list-group-item">Fat:{Fruits.fat} </li>
                <li className="list-group-item">Sugar:{Fruits.sugar} </li>
                <li className="list-group-item">Carbs:{Fruits.carbs} </li>
                <li className="list-group-item">Protein:{Fruits.protein}</li>
                <li className="list-group-item">id:{Fruits.id} </li>
              </ul>
            </div>
          </div>
        </div>
          
        

      </div>))}
        
      

     
    </div>
  </>
}

export default Items;