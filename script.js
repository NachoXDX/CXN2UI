


// #region variables elio
let fibonacciClient;
let ros;
let conectado = false;
let SistemaCoord = "1";
let listener;
let listener2;
let listener3;

let eje;

let PActual_punto;
let Puntos;
let cantPuntosAnterior = 0;
let cantPuntosActual = 0;
let com;
let intervalo;
let id1_aux;
let id2_aux;
let op_aux;
//#endregion

// #region variables chona
let interval;
let conectInterval;
let interactionInterval;
let delay = 50;
let conectarDelay = 50;
let interactionDelay = 50;
let actualCoordsArt;
let actualCoordsEsp;
let statusCode = 1;
let timerValues = 500;
let stepArt = 0.001;
let stepEsp = 1;
let rosIpDir = ""    //def : 192.168.1.195:9090


// #endregion

// Sistemas de coordenadas
class SistemaDeCoordenadas {
    constructor(nombre,inf1,sup1,inf2,sup2,inf3,sup3,inf4,sup4,inf5,sup5,inf6,sup6){
    this.nombre = nombre;
    this.inf1 = inf1;
    this.sup1 = sup1;
    this.inf2 = inf2;
    this.sup2 = sup2;
    this.inf3 = inf3;
    this.sup3 = sup3;
    this.inf4 = inf4;
    this.sup4 = sup4;
    this.inf5 = inf5;
    this.sup5 = sup5;
    this.inf6 = inf6;
    this.sup6 = sup6;
    }
}

const espaciales = new SistemaDeCoordenadas("Espaciales",-500,500,-500,500,-150,650,-180,180,-180,180,-180,180);
const articulares = new SistemaDeCoordenadas("Articulares",-175,175,-109,36,-80,89,-90,90,-100,109,-147,147);
// #region ---------Elementos HTML----
// #region ---------Nav elements
let navJoggingDiv = document.getElementById("nav-jogging-div");
let navUserDiv = document.getElementById("nav-user-div");
let navSettingsDiv = document.getElementById("nav-settings-div");
let navToolsDiv = document.getElementById("nav-tools-div");
let navHomeDiv = document.getElementById("nav-home-div");
// #endregion
// #region ---------Main Divs
let joggingDiv = document.getElementById("jogging-div");
let userDiv = document.getElementById("user-div");
let settingsDiv = document.getElementById("settings-div");
let toolsDiv = document.getElementById("tools-div");
let homeDiv = document.getElementById("home-div");
// #endregion
// #region ----------Selects
let coordenadasSelect = document.getElementById("coordenadas-select");
let usuarioSelect = document.getElementById("usuario-select");
let toolSelect = document.getElementById("tool-select");
let speedSelect = document.getElementById("speed-select");
// #endregion
let headerNotiDiv = document.getElementById("header-noti-div");
//---------- ELementos de posicion

// #region valores de posicion
let actualPositionSpan1 = document.getElementById("actual-position-1");
let actualPositionSpan2 = document.getElementById("actual-position-2");
let actualPositionSpan3 = document.getElementById("actual-position-3");
let actualPositionSpan4 = document.getElementById("actual-position-4");
let actualPositionSpan5 = document.getElementById("actual-position-5");
let actualPositionSpan6 = document.getElementById("actual-position-6");

let actualPositionSpans = [
    actualPositionSpan1,
    actualPositionSpan2,
    actualPositionSpan3,
    actualPositionSpan4,
    actualPositionSpan5,
    actualPositionSpan6
]

// #endregion
// #region nombre de las coordenadas
let coordName1Span = document.getElementById("coord-name-1-span");
let coordName2Span = document.getElementById("coord-name-2-span");
let coordName3Span = document.getElementById("coord-name-3-span");
let coordName4Span = document.getElementById("coord-name-4-span");
let coordName5Span = document.getElementById("coord-name-5-span");
let coordName6Span = document.getElementById("coord-name-6-span");

let coorNameSpans = [
    coordName1Span,
    coordName2Span,
    coordName3Span,
    coordName4Span,
    coordName5Span,
    coordName6Span
]
// #endregion
// Titulo
let positionH3 = document.getElementById("position-h3");



// #region  ----------Ranges
let range1 = document.getElementById("range-1");
let range2 = document.getElementById("range-2");
let range3 = document.getElementById("range-3");
let range4 = document.getElementById("range-4");
let range5 = document.getElementById("range-5");
let range6 = document.getElementById("range-6");
let gripperRange = document.getElementById("gripper-range");
let ranges = [
    range1,
    range2,
    range3,
    range4,
    range5,
    range6
]
// #endregion
// #region ----------Spans

let speedInfo = document.getElementById("speed-info");
let referenceInfo = document.getElementById("reference-info");
let modeInfo = document.getElementById("mode-info");
let motorInfo = document.getElementById("motor-info");

let spanLowerLimit1 = document.getElementById("span-lower-limit-1");
let spanLowerLimit2 = document.getElementById("span-lower-limit-2");
let spanLowerLimit3 = document.getElementById("span-lower-limit-3");
let spanLowerLimit4 = document.getElementById("span-lower-limit-4");
let spanLowerLimit5 = document.getElementById("span-lower-limit-5");
let spanLowerLimit6 = document.getElementById("span-lower-limit-6");

let spansLowerLimit = [
    spanLowerLimit1,
    spanLowerLimit2,
    spanLowerLimit3,
    spanLowerLimit4,
    spanLowerLimit5,
    spanLowerLimit6
    ]
// ----
let spanUpperLimit1 = document.getElementById("span-upper-limit-1");
let spanUpperLimit2 = document.getElementById("span-upper-limit-2");
let spanUpperLimit3 = document.getElementById("span-upper-limit-3");
let spanUpperLimit4 = document.getElementById("span-upper-limit-4");
let spanUpperLimit5 = document.getElementById("span-upper-limit-5");
let spanUpperLimit6 = document.getElementById("span-upper-limit-6");

let spansUpperLimit = [
    spanUpperLimit1,
    spanUpperLimit2,
    spanUpperLimit3,
    spanUpperLimit4,
    spanUpperLimit5,
    spanUpperLimit6
    ]
// Spans izquierdos de move
let span1 = document.getElementById("span-1");
let span2 = document.getElementById("span-2");
let span3 = document.getElementById("span-3");
let span4 = document.getElementById("span-4");
let span5 = document.getElementById("span-5");
let span6 = document.getElementById("span-6");

let spans = [
    span1,
    span2,
    span3,
    span4,
    span5,
    span6
]
// GoTo spans
let goToSpan1 = document.getElementById("go-to-span-1");
let goToSpan2 = document.getElementById("go-to-span-2");
let goToSpan3 = document.getElementById("go-to-span-3");
let goToSpan4 = document.getElementById("go-to-span-4");
let goToSpan5 = document.getElementById("go-to-span-5");
let goToSpan6 = document.getElementById("go-to-span-6");

let goToSpans = [
    goToSpan1,
    goToSpan2,
    goToSpan3,
    goToSpan4,
    goToSpan5,
    goToSpan6,
]
// #endregion
// #region --------------Botones de Incrmento--------------//

let incrementBtn1 = document.getElementById("increment-btn-1");
let incrementBtn2 = document.getElementById("increment-btn-2");
let incrementBtn3 = document.getElementById("increment-btn-3");
let incrementBtn4 = document.getElementById("increment-btn-4");
let incrementBtn5 = document.getElementById("increment-btn-5");
let incrementBtn6 = document.getElementById("increment-btn-6");

let incrementBtns = [
    incrementBtn1,
    incrementBtn2,
    incrementBtn3,
    incrementBtn4,
    incrementBtn5,
    incrementBtn6
]
// #endregion
// #region ----------------------Botones de Decremento--------------//

let decrementBtn1 = document.getElementById("decrement-btn-1");
let decrementBtn2 = document.getElementById("decrement-btn-2");
let decrementBtn3 = document.getElementById("decrement-btn-3");
let decrementBtn4 = document.getElementById("decrement-btn-4");
let decrementBtn5 = document.getElementById("decrement-btn-5");
let decrementBtn6 = document.getElementById("decrement-btn-6");

