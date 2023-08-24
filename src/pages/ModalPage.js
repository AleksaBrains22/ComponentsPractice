import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        {" "}
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        {" "}
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus nec arcu pellentesque condimentum. Duis
        sit amet gravida tortor, nec porttitor libero. Duis vel cursus quam. Phasellus a metus venenatis, hendrerit
        lacus vel, rhoncus urna. Cras ipsum tortor, auctor sit amet venenatis nec, ullamcorper vel quam. Aliquam feugiat
        risus eu volutpat dignissim. Phasellus quis ante ut elit pretium congue. Praesent vel tempus turpis.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus nec arcu pellentesque condimentum. Duis
        sit amet gravida tortor, nec porttitor libero. Duis vel cursus quam. Phasellus a metus venenatis, hendrerit
        lacus vel, rhoncus urna. Cras ipsum tortor, auctor sit amet venenatis nec, ullamcorper vel quam. Aliquam feugiat
        risus eu volutpat dignissim. Phasellus quis ante ut elit pretium congue. Praesent vel tempus turpis.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus nec arcu pellentesque condimentum. Duis
        sit amet gravida tortor, nec porttitor libero. Duis vel cursus quam. Phasellus a metus venenatis, hendrerit
        lacus vel, rhoncus urna. Cras ipsum tortor, auctor sit amet venenatis nec, ullamcorper vel quam. Aliquam feugiat
        risus eu volutpat dignissim. Phasellus quis ante ut elit pretium congue. Praesent vel tempus turpis.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus nec arcu pellentesque condimentum. Duis
        sit amet gravida tortor, nec porttitor libero. Duis vel cursus quam. Phasellus a metus venenatis, hendrerit
        lacus vel, rhoncus urna. Cras ipsum tortor, auctor sit amet venenatis nec, ullamcorper vel quam. Aliquam feugiat
        risus eu volutpat dignissim. Phasellus quis ante ut elit pretium congue. Praesent vel tempus turpis.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus nec arcu pellentesque condimentum. Duis
        sit amet gravida tortor, nec porttitor libero. Duis vel cursus quam. Phasellus a metus venenatis, hendrerit
        lacus vel, rhoncus urna. Cras ipsum tortor, auctor sit amet venenatis nec, ullamcorper vel quam. Aliquam feugiat
        risus eu volutpat dignissim. Phasellus quis ante ut elit pretium congue. Praesent vel tempus turpis.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus nec arcu pellentesque condimentum. Duis
        sit amet gravida tortor, nec porttitor libero. Duis vel cursus quam. Phasellus a metus venenatis, hendrerit
        lacus vel, rhoncus urna. Cras ipsum tortor, auctor sit amet venenatis nec, ullamcorper vel quam. Aliquam feugiat
        risus eu volutpat dignissim. Phasellus quis ante ut elit pretium congue. Praesent vel tempus turpis.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus nec arcu pellentesque condimentum. Duis
        sit amet gravida tortor, nec porttitor libero. Duis vel cursus quam. Phasellus a metus venenatis, hendrerit
        lacus vel, rhoncus urna. Cras ipsum tortor, auctor sit amet venenatis nec, ullamcorper vel quam. Aliquam feugiat
        risus eu volutpat dignissim. Phasellus quis ante ut elit pretium congue. Praesent vel tempus turpis.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus nec arcu pellentesque condimentum. Duis
        sit amet gravida tortor, nec porttitor libero. Duis vel cursus quam. Phasellus a metus venenatis, hendrerit
        lacus vel, rhoncus urna. Cras ipsum tortor, auctor sit amet venenatis nec, ullamcorper vel quam. Aliquam feugiat
        risus eu volutpat dignissim. Phasellus quis ante ut elit pretium congue. Praesent vel tempus turpis.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus nec arcu pellentesque condimentum. Duis
        sit amet gravida tortor, nec porttitor libero. Duis vel cursus quam. Phasellus a metus venenatis, hendrerit
        lacus vel, rhoncus urna. Cras ipsum tortor, auctor sit amet venenatis nec, ullamcorper vel quam. Aliquam feugiat
        risus eu volutpat dignissim. Phasellus quis ante ut elit pretium congue. Praesent vel tempus turpis.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus nec arcu pellentesque condimentum. Duis
        sit amet gravida tortor, nec porttitor libero. Duis vel cursus quam. Phasellus a metus venenatis, hendrerit
        lacus vel, rhoncus urna. Cras ipsum tortor, auctor sit amet venenatis nec, ullamcorper vel quam. Aliquam feugiat
        risus eu volutpat dignissim. Phasellus quis ante ut elit pretium congue. Praesent vel tempus turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus nec arcu pellentesque condimentum. Duis
        sit amet gravida tortor, nec porttitor libero. Duis vel cursus quam. Phasellus a metus venenatis, hendrerit
        lacus vel, rhoncus urna. Cras ipsum tortor, auctor sit amet venenatis nec, ullamcorper vel quam. Aliquam feugiat
        risus eu volutpat dignissim. Phasellus quis ante ut elit pretium congue. Praesent vel tempus turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus nec arcu pellentesque condimentum. Duis
        sit amet gravida tortor, nec porttitor libero. Duis vel cursus quam. Phasellus a metus venenatis, hendrerit
        lacus vel, rhoncus urna. Cras ipsum tortor, auctor sit amet venenatis nec, ullamcorper vel quam. Aliquam feugiat
        risus eu volutpat dignissim. Phasellus quis ante ut elit pretium congue. Praesent vel tempus turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lectus nec arcu pellentesque condimentum. Duis
        sit amet gravida tortor, nec porttitor libero. Duis vel cursus quam. Phasellus a metus venenatis, hendrerit
        lacus vel, rhoncus urna. Cras ipsum tortor, auctor sit amet venenatis nec, ullamcorper vel quam. Aliquam feugiat
        risus eu volutpat dignissim. Phasellus quis ante ut elit pretium congue. Praesent vel tempus turpis.
      </p>
    </div>
  );
}

export default ModalPage;
