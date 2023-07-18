function SubmittedData({formValues}) {
  localStorage.getItem("values",JSON.stringify(formValues))
  let {
    firstname,
    lastname,
    dob,
    email,
    mobileno,
    physicalCard,
    aadhar,
    gender,
    fathername,
    aoc,
    village,
    streetname,
    pincode,
    proofofidentity,
    photo,
    pandate,
  } = formValues;
  return (
    <>
      <p>
        <strong>FIRST NAME :</strong> {firstname}{" "}
      </p>
      <p>
        <strong>LAST NAME :</strong> {lastname}{" "}
      </p>
      <p>
        <strong>EMAIL :</strong> {email}{" "}
      </p>
      <p>
        <strong>DOB :</strong> {dob}{" "}
      </p>
      <p>
        <strong>MOBILE NO :</strong> {mobileno}{" "}
      </p>
      <p>
        <strong>WANT A PHYSICAL CARD? :</strong> {physicalCard}{" "}
      </p>
      <p>
        <strong>AADHARCARD NO :</strong> {aadhar}{" "}
      </p>
      <p>
        <strong>GENDER :</strong> {gender}{" "}
      </p>

      <p>
        <strong>FATHERNAME :</strong> {fathername}{" "}
      </p>
      <p>
        <strong>ADDRESS FOR COMMUNICATION :</strong> {aoc}{" "}
      </p>
      <p>
        <strong>VILLAGENAME :</strong> {village}{" "}
      </p>
      <p>
        <strong>STREETNAME/BUILDING NAME :</strong> {streetname}{" "}
      </p>
      <p>
        <strong>PINCODE :</strong> {pincode}{" "}
      </p>
      <p>
        <strong>PROOF OF IDENTITY :</strong> {proofofidentity}{" "}
      </p>
      <p>
        <strong>DOCUMENT PHOTO :</strong> {photo}{" "}
      </p>
      <p>
        <strong>PANCARD DELIVERY DATE :</strong> {pandate}{" "}
      </p>
    </>
  );
}

export default SubmittedData;
