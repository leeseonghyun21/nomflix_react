import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = () => {};

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.aray,
  searchTerm: PropTypes.string,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;
