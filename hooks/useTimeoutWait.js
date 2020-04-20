import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

useTimeoutWait.propTypes = {
  delay: PropTypes.number,
};

function useTimeoutWait(props) {
  const delay = props.delay || 1000;
  const [wait, setWait] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWait(false);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  return wait;
};

export default useTimeoutWait;
