/*_CÁLCULO DA NOTA_*/
function score() {
    let sum = 0

    const question1 = document.getElementsByName('q1')
    const question2 = document.getElementsByName('q2')
    const question3 = document.getElementsByName('q3')
    const question4 = document.getElementsByName('q4')
    const question5 = document.getElementsByName('q5')
    const question6 = document.getElementsByName('q6')
    const question7 = document.getElementsByName('q7')
    const question8 = document.getElementsByName('q8')
    const question9 = document.getElementsByName('q9')
    const question10 = document.getElementsByName('q10')

    if (question1[0].checked){
        sum++
        window.alert(`Nota =${sum} - questão correta!`)
    }
}