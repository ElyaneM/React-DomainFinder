import Tags from "../elements/Tags";
import { Card } from "react-bootstrap";
import Image from "../../assets/image/Image";
import "../../assets/scss/Deatils.scss"

const Detail = () => {
  return (
    <div className="container">
      <div className="d-flex container details">
        <div className="card-container">
          <Card bordered={true} className="mt-5 card rounded-0">
            <h4 className="name">
              <img src={Image.icon} /> "Adobe"
            </h4>
            <a className="url text-secondary" target={"_blank"} href="">
              https://www.adobe.com
            </a>

            <h5 className="title">
              Adobe: Creative, marketing and document management ...
            </h5>
            <div className="desc">
              Adobe is changing the world through digital experiences. We help
              our customers create, deliver and optimize content and
              applications.
            </div>
          </Card>

          <Card className="mt-5 rounded-0">
            <h5>Domain Registrar</h5>
            <div className="mt-2 text-decoration-underline">Godaddy</div>
          </Card>

          <Card>
            <h4>Who is</h4>
            <div className="d-flex justify-content-between mt-3 border-bottom ">
              <a className="text-success mb-4">Domain Information</a>
              <a>Registrant Contact</a>
              <a>Administrative Contact</a>
              <a>Administrative Contact</a>
            </div>
            <div className="main">
              <div className="d-flex mt-5">
                <p className="param">Domain:</p>
                <div>adobe.com</div>
              </div>
              <div className="d-flex">
                <p className="param">Registrar:</p>
                <div>Nom-iq Ltd. dba COM LAUDE</div>
              </div>
              <div className="d-flex">
                <p className="param">Expires On:</p>
                <div>1986-11-17</div>
              </div>
              <div className="d-flex">
                <p className="param">Registered On:</p>
                <div>2022-05-17</div>
              </div>
              <div className="d-flex">
                <p className="param">Updated On:</p>
                <div>2021-04-17</div>
              </div>
              <div className="d-flex">
                <p className="param">Status:</p>
                <div className="d-flex flex-column">
                  <div>clientUpdateProhibited</div>
                  <div>serverDeleteProhibited</div>
                  <div>serverTransferProhibited</div>
                  <div>serverUpdateProhibited</div>
                </div>
              </div>
              <div className="d-flex mt-3">
                <p className="param">Name Servers:</p>
                <div className="d-flex flex-column">
                  <div>a1-217.akam.net</div>
                  <div>a10-64.akam.net</div>
                  <div>a13-65.akam.net</div>
                  <div>a26-66.akam.net</div>
                  <div>a28-67.akam.net</div>
                  <div>a7-64.akam.net</div>
                  <div>adobe-dns-01.adobe.com</div>
                  <div>adobe-dns-03.adobe.com</div>
                  <div>adobe-dns-04.adobe.com</div>
                  <div>adobe-dns-05.adobe.com</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="tag-container">
          <Tags
            title="Tags"
            items={[
              "adobe",
              "design",
              "creative",
              "designer",
              "photoshop",
              "illustrator",
            ]}
          />
          <Tags
            title="Company sector"
            items={["art", "design", "Photography", "Development", "Artist"]}
          />
          <Tags title="Colors" items={["Red", "Black", "White", "Gray"]} />
        </div>
      </div>
      
      <div>
        <h4>Similar content</h4>
        <div className="d-flex justify-content-between img">
           <img  className="emp" src={Image.emp}/>
           <img className="emp" src={Image.emp}/>
           <img className="emp" src={Image.emp}/>
        </div>
       
      </div>
      
    </div>
  );
};

export default Detail;
