import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../components/layout";

const Errors = ({ errors }) => (
  <Layout>
    <GraphQLErrorList errors={errors} />
  </Layout>
);

export default Errors;