import { useState, useEffect } from "react";

function BasicDetails({ moveNext, setMoveNext, formValues, setFormValues }) {
  useEffect(() => {
    setMoveNext(false);
  }, []);
  const [lname, setlName] = useState(false);
  const [fname, setfName] = useState(false);
  const [dob, setDob] = useState(false);
  const [email, setEmail] = useState(false);
  const [mno, setMno] = useState(false);
  // console.log("move next", moveNext);
  return (
    <>
      Lastname{" "}
      <input
        type="text"
        name="lastname"
        autoComplete="off"
        value={formValues.lastname}
        onChange={checkName}
      />
      <br />
      {lname ? (
        <span style={{ color: "red" }}>*plz write proper LastName</span>
      ) : (
        ""
      )}
      <br /> <br />
      Firstname{" "}
      <input
        type="text"
        name="firstname"
        autoComplete="off"
        value={formValues.firstname}
        onChange={checkfName}
      />
      <br />
      {fname ? (
        <span style={{ color: "red" }}>*plz write proper FirstName</span>
      ) : (
        ""
      )}
      <br /> <br />
      DOB
      <input
        type="date"
        name="dob"
        autoComplete="off"
        value={formValues.dob}
        onChange={checkDob}
      />
      <br />
      {dob ? <span style={{ color: "red" }}>*plz enter valid date</span> : ""}
      <br /> <br />
      Email
      <input
        type="email"
        name="email"
        autoComplete="off"
        value={formValues.email}
        onChange={checkEmail}
      />
      <br />
      {email ? (
        <span style={{ color: "red" }}>*plz write proper email</span>
      ) : (
        ""
      )}
      <br /> <br />
      Mobile no
      <input
        type="text"
        name="mobileno"
        autoComplete="off"
        value={formValues.mobileno}
        onChange={checkMno}
      />
      <br />
      {mno ? (
        <span style={{ color: "red" }}>*plz write proper mobile no</span>
      ) : (
        ""
      )}
      <br /> <br /> <br />
    </>
  );

  function checkName(e) {
    let lname = e.target.value;
    let nameRegex = /^[a-z A-Z]+$/;
    let oldData = { ...formValues };
    oldData.lastname = lname;

    setFormValues(oldData);
    if (!nameRegex.test(lname)) {
      setlName(true);
      setMoveNext(false);
    } else {
      setlName(false);
      // setMoveNext(true)
    }
  }

  function checkfName(e) {
    let fname = e.target.value;
    let nameRegex = /^[a-z A-Z]+$/;
    let oldData = { ...formValues };
    oldData.firstname = fname;
    setFormValues(oldData);

    if (!nameRegex.test(fname)) {
      setfName(true);
      setMoveNext(false);
    } else {
      setfName(false);
      // setMoveNext(true);
    }
  }

  function checkDob(e) {
    let dob = e.target.value;
    // console.log(dob);
    let date = new Date();

    let oldData = { ...formValues };
    oldData.dob = dob;

    setFormValues(oldData);

    let selected_date = dob.split("-");
    let today_date = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (
      (selected_date[2] <= today_date && selected_date[1] > month && selected_date[0]>=year) ||
      (selected_date[2] >= today_date && selected_date[1] >= month && selected_date[0]>=year)
    ) {
      setDob(true);
      setMoveNext(false);
    } else {
      setDob(false);
      // setMoveNext(true);
    }
  }

  function checkEmail(e) {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let email = e.target.value;

    let oldData = { ...formValues };
    oldData.email = email;

    setFormValues(oldData);

    if (!emailRegex.test(email)) {
      setEmail(true);
      setMoveNext(false);
    } else if (email === "") {
      setEmail(true);
      setMoveNext(false);
    } else {
      setEmail(false);
    }
  }

  function checkMno(e) {
    let mno = e.target.value;
    const phone_regex =
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    let oldData = { ...formValues };
    oldData.mobileno = mno;

    setFormValues(oldData);

    if (!phone_regex.test(mno) || mno.length !== 10) {
      setMno(true);
      setMoveNext(false);
    } else {
      setMno(false);
      // setMoveNext(true)
    }
  }
}

export default BasicDetails;
