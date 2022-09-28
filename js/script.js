/*_CÁLCULO DA NOTA_*/
function score() {
    let sum = 0

    const msg = document.getElementById('score')

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

    if (question1[0].checked) {
        sum++
        msg.innerHTML = (`<p>Questão 1 Correta!</p><br>`)
    } else { msg.innerHTML = (`<p>Questão 1 Incorreta!</p><br>`) }
    if (question2[4].checked) {
        sum++
        msg.innerHTML += (`<p>Questão 2 Correta!</p><br>`)
    } else { msg.innerHTML += (`<p>Questão 2 Incorreta!</p><br>`) }
    if (question3[1].checked) {
        sum++
        msg.innerHTML += (`<p>Questão 3 Correta!</p><br>`)
    } else { msg.innerHTML += (`<p>Questão 3 Incorreta!</p><br>`) }
    if (question4[0].checked) {
        sum++
        msg.innerHTML += (`<p>Questão 4 Correta!</p><br>`)
    } else { msg.innerHTML += (`<p>Questão 4 Incorreta!</p><br>`) }
    if (question5[0].checked) {
        sum++
        msg.innerHTML += (`<p>Questão 5 Correta!</p><br>`)
    } else { msg.innerHTML += (`<p>Questão 5 Incorreta!</p><br>`) }
    if (question6[4].checked) {
        sum++
        msg.innerHTML += (`<p>Questão 6 Correta!</p><br>`)
    } else { msg.innerHTML += (`<p>Questão 6 Incorreta!</p><br>`) }
    if (question7[1].checked) {
        sum++
        msg.innerHTML += (`<p>Questão 7 Correta!</p><br>`)
    } else { msg.innerHTML += (`<p>Questão 7 Incorreta!</p><br>`) }
    if (question8[2].checked) {
        sum++
        msg.innerHTML += (`<p>Questão 8 Correta!</p><br>`)
    } else { msg.innerHTML += (`<p>Questão 8 Incorreta!</p><br>`) }
    if (question9[0].checked) {
        sum++
        msg.innerHTML += (`<p>Questão 9 Correta!</p><br>`)
    } else { msg.innerHTML += (`<p>Questão 9 Incorreta!</p><br>`) }
    if (question10[1].checked) {
        sum++
        msg.innerHTML += (`<p>Questão 10 Correta!</p><br>`)
    } else { msg.innerHTML += (`<p>Questão 10 Incorreta!</p><br>`) }

    msg.innerHTML += (`<br><p id="finalScore">Sua nota final foi: <span id="scoreStyle">${sum}</span></p>`)

}