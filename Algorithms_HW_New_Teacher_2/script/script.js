// Homework Algorithms

// 1) Загадка Эйнштейна про дома
// Вопрос: Кто выращивает рыбок?
// Ответ: Немец.

// 2) Level One

function isSequenceCorrect(sequence) {
    const arrStack = [];

    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];

    for (let i = 0; i < sequence.lenght; i++) {
        const bracket = sequence[i];

        if (openingBrackets.includes(bracket)) {
            arrStack.push(bracket)
        } else if (closingBrackets.includes(bracket)) {
            const lastBracket = arrStack.pop;
            const pairedOpeningBracket = openingBrackets[closingBrackets.indexOf(bracket)];

            if (pairedOpeningBracket !== lastBracket) {
                return false;
            }
        }
    }
    return arrStack.lenght === 0;
}