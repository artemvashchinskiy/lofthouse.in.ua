const mask = (selector) => {
    function setMask() {
        let matrix = '+###############';

        maskList.forEach(item => {
            let code = item.code.replace(/[\s#]/g, ''),
                phone = this.value.replace(/[\s#-)(]/g, '');

            if (phone.includes(code)) {
                console.log(phone, code);
                matrix = item.code;
            }
        });

        let i = 0,
            val = this.value.replace(/\D/g, '');

        this.value = matrix.replace(/(?!\+)./g, function(a) {
            return /[#\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
    }

    function resetValue() {
        if (!this.value) this.value = 'Ваш телефон';
        this.style.color = '#BEBEBE';  // Revert to the default color
        this.style.backgroundColor = 'rgb(255, 255, 255, .2)'; 
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.value = 'Ваш телефон';
        input.addEventListener('input', setMask);
        input.addEventListener('focus', resetValue);
        input.addEventListener('blur', resetValue);
    });

    document.addEventListener('click', function (event) {
        inputs.forEach(input => {
            if (!input.contains(event.target)) {
                if (input.value.trim() === '') {
                    input.value = 'Ваш телефон';
                    input.style.color = '#BEBEBE';  // Revert to the default color
                    input.style.backgroundColor = 'rgb(255, 255, 255, .2)';
                }
            }
        });
    });    
};
