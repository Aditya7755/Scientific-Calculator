document.addEventListener('DOMContentLoaded', () => {
    const screen = document.querySelector('#screen');
    const btn = document.querySelectorAll('.btn');

    // For getting the value of btn, using for...of loop
    for (let item of btn) {
        item.addEventListener('click', (e) => {
            let btntext = e.target.innerText;

            if (btntext === '×') {
                btntext = '*';
            } else if (btntext === '÷') {
                btntext = '/';
            }

            if (!(btntext === '.' && screen.value.includes('.'))) {
                screen.value += btntext;
            }
        });
    }
});

function clearScreen() {
    const screen = document.querySelector('#screen');
    screen.value = '';
}

function sin() {
    const screen = document.querySelector('#screen');
    screen.value = Math.sin(Number(screen.value));
}

function cos() {
    const screen = document.querySelector('#screen');
    screen.value = Math.cos(Number(screen.value));
}

function tan() {
    const screen = document.querySelector('#screen');
    screen.value = Math.tan(Number(screen.value));
}

function pow() {
    const screen = document.querySelector('#screen');
    const values = screen.value.split('^');
    if (values.length === 2) {
        screen.value = Math.pow(Number(values[0]), Number(values[1]));
    } else {
        screen.value += '^'; 
    }
}

function sqrt() {
    const screen = document.querySelector('#screen');
    screen.value = Math.sqrt(Number(screen.value));
}

function log() {
    const screen = document.querySelector('#screen');
    screen.value = Math.log(Number(screen.value));
}

function pi() {
    const screen = document.querySelector('#screen');
    screen.value = 3.14159265359;
}

function e() {
    const screen = document.querySelector('#screen');
    screen.value = 2.71828182846;
}

function fact() {
    const screen = document.querySelector('#screen');
    let num = Number(screen.value);
    if (num < 0 || !Number.isInteger(num)) {
        screen.value = 'Error';
        return;
    }
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f *= i;
    }
    screen.value = f;
}

function backspc() {
    const screen = document.querySelector('#screen');
    screen.value = screen.value.slice(0, -1);
}

function evaluateExpression() {
    const screen = document.querySelector('#screen');
    try {
        screen.value = eval(screen.value.replace(/\^/g, '**'));
    } catch {
        screen.value = 'Error';
    }
}
