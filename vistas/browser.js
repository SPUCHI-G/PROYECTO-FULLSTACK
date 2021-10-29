fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
		"x-rapidapi-key": "0ca36d862dmsh293d59d0158c60bp1bb898jsn5d334f9f97ef"
	}
})
.then(response => response.json())
.then(response => {
    const form = document.querySelector('form');
    form.addEventListener('submit',(ev)=>{
        ev.preventDefault(); 
        const template = (titulo, imagen, descr,url,genre,platform) => {
        return `
            <div class="col mb-3">
                <div class="card">
                    <img src="${imagen}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${titulo}</h5>
                        <p class="card-text">Genero: ${genre}</p>
                        <p class="card-text">Plataforma: ${platform}</p>
                        <p class="card-text">Descripcion: ${descr}</p>
                        <p class="card-text">URL: ${url}</p>
                    </div>
                </div>
            </div>
        `;
    };
        const crearcard = (res,divResult,nom) => {
            if(nom.value==''){
                debugger
                divResult.innerHTML = '';
                let columnas='';
                let cont = 1;
                for(let i = 0 ; i<res.length ; i++){
                    if(res[i].platform=="PC (Windows), Web Browser"){
                        columnas += template(res[i].title,res[i].thumbnail,res[i].short_description,res[i].game_url,res[i].genre,res[i].platform);
                    }
                    if(cont === 4){
                        divResult.innerHTML += `<div class="row">${columnas}</div>`;
                        columnas = '';
                        cont = 0;
                    }
                    cont ++;
                }
            }else{
                debugger
                divResult.innerHTML = '';
                let columnas='';
                let cont = 1;
                for(let i = 0 ; i<res.length ; i++){
                    if(res[i].title.toUpperCase() == nom.value.toUpperCase() ){
                        if(res[i].platform=="PC (Windows), Web Browser"){
                            columnas += template(res[i].title,res[i].thumbnail,res[i].short_description,res[i].game_url,res[i].genre,res[i].platform);
                        }
                    }
                    
                    if(cont === 4){
                        divResult.innerHTML += `<div class="row">${columnas}</div>`;
                        columnas = '';
                        cont = 0;
                    }
                    cont ++;
                }
            };
        
        };
    
            const inputNombre =  document.getElementById('input-nombre');
            const divResult = document.getElementById('resultados');
            crearcard(response,divResult,inputNombre);
});
	console.log(response);
})
.catch(err => {
	console.error(err);
});