let decrementBtns = [
    decrementBtn1,
    decrementBtn2,
    decrementBtn3,
    decrementBtn4,
    decrementBtn5,
    decrementBtn6
]

//#endregion
// #region -----Otros Botones-----
let anadirPuntoBlocklyBtn = document.getElementById("anadir-punto-blockly-btn");
let enableBtn = document.getElementById("enable-btn");
// #endregion

// #region ----------------------Pop ups--------------//

let  popUpDiv = document.getElementById("pop-up-div");
let  popUpTop = document.getElementById("pop-up-top");
let  popUpH = document.getElementById("pop-up-h");
let  popUpP = document.getElementById("pop-up-p");
let  popUpCloseBtn = document.getElementById("pop-up-close-btn");

// #endregion

// #region -----------------------Programacion en bloques-----

let blockSaveAsTaskBtn = document.getElementById("block-save-as-task-btn");
let blockOverwriteTaskBtn = document.getElementById("block-overwrite-task-btn");
let blockSaveAsTaskDiv = document.getElementById("block-save-as-task-div");
let blockSaveTaskBtn = document.getElementById("block-save-task-btn");
let blockSaveTaskName = document.getElementById("block-save-task-name");
let blockSaveTaskDescription = document.getElementById("block-save-task-description");
let blockSaveDiv = document.getElementById("block-save-div");
let blockCloseSaveAsBtn = document.getElementById("block-close-save-as-btn");
let blockSendSaveAsBtn = document.getElementById("block-send-save-as-btn");
let blockOpenTaskBtn = document.getElementById("block-open-task-btn");
let blockOpenTaskDiv = document.getElementById("block-open-task-div");
let blockCloseOpenTaskBtn = document.getElementById("block-close-open-task-btn");
let blockSelectTask = document.getElementById("block-select-task");
let blockDeleteTaskBtn = document.getElementById("block-delete-task-btn");
let blockRunTaskBtn = document.getElementById("block-run-task-btn");
let blockSaveCloseBtn = document.getElementById("block-save-close-btn");
let blockNewTaskBtn = document.getElementById("block-new-task-btn");
let blockTitleH3 = document.getElementById("block-title-h3");
let blockDeleteTaskDiv = document.getElementById("block-delete-task-div");
let blockDeleteTaskCloseBtn = document.getElementById("block-delete-task-close-btn");
let blockSelectTaskToDelete = document.getElementById("block-select-task-to-delete");
let blockDeleteTaskBtn2 = document.getElementById("block-delete-task-btn-2");
let blockStopTaskBtn = document.getElementById("block-stop-task-btn");


// #region ---------------------------Elementos de home-------------------

let ipInput = document.getElementById("ip-input")
let submitIpBtn = document.getElementById("submit-ip-btn")
submitIpBtn.addEventListener("click",()=>{
  rosIpDir = ipInput.value
  conectar()
      conectInterval = setInterval(()=>{
        if(typeof(actualCoordsArt) == "undefined"){

        }
        else{
          ranges.forEach((range,index)=>{
            range.value = actualCoordsArt[index];
          })
          
          goToSpans.forEach((goTo,index)=>{
            goTo.innerText = ranges[index].value;
          })

          conectInterval = clearInterval(conectInterval);
        }
    },conectarDelay)
  selectDiv("nav-jogging-div")
  
})
//#endregion


// #endregion
coordSist();
interactionInterval = setInterval(()=>{
    if(statusCode != 3){
        ranges.forEach((range)=>{
          range.style.pointerEvents = "auto";
        })
        incrementBtns.forEach((btn)=>{
          btn.style.pointerEvents = "auto";
        })
        decrementBtns.forEach((btn)=>{
          btn.style.pointerEvents = "auto";
        })
    }
    else{
      ranges.forEach((range)=>{
        range.style.pointerEvents = "none";
      })
      incrementBtns.forEach((btn)=>{
        btn.style.pointerEvents = "none";
      })
      decrementBtns.forEach((btn)=>{
        btn.style.pointerEvents = "none";
      })
        
    }
},interactionDelay)

// #region eventListeners
//----------------Event Listeners Incremento Decremento----------

// ---------------Event Listeners Input -----------------

// ---------------Event LIsteners Select--------------
coordenadasSelect.addEventListener("change",coordSist)

speedSelect.addEventListener("change", ()=>{setSpeed(parseInt(speedSelect.value))});

usuarioSelect.addEventListener("change", ()=>{cambioSistema(usuarioSelect.value)});
// ---------------Event Listeners Nav
navJoggingDiv.addEventListener("click",function(){selectDiv("nav-jogging-div");});
navUserDiv.addEventListener("click",function(){selectDiv("nav-user-div");});
navSettingsDiv.addEventListener("click",function(){selectDiv("nav-settings-div");});
navToolsDiv.addEventListener("click",function(){selectDiv("nav-tools-div");});
navHomeDiv.addEventListener("click",function(){selectDiv("nav-home-div");});
// --------------Event Listener de prueba-------------
// #region ranges

range1.addEventListener("change",()=>{
    mover();
});

range1.addEventListener("mousedown",()=>{
    interval = setInterval(()=>{
        goToSpan1.innerText = range1.value;
    },delay)
});

range1.addEventListener("mouseup",()=>{
    interval = clearInterval(interval);
});

range1.addEventListener("touchmove",()=>{
  interval = setInterval(()=>{
      goToSpan1.innerText = range1.value;
  },delay)
});

range1.addEventListener("touchend",()=>{
  interval = clearInterval(interval);
});



range2.addEventListener("change",()=>{
    mover();
});

range2.addEventListener("mousedown",()=>{
    interval = setInterval(()=>{
        goToSpan2.innerText = range2.value;
    },delay)
});

range2.addEventListener("mouseup",()=>{
    interval = clearInterval(interval);
});

range2.addEventListener("touchmove",()=>{
  interval = setInterval(()=>{
      goToSpan2.innerText = range2.value;
  },delay)
});

range2.addEventListener("touchend",()=>{
  interval = clearInterval(interval);
});


range3.addEventListener("change",()=>{
    mover();
});

range3.addEventListener("mousedown",()=>{
    interval = setInterval(()=>{
        goToSpan3.innerText = range3.value;
    },delay)
});

range3.addEventListener("mouseup",()=>{
    interval = clearInterval(interval);
});

range3.addEventListener("touchmove",()=>{
  interval = setInterval(()=>{
      goToSpan3.innerText = range3.value;
  },delay)
});

range3.addEventListener("touchend",()=>{
  interval = clearInterval(interval);
});


range4.addEventListener("change",()=>{
    mover();
});

range4.addEventListener("mousedown",()=>{
    interval = setInterval(()=>{
        goToSpan4.innerText = range4.value;
    },delay)
});

range4.addEventListener("mouseup",()=>{
    interval = clearInterval(interval);
});

range4.addEventListener("touchmove",()=>{
  interval = setInterval(()=>{
      goToSpan4.innerText = range4.value;
  },delay)
});

range4.addEventListener("touchend",()=>{
  interval = clearInterval(interval);
});


range5.addEventListener("change",()=>{
    mover();
});

range5.addEventListener("mousedown",()=>{
    interval = setInterval(()=>{
        goToSpan5.innerText = range5.value;
    },delay)
});

range5.addEventListener("mouseup",()=>{
    interval = clearInterval(interval);
});

range5.addEventListener("touchmove",()=>{
  interval = setInterval(()=>{
      goToSpan5.innerText = range5.value;
  },delay)
});

range5.addEventListener("touchend",()=>{
  interval = clearInterval(interval);
});

range6.addEventListener("change",()=>{
    mover();
});

gripperRange.addEventListener("change",()=>{
  setGripper(parseInt(gripperRange.value))
})
range6.addEventListener("mousedown",()=>{
    interval = setInterval(()=>{
        goToSpan6.innerText = range6.value;
    },delay)
});

range6.addEventListener("mouseup",()=>{
    interval = clearInterval(interval);
});

