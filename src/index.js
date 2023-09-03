const htmlEscape = string =>
                [...string]
                    .map(char => {
                        const code = char.codePointAt(0);
                        return code > 127 ? `&#${code};` : char;
                    })
                    .join("");

            const userInput = document.querySelector('#source');
            const targe = document.querySelector('#target');
            const targetWrapper = targe.parentElement;
            const copy = document.querySelector('#copy');
            const reset = document.querySelector('#reset');

            userInput.addEventListener('click', function () {
                userInput.select();
                event.stopPropagation();
            });
            targe.addEventListener('click', function () {
                targe.select();
                event.stopPropagation();
            });
            userInput.addEventListener('change', function (e) {
                if (targetWrapper.style.display === 'none') { targetWrapper.style.display = 'block'; }
                if (reset.style.display === 'none') { reset.style.display = 'inline-block'; }
                targe.value = htmlEscape(userInput.value) + "\n";
                event.stopPropagation();
            });
            copy.addEventListener('click', function () {
                navigator.clipboard.writeText(targe.value);
                event.stopPropagation();
            });
            reset.addEventListener('click', function () {
                userInput.value = '';
                targe.value = '';
                if (targetWrapper.style.display === 'block') { targetWrapper.style.display = 'none'; }
                if (reset.style.display === 'inline-block') { reset.style.display = 'none'; }
                event.stopPropagation();
            });