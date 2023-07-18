import { useState, useEffect } from "react";

function DocumentDetails({ moveNext, setMoveNext, formValues, setFormValues }) {
  const [ddate, setddate] = useState(false);
  const [selectedFile, setSelectedFile] = useState(false);
  useEffect(() => {
    setMoveNext(false);
  }, []);
  return (
    <>
      <br />
      proof of identity
      <select name="proofOfIdentity" onChange={checkpoi}>
        <option value="voterid">voterid</option>
        <option value="aadharcard">aadharcard</option>
        <option value="pancard">pancard</option>
        <option value="driving licence">Driving Licence</option>
      </select>
      <br /> <br />
      upload photo
      <input type="file" name="photo" id="uploadPhoto"  onChange={checkPhoto}/> <br />
      {selectedFile ? (
        <span style={{ color: "red" }}>*plz upload jpg or png file which is less than 4 mb</span>
      ) : (
        ""
      )}

       <br />
      pancard deliver date
      <input
        type="date"
        name="panDeliverDate"
        onChange={checkPanDeliveryDate}
        value={formValues.pandate}
      />
      {ddate ? (
        <span style={{ color: "red" }}>*please select proper date</span>
      ) : (
        ""
      )}
      <br /> <br />
      <input type="checkbox" name="allAccepted"  required="required"/> I Accept All terms &
      conditions
    </>
  );

  function checkpoi(e) {
    let proofOfIdentity = e.target.value;
    let oldData = { ...formValues };
    oldData.proofofidentity = proofOfIdentity;
    setFormValues(oldData);
  }

  function checkPanDeliveryDate(e) {
    let pan = e.target.value;
    console.log(pan);

    let oldData = { ...formValues };
    oldData.pandate = pan;
    setFormValues(oldData);

    let date = new Date();

    let selected_date = pan.split("-");
    let today_date = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth()+1;

    if (
      (selected_date[2] <= today_date && selected_date[1] <= month && selected_date[0] <= year) ||
      (selected_date[2] <= today_date && selected_date[1] > month && selected_date[0] < year)
    ) {
      setddate(true);
      setMoveNext(false);
    } else {
      setddate(false);
      // setMoveNext(true)
    }
  }

  function checkPhoto(e) {
    let photo = e.target.value;
    let photoType = photo.slice(-3)
    // console.log(photoType);


  //    let photoSize = document.getElementById('uploadPhoto')
  //    var psize = parseFloat(photoSize.files[0].size / (1024 * 1024)).toFixed(2); 
  //    console.log(psize)
  //    if(psize > 2) {
  //     alert('Please select image size less than 2 MB');
  // }

  
    const MIN_FILE_SIZE = 1024 // 1MB
    const MAX_FILE_SIZE = 3072 // 5MB
    const fileSizeKiloBytes = photo.size / 1024

    console.log(fileSizeKiloBytes,"photo size");
    let oldData = { ...formValues };
    oldData.photo = photo;
    setFormValues(oldData);

       if(fileSizeKiloBytes < MIN_FILE_SIZE || fileSizeKiloBytes > MAX_FILE_SIZE || ((photoType!=='png') && (photoType!=='jpg')) ){
         setSelectedFile(true)
         setMoveNext(false);
        }
        else{
          setSelectedFile(false)
        }
    
    //   if (photo !== ".png" || photo !==".jpg" ) {
    //   alert("File does not support. You must use .png or .jpg ");
    //  }
  }
}

export default DocumentDetails;