range6.addEventListener("touchmove",()=>{
  interval = setInterval(()=>{
      goToSpan6.innerText = range6.value;
  },delay)
});

range6.addEventListener("touchend",()=>{
  interval = clearInterval(interval);
});

//#endregion
//#region botones

incrementBtn1.addEventListener("click",()=>{
    range1.value = parseFloat(range1.value) + 1;
    goToSpan1.innerText = range1.value;
    mover();
});

decrementBtn1.addEventListener("click",()=>{
    range1.value = parseFloat(range1.value) - 1;
    goToSpan1.innerText = range1.value;
    mover();
});

incrementBtn2.addEventListener("click",()=>{
    range2.value = parseFloat(range2.value) + 1;
    goToSpan2.innerText = range2.value;
    mover();
});

decrementBtn2.addEventListener("click",()=>{
    range2.value = parseFloat(range2.value) - 1;
    goToSpan2.innerText = range2.value;
    mover();
});

incrementBtn3.addEventListener("click",()=>{
    range3.value = parseFloat(range3.value) + 1;
    goToSpan3.innerText = range3.value;
    mover();
});

decrementBtn3.addEventListener("click",()=>{
    range3.value = parseFloat(range3.value) - 1;
    goToSpan3.innerText = range3.value;
    mover();
});

incrementBtn4.addEventListener("click",()=>{
    range4.value = parseFloat(range4.value) + 1;
    goToSpan4.innerText = range4.value;
    mover();
});

decrementBtn4.addEventListener("click",()=>{
    range4.value = parseFloat(range4.value) - 1;
    goToSpan4.innerText = range4.value;
    mover();
});

incrementBtn5.addEventListener("click",()=>{
    range5.value = parseFloat(range5.value) + 1;
    goToSpan5.innerText = range5.value;
    mover();
});

decrementBtn5.addEventListener("click",()=>{
    range5.value = parseFloat(range5.value) - 1;
    goToSpan5.innerText = range5.value;
    mover();
});

incrementBtn6.addEventListener("click",()=>{
    range6.value = parseFloat(range6.value) + 1;
    goToSpan6.innerText = range6.value;
    mover();
});

decrementBtn6.addEventListener("click",()=>{
    range6.value = parseFloat(range6.value) - 1;
    goToSpan6.innerText = range6.value;
    mover();
});

// conectarBtn.addEventListener("click", ()=>{
//     conectar()
//     conectInterval = setInterval(()=>{
//         if(typeof(actualCoordsArt) == "undefined"){

//         }
//         else{
//           ranges.forEach((range,index)=>{
//             range.value = actualCoordsArt[index];
//           })
          
//           goToSpans.forEach((goTo,index)=>{
//             goTo.innerText = ranges[index].value;
//           })

//           conectInterval = clearInterval(conectInterval);
//         }
//     },conectarDelay)
// });

enableBtn.addEventListener("click", ()=>{
    enable();
});
//#endregion
// #endregion



// -----Funciones-----

function coordSist(){
    if(coordenadasSelect.value == "espaciales"){
        positionH3.textContent = "Espaciales";

        coordName1Span.textContent = "X:"
        coordName2Span.textContent = "Y:"
        coordName3Span.textContent = "Z:"
        coordName4Span.textContent = "Rx:"
        coordName5Span.textContent = "Ry:"
        coordName6Span.textContent = "Rz:"

        span1.textContent = "X:";
        span2.textContent = "Y:";
        span3.textContent = "Z:";
        span4.textContent = "Rx:";
        span5.textContent = "Ry:";
        span6.textContent = "Rz:";

        spanLowerLimit1.textContent = espaciales.inf1;
        spanLowerLimit2.textContent = espaciales.inf2;
        spanLowerLimit3.textContent = espaciales.inf3;
        spanLowerLimit4.textContent = espaciales.inf4;
        spanLowerLimit5.textContent = espaciales.inf5;
        spanLowerLimit6.textContent = espaciales.inf6;
    
        spanUpperLimit1.textContent = espaciales.sup1;
        spanUpperLimit2.textContent = espaciales.sup2;
        spanUpperLimit3.textContent = espaciales.sup3;
        spanUpperLimit4.textContent = espaciales.sup4;
        spanUpperLimit5.textContent = espaciales.sup5;
        spanUpperLimit6.textContent = espaciales.sup6;

        range1.max = espaciales.sup1;
        range2.max = espaciales.sup2;
        range3.max = espaciales.sup3;
        range4.max = espaciales.sup4;
        range5.max = espaciales.sup5;
        range6.max = espaciales.sup6;

        range1.min = espaciales.inf1;
        range2.min = espaciales.inf2;
        range3.min = espaciales.inf3;
        range4.min = espaciales.inf4;
        range5.min = espaciales.inf5;
        range6.min = espaciales.inf6;

        range1.value = (espaciales.sup1 + espaciales.inf1)/2;
        range2.value = (espaciales.sup2 + espaciales.inf2)/2;
        range3.value = (espaciales.sup3 + espaciales.inf3)/2;
        range4.value = (espaciales.sup4 + espaciales.inf4)/2;
        range5.value = (espaciales.sup5 + espaciales.inf5)/2;
        range6.value = (espaciales.sup6 + espaciales.inf6)/2;

        ranges.forEach((range,index)=>{
          if(index <=2){
            range.step = stepEsp;  
          }
          else{
            range.step = stepArt;
          }
        })

        
        
       
        // mostrar valores en esas coordenadas mediante ross
    }
    else if(coordenadasSelect.value == "articulares"){
        positionH3.textContent = "Articulares"
        coordName1Span.textContent = "Q1:"
        coordName2Span.textContent = "Q2:"
        coordName3Span.textContent = "Q3:"
        coordName4Span.textContent = "Q4:"
        coordName5Span.textContent = "Q5:"
        coordName6Span.textContent = "Q6:";

        span1.textContent = "Q1:";
        span2.textContent = "Q2:";
        span3.textContent = "Q3:";
        span4.textContent = "Q4:";
        span5.textContent = "Q5:";
        span6.textContent = "Q6:";

        spanLowerLimit1.textContent = articulares.inf1;
        spanLowerLimit2.textContent = articulares.inf2;
        spanLowerLimit3.textContent = articulares.inf3;
        spanLowerLimit4.textContent = articulares.inf4;
        spanLowerLimit5.textContent = articulares.inf5;
        spanLowerLimit6.textContent = articulares.inf6;
    
        spanUpperLimit1.textContent = articulares.sup1;
        spanUpperLimit2.textContent = articulares.sup2;
        spanUpperLimit3.textContent = articulares.sup3;
        spanUpperLimit4.textContent = articulares.sup4;
        spanUpperLimit5.textContent = articulares.sup5;
        spanUpperLimit6.textContent = articulares.sup6;

        range1.max = articulares.sup1;
        range2.max = articulares.sup2;
        range3.max = articulares.sup3;
        range4.max = articulares.sup4;
        range5.max = articulares.sup5;
        range6.max = articulares.sup6;

        range1.min = articulares.inf1;
        range2.min = articulares.inf2;
        range3.min = articulares.inf3;
        range4.min = articulares.inf4;
        range5.min = articulares.inf5;
        range6.min = articulares.inf6;

        range1.value = (articulares.sup1 + articulares.inf1)/2;
        range2.value = (articulares.sup2 + articulares.inf2)/2;
        range3.value = (articulares.sup3 + articulares.inf3)/2;
        range4.value = (articulares.sup4 + articulares.inf4)/2;
        range5.value = (articulares.sup5 + articulares.inf5)/2;
        range6.value = (articulares.sup6 + articulares.inf6)/2;

        ranges.forEach((range)=>{
          range.step = stepArt;
        })
        
       
    }

    goToSpans.forEach((span,index)=>{
        span.innerText = ranges[index].value;
    })
    
    if(typeof(actualCoordsArt) != "undefined" && typeof(actualCoordsEsp) != "undefined" )
    if(coordenadasSelect.value == "espaciales"){
      ranges.forEach((range,index)=>{
        range.value = actualCoordsEsp[index];
        goToSpans[index].innerText = range.value;
      })
    }
    else{
      ranges.forEach((range,index)=>{
        range.value = actualCoordsArt[index];
        goToSpans[index].innerText = range.value;
      })
    }
    
}
function selectDiv(clickedDiv){
    joggingDiv.style.display = "none";
    userDiv.style.display = "none";
    toolsDiv.style.display = "none";
    settingsDiv.style.display = "none";
    homeDiv.style.display = "none";
    settingsCoordSistsDiv.style.display = "none";
    settingsPointsDiv.style.display = "none";
    // document.getElementsByClassName("nav-elements").style.display="none"

    navJoggingDiv.style.background = "var(--color-primario)";
    navUserDiv.style.background = "var(--color-primario)"
    navSettingsDiv.style.background = "var(--color-primario)";
    navToolsDiv.style.background = "var(--color-primario)";
    navHomeDiv.style.background = "var(--color-primario)";

    if(clickedDiv == "nav-jogging-div"){
        joggingDiv.style.display = "flex";
        navJoggingDiv.style.background = "var(--color-botones)";
    }
    else if(clickedDiv == "nav-user-div"){
        userDiv.style.display = "flex";
        navUserDiv.style.background = "var(--color-botones)";
    }
    else if(clickedDiv == "nav-settings-div"){
        settingsDiv.style.display = "flex";
        navSettingsDiv.style.background = "var(--color-botones)";
    }
    else if(clickedDiv == "nav-tools-div"){
        toolsDiv.style.display = "flex";
        navToolsDiv.style.background = "var(--color-botones)";
    }
    else{
        homeDiv.style.display = "flex";
        navHomeDiv.style.background = "var(--color-botones)";
    }
}
function mover() {
    if(statusCode != 3){
      statusCode = 3;    
      let coords = []
      if(coordenadasSelect.value == "articulares"){
        ranges.forEach((range,index)=>{
            coords[index] = toRad(parseFloat(range.value));
         });
        
         enviarActionClient(coords,1);
      }
      else{
        ranges.forEach((range,index)=>{
            if(index>=3){
                coords[index] = toRad(parseFloat(range.value));
            }
            else{
                coords[index] = parseFloat(range.value)/1000;
            }
         });
        
         enviarActionClient(coords,2);
      }
         
    }
    else{
        console.log("Ocupado");
    }
  }
