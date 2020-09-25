
// eslint-disable-next-line consistent-return
module.exports.checkEntityId = async (req, res, next) => {
  try {
    const { entityId } = req.query;
    if (!entityId) {
      throw { ok: false, message: 'Please send valid entity id' };
    }
    return next();
  } catch (error) {
    res.send({ code: 'error', message: error.message }).status(400);
  }
};
