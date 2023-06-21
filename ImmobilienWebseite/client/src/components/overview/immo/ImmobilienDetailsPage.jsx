import React from "react";
import { useParams } from "react-router-dom";
import ImmobilienDetails from "./ImmobilienDetails.jsx";

const ImmobilienDetailsPage = ({ immobilien }) => {
  const { id } = useParams();
  const immobilie = immobilien.find((item) => item.ImmoEigId === parseInt(id));

  if (!immobilie) {
    return <div>Immobilie nicht gefunden.</div>;
  }

  return (
    <div>
      <h2>Immobilieninformationen</h2>
      <ImmobilienDetails immobilie={immobilie} />
    </div>
  );
};

export default ImmobilienDetailsPage;
