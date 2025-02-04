import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div classname="mb-3">
          <input
            type="text"
            classname="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div id="emailHelp" classname="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button type="submit" classname="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
