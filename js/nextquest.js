function q1_next() {
    document.getElementById("quest-1").style.display = 'none'; 
    document.getElementById("quest-2").style.display = 'block';
    document.getElementById("quest-3").style.display = 'none';
    document.getElementById("quest-4").style.display = 'none';
    document.getElementById("quest-5").style.display = 'none';
    document.getElementById("result").style.display = 'none';

}

function q2_next(){
    document.getElementById("quest-1").style.display = 'none'; 
    document.getElementById("quest-2").style.display = 'none';
    document.getElementById("quest-3").style.display = 'block';
    document.getElementById("quest-4").style.display = 'none';
    document.getElementById("quest-5").style.display = 'none';
    document.getElementById("result").style.display = 'none';
}
function q3_next(){
    document.getElementById("quest-1").style.display = 'none'; 
    document.getElementById("quest-2").style.display = 'none';
    document.getElementById("quest-3").style.display = 'none';
    document.getElementById("quest-4").style.display = 'block';
    document.getElementById("quest-5").style.display = 'none';
    document.getElementById("result").style.display = 'none';
}
function q4_next(){
    document.getElementById("quest-1").style.display = 'none'; 
    document.getElementById("quest-2").style.display = 'none';
    document.getElementById("quest-3").style.display = 'none';
    document.getElementById("quest-4").style.display = 'none';
    document.getElementById("quest-5").style.display = 'block';
    document.getElementById("result").style.display = 'none';
}

function result(){
    document.getElementById("quest-1").style.display = 'none'; 
    document.getElementById("quest-2").style.display = 'none';
    document.getElementById("quest-3").style.display = 'none';
    document.getElementById("quest-4").style.display = 'none';
    document.getElementById("quest-5").style.display = 'none';
    document.getElementById("result").style.display = 'block';
}