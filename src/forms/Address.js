import { useState, useEffect } from "react";

function Address({ moveNext, setMoveNext, formValues, setFormValues }) {
  const [pin, setPin] = useState(false);
  const [street, setStreet] = useState(false);

  useEffect(() => {
    setMoveNext(false);
  }, []);
  return (
    <>
      address for communication? residence
      <input
        type="radio"
        name="aoc"
        value="residence"
        checked={formValues.aoc === "residence" ? true : false}
        onClick={() => {
          setFormValues({ ...formValues, aoc: "residence" });
        }}
      />
      office
      <input
        type="radio"
        name="aoc"
        checked={formValues.aoc === "office" ? true : false}
        onClick={() => {
          setFormValues({ ...formValues, aoc: "office" });
        }}
      />
      <br /> <br />
      name of building/village{" "}
      <input
        type="text"
        autoComplete="off"
        value={formValues.village}
        name="nameofbuilding"
        onChange={checkVillage}
      />
      <br /> <br />
      street/area name
      <input
        type="text"
        name="streetname"
        autoComplete="off"
        onChange={checkStreet}
        value={formValues.streetname}
      />  <br />  {street ? (
        <span style={{ color: "red" }}>*plz enter proper address</span>
      ) : (
        ""
      )} <br />
      {/* <button type="button">
        Add More
      </button> */}
      pincode
      <input
        type="text"
        name="pincode"
        onChange={checkPincode}
        value={formValues.pincode}
      />
      <br />
      {pin ? (
        <span style={{ color: "red" }}>*plz enter valid pincode</span>
      ) : (
        ""
      )}
      <br />
    </>
  );

  // function addMore() {
  //   let addDiv = document.getElementById("add");
  //   addDiv.innerHTML = ` more precise location <input type="text"  name="streetname"/>`;
  // }

  function checkVillage(e) {
    let villageName = e.target.value;

    let oldData = { ...formValues };
    oldData.village = villageName;

    setFormValues(oldData);
  }

  function checkStreet(e) {
    let streetName = e.target.value;

    let oldData = { ...formValues };
    oldData.streetname = streetName;

    setFormValues(oldData);

    if (
      streetName.includes("@") ||
      streetName.includes("#") ||
      streetName.includes("$") ||
      streetName.includes("&")
    ) {
      setStreet(true)
      setMoveNext(false)
    }
    else{
      setStreet(false)
    }
  }

  function checkPincode(e) {
    let pin = e.target.value;
    let oldData = { ...formValues };
    oldData.pincode = pin;

    setFormValues(oldData);

    let nameRegex = /^[a-z A-Z]+$/

    if (pin.length !== 6 || (nameRegex.test(pin))) {
      setPin(true);
      setMoveNext(false);
    } else if (pin == "") {
      setPin(true);
      setMoveNext(false);
    } else {
      setPin(false);
      // setMoveNext(true)
    }
  }
}

export default Address;