function enviarActionClient(coord,comandoNumero) {



    //************ variables para el mensaje *****************************
    //FIjo que sea articulares definiendo comando como 1

    
    var positionVec3 = new ROSLIB.Vector3(null);
    var orientation3 = new ROSLIB.Quaternion({ x: 0, y: 0, z: 0, w: 1.0 });

    positionVec3.x = 0.0;
    positionVec3.y = 0.0;
    positionVec3.z = 0.0;

    var pose3 = new ROSLIB.Pose({
      position: positionVec3,
      orientation: orientation3
    });

    // ActionClient*****************************************

    Cliente = new ROSLIB.ActionClient({
      ros: ros,
      serverName: 'niryo_one/commander/robot_action',
      actionName: 'niryo_one_msgs/RobotMoveAction'
    });

    // **************** Crer el mensaje ********************

    var goal = new ROSLIB.Goal({
      actionClient: Cliente,
      goalMessage: {
        cmd: {
          cmd_type: comandoNumero,
          joints: [coord[0], coord[1], coord[2], coord[3], coord[4], coord[5]],
          position: {
            x: coord[0],
            y: coord[1],
            z: coord[2]
          },
          rpy: {
            roll: coord[3],
            pitch: coord[4],
            yaw: coord[5]
          },
          position2: {
            x: 0.0,
            y: 0.0,
            z: 0.0
          },
          rpy2: {
            roll: 0.0,
            pitch: 0.0,
            yaw: 0.0
          },
          shift: {
            axis_number: 0,
            value: 0.0
          },
          Trajectory: {
            trajectory_start: {
              joint_state: {
                header: {
                  seq: 0,
                  stamp: {
                    secs: 0,
                    nsecs: 0
                  },
                  frame_id: ''
                },
                name: [],
                position: [],
                velocity: [],
                effort: []
              },
              multi_dof_joint_state: {
                header: {
                  seq: 0,
                  stamp: {
                    secs: 0,
                    nsecs: 0
                  },
                  frame_id: ''
                },
                joint_names: [],
                transforms: [],
                twist: [],
                wrench: []
              },
              attached_collision_objects: [],
              is_diff: false
            },
            group_name: '',
            trajectory: {
              joint_trajectory: {
                header: {
                  seq: 0,
                  stamp: {
                    secs: 0,
                    nsecs: 0
                  },
                  frame_id: ''
                },
                joint_names: [],
                points: []
              },
              multi_dof_joint_trajectory: {
                header: {
                  seq: 0,
                  stamp: {
                    secs: 0,
                    nsecs: 0
                  },
                  frame_id: ''
                },
                joint_names: [],
                points: []
              }
            }
          },
          pose_quat: pose3,
          saved_position_name: '',
          saved_trajectory_id: 0,
          tool_cmd: {
            tool_id: 0,
            cmd_type: 0,
            gripper_close_speed: 0,
            gripper_open_speed: 0,
            activate: false,
            gpio: 0
          }
        }
      }
    });

    //Feedback y result
    goal.on('feedback', function (feedback) {
      write(feedback.message);
      console.log('Feedback: ' + feedback.message);
    });
    goal.on('result', function (result) {
      console.log(actualCoordsEsp);
      console.log('Final Result: ' + result.message);
      if(coordenadasSelect.value == "articulares"){

        setTimeout(()=>{
          ranges.forEach((range,index)=>{
            range.value = actualCoordsArt[index];;
          });
          goToSpans.forEach((goTo,index)=>{
            goTo.innerText = ranges[index].value;
          });
        },timerValues);  
    
      
     }
    else{

      setTimeout(()=>{
        ranges.forEach((range,index)=>{
          range.value = actualCoordsEsp[index];
        })
        
        goToSpans.forEach((goTo,index)=>{
          goTo.innerText = ranges[index].value;
        })
      },timerValues);
    }
    
      statusCode = result.status;
      write(result.message);
      if(statusCode != 1){
        popUpNotificateBad(statusCode,result.message);
      }
      else{
        popUpNotificateGood(statusCode,result.message);
      }
      
    });

    // Enviar mensaje al servidor
    goal.send();

  }

function toRad(grados) {
  let rads=[];
  if(typeof(grados)=="object"){
    grados.forEach((grado,index)=>{
      rads[index] = (grado * Math.PI) / 180;
    });
    return rads;
  }
  else{
    return (grados * Math.PI) / 180;
  }
  }
function toDeg(radianes) {
  let degs=[];
  if(typeof(radianes)=="object"){
    radianes.forEach((radian,index)=>{
      degs[index] = (radian * 180) / Math.PI;
    });
    return degs;
  }
  else{
    return (radianes * 180) / Math.PI;
  }
  }
