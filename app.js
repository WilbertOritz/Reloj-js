document.addEventListener("DOMContentLoaded", () =>{ //Haremos las operaciones una vez cargado el  DOM
    const reloj_element = document.getElementById("reloj");
    const fecha_element = document.getElementById("fecha");
    const color_dinamico = document.getElementById("btn_color_dinamico");
    const color_estatico = document.getElementById("btn_color_estatico");
    const bg_color = document.getElementById("container_bg_dinamico");
    const bg_color_defecto = "#17202a";
    const formato_24h = document.getElementById("24h");
    const formato_12h = document.getElementById("12h")
    let contador = 0;
    let color_intervalo_dinamico;
    let hour12 = true;

    const colores = [
        "#2c3e50",   
        "#273747",
        "#222f3d",
        "#1c2834",
        "#17202a" 
    ];

    function cambiar_color(){
        color_dinamico.addEventListener('click', (e) => {
            e.preventDefault();
            color_intervalo_dinamico = setInterval(() =>{
                contador = contador + 1;
                contador === 5? contador = 0: contador;
                bg_color.style.background = colores[contador];
            }, 1000);
        });

        color_estatico.addEventListener('click', (e) =>{
            e.preventDefault();
            clearInterval(color_intervalo_dinamico);
            bg_color.style.background = bg_color_defecto;
        });
    }

    function formato(){
        formato_24h.addEventListener('click', (e) =>{
            e.preventDefault();
            hour12 = false;
        }); 

        formato_12h.addEventListener('click', (e) =>{
            e.preventDefault();
            hour12 = true;
        });
    }

    function reloj(){
        const date = new Date();
        formato();

        reloj_element.textContent = date.toLocaleTimeString("es-MX", { hour12: hour12});
        fecha_element.textContent  = date.toLocaleDateString("es-MX");
        
    }

    cambiar_color();
    setInterval(reloj, 1000);
});


