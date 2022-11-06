result_block = document.getElementById('#result');

q1_r1 = document.getElementById('quest-1_r1').value;
q1_r2 = document.getElementById('quest-1_r2').value;
q1_r3 = document.getElementById('quest-1_r3').value;

q2_r1 = document.getElementById('quest-2_r1').value;
q2_r2 = document.getElementById('quest-2_r2').value;
q2_r3 = document.getElementById('quest-2_r3').value;

q3_r1 = document.getElementById('quest-3_r1').value;
q3_r2 = document.getElementById('quest-3_r2').value;
q3_r3 = document.getElementById('quest-3_r3').value;

q4_r1 = document.getElementById('quest-4_r1').value;
q4_r2 = document.getElementById('quest-4_r2').value;
q4_r3 = document.getElementById('quest-4_r3').value;

q5_r1 = document.getElementById('quest-5_r1').value;
q5_r2 = document.getElementById('quest-5_r2').value;
q5_r3 = document.getElementById('quest-5_r3').value;

sf1_q1_r1 = 3;
sf1_q1_r2 = 3;
sf1_q1_r3 = 3;

sf1_q2_r1 = 3;
sf1_q2_r2 = 3;
sf1_q2_r3 = 3;

sf1_q3_r1 = 3;
sf1_q3_r2 = 3;
sf1_q3_r3 = 3;

sf1_q4_r1 = 3;
sf1_q4_r2 = 3;
sf1_q4_r3 = 3;

sf1_q5_r1 = 3;
sf1_q5_r2 = 3;
sf1_q5_r3 = 3;


sf1_res = 0


function checked_q1(){
    checked1 = document.querySelector('input[name="q1"]:checked').value;
    

    if (checked1 == 1){
        sf1_res += 0;
    }
    else if (checked1 == 2){
        sf1_res +=2;
    }

    else if(checked1 == 3){
        sf1_res +=1;
    }
    
}

function checked_q2(){
    checked2 = document.querySelector('input[name="q2"]:checked').value;
    if (checked2 == 1){
        sf1_res += 2;
    }

    else if (checked2 == 2){
        sf1_res +=1;
    }

    else if (checked2 == 3){
        sf1_res +=0;
    }
}

function checked_q3(){
    checked3 = document.querySelector('input[name="q3"]:checked').value;
    if (checked3 == 1){
        sf1_res += 0;
    }

    else if (checked3 == 2){
        sf1_res +=1;
    }

    else if (checked3 == 3){
        sf1_res +=2;
    }
}

function checked_q4(){
    checked4 = document.querySelector('input[name="q4"]:checked').value;
    if (checked4 == 1){
        sf1_res += 0;
    }

    else if (checked4 == 2){
        sf1_res +=1;
    }

    else if (checked4 == 3){
        sf1_res +=2;
    }
}

function checked_q5(){
    checked5 = document.querySelector('input[name="q5"]:checked').value;
    if (checked5 == 1){
        sf1_res += 0;
    }

    else if (checked5 == 2){
        sf1_res +=2;
    }

    else if (checked5 == 3){
        sf1_res +=1;
    }
}

function result_ball(){
    document.getElementById('result-ball').innerHTML = "Результат "+ sf1_res+ "/10";
}

function result_message(){
    if (sf1_res <= 3){
        document.getElementById('result-characteristic').innerHTML = "У вас плохо развито такие качесвто, как xестность и вам чужд этикет. Мы можем посоветовать вам ознакомиться с данным навыком в нашей библиотеке";
    }
    else if (sf1_res <= 6){
        document.getElementById('result-characteristic').innerHTML = "У вас всё очень неплохо, но можете немного подтянуть свои навыки.";
    }
    
    else if (sf1_res <= 10){
        document.getElementById('result-characteristic').innerHTML = "У вас нет проблем с этикетом и честностью. Так держать!";
    } 
}

function result_print(){
        checked_q1();
        checked_q2();
        checked_q3();
        checked_q4();
        checked_q5();
        result_ball();
        result_message();
}