function conectar() {
    
    // Connecting to ROS
    // -----------------
    if (conectado) {
      listener.unsubscribe();
      listener2.unsubscribe();
      ros.close();
      conectado = false;

    } else {
      ros = new ROSLIB.Ros({
        url: 'ws://'+rosIpDir      //'ws://www.cxn2.local:9090'
      });
    }
    // Topico de coordenadas cartesianas

    listener = new ROSLIB.Topic({
        ros: ros,
        name: '/niryo_one/robot_state',
        messageType: 'niryo_one_msgs/RobotState'
      });

      listener.subscribe(function (message) {
        //console.log(message);
        //listener.unsubscribe();
        actualCoordsEsp = [
          message.position.x,
          message.position.y,
          message.position.z,
          message.rpy.roll,
          message.rpy.pitch,
          message.rpy.yaw
        ]
        actualCoordsEsp.forEach((coord,index)=>{
            if(index >= 3){
                actualCoordsEsp[index] = toDeg(actualCoordsEsp[index]);
            }
            else{
               actualCoordsEsp[index] = parseInt(1000*actualCoordsEsp[index])
            }
        });

        if(coordenadasSelect.value == "espaciales"){
            actualPositionSpans.forEach((span,index)=>{
              if(index<=2){
                span.innerText = actualCoordsEsp[index];
              }
              else{
                span.innerText = actualCoordsEsp[index].toFixed(3);
              }
                
            })
        }

      });



    //********** topico "joints_state" (angulos actual)*****************************************
    listener2 = new ROSLIB.Topic({
      ros: ros,
      name: '/joint_states',
      messageType: 'sensor_msgs/JointState'
    });

    listener2.subscribe(function (message2) {
      //console.log(message);
      //listener.unsubscribe();
      
      
      actualCoordsArt = toDeg(message2.position);
      if(coordenadasSelect.value == "articulares"){
        actualPositionSpans.forEach((span,index)=>{
        span.innerText = actualCoordsArt[index].toFixed(3);
        })
      }
    });

    //**************topico que reporta el enable, velocidad, sistema y modo */

    listener3 = new ROSLIB.Topic({
      ros: ros,
      name: '/get_info',
      messageType: ''
    });

    listener3.subscribe(function(message3) {
      speedInfo.innerText = message3.speed;
      motorInfo.innerText = message3.info;
      referenceInfo.innerText = message3.reference;
      modeInfo.innerText = message3.mode;
    })

    //document.getElementById("T1").value = toDeg(PActual_ang.position[0]).toFixed(1);

    //*************************************************************************
    //Si hay ERROR en el back-end de ROS
    ros.on('error', function (error) {
      alert("Error");
    });

    ros.on('connection', function () {
      console.log('Connection made!');
      conectado = true;
    });

    ros.on('close', function () {
      console.log('Connection closed.');
      conectado = false;
    });
  }
function enable() {
    var Hab_Des = new ROSLIB.Message({data: 1}); // topico "enable_motors" = 1    
    var EnableMot = new ROSLIB.Topic({
      ros : ros,
      name : '/enable_motors',
      messageType : 'std_msgs/Int16'
    });
    
    EnableMot.publish(Hab_Des);
  }
function setSpeed(speed) {
    var Servicio = new ROSLIB.Service({
      ros: ros,
      name: '/niryo_one/commander/set_max_velocity_scaling_factor',
      serviceType: 'niryo_one_msgs/SetInt'
    });

    // Then we create a Service Request. 
    var request = new ROSLIB.ServiceRequest({
      value: speed
    });

    Servicio.callService(request, function (result) {
      console.log('ResultServiceVelocidad: ' + result.message);
      console.log("Result: "+result.status);
    });

  }
function cambioSistema(sistem) {
    
    

    // Calling a service
    // -----------------

    // First, we create a Service client with details of the service's name and service type.
    var Servicio = new ROSLIB.Service({
      ros: ros,
      name: '/niryo_one/commander/set_reference_frame',
      serviceType: 'niryo_one_msgs/SetString'
    });

    // Then we create a Service Request. 
    var request = new ROSLIB.ServiceRequest({
      value: sistem
    });

    Servicio.callService(request, function (result) {
      console.log('ResultService: ' + result.message);
    });

  }

  function setGripper(newGripperPosition) {

    if(newGripperPosition>100 || newGripperPosition<0){
      return;
    }
    var Servicio = new ROSLIB.Service({
      ros: ros,
      name: 'niryo_one/tools/open_gripper',
      serviceType: 'niryo_one_msgs/OpenGripper'
    });

    // Then we create a Service Request. 
    var request = new ROSLIB.ServiceRequest({
      id: 11,
      open_position: newGripperPosition,
      open_speed: 100,
      open_hold_torque: 100 
    });

    Servicio.callService(request, function (result) {
      console.log('ResultServiceGripper: ' + result.state);
      console.log("Result: "+result.state);
    });

  }

function write(text){
  d = new Date();
  headerNotiDiv.innerHTML = "<p>"+ "[ "+d.getDate()+" / "+(1+d.getMonth())+" ] "+"["+d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds()+" ] "+text+"</p>" + headerNotiDiv.innerHTML;
}

// Helio Blockly


    
		var xmlText;
		var codigo;
		var listaSec;
		var Secuencias;
		var code;
		var EspacioTrabajo = Blockly.inject("DivBlockly" , { toolbox: document.getElementById('toolbox') }, )
		
		function myUpdateFunction(event) {
  			code = Blockly.Python.workspaceToCode(EspacioTrabajo);
  			document.getElementById('CodigoResultante').value = code;
			var xmlDom = Blockly.Xml.workspaceToDom(EspacioTrabajo);
			xmlText = Blockly.Xml.domToPrettyText(xmlDom);
		}
		EspacioTrabajo.addChangeListener(myUpdateFunction);

		function MostrarCodigo() {
			//var codigo = Blockly.JavaScript.workspaceToCode(EspacioTrabajo);
			//document.getElementById("CodigoResultante").innerHTML = codigo;
			codigo = Blockly.Python.workspaceToCode(EspacioTrabajo);
			document.getElementById("CodigoResultante").innerHTML = codigo;
			showXML();
		}
		function showXML() {
			// Generate XML code and display it.
			var xmlDom = Blockly.Xml.workspaceToDom(EspacioTrabajo);
			xmlText = Blockly.Xml.domToPrettyText(xmlDom);
			alert(xmlText);  
    }
    function ServicioSecuencia(comando, sec_id, name, desc, xml, python) {

			var ServicioSec= new ROSLIB.Service({
			ros: ros,
			name: '/niryo_one/sequences/manage_sequence',
			serviceType: 'niryo_one_msgs/ManageSequence'
			});


			// Then we create a Service Request. 
			var request = new ROSLIB.ServiceRequest({
				cmd_type: comando,
				sequence_id: sec_id,
				sequence: {
					id: 0, 
					name: name, 
					description: desc, 
					created: 0, 
					updated: 0, 
					blockly_xml: xml,
					python_code: python
				}
			});

			com = comando;

			ServicioSec.callService(request, function (result) {

				console.log('mensaje: ' + result.message);
				
				if (com=='1') {   //Mostrar codigo python en textArea y bloques en workspace
					document.getElementById("CodigoResultante").innerHTML = result.sequence.python_code;
					xml=Blockly.Xml.textToDom(result.sequence.blockly_xml); 
					Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, EspacioTrabajo);
					blockSaveTaskDescription.value = result.sequence.name;
					blockSaveTaskDescription.value = result.sequence.description;
				}

			});
		}

		//#########################################################3
		function VerTarea() {
			SecElegida=blockSelectTask.value;
      blockTitleH3.innerText = blockSelectTask.options[blockSelectTask.selectedIndex].text;
			ServicioSecuencia(1,parseInt(SecElegida),'','','','');    //comando = 1 -GET / sec_id - elegir ID de secuencia
		}

		//********************************************************
		function GuardarTarea() {
			var nombre = blockSaveTaskName.value;
			var descripcion = blockSaveTaskDescription.value;
			ServicioSecuencia(2,0,nombre,descripcion,xmlText,code);   //comando = 2 -- CREATE
			ActualizarListaTareas();
      SecElegida= nombre;
      blockTitleH3.innerText = nombre;
			ServicioSecuencia(1,parseInt(SecElegida),'','','','');    //comando = 1 -GET / sec_id - elegir ID de secuencia
		}

		//*******************************************************
		function ActualizarTarea() {
			SecElegida=blockSelectTask.value;
			var nombre = blockSaveTaskName.value;
			var descripcion = blockSaveTaskDescription.value;
			var xmlDom = Blockly.Xml.workspaceToDom(EspacioTrabajo);
			xmlText = Blockly.Xml.domToPrettyText(xmlDom);
			ServicioSecuencia(3,parseInt(SecElegida),nombre,descripcion,xmlText,code);  //comando = 3 -- UPDATE
		}

		//*******************************************************
		function BorrarTarea() {
			SecElegida=blockSelectTaskToDelete.value;
			ServicioSecuencia(4,parseInt(SecElegida),'','','','');  //comando = 4 -- DELETE
			ActualizarListaTareas();
		}
    
		//###########################################################################

    function nuevaTarea(){
      blockSelectTask.value = null;
      blockTitleH3.innerText = "Nueva Tarea";
      EspacioTrabajo.clear();
    }
    	//###########################################################################
    var goal2;
		function ActionClientSecuencia(sec_id,cmd,fileName) {

			Cliente = new ROSLIB.ActionClient({
				ros: ros,
				serverName: 'niryo_one/sequences/execute',
				actionName: 'niryo_one_msgs/SequenceAction'
			});

			// **************** Crer el mensaje ********************
			  goal2 = new ROSLIB.Goal({
				actionClient: Cliente,
				goalMessage: {
					cmd_type: cmd,
					sequence_id: sec_id,
					sequence: {id: 0, name: '', description: '', created: 0, updated: 0, blockly_xml: '',
					python_code: ''},
          file: fileName,
				}
			});

			//Feedback y result
			goal2.on('feedback', function (feedback) {
				console.log('Feedback: ' + feedback.message);
        console.log("asd");
			});
			goal2.on('result', function (result) {
				console.log('Final Result: ' + result.message);
        if (result.code == 1){
          popUpNotificateBad(result.code,"Error")
        }
        else{
          popUpNotificateGood(result.code,result.message)
        }
        
			});

			// Enviar mensaje al servidor
			goal2.send();

		}

		//*************************************************
		function EjecutarTarea() {
			SecElegida=blockSelectTask.value;
			ActionClientSecuencia(parseInt(SecElegida),3,"");  //parametro: ID de la secuencia a ejecutar
		}
    function CancelarTarea() {
			goal2.cancel();
		}

		//-###############################################################################
		function ActualizarListaTareas() {
			var Servicio = new ROSLIB.Service({
				ros: ros,
				name: '/niryo_one/sequences/get_sequence_list',
				serviceType: 'niryo_one_msgs/GetSequenceList'
			});

			var request = new ROSLIB.ServiceRequest({info_header_only: false});

			Servicio.callService(request, function (result) {

				Secuencias = result.sequences;

				listaSec = blockSelectTask;

				for (let i = listaSec.options.length; i >= 0; i--) {
					listaSec.remove(i);
				}

				for (let index = 0; index < Secuencias.length; index++) {
					var option = document.createElement("option");
					option.text = Secuencias[index].name;
					option.value = Secuencias[index].id;
					listaSec.add(option);
				}

        listaSec = blockSelectTaskToDelete;

        for (let i = listaSec.options.length; i >= 0; i--) {
					listaSec.remove(i);
				}

				for (let index = 0; index < Secuencias.length; index++) {
					var option = document.createElement("option");
					option.text = Secuencias[index].name;
					option.value = Secuencias[index].id;
					listaSec.add(option);
				}
			});
		}


