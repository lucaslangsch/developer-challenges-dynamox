const { sensorService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatus.util.js');

const registerSensor = async (req, res) => {
  const { status, data } = await sensorService.registerSensor(req.body);
  return res.status(mapStatusHTTP(status)).json(data);
};

const showSensor = async (req, res) => {
  const { status, data } = await sensorService.showSensor();
  return res.status(mapStatusHTTP(status)).json(data);
}

const deleteSensor = async (req, res) => {
  const { status, data } = await sensorService.deleteSensor(req.params.id);
  return res.status(mapStatusHTTP(status)).json(data);
}

module.exports = {
  registerSensor,
  showSensor,
  deleteSensor
};