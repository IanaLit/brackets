module.exports = function check(str, bracketsConfig) {
    let isClose = false;
    if (!(str.length % 2 === 0)) {
        return isClose;
    } else {
        let array = str.split("");
        return checkScope(array);
    }
    function checkScope(array) {
        array.forEach((element, i) => {
            bracketsConfig.forEach((bracket) => {
                if (element === bracket[1] && array[i - 1] === bracket[0]) {
                    array.splice(i - 1, 2);
                    if (array.length === 0) {
                        isClose = true;
                    } else checkScope(array);
                }
            });
        });

        return isClose;
    }
};
