import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { HeroList } from "../components/HeroList";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);



    console.log(q);

    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && heroes.length === 0;
    const { searchText, onInputChange } = useForm({ searchText: q }, 'searchForm');


 
    
    const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${ searchText.trim() }`);
};

    return ( 

        <>
        
        <h1>SearchPage</h1>
        <hr />
        <div className="row">
            <div className="col-5">
                <h4>Search Form</h4>
                <hr />
                <form onSubmit={onSearchSubmit} aria-label="form">
                    <input type="text" placeholder="Buscar Heroe" className="form-control" name="searchText" autoComplete="off" value={searchText} onChange={onInputChange}/>
                    <button className="btn btn-outline-primary mt-1" type="submit">Buscar</button>
                </form>
            </div>
            <div className="col-7">
                <h4>Resultados</h4>
                
                {/* {

                    (q === '')
                    ? <div className="alert alert-primary" style={{display: "none"}}>Buscar un Heroe</div>
                    : (heroes.length === 0) && 
                    <div className="alert alert-danger">No encontramos el Heroe <b>{q}</b></div>

                } */}

                <div className="alert alert-primary animate__animated animate__backInRight" style={{display: showSearch ? '' : "none"}}>Buscar un Heroe</div>
                <div className="alert alert-danger animate__animated animate__backInRight" style={{display: showError ? '' : "none"}}>No encontramos el Heroe <b>{q}</b></div>


                {

                    heroes.map(hero => (
                        <HeroCard key={hero.id} {...hero} />
                    ))

                }
            </div>
        </div>
        </>
    );
}