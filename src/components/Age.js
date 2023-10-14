import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [years, setYears] = useState(null);
  const [showAge, setShowAge] = useState(false); // State to control when to display the age

  const calculateAge = (birthDate) => {
    if (!birthDate) return;

    const currentDate = new Date();
    if (new Date(birthDate) > currentDate) {
      setBirthDate("");
      setYears(null);
      setShowAge(false);
      alert("Invalid Date of Birth");
      return;
    }

    const diffTime = currentDate - new Date(birthDate);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setYears(Math.floor(totalDays / 365.25));
    setShowAge(true); // Show the age when calculated
  };

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 className="mb-4">Age Calculator</h1>
      <form>
        <div className="form-group row">
          <input
            type="date"
            className="form-control col col-md-6" // Adjust the width using col-md-6
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => calculateAge(birthDate)}
        >
          Calculate Age
        </button>
      </form>
      {showAge && (
        <h4 className="mt-4">
          You are {years} years old
        </h4>
      )}
    </div>
  );
}

export default AgeCalculator;
