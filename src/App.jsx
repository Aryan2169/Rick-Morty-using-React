import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filter from "./components/Filter/Filter";
import Card from "./components/Cards/Card";
import {useState,useEffect} from "react";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [pageNumber,setPageNumber]=useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [fetchdata,setFetchdata]=useState([]);
  const [search,setSearch]=useState("");
  const{info,results}=fetchdata;
  // console.log(results);
  let api=`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
  useEffect(()=>{
    (async function(){
      let data=await fetch(api).then((res)=>res.json());
      setFetchdata(data);
    })();
  },[api]);
  return (
    <>
    <h1 className="text-center fw-bold my-4">Rick & Morty <span className="text-primary">Wiki</span></h1>
        <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
        <div className="container">
          <div className="row">
              <Filter  pageNumber={pageNumber}
                        status={status}
                        updateStatus={updateStatus}
                        updateGender={updateGender}
                        updateSpecies={updateSpecies}
                        setageNumber={setPageNumber}/>
            <div className="col-lg-8 col-12">
              <div className="row">
               <Card results={results}/>
              </div>
            </div>
          </div>
          <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
    </>
  )
}

export default App
