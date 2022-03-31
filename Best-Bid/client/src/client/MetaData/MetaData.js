import React from 'react';
import Helmet from "react-helmet";


// HELMET -> TO MANAGE CHANGES AT DOCUMENT HEAD

const MetaData = ({ title }) => {
  return (
    <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
    </>
  )
}

export default MetaData