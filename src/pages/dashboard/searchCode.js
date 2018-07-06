import { isEmpty } from '../../utils/AppUtil';

const calculateCode = (lat, long) => {
  if (isEmpty(lat)) return "Can\'t calculate";
  if (isEmpty(long)) return "Can\'t calculate";
  
  return OpenLocationCode.encode(parseFloat(lat), parseFloat(long));
}

export default calculateCode;