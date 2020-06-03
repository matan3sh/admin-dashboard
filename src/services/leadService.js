import axios from 'axios';

const baseUrl = 'http://localhost:5000/lead';

export default {
  query,
  queryCallers,
  update,
};

function query() {
  return axios.get(baseUrl).then((res) => res.data);
}

function update(lead) {
  var prm;
  if (lead.id) prm = axios.put(`${baseUrl}/${lead.id}`, lead);
  else prm = axios.post(baseUrl, lead);
  return prm.then((res) => res.data);
}

function queryCallers() {
  return axios
    .get(baseUrl)
    .then((res) => res.data.map((lead) => ({ name: lead.fname, id: lead.id })));
}
