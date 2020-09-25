
// eslint-disable-next-line consistent-return
module.exports.setEntityId = async (req, res, next) => {
  const { entityId } = req.query;
  req.entityId = entityId;
  return next();
};
