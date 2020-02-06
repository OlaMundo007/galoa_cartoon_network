
/*dados em json */

let program = 
{
    "program":[
        {
            "name":"Steve Universe",
            "imgPath":"-steven.png",
            "yearProduction":"2014",
            "contryOrigin":"Estados Unidos",
            "parentalRating":"10",
            "director":"Rebeca Sugar",
            "index":"0",
            "segunda":"00:00Hs e 06:00Hs",
            "terça":"12:45Hs",
            "quarta":"12:45Hs",
            "quinta":"12:45Hs",
            "sexta":"12:45Hs",
            "sabado":"00:00Hs",
            "domingo":"12:45Hs"
        },
        {   
            "name":"Irmao do Jorel",
            "imgPath":"-jorel.png",
            "yearProduction":"2010",
            "contryOrigin":"Brasil",
            "parentalRating":"10",
            "director":"Juliano Enrico",
            "index":"1",
            "segunda":"01:00Hs e 05:00Hs e 15:00Hs",
            "terça":"07:00Hs",
            "quarta":"07:00Hs",
            "quinta":"07:00Hs",
            "sexta":"00:00Hs",
            "sabado":"07:00Hs",
            "domingo":"07:00Hs"
        },
        {
            "name":"Hora de Aventura",
            "imgPath":"-fin-jake.png",
            "yearProduction":"2010",
            "contryOrigin":"Estados Unidos",
            "parentalRating":"12",
            "director":"Larry Leichliter",
            "index":"2",
            "segunda":"01:00Hs e 03:00Hs e 13:00Hs",
            "terça":"02:00Hs",
            "quarta":"02:00Hs",
            "quinta":"19:00Hs",
            "sexta":"02:00Hs",
            "sabado":"02:00Hs",
            "domingo":"02:00Hs"
        },
        {
            "name":"Apenas Um Show",
            "imgPath":"-rigby.png",
            "yearProduction":"2014",
            "contryOrigin":"Estados Unidos",
            "parentalRating":"10",
            "director":"J. G. Quintelr",
            "index":"3",
            "segunda":"02:00Hs e 11:00Hs",
            "terça":"indisponivel",
            "quarta":"00:00Hs",
            "quinta":"02:00Hs",
            "sexta":"19:00Hs",
            "sabado":"12:30Hs",
            "domingo":"19:00Hs"
        },
        {
            "name":"O mundo de Gumbal",
            "imgPath":"-gumbal.png",
            "yearProduction":"2014",
            "contryOrigin":"Estados Unidos",
            "parentalRating":"10",
            "director":"Mic Graves",
            "index":"4",
            "segunda":"03:00Hs e 08:00Hs",
            "terça":"00:0Hs",
            "quarta":"indisponivel",
            "quinta":"00:00Hs",
            "sexta":"indisponivel",
            "sabado":"indisponivel",
            "domingo":"00:00Hs"
        },
        {
            "name":"Clarencio o Otimista",
            "imgPath":"-clarencio.png",
            "yearProduction":"2014",
            "contryOrigin":"Estados Unidos",
            "parentalRating":"10",
            "director":"Nelson Boles",
            "index":"5",
            "segunda":"09:00Hs e 22:00Hs",
            "terça":"19:00Hs",
            "quarta":"19:00Hs",
            "quinta":"indisponivel",
            "sexta":"07:30Hs",
            "sabado":"19:00Hs",
            "domingo":"indisponivel"
        }
    ]

};

//var obj_program = JSON.parse(program);

let data_program = {

    "schedule":
    {
        
        "Monday":{
            "event_schedule":
            [
                [[0],[0],[0],[0]],
                [[1],[1],[2],[2]],
                [[2],[2],[3],[3]],
                [[4],[4],[2],[2]],
                [[2],[2],[2],[2]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[0],[0],[0],[0]],
                [[4],[4],[4],[4]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]]
            ]
        },
        "Tuesday":{
            "event_schedule":
            [
                [[4],[4],[4],[4]],
                [[4],[4],[4],[4]],
                [[4],[4],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]]
            ]
        }, 
        "Wednesday":{
            "event_schedule":
            [
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]]
            ]
        },
        "Thursday":{
            "event_schedule":
            [
                [[4],[4],[4],[4]],
                [[4],[4],[4],[4]],
                [[4],[4],[2],[2]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]]
            ]
        }, 
        "Friday":{
            "event_schedule":
            [
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]]
            ]
        },
        "Saturday":{
            "event_schedule":
            [
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]],
                [[5],[5],[5],[5]]
            ]
        },
        "Sunday":{
            "event_schedule":
            [
                [[4],[4],[4],[4]],
                [[4],[4],[4],[4]],
                [[4],[4],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[2],[2]],
                [[2],[2],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[1],[1]],
                [[1],[1],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[0],[0]],
                [[0],[0],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]],
                [[3],[3],[3],[3]]
            ]
        } 
            
    }

} ;

