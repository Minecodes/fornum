module.exports = (func, n) => {
	var num = n - 1;
	for (i = 0; i < num; i++) {
		func();
	}
}
