module.exports = (req, res) => {
	return res.json({
		MY_PASSWORD: process.env.MY_PASSWORD
	});
};

