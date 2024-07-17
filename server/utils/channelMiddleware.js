const Channel = require('../models/Channel');

const channelMiddleware = async (req, res, next) => {
    const { id } = req.params;

    try {
        const channel = await Channel.findById(id);

        if (!channel) {
            return res.status(404).json({ message: 'Channel not found' });
        }

        req.channel = channel;
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = channelMiddleware;
