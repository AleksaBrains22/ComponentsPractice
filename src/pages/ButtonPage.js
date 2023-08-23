import Button from "../components/Button";
import { GoBell, GoBold, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button secondary outline rounded className="mb-5">
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button warning outline rounded className="mb-5">
          <GoDatabase />
          Buy now !
        </Button>
      </div>
      <div>
        <Button danger outline className="mb-5">
          {" "}
          <GoBold />
          See deal!
        </Button>
      </div>
      <div>
        <Button secondary className="mb-5">
          Random
        </Button>
      </div>
      <div>
        <Button success>asd</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
