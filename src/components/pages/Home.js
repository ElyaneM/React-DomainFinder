import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import AboutUs from "./AboutUs";
import "../../assets/scss/Home.scss";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
      <h1>Use Domain Finder to find unique domains!</h1>
      <p className="pDesc">
        Millions of people are searching for companies, domains, meta tags,
        company names and etc., on Domain finder. Try today! <b>1 000 000 </b>
        data for your search.
      </p>
      <div className="d-flex mt-4" id="resourcesDropDown">
        <Dropdown  onClick={() => {
            navigate("/result");
          }}>
          <Dropdown.Toggle className="">
            Resources
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="">
              Only Domain <input type="checkbox" checked />
            </Dropdown.Item>
            <Dropdown.Item href="">
              Other options <input type="checkbox" checked />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <input
          placeholder="Search something..."
          type="text"
         
        />
      </div>
      <div className="mt-4" id="topSearches">
        <p>Top searches:</p>
        <button className="btn-secondary border-0 text-secondary">
          development
        </button>
        <button className="btn-secondary border-0 text-secondary">
          agile
        </button>
        <button className="btn-secondary border-0 text-secondary">
          design
        </button>
        <button className="btn-secondary border-0 text-secondary">
          finance
        </button>
        <button className="btn-secondary border-0 text-secondary">
          startup
        </button>
        <button className="btn-secondary border-0 text-secondary">
          delivery
        </button>
      </div>
      <AboutUs />
    </div>
  );
};

export default Home;
