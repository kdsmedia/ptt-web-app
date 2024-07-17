const Channel = require('../models/Channel');
const Message = require('../models/Message');

// Create Channel
exports.createChannel = async (req, res) => {
    try {
        const { name, description } = req.body;
        const channel = new Channel({ name, description });
        await channel.save();
        res.status(201).json({ message: 'Channel created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Channels
exports.getAllChannels = async (req, res) => {
    try {
        const channels = await Channel.find();
        res.status(200).json(channels);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
