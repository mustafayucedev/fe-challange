document.addEventListener("DOMContentLoaded", () =>  {
    let qtyItem = document.querySelectorAll('.qty-item');

    qtyItem.forEach(function (container) {
        let decrementButton = container.querySelector('.decrement');
        let incrementButton = container.querySelector('.increment');
        let inputValue = container.querySelector('input');

        checkDecrementButtonState();

        decrementButton.addEventListener('click', () =>  {
            if (parseInt(inputValue.value) > 0) {
                inputValue.value = parseInt(inputValue.value) - 1;
            }
            checkDecrementButtonState();
        });

        incrementButton.addEventListener('click', () =>  {
            inputValue.value = parseInt(inputValue.value) + 1;
            decrementButton.disabled = false;
        });

        function checkDecrementButtonState() {
            if (parseInt(inputValue.value) === 0) {
                decrementButton.disabled = true;
            } else {
                decrementButton.disabled = false;
            }
        }
    });
});
