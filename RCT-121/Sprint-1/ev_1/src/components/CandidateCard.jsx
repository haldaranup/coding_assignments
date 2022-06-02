import styles from "./CandidateCard.module.css";

function CandidateCard({name,img, title, salary, company}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img src={img} alt="logo" width="100px" height="100px" />
      <div>
        <div>Name: {name}</div>
        <div>{title} & {company}</div>
      </div>
      <div>${salary}</div>
    </div>
  );
}

export default CandidateCard;