// 


//Evt listenesr blockly

blockSendSaveAsBtn.addEventListener("click",()=>{
  GuardarTarea();
})

blockOpenTaskBtn.addEventListener("click",()=>{
  ActualizarListaTareas();
})

blockSelectTask.addEventListener("change",()=>{
  VerTarea();
})

blockOverwriteTaskBtn.addEventListener("click",()=>{
  ActualizarTarea();
})

blockDeleteTaskBtn2.addEventListener("click",()=>{
  if(confirm("Borrar?")){
    BorrarTarea();
    console.log("adios");
  }
  popUpNotificateGood("","Tarea borrada con exito");
  blockDeleteTaskDiv.style.display = "none"
  
})

blockRunTaskBtn.addEventListener("click",()=>{
  EjecutarTarea();
  if(blockSelectTask.value == null){
    popUpNotificateBad("Error","Tarea selccionada");
  }
  popUpNotificateGood("Exito","Ejecutando");
})

blockStopTaskBtn.addEventListener("click",()=>{
  CancelarTarea();
})

blockNewTaskBtn.addEventListener("click",()=>{
  nuevaTarea();
})


    //#region POp ups




    function popUpNotificateBad(code,text){
      popUpH.innerText = "Error "+code;
      popUpP.innerText = text;
      popUpDiv.style.display="block";
      popUpDiv.style.background="red";
      popUpTop.style.background="red";
      popUpDiv.style.top = "1vh"
      popUpDiv.style.left = "40vw"
      popUpDiv.style.opacity = "1"
      interval = setTimeout(()=>{
          popUpDiv.style.display="none";
      },4000)
      
  }


  function popUpNotificateGood(code,text){
    popUpH.innerText = "Exito "//+code;
    popUpP.innerText = text;
    popUpDiv.style.display="block";
    popUpDiv.style.background="green";
    popUpTop.style.background="green";
    popUpDiv.style.top = "79.5vh"
    popUpDiv.style.left = "80vw"
    popUpDiv.style.opacity = "0.95"
    interval = setTimeout(()=>{
        popUpDiv.style.display="none";
    },4000)
    
}
  popUpCloseBtn.addEventListener("click",()=>{
    popUpDiv.style.display="none";
})

// #endregion

// #region programacion en bloques

blockSaveTaskBtn.addEventListener("click",()=>{
  blockSaveDiv.style.display = "flex"
})

blockSaveAsTaskBtn.addEventListener("click",()=>{
  blockSaveDiv.style.display = "none"
  blockSaveAsTaskDiv.style.display = "flex"
})

blockOverwriteTaskBtn.addEventListener("click",()=>{
  blockSaveDiv.style.display = "none"
  popUpNotificateGood("","Tarea guardada con exito")
  
})
blockCloseSaveAsBtn.addEventListener("click",()=>{
  blockSaveAsTaskDiv.style.display = "none";
  
})
blockSendSaveAsBtn.addEventListener("click",()=>{
  blockSaveAsTaskDiv.style.display = "none";
  popUpNotificateGood("","Tarea guardada con exito")
})

blockOpenTaskBtn.addEventListener("click",()=>{
  blockOpenTaskDiv.style.display = "flex"
})
blockCloseOpenTaskBtn.addEventListener("click",()=>{
  blockOpenTaskDiv.style.display = "none"
})
blockSaveCloseBtn.addEventListener("click",()=>{
  blockSaveDiv.style.display = "none"
})

blockDeleteTaskBtn.addEventListener("click",()=>{
  blockDeleteTaskDiv.style.display = "flex";
  ActualizarListaTareas();
})

blockDeleteTaskCloseBtn.addEventListener("click",()=>{
  blockDeleteTaskDiv.style.display = "none";
})

blockSelectTask.addEventListener("change",()=>{
  blockOpenTaskDiv.style.display = "none";
})


//#endregion


function cava(coords){
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(
  `<xml><block type="CXN2_move_joints">
  <value name="JOINTS_1">
      <shadow type="math_number">
        <field name="NUM">${toRad(coords[0])}</field>
      </shadow>
    </value>
  <value name="JOINTS_2">
      <shadow type="math_number">
        <field name="NUM">${toRad(coords[1])}</field>
      </shadow>
    </value>
  <value name="JOINTS_3">
      <shadow type="math_number">
        <field name="NUM">${toRad(coords[2])}</field>
      </shadow>
    </value>
  <value name="JOINTS_4">
      <shadow type="math_number">
        <field name="NUM">${toRad(coords[3])}</field>
      </shadow>
    </value>
  <value name="JOINTS_5">
      <shadow type="math_number">
        <field name="NUM">${toRad(coords[4])}</field>
      </shadow>
    </value>
    <value name="JOINTS_6">
      <shadow type="math_number">
        <field name="NUM">${toRad(coords[5])}</field>
      </shadow>
    </value>
</block></xml>`),EspacioTrabajo)
}


anadirPuntoBlocklyBtn.addEventListener("click",()=>{
  cava(actualCoordsArt)
})




















//  #region settings 


// variables

let settingsCoordSistsBtn = document.getElementById("settings-coord-sists-btn")
let settingsPointsBtn = document.getElementById("settings-points-btn")
let settingsToolsBtn = document.getElementById("settings-tools-btn")
let settingsIosBtn = document.getElementById("settings-ios-btn")

let settingsCoordSistsDiv = document.getElementById("settings-coord-sists-div")
let settingsPointsDiv = document.getElementById("settings-points-div")


