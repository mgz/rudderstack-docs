import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import { Container, Post } from './styles';

export default function Docs({ prev, next, current }) {
  let docsBasePath = '/docs';
  return (
    <Container>
      {prev && current.title !== "Home" && (
        <Post isLeft>
          <Link to={docsBasePath + prev.link}>
            <MdKeyboardArrowLeft className="postNavArrow" />
            <div>
              <p>Prev</p>
              <h3>{prev.title}</h3>
            </div>
          </Link>
        </Post>
      )}
      {next && current.title !== "FAQs" && (
        <Post>
          <Link to={docsBasePath + next.link}>
            <div>
              <p>Next</p>
              <h3>{next.title}</h3>
            </div>
            <MdKeyboardArrowRight className="postNavArrow" />
          </Link>
        </Post>
      )}
    </Container>
  );
}

Docs.propTypes = {
  prev: PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string,
  }),
  next: PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string,
  }),
};

Docs.defaultProps = {
  prev: null,
  next: null,
};
