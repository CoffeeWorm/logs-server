const initResponse = { code: 200, data: {}, msg: 'success' };

const respsonse = ({ code = 200, data, msg = 'seccess' } = initResponse) => {
  if (code !== 200 && msg === 'success') {
    // eslint-disable-next-line no-param-reassign
    msg = 'error';
  }
  return { code, data, msg };
};

module.exports = respsonse;