// transiciones

settingsCoordSistsBtn.addEventListener("click",()=>{
  settingsDiv.style.display = "none"
  settingsCoordSistsDiv.style.display = "flex"
})
settingsPointsBtn.addEventListener("click",()=>{
  settingsDiv.style.display = "none"
  settingsPointsDiv.style.display = "flex"
})

// #endregion



// #region points


//variables

let settingsPointsSelectedH3 = document.getElementById("settings-points-selected-h3")
let settingsPointsQ1Input = document.getElementById("settings-points-q1-input")
let settingsPointsQ2Input = document.getElementById("settings-points-q2-input")
let settingsPointsQ3Input = document.getElementById("settings-points-q3-input")
let settingsPointsQ4Input = document.getElementById("settings-points-q4-input")
let settingsPointsQ5Input = document.getElementById("settings-points-q5-input")
let settingsPointsQ6Input = document.getElementById("settings-points-q6-input")
let settingsPointsXInput = document.getElementById("settings-points-x-input")
let settingsPointsYInput = document.getElementById("settings-points-y-input")
let settingsPointsZInput = document.getElementById("settings-points-z-input")
let settingsPointsRxInput = document.getElementById("settings-points-rx-input")
let settingsPointsRyInput = document.getElementById("settings-points-ry-input")
let settingsPointsRzInput = document.getElementById("settings-points-rz-input")
let settingsPointsSelect = document.getElementById("settings-points-select")

let settingsPointsCreate = document.getElementById("settings-points-create")
let settingsPointsDelete = document.getElementById("settings-points-delete")
let settingsPointsUpdate = document.getElementById("settings-points-update")
let settingsPointsPosAct = document.getElementById("settings-points-pos-act")
let settingsPointsOpen = document.getElementById("settings-points-open")

let settingsPointsPopupMenuDiv = document.getElementById("settings-points-popup-menu-div")
let settingsPointsPopupMenuClose= document.getElementById("settings-points-popup-menu-close")
let settingsPointsPopupNewDiv = document.getElementById("settings-points-popup-new-div")
let settingsPointsPopupNewName = document.getElementById("settings-points-popup-new-name")
let settingsPointsPopupNewSend = document.getElementById("settings-points-popup-new-send")

let settingsPointsPopupOpenDiv = document.getElementById("settings-points-popup-open-div")

let settingsPointsPopups = [
  settingsPointsPopupNewDiv,
  settingsPointsPopupOpenDiv,
]
// Gestion del menu

settingsPointsCreate.addEventListener("click",()=>{
  settingsPointsPopupMenuDiv.style.display = "flex"
  settingsPointsPopupNewDiv.style.display = "flex"
})
settingsPointsPopupMenuClose.addEventListener("click",()=>{
  settingsPointsPopupMenuDiv.style.display = "none"
  settingsPointsPopupNewDiv.style.display = "none"
  settingsPointsPopupOpenDiv.style.display = "none"
})
settingsPointsPopupNewSend.addEventListener("click",()=>{
  settingsPointsPopupMenuDiv.style.display = "none"
  GuardarPunto(settingsPointsPopupNewName.value)
})

settingsPointsOpen.addEventListener("click",()=>{
  settingsPointsPopupMenuDiv.style.display = "flex"
  settingsPointsPopupOpenDiv.style.display = "flex"
  ActualizarListaPuntos()
})
// ----------


// Interacciones 

settingsPointsSelect.addEventListener("change",()=>{
  settingsPointsPopupMenuDiv.style.display = "none"
  settingsPointsPopupOpenDiv.style.display = "none"
  VerPunto()
  settingsPointsSelectedH3.innerText = settingsPointsSelect.value
})


// 
function GuardarPunto(name) {
  let coords = [
    toRad(parseFloat(settingsPointsQ1Input.value)),
    toRad(parseFloat(settingsPointsQ2Input.value)),
    toRad(parseFloat(settingsPointsQ3Input.value)),
    toRad(parseFloat(settingsPointsQ4Input.value)),
    toRad(parseFloat(settingsPointsQ5Input.value)),
    toRad(parseFloat(settingsPointsQ6Input.value)),
  ]
  ServicioPuntos(2,coords,name); //comando = 2 es para crear punto
}

//##################################################################
function ServicioPuntos(comando, coord, nombre_punto) {

  var Servicio = new ROSLIB.Service({
    ros: ros,
    name: '/niryo_one/position/manage_position',
    serviceType: 'niryo_one_msgs/ManagePosition'
  });

  var orient = new ROSLIB.Quaternion({ x: 0, y: 0, z: 0, w: 1.0 });

  // Then we create a Service Request. 
  var request = new ROSLIB.ServiceRequest({
    cmd_type: comando,
    position_name: nombre_punto,
    position: {
      name: nombre_punto,
      joints: [coord[0], coord[1], coord[2], coord[3], coord[4], coord[5]],
      rpy: {
        roll: 0.0,
        pitch: 0.0,
        yaw: 0.0
      },
      point: {
        x: 0.0,
        y: 0.0,
        z: 0.0
      },
      quaternion: orient
    }
  });

  com = comando;

  Servicio.callService(request, function (result) {

    console.log('mensaje; ' + result.message);
    //console.log('punto; ' + result.position.joints);

    if (com == "1") { //si el comando = 1 estamos visualizando un punto
      settingsPointsQ1Input.value = toDeg(result.position.joints[0]).toFixed(2);
      settingsPointsQ2Input.value = toDeg(result.position.joints[1]).toFixed(2);
      settingsPointsQ3Input.value = toDeg(result.position.joints[2]).toFixed(2);
      settingsPointsQ4Input.value = toDeg(result.position.joints[3]).toFixed(2);
      settingsPointsQ5Input.value = toDeg(result.position.joints[4]).toFixed(2);
      settingsPointsQ6Input.value = toDeg(result.position.joints[5]).toFixed(2);
      settingsPointsXInput.value = result.position.point.x.toFixed(3);
      settingsPointsYInput.value = result.position.point.y.toFixed(3);
      settingsPointsZInput.value = result.position.point.z.toFixed(3);
      settingsPointsRxInput.value = toDeg((result.position.rpy.roll).toFixed(2));
      settingsPointsRyInput.value = toDeg((result.position.rpy.pitch).toFixed(2));
      settingsPointsRzInput.value = toDeg((result.position.rpy.yaw).toFixed(2));
    }
  });
}

//-###############################################################################
function ActualizarListaPuntos() {

  var Servicio = new ROSLIB.Service({
    ros: ros,
    name: '/niryo_one/position/get_position_list',
    serviceType: 'niryo_one_msgs/GetPositionList'
  });

  var request = new ROSLIB.ServiceRequest({});

  Servicio.callService(request, function (result) {

    Puntos = result.positions;

    for (let i = settingsPointsSelect.options.length; i >= 0; i--) {
      settingsPointsSelect.remove(i);
    }

    var opt = document.createElement('option');
        opt.value = "";
        opt.innerHTML = "Seleccione";
        opt.setAttribute("hidden","true")
        settingsPointsSelect.appendChild(opt);
        settingsPointsSelect.value = ""

    for (let index = 0; index < Puntos.length; index++) {
      settingsPointsSelect.add(new Option(Puntos[index].name,Puntos[index].name))
    }

  });
}

//#############################################################3
function VerPunto() {
  var nombre = settingsPointsSelect.value;
  var coord = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
  ServicioPuntos(1, coord, nombre); //comando = 1 es para leer un punto
}

// #endregion 

// #region programacion textual

ace.require("ace/ext/language_tools");
    var editor = ace.edit("prog-text-editor");
    editor.session.setMode("ace/mode/python");
    editor.setTheme("ace/theme/one_dark");
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
    editor.commands.addCommand({
        name: 'myCommand',
        bindKey: {win: 'Ctrl-k',  mac: 'Command-M'},
        exec: function(editor) {
            editor.insert("JEJE")
        },
        readOnly: true,
    });
    editor.setShowPrintMargin(false);


