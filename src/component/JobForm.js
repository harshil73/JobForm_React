import React, { useEffect, useState } from "react";

import BasicDetails from "../forms/BasicDetails";
import Address from "../forms/Address";
import DocumentDetails from "../forms/DocumentDetails";
import PersonalDetails from "../forms/PersonalDetails";
import SubmittedData from "../forms/SubmittedData";
import { useParams, useNavigate } from "react-router-dom";

function JobForm() {
  const [page, setPage] = useState(0);
  const FormTitle = [
    "Basic Details",
    "Personal Details",
    "Address",
    "Document Details",
  ];

  const [moveNext, setMoveNext] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    lastname: "",
    firstname: "",
    dob: "",
    email: "",
    mobileno: "",
    physicalCard: "", 
    aadhar: "",
    gender: "",
    fathername: "",
    aoc: "",
    village: "",
    streetname: "",
    pincode: "",
    proofofidentity: "",
    photo: "",
    pandate: "",
  });

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <BasicDetails
          moveNext={moveNext}
          setMoveNext={setMoveNext}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    } else if (page === 1) {
      return (
        <PersonalDetails
          moveNext={moveNext}
          setMoveNext={setMoveNext}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    } else if (page === 2) {
      return (
        <Address
          moveNext={moveNext}
          setMoveNext={setMoveNext}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    } else if (page === 3) {
      return (
        <DocumentDetails
          moveNext={moveNext}
          setMoveNext={setMoveNext}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    } else {
      return (
        <SubmittedData formValues={formValues} setFormValues={setFormValues} />
      );
    }
  };

  function validateForm(e) {
    e.preventDefault();
    // console.log(e.target);
    // localStorage.setItem("values",JSON.stringify(formValues))
    // console.log(e);
    let formData = e.target;
    let flag = 0;
    for (let i = 0; i < formData.length - 1; i++) {
      console.log(formData[i].value);
      flag = 0;
      if (formData[i].value === "") {
        flag = 1;
        break;
      }
    }

    if (flag === 1) {
      alert("*Plz fill all the fields");
    } else {
      setMoveNext(true);
    }

    // console.log("validate function called!");

    if (page === 3) {
      // if (localStorage.getItem("values")) {
      //   const getdata = JSON.parse(localStorage.getItem("values"));
      //   console.log("retrieve data", getdata);
      //   getdata.push(formValues);
      //   localStorage.setItem("values", JSON.stringify(getdata));
      // } else {
      //   localStorage.setItem("values", JSON.stringify([formValues]));
      // }

      if (localStorage.getItem("values")) {
        const retrivedata = JSON.parse(localStorage.getItem("values")) || [];
        // console.log("id found", id);
        if (id) {
          for (const e in retrivedata) {
            if (parseInt(retrivedata[e].id) === parseInt(id)) {
              formValues["id"] = id;
              retrivedata[e] = formValues;
              // console.log(retrivedata, "retrive data");
            }
          }
          // console.log(retrivedata, "data");
          // alert("update successfully");
        } else {
          const previd = retrivedata[retrivedata.length - 1].id;
          formValues["id"] = parseInt(previd) + 1;
          retrivedata.push(formValues);
          // alert("insert successfully");
        }
        localStorage.setItem("values", JSON.stringify(retrivedata));
      } else {
        formValues["id"] = 1;
        localStorage.setItem("values", JSON.stringify([formValues]));
      }
      navigate("/tabledata");
    }
  }

  useEffect(() => {
    if (moveNext) {
      setPage((currentPage) => currentPage + 1);
    }
  }, [moveNext]);

  const retrivedata = JSON.parse(localStorage.getItem("values"));
  useEffect(() => {
    for (const e in retrivedata) {
      if (parseInt(retrivedata[e].id) === parseInt(id)) {
        setFormValues(retrivedata[e]);
        // console.log(retrivedata, "retrieesfsd");
        break;
      }
    }
  }, []);

  // console.log(page,"current page")

  return (
    <>
      <br /> <br />
      <form onSubmit={validateForm}>
        <h1>PAN Update Form</h1>
        <h2>{FormTitle[page]}</h2>
        {pageDisplay()} <br /> <br />
        <div>
          {page !== 0 && page <= 3 ? (
            <input
              type="button"
              value="Prev"
              id="prevButton"
              onClick={(e) => {
                setPage((currentPage) => currentPage - 1);
              }}
            />
          ) : null}

          {page < 3 ? (
            <input type="submit" value="Next" id="nextButton" />
          ) : page === 3 ? (
            <input type="submit" value="Submit" />
          ) : null}
        </div>
      </form>
      <div></div>
      <br /> <br />
      {/* <Link to='/home'>Go to home</Link> */}
    </>
  );
}

export default JobForm;
