const Agent = require('../models/Agent');

exports.createAgent = async (req, res) => {
  try {
    const agent = new Agent(req.body);
    await agent.save();
    res.status(201).json(agent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAgents = async (req, res) => {
  const agents = await Agent.find();
  res.json(agents);
};
