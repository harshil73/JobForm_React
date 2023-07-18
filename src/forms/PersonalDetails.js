import { useState,useEffect } from "react";

function PersonalDetails({ moveNext, setMoveNext, formValues, setFormValues  }) {
  const [aadhar, setAadhar] = useState(false);
  const [fathername, setFathername] = useState(false);

  useEffect(() => {
    setMoveNext(false);
  }, []);
  
  return (
      <>
        want a physical card? YES
        <input type="radio" name="pancard" value="yes" checked={formValues.physicalCard==="yes"? true:false} onClick={()=>{
          setFormValues({...formValues,physicalCard: "yes" })
        }} />
        NO
        <input type="radio" name="pancard" value="no" checked={formValues.physicalCard==="no"? true:false} onClick={()=>{
          setFormValues({...formValues,physicalCard: "no" })
        }} />
        <br /> <br />
        aadharcard no <input type="text" name="aadhar" value={formValues.aadhar} onChange={checkAadhar} /> <br />
        {aadhar ? (
          <span style={{ color: "red" }}>*plz enter proper aadhar number</span>
        ) : (
          ""
        )}
        <br /> <br />
        GENDER: MALE <input type="radio" name="gender" value="male"  checked={formValues.gender==="male"? true:false} onClick={()=>{
          setFormValues({...formValues,gender: "male" })
        }} />
        FEMALE <input type="radio" name="gender" value="female" checked={formValues.gender==="female"? true:false} onClick={()=>{
          setFormValues({...formValues,gender: "female" })
        }}/>
        OTHER <input type="radio" name="gender" value="other" checked={formValues.gender==="other"? true:false} onClick={()=>{
          setFormValues({...formValues,gender: "other" })
        }}/>
        <br /> <br />
        father fullname
        <input type="text" autoComplete="off" name="fathername" value={formValues.fathername} onChange={checkFathername} />
        {fathername ? (
          <span style={{ color: "red" }}>*plz enter proper name</span>
        ) : (
          ""
        )}
      </>
  );

  function checkAadhar(e) {
    let aadharvalue = e.target.value;
    // console.log(aadharvalue);
    let nameRegex = /^[a-z A-Z]+$/

    let oldData = { ...formValues };
    oldData.aadhar = aadharvalue;

    setFormValues(oldData);

    if(aadharvalue.length<12 || aadharvalue.length>12 || (nameRegex.test(aadharvalue))){  
      setAadhar(true)
      setMoveNext(false);
    }
    else{
      setAadhar(false)
      // setMoveNext(true)
    }

  }

  function checkFathername(e) {
    let father_name = e.target.value;
    let nameRegex = /^[a-z A-Z]+$/
    let oldData = { ...formValues };
    oldData.fathername = father_name;

    setFormValues(oldData);

      if(!nameRegex.test(father_name)){
      setFathername(true);
      setMoveNext(false);
    } else {
      setFathername(false);
    }
  }
}

export default PersonalDetails;
