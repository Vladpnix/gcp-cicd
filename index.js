//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed
//-----------------------------------------------------------------------------

exports.helloWorld = (req, res) => {
  const message="<font color='blue'>–°loudFunction of Denis Astahov!</font><br><b>App Version 1.4</b>";
  res.status(200).send(message);
};