//var obj_data_program = JSON.parse(data_program);

/* fim dados json */

var day_name=['sabado','domingo','segunda','terça','quarta','quinta','sexta'];
var month_qtd = [31,28,31,30,31,30,31,31,30,31,30,31];

var date_controler = new Date;

var modal_character = document.querySelector(".character_detail"); //modal com detalhes do programa do personagem
modal_character.style.display = "none";

var modal_program_character = document.querySelector(".character_program_detail"); //modal horarios do personage,
modal_program_character.style.display = "none";

var white_hole = document.querySelector(".white_hole"); //fundo para desfocar
white_hole.style.display = "none";

var month_selected = date_controler.getMonth();
var number_week = date_controler.getDay();
var day_name_selected = day_name[number_week]; //nome do dia selecionado seg,ter,quar...
var day_selected = date_controler.getDate()-1;

next_day();
var hour = date_controler.getHours();


var next_button = document.querySelector("#next-day");
next_button.addEventListener("click",next_day);


schedule_hour('yellow',hour);

function select_character(character){


        if(character=='Steve Universe' || character.includes('Steve Universe')){
            return program.program[0];
        }else if (character=='Irmao do Jorel' || character.includes('Irmao do Jorel')){ 
            return program.program[1];
        }else if(character=='Hora de Aventura' || character.includes('Hora de Aventura')){
            return program.program[2];
        }else if(character=='Apenas Um Show' || character.includes('Apenas Um Show')){
            return program.program[3];
        }else if(character=='O mundo de Gumbal' || character.includes('O mundo de Gumbal')){
            return program.program[4];
        }else if(character=='Clarencio o Otimista' || character.includes('Clarencio o Otimista') ){
            return program.program[5];
        }else{
            return"ola";
        }
    
}

function select_schedule(){
    if(day_name_selected == "segunda"){
        return data_program.schedule.Monday.event_schedule;
    }
    else if(day_name_selected == "terça"){
        return data_program.schedule.Tuesday.event_schedule;
    }
    else if(day_name_selected == "quarta"){
        return data_program.schedule.Wednesday.event_schedule;
    }
    else if(day_name_selected == "quinta"){
        return data_program.schedule.Thursday.event_schedule;
    }
    else if(day_name_selected == "sexta"){
        return data_program.schedule.Friday.event_schedule;
    }
    else if(day_name_selected == "sabado"){
        return data_program.schedule.Saturday.event_schedule;
    }
    else{
        return data_program.schedule.Sunday.event_schedule;
    }
}   //função retorna a agenda do dia selecionado

function schedule_hour(aux,value){
    
    
    let detailedSchedule = document.querySelector(".detailed-schedule");
    let tempo = document.querySelector(".detailed-schedule header h1");
    tempo.innerHTML = value+"Hs";

   

    if(aux=="pink"){
        detailedSchedule.style.backgroundColor = "rgb(236,0,128)";
    }else if(aux=="yellow"){
        detailedSchedule.style.backgroundColor = "rgb(235,234,0)";
    }else{
        detailedSchedule.style.backgroundColor = "rgb(0,154,222)";
    }

    let img_1,img_2,img_3,img_4;
    
    let hour = select_schedule();
   
    
    let hour_1 = document.querySelector(".hour_1");

    img_1 = program.program[hour[value][0]];
    hour_1.innerHTML ="<span >23:00</span><img   class='img-fluid' src='imgs/"+img_1.imgPath+"' alt='apenas um show'>"+img_1.name;
   
    let hour_2 = document.querySelector(".hour_2");
    
    img_2 = program.program[hour[value][1]];
    hour_2.innerHTML ="<span >23:15</span><img  class='img-fluid' src='imgs/"+img_2.imgPath+"' alt='apenas um show'>"+img_2.name;
    
    let hour_3 = document.querySelector(".hour_3");
    
    img_3 = program.program[hour[value][2]];
    hour_3.innerHTML ="<span >23:30</span><img class='img-fluid' src='imgs/"+img_3.imgPath+"' alt='apenas um show'>"+img_3.name;
    
    let hour_4 = document.querySelector(".hour_4");
    
    img_4 = program.program[hour[value][3]];
    hour_4.innerHTML ="<span >23:45</span><img class='img-fluid' src='imgs/"+img_4.imgPath+"' alt='apenas um show'>"+img_4.name;


}

