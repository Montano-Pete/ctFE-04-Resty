import React from 'react';
import PropTypes from 'prop-types';

const Controls = () => (
  <form onChange={onChange} onSubmit={onSubmit}>
    <input type="text" aria-label="url" name="url" />
    <section>
      <div>
        <label htmlFor="get">GET</label>
      </div>
      <button>Submit</button>
    </section>
    <textarea name="body" aria-label="body"></textarea>
  </form>
);

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Controls;
