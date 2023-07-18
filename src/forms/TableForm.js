import { Link } from "react-router-dom";
import { useState } from "react";

function TableForm() {
  let formData = JSON.parse(localStorage.getItem("values"));

  // const [page, setPage] = useState(1);
  const [search, setSearch] = useState(formData);
  const [sorted, setSorted] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalPages = Math.ceil(search.length / itemsPerPage);
  console.log("totalPages", totalPages);
  const startIndex = (currentPage - 1) * itemsPerPage;
  console.log(startIndex, "startIndex");
  const endIndex = startIndex + itemsPerPage;
  console.log(endIndex, "endIndex");
  const currentItems = search.slice(startIndex, endIndex);

  function sortFname() {
    let sortedData = formData.sort((a, b) =>
      a.firstname > b.firstname ? 1 : -1
    );
    setSorted(...sortedData);
    setCurrentPage(1)
  }


  function sortLname() {
    let sortedData = formData.sort((a, b) =>
      a.lastname > b.lastname ? 1 : -1
    );
    setSorted(...sortedData);
    setCurrentPage(1)
  }

  function sortDob() {
    let sortedData = formData.sort((a, b) => (a.dob > b.dob ? 1 : -1));
    setSorted(...sortedData);
    setCurrentPage(1)
  }

  function sortEmail() {
    let sortedData = formData.sort((a, b) => (a.email > b.email ? 1 : -1));
    setSorted(...sortedData);
    setCurrentPage(1)
  }

  function sortVillage() {
    let sortedData = formData.sort((a, b) => (a.village > b.village ? 1 : -1));
    setSorted(...sortedData);
    setCurrentPage(1)
  }

  function findRecord(e) {
    let searchValue = e.target.value;
    if (searchValue.length > 0) {
      let searchData = search.filter(
        (item) =>
          item.firstname.toLowerCase().includes(searchValue) ||
          item.lastname.toLowerCase().includes(searchValue) ||
          item.email.toLowerCase().includes(searchValue) ||
          item.dob.toLowerCase().includes(searchValue) ||
          item.village.toLowerCase().includes(searchValue)
      );
      setSearch(searchData);
      sortFname()
      sortLname()
      sortEmail()
      sortDob()
      sortVillage()
    } else {
      setSearch(formData);
      sortFname()
      sortLname()
      sortEmail()
      sortDob()
      sortVillage()
    }
  }

  // function pagination(e) {
  //   let pageNumber = e.target.value;
  //   setPage(pageNumber);
  //   let totalPage = Math.ceil(formData.length / pageNumber);
  //   console.log(totalPage, "total pages");
  // }

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    
  };

  const handlePageNumberClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h1>Form Data</h1>
      <input
        type="text"
        name="searchValue"
        placeholder="Search record here"
        onChange={findRecord}
      />
      <br /> <br />
      <table style={{ border: "1px solid" }}>
        <tbody>
          <tr style={{ border: "1px solid" }}>
            <th>id</th>
            <th onClick={sortFname} style={{ cursor: "pointer" }}>
              firstname
            </th>
            <th onClick={sortLname} style={{ cursor: "pointer" }}>
              lastname
            </th>
            <th onClick={sortDob} style={{ cursor: "pointer" }}>
              DOB
            </th>
            <th onClick={sortEmail} style={{ cursor: "pointer" }}>
              {" "}
              email
            </th>
            <th>Mobile No.</th>
            <th>physicalcard</th>
            <th>aadhar</th>
            <th>gender</th>
            <th>fathername</th>
            <th>aoc</th>
            <th style={{ cursor: "pointer" }} onClick={sortVillage}>
              Name of building/village
            </th>
            <th>streetName/areaname</th>
            <th>pincode</th>
            <th>poi</th>
            <th>photo</th>
            <th>pan delievry date</th>
            <th>edit</th>
          </tr>
          {currentItems.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.firstname}</td>
              <td>{data.lastname}</td>
              <td>{data.dob}</td>
              <td>{data.email}</td>
              <td>{data.mobileno}</td>
              <td>{data.physicalCard}</td>
              <td>{data.aadhar}</td>
              <td>{data.gender}</td>
              <td>{data.fathername}</td>
              <td>{data.aoc}</td>
              <td>{data.village}</td>
              <td>{data.streetname}</td>
              <td>{data.pincode}</td>
              <td>{data.proofofidentity}</td>
              <td>{data.photo}</td>
              <td>{data.pandate}</td>
              <td style={{ cursor: "pointer" }}>
                <Link to={`/add/${data.id}`}>edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div>
        <button id="prev" onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            id="currBtn"
            key={index + 1}
            onClick={() => handlePageNumberClick(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
        <button
          id="next"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
        <span>Items per page</span>
      </div>
    </>
  );
}

export default TableForm;