function modal_character_detail(value){

    let tempo = document.querySelector(".detailed-schedule header h1");
    
    let img_path_character = select_character(value.innerText);
    
    var modal_character = document.querySelector(".character_detail");
    modal_character.style.display = "none";
    
    var white_hole = document.querySelector(".white_hole");
    white_hole.style.display = "none";
   
    text = `
    <button onclick="close_character_detail();" class="close">x</button>
            <div class='title'>
                <img src="imgs/`+img_path_character.imgPath+`">
                <hgroup>
                    
                    <h1>`+img_path_character.name+`</h1>
                    <h3>Cartoon NetWork</h3>
                    
                </hgroup>
                
                    <span>`+img_path_character.parentalRating+`</span>
                
            </div>
            <div class='resume'>
                <h4>`+day_name_selected+` Dia `+ day_selected+` as `+tempo.innerHTML+`</h4><br>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </div>
            <div class='detail'>
                <span>Horario de Inicio/Fim:</span> 12:30 - 15:45<br>
                <span>Ano de Produção:</span> `+img_path_character.yearProduction+`<br>
                <span>Pais de Origem:</span>`+img_path_character.contryOrigin+` <br>
                <span>Classificação:</span> Obra Não Publicitaria Brasileira constituite de espaço qualificado e independente<br>
                <span>Classificação Indicativa:</span> `+img_path_character.parentalRating+`<br><br>

                <span>Diretor:</span>`+img_path_character.director+`

            </div>
            `;
            modal_character.innerHTML = text;
            modal_character.style.display = "inline-block";
            white_hole.style.display = "block";
           
            
           
    
}

function close_character_detail(){
    modal_character = document.querySelector(".character_detail").style.display = "none";
    white_hole = document.querySelector(".white_hole").style.display = "none";
}

function modal_character_program_detail(value){
   
    let img_path_character = select_character(value);
    
    var modal_program_character = document.querySelector(".character_program_detail");
    modal_program_character.style.display = "none";

    var white_hole = document.querySelector(".white_hole");
    white_hole.style.display = "none";
   
    text = `
    
            
            <div class="title">
            <button onclick="close_character_program_detail();" class="close">x</button>
                <img src="imgs/`+img_path_character.imgPath+`">
                <hgroup>
                
                    <h1>`+img_path_character.name+`</h1>
                    <h3>Cartoon NetWork</h3>
                    
                </hgroup>
            
                <span>`+img_path_character.parentalRating+`</span>
            </div>
            <div class="resume">
                `+print_schedule(img_path_character)+`
            </div>

            </div>
            `;
            modal_program_character.innerHTML = text;
            modal_program_character.style.display = "inline-block";
            white_hole.style.display = "block";
           
            
           
    
}

function print_schedule(value){

    
    text =`<div class="day_hour_1">Sabado<br>`+value.sabado+`</div>
    <div class="day_hour_2">Domingo<br> `+value.domingo+`</div>
    <div class="day_hour_3">Segunda<br> `+value.segunda+`</div>
    <div class="day_hour_4">Terça<br> `+value.terça+`</div>
    <div class="day_hour_5">Quarta<br> `+value.quarta+`</div>
    <div class="day_hour_6">Quinta<br> `+value.quinta+`</div>
    <div class="day_hour_7">Sexta<br> `+value.sexta+`</div>`;
    return text;

}

function close_character_program_detail(){
    modal_program_character = document.querySelector(".character_program_detail").style.display = "none";
    white_hole = document.querySelector(".white_hole").style.display = "none";
}

function update(){

    let elmnt = document.querySelector(".day_selected");
    elmnt.innerHTML = day_selected+" "+day_name_selected; 

}

function next_day(){

    if(number_week==6){
        number_week=0;
    }else{
        number_week++;
    }

    if(day_selected == month_qtd[month_selected]){
        day_selected=1;
        if(month_selected == 12){
            month_selected = 0;
        }else{
            month_selected++;
        }
        

    }else{
        day_selected++;

    }


    day_name_selected = day_name[number_week];
    update();

}

function previous_day(){

    if(day_selected>date_controler.getDate()){
        if(number_week==0){
            number_week=7;
        }else{
            number_week--;
        }

        if(day_selected == 1){
            if(month_selected == 1){
                month_selected = 12;
            }else{
                month_selected--;
            }
            day_selected = month_qtd[month_selected];
        }else{
            day_selected--;

        }
    }
    day_name_selected = day_name[number_week];
    update();
}

/* slide personagens */


var index = 0;

function update_character(){
    let character = document.querySelector(".characters");
    let text = `<ul class="list-group">`;
    let aux = index;
    let name;
    let img;
    console.log(aux);

    for (let i = 0; i <= 4; i++) {

        name = program.program[aux].name ;
        img  = program.program[aux].imgPath;
        text +=`<li  onclick="modal_character_program_detail('`+name+`');"><img src="imgs/`+img+`"></li>`;

        if(aux>=program.program.length-1){
            aux=0;
        }else{
            aux++;
        }
        
    }
    
        
     text +=`</ul>`;

     character.innerHTML = text;
}

function next_character(){
    if(index>=program.program.length-1){
        index=0;
    }else{
        index++;
    }
    update_character();
}

function previous_character(){
    if(index==0){
        index=program.program.length-1;
    }else{
        index--;
    }
    update_character();
}
