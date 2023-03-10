import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const Tags = (props) => {
  let { items, title } = props;
  return (
    <div className="card card-body mt-5 rounded-0 p-4">
      <h4 className="card-title mb-4">{title}</h4>
      <div className="row" style={{gap:"3px",flexDirection:"row",flexWrap:"wrap",justifyContent:"flex-start"}}>
        {items.map((tag, index) => {
          return (
            <button  key={index} className="border-0 rounded mb-2 text-secondary" style={{width:"calc((100% / 3) - 9px)"}}>
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