// function progTextGetCode(){
//     return fetch("01.py")
//     .then(function(response){
//         return response.text();
//     })
//     .then(function(data){
//         return data
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// 
// }
// function progTextGenCode(code){ 
//     editor.insert(code)
// }
// function progTextFileToIde(){
//     progTextGetCode().then(response => progTextGenCode(response));
// }
// function progTextIdeToFile(){
//     let code = editor.getValue()
// }

function progTextActPosToIde(actPos){
    editor.insert(`CXN2.move_joints([${actPos[0]},${actPos[1]},${actPos[2]},${actPos[3]},${actPos[4]},${actPos[5]}])`)
}



// parte de menus e interacciones con ros

let progTextSaveAsTaskBtn = document.getElementById("prog-text-save-as-task-btn");
let progTextOverwriteTaskBtn = document.getElementById("prog-text-overwrite-task-btn");
let progTextSaveAsTaskDiv = document.getElementById("prog-text-save-as-task-div");
let progTextSaveTaskBtn = document.getElementById("prog-text-save-task-btn");
let progTextSaveTaskName = document.getElementById("prog-text-save-task-name");

let progTextSaveDiv = document.getElementById("prog-text-save-div");
let progTextCloseSaveAsBtn = document.getElementById("prog-text-close-save-as-btn");
let progTextSendSaveAsBtn = document.getElementById("prog-text-send-save-as-btn");
let progTextOpenTaskBtn = document.getElementById("prog-text-open-task-btn");
let progTextOpenTaskDiv = document.getElementById("prog-text-open-task-div");
let progTextCloseOpenTaskBtn = document.getElementById("prog-text-close-open-task-btn");
let progTextSelectTask = document.getElementById("prog-text-select-task");
let progTextDeleteTaskBtn = document.getElementById("prog-text-delete-task-btn");
let progTextRunTaskBtn = document.getElementById("prog-text-run-task-btn");
let progTextSaveCloseBtn = document.getElementById("prog-text-save-close-btn");
let progTextNewTaskBtn = document.getElementById("prog-text-new-task-btn");
let progTextTitleH3 = document.getElementById("prog-text-title-h3");
let progTextDeleteTaskDiv = document.getElementById("prog-text-delete-task-div");
let progTextDeleteTaskCloseBtn = document.getElementById("prog-text-delete-task-close-btn");
let progTextSelectTaskToDelete = document.getElementById("prog-text-select-task-to-delete");
let progTextDeleteTaskBtn2 = document.getElementById("prog-text-delete-task-btn-2");
let progTextStopTaskBtn = document.getElementById("prog-text-stop-task-btn");


// Botones inferiores

progTextNewTaskBtn.addEventListener("click",()=>{
  editor.setValue("")
  progTextTitleH3.innerText = "Nueva Tarea"
  progTextSelectTask.value = ""
})

progTextSaveTaskBtn.addEventListener("click",()=>{
  progTextSaveDiv.style.display = "flex"
})

progTextSaveAsTaskBtn.addEventListener("click",()=>{
  progTextSaveDiv.style.display = "none"
  progTextSaveAsTaskDiv.style.display = "flex"
})

progTextSendSaveAsBtn.addEventListener("click",()=>{
  let name = progTextSaveTaskName.value
  let code = editor.getValue()
  codeFileManagerService("save",name,code)
  progTextSaveAsTaskDiv.style.display = "none";
  popUpNotificateGood("","Tarea guardada con exito");
  progTextSelectTask.value = progTextSaveTaskName.value
  progTextTitleH3.innerText = progTextSaveTaskName.value
})

progTextOverwriteTaskBtn.addEventListener("click",()=>{
  let name = progTextSelectTask.value
  if (name == null){
    popUpNotificateBad("","Tarea no seleccionada")
  }
  else{
    let code = editor.getValue()
    codeFileManagerService("save",name,code)
    progTextSaveDiv.style.display = "none"
    popUpNotificateGood("","Tarea guardada con exito")
  }
})

progTextDeleteTaskBtn.addEventListener("click",()=>{
  progTextDeleteTaskDiv.style.display = "flex";
  codeFileManagerService("getFiles")
})

progTextDeleteTaskBtn2.addEventListener("click",()=>{
  if(confirm("Borrar?")){
    let name = progTextSelectTaskToDelete.value
    if (name == null){
      popUpNotificateBad("","Tarea No Seleccionada")
    }
    else{
      codeFileManagerService("delete",name)
      console.log("adios");
      popUpNotificateGood("","Tarea borrada con exito");
      if(name == progTextTitleH3.innerText){
        progTextTitleH3.innerText = "Nueva Tarea";
        editor.setValue("");
        progTextSelectTask.value = "";
      }
    }
  }
  progTextDeleteTaskDiv.style.display = "none";
})

progTextOpenTaskBtn.addEventListener("click",()=>{
  progTextOpenTaskDiv.style.display = "flex"
  codeFileManagerService("getFiles");
})

progTextSelectTask.addEventListener("change",()=>{
  let name = progTextSelectTask.value
  progTextTitleH3.innerText = name
  codeFileManagerService("getFile",name)
  progTextOpenTaskDiv.style.display = "none";
})


progTextRunTaskBtn.addEventListener("click",()=>{
  if(progTextSelectTask.value == null){
    popUpNotificateBad("Error","Tarea selccionada");
  }
  ejecutarTareaProgText()
  popUpNotificateGood("Exito","Ejecutando");
})

progTextStopTaskBtn.addEventListener("click",()=>{
  CancelarTarea()
})


//#region Botones de cierre
progTextCloseSaveAsBtn.addEventListener("click",()=>{
  progTextSaveAsTaskDiv.style.display = "none";
  
})

progTextCloseOpenTaskBtn.addEventListener("click",()=>{
  progTextOpenTaskDiv.style.display = "none"
})

progTextSaveCloseBtn.addEventListener("click",()=>{
  progTextSaveDiv.style.display = "none"
})

progTextDeleteTaskCloseBtn.addEventListener("click",()=>{
  progTextDeleteTaskDiv.style.display = "none";
})
// #endregion




function codeFileManagerService(opCode,fileName="",code="") {
  
  var Servicio = new ROSLIB.Service({
    ros: ros,
    name: '/code_file_manager',
    serviceType: 'code_file_manager/codeFileManager'
  });

  var request = new ROSLIB.ServiceRequest({
    opCode: opCode,
    fileName: fileName,
    code: code,
  });

  Servicio.callService(request, function (result) {
    console.log(result.rsp)
    switch (opCode){
      case "getFiles":
        let files = result.rsp.split("|")
        files.forEach(file=>{
          file.replace(".py","")
        })
        for (let i = progTextSelectTask.options.length; i >= 0; i--) {
          progTextSelectTask.remove(i);
        }
        for (let i = progTextSelectTaskToDelete.options.length; i >= 0; i--) {
          progTextSelectTaskToDelete.remove(i);
        }
        files.forEach(file=>{
          progTextSelectTask.add(
            new Option(file,file,false)
          )
          progTextSelectTaskToDelete.add(
            new Option(file,file,false)
          )
        })
        var opt = document.createElement('option');
        opt.value = "";
        opt.innerHTML = "Seleccione";
        opt.setAttribute("hidden","true")
        progTextSelectTask.appendChild(opt);
        progTextSelectTaskToDelete.appendChild(opt);
        progTextSelectTask.value = ""
        progTextSelectTaskToDelete.value = ""
        break;
      case "getFile":
        code = result.rsp
        console.log(code)
        editor.setValue(code)
        progTextTitleH3.innerText = fileName
        break;
      case "save":
        console.log(result.rsp)
        if (result.rsp == "saved") {
          popUpNotificateGood("","Guardada")
        }
        else{
          popUpNotificateBad("","Error")
        }
        break;
      case "delete":
        if (result.rsp == "deleted") {
          popUpNotificateGood("","Borrada")
        }
        else{
          popUpNotificateBad("","Error")
        }
      }
  });

  
}

function ejecutarTareaProgText() {
  SecElegida=progTextSelectTask.value;
  ActionClientSecuencia(999,4,SecElegida); 
}



// #endregion



