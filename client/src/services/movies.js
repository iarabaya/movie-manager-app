const URL = process.env.URL || "https://ghibliapi.herokuapp.com/films";

//get complete movie catalog
export const getAllMovies = async () =>{
  try{
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  }catch(e){
    console.log(e);
  }
}

//get favorite movies by user


//add movie to favorites by user


//edit movie information by admin