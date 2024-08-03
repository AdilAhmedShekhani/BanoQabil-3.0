import Button from "./components/Button/button";
// Using AntDesign
import { QRCode } from "antd";
import Login from "./components/Login/login";
function App() {
  return (
    <>
      <div>
        <Button />
        {/* Using Ant Design */}
        {/* <QRCode color="Blue" value={"https://banoqabil.pk/"} /> */}
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12 col-sm-12 col-md-8 col-lg-6">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
