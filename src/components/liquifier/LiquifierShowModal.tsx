import Modal from "../modal/Modal";

interface LiquifierShowModalProps {
  content: string;
}

const LiquifierShowModal = ({ content }: LiquifierShowModalProps) => {
  const paragraphs = content.split("\n");

  return (
    <Modal className={"mx-10"}>
      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Modal>
  );
};

export default LiquifierShowModal;
