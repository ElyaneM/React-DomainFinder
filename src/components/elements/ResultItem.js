import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "../../assets/image/Image";
import "../../assets/scss/ResultList.scss";

const ResultItem = (props) => {
  let { name, title, description, url, tags, id } = props;

  return (
    <>     
      <Link to={`/result/${id}`}>
        <Card bordered={true}>          
          <h4 className="name">
            <img src={Image.icon} /> {name}
          </h4>
          <a className="url" target={"_blank"} href=""></a>
          {url}
          <h5 className="title">{title}</h5>
          <div className="desc">{description}</div>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}> {tag}</li>
            ))}
          </ul>
        </Card>
      </Link>
    </>
  );
};

export default ResultItem;
