import Filter from "../elements/Filter";
import ResultList from "../elements/ResultList";

const Result = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12"></div>
        <div className="col-lg-4 col-12">
          <Filter />
        </div>
        <div className="col-lg-8 col-12">
          <ResultList />
        </div>
      </div>
    </div>
  );
};

export default Result;
