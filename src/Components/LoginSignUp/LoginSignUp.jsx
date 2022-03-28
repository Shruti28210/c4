import React from 'react'
import axios from 'axios'



export const LoginSignUp = () => {
  const inisial_state ={
       name : "",
       password:"",
       location:"",
       technology:"technology",
       food:"food",
       movies:"movies",
       culture:"culture",
       art:"art",
       drama:"drama",
       image:"",
       subscribed:"",
  }
  const [userdata,setuserdata] = React.useState(inisial_state);

  const {name,password,location,technology,food,movies,culture,art,drama,image,} = userdata


  console.log(userdata)
  
  const handle_change = (e) =>{
     let {name,value,type,checked,} = e.target
     if(type == "checkbox"){
       value = checked
     }
     setuserdata((prev) => ({
       ...prev,[name] : value
     }))
  }
  
  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => { }}>
        <h1>SignUp</h1>
        <label>name</label>
        <input type="text" className="name" name ="name" value={name} onChange={handle_change}required/>
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          name ="password"
          value={password}
          onChange={handle_change}
          required
        />
        <br />
        <select name="location" value={location} className="location" onChange={handle_change}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          name="technology"
          value={technology}
          onChange={handle_change}
        />
        <br />
        <label>food</label>
        <input type="checkbox" 
        className="food"
        name="food"
        value={food} 
        onChange={handle_change} />
        <br />
        <label>movies</label>
        <input type="checkbox"
        className="movies" 
        name="movies"
        value={movies}
        onChange={handle_change} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" 
        name="culture"
        value={culture}
        onChange={handle_change} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art"
        name="art"
        value={art} onChange={handle_change} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama"
        name="drama"
        value={drama} 
        onChange={handle_change} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          name="image"
          value={image}
          onChange={handle_change}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={(e) => { }}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => { }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => { }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
