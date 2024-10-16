import { memo } from "react";
import { Link } from "react-router-dom";
import { FarmerType } from "../../types/types";

FarmerPageDetails.propTypes = {
  farmer: FarmerType,
};

function FarmerPageDetails({ farmer }) {
  const { name, email, website, description } = farmer;

  return (
    <>
      <Link to=".." className="back-link page-title">
        <img src="/back.png" className="back-icon" alt="back icon" />
        Back To Farmers
      </Link>
      <h1 className="farmer-page-title">{name}</h1>
      <div className="farmer-bio">
        <div className="description">{description}</div>
        <div className="page-subtitle mt-20">
          Website:
          <span className="company-details"> {website}</span>
        </div>
        <div className="page-subtitle">
          E-mail:
          <span className="company-details"> {email}</span>
        </div>
      </div>
    </>
  );
}

const MemoizedFarmerPageDetails = memo(FarmerPageDetails);
export default MemoizedFarmerPageDetails;
