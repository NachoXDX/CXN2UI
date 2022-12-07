// #region variables elio
let fibonacciClient;
let ros;
let conectado = false;
let SistemaCoord = "1";
let listener;
let listener2;

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


//#region elementos html
let incrementBtn1 = document.getElementById("increment-btn-1");
let decrementBtn1 = document.getElementById("decrement-btn-1");
let range1 = document.getElementById("range-1");
let goTo1 = document.getElementById("go-to-1");
let posSpan1 = document.getElementById("pos-span-1");

let incrementBtn2 = document.getElementById("increment-btn-2");
let decrementBtn2 = document.getElementById("decrement-btn-2");
let range2 = document.getElementById("range-2");
let goTo2 = document.getElementById("go-to-2");
let posSpan2 = document.getElementById("pos-span-2");

let incrementBtn3 = document.getElementById("increment-btn-3");
let decrementBtn3 = document.getElementById("decrement-btn-3");
let range3 = document.getElementById("range-3");
let goTo3 = document.getElementById("go-to-3");
let posSpan3 = document.getElementById("pos-span-3");

let incrementBtn4 = document.getElementById("increment-btn-4");
let decrementBtn4 = document.getElementById("decrement-btn-4");
let range4 = document.getElementById("range-4");
let goTo4 = document.getElementById("go-to-4");
let posSpan4 = document.getElementById("pos-span-4");

let incrementBtn5 = document.getElementById("increment-btn-5");
let decrementBtn5 = document.getElementById("decrement-btn-5");
let range5 = document.getElementById("range-5");
let goTo5 = document.getElementById("go-to-5");
let posSpan5 = document.getElementById("pos-span-5");

let incrementBtn6 = document.getElementById("increment-btn-6");
let decrementBtn6 = document.getElementById("decrement-btn-6");
let range6 = document.getElementById("range-6");
let goTo6 = document.getElementById("go-to-6");
let posSpan6 = document.getElementById("pos-span-6");

let conectarBtn = document.getElementById("conectar-btn");
let enableBtn = document.getElementById("enable-btn");


let ranges = [
  range1,
  range2,
  range3,
  range4,
  range5,
  range6
];

let posSpans = [
  posSpan1,
  posSpan2,
  posSpan3,
  posSpan4,
  posSpan5,
  posSpan6
]

let goTos = [
  goTo1,
  goTo2,
  goTo3,
  goTo4,
  goTo5,
  goTo6,
]
//#endregion


// #region variables chona
let interval;
let conectInterval;
let interactionInterval;
let delay = 50;
let conectarDelay = 50;
let interactionDelay = 50;
let actualCoords;
let statusCode = 1;

// #endregion

conectarBtn.addEventListener("click",()=>{
    conectar()
    conectInterval = setInterval(()=>{
        if(typeof(actualCoords) == "undefined"){

        }
        else{
          ranges.forEach((range,index)=>{
            range.value = actualCoords[index];
          })
          
          goTos.forEach((goTo,index)=>{
            goTo.innerText = ranges[index].value;
          })

          conectInterval = clearInterval(conectInterval);
        }
    },conectarDelay)
});

enableBtn.addEventListener("click",()=>{enable()});

interactionInterval = setInterval(()=>{
    if(statusCode == 1){
        range1.style.pointerEvents = "auto";
        incrementBtn1.style.pointerEvents = "auto";
        decrementBtn1.style.pointerEvents = "auto";

        range2.style.pointerEvents = "auto";
        incrementBtn2.style.pointerEvents = "auto";
        decrementBtn2.style.pointerEvents = "auto";

        range3.style.pointerEvents = "auto";
        incrementBtn3.style.pointerEvents = "auto";
        decrementBtn3.style.pointerEvents = "auto";

        range4.style.pointerEvents = "auto";
        incrementBtn4.style.pointerEvents = "auto";
        decrementBtn4.style.pointerEvents = "auto";

        range5.style.pointerEvents = "auto";
        incrementBtn5.style.pointerEvents = "auto";
        decrementBtn5.style.pointerEvents = "auto";

        range6.style.pointerEvents = "auto";
        incrementBtn6.style.pointerEvents = "auto";
        decrementBtn6.style.pointerEvents = "auto";
    }
    else{
        
        range1.style.pointerEvents = "none";
        incrementBtn1.style.pointerEvents = "none";
        decrementBtn1.style.pointerEvents = "none";
    
        range2.style.pointerEvents = "none";
        incrementBtn2.style.pointerEvents = "none";
        decrementBtn2.style.pointerEvents = "none";
    
        range3.style.pointerEvents = "none";
        incrementBtn3.style.pointerEvents = "none";
        decrementBtn3.style.pointerEvents = "none";
    
        range4.style.pointerEvents = "none";
        incrementBtn4.style.pointerEvents = "none";
        decrementBtn4.style.pointerEvents = "none";
    
        range5.style.pointerEvents = "none";
        incrementBtn5.style.pointerEvents = "none";
        decrementBtn5.style.pointerEvents = "none";
    
        range6.style.pointerEvents = "none";
        incrementBtn6.style.pointerEvents = "none";
        decrementBtn6.style.pointerEvents = "none";
        
    }
},interactionDelay)

// #region eventos
// #region ranges

range1.addEventListener("change",()=>{
    mover();
});

range1.addEventListener("mousedown",()=>{
    interval = setInterval(()=>{
        goTo1.innerText = range1.value;
    },delay)
});

range1.addEventListener("mouseup",()=>{
    interval = clearInterval(interval);
});

range1.addEventListener("touchmove",()=>{
    interval = setInterval(()=>{
        goTo1.innerText = range1.value;
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
        goTo2.innerText = range2.value;
    },delay)
});

range2.addEventListener("mouseup",()=>{
    interval = clearInterval(interval);
});

range2.addEventListener("touchmove",()=>{
    interval = setInterval(()=>{
        goTo2.innerText = range2.value;
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
        goTo3.innerText = range3.value;
    },delay)
});

range3.addEventListener("mouseup",()=>{
    interval = clearInterval(interval);
});

range3.addEventListener("touchmove",()=>{
    interval = setInterval(()=>{
        goTo3.innerText = range3.value;
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
        goTo4.innerText = range4.value;
    },delay)
});

range4.addEventListener("mouseup",()=>{
    interval = clearInterval(interval);
});

range4.addEventListener("touchmove",()=>{
    interval = setInterval(()=>{
        goTo4.innerText = range4.value;
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
        goTo5.innerText = range5.value;
    },delay)
});

range5.addEventListener("mouseup",()=>{
    interval = clearInterval(interval);
});

range5.addEventListener("touchmove",()=>{
    interval = setInterval(()=>{
        goTo5.innerText = range5.value;
    },delay)
});

range5.addEventListener("touchend",()=>{
    interval = clearInterval(interval);
});


range6.addEventListener("change",()=>{
    mover();
});

range6.addEventListener("mousedown",()=>{
    interval = setInterval(()=>{
        goTo6.innerText = range6.value;
    },delay)
});

range6.addEventListener("mouseup",()=>{
    interval = clearInterval(interval);
});

range6.addEventListener("touchmove",()=>{
    interval = setInterval(()=>{
        goTo6.innerText = range6.value;
    },delay)
});

range6.addEventListener("touchend",()=>{
    interval = clearInterval(interval);
});

//#endregion
//#region botones

incrementBtn1.addEventListener("click",()=>{
    range1.value = parseFloat(range1.value) + 1;
    mover();
});

decrementBtn1.addEventListener("click",()=>{
    range1.value = parseFloat(range1.value) - 1;
    mover();
});

incrementBtn2.addEventListener("click",()=>{
    range2.value = parseFloat(range2.value) + 1;
    mover();
});

decrementBtn2.addEventListener("click",()=>{
    range2.value = parseFloat(range2.value) - 1;
    mover();
});

incrementBtn3.addEventListener("click",()=>{
    range3.value = parseFloat(range3.value) + 1;
    mover();
});

decrementBtn3.addEventListener("click",()=>{
    range3.value = parseFloat(range3.value) - 1;
    mover();
});

incrementBtn4.addEventListener("click",()=>{
    range4.value = parseFloat(range4.value) + 1;
    mover();
});

decrementBtn4.addEventListener("click",()=>{
    range4.value = parseFloat(range4.value) - 1;
    mover();
});

incrementBtn5.addEventListener("click",()=>{
    range5.value = parseFloat(range5.value) + 1;
    mover();
});

decrementBtn5.addEventListener("click",()=>{
    range5.value = parseFloat(range5.value) - 1;
    mover();
});

incrementBtn6.addEventListener("click",()=>{
    range6.value = parseFloat(range6.value) + 1;
    mover();
});

decrementBtn6.addEventListener("click",()=>{
    range6.value = parseFloat(range6.value) - 1;
    mover();
});

//#endregion
// #endregion




function mover() {
    if(statusCode == 1){
      statusCode = 3;    
      let coords = []
      ranges.forEach((range,index)=>{
        coords[index] = toRad(parseFloat(range.value));
      });
      enviarActionClient(coords);
    }
    else{
        console.log("Ocupado");
    }
  }
function enviarActionClient(coord) {



    //************ variables para el mensaje *****************************
    //FIjo que sea articulares definiendo comando como 1

    let comandoNumero = 1;
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
      console.log('Feedback: ' + feedback.message);;
    });
    goal.on('result', function (result) {
      console.log('Final Result: ' + result.message);
      
      ranges.forEach((range,index)=>{
        range.value = actualCoords[index];
      })
      
      goTos.forEach((goTo,index)=>{
        goTo.innerText = ranges[index].value;
      })

      statusCode = result.status;
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
        url: 'ws://169.254.200.200:9090'      //'ws://www.cxn2.local:9090'
      });
    }
    //********** topico "joints_state" (angulos actual)*****************************************
    listener2 = new ROSLIB.Topic({
      ros: ros,
      name: '/joint_states',
      messageType: 'sensor_msgs/JointState'
    });

    listener2.subscribe(function (message2) {
      //console.log(message);
      //listener.unsubscribe();
      
      
      actualCoords = toDeg(message2.position);

      posSpans.forEach((span,index)=>{
        span.innerText = actualCoords[index].toFixed(1);
      })
      
    });

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



  // Notas de la version
  // mejor toRad, ahora acepta arrays
  // mejor toDeg, ahora acepta arrays
  // anadido enable
  // codigo mas sintetico con forEach
  // a testear, carga de valores automaticos tras conectar
  // a testear, movimiento con barras
  // a testear, moviemiento de 1deg con botones
  // a testear, bloqueo de interaccion 
  // a testear, actualizacion de rangos tras moverse
  // a testear, mover() envia los valores de los rangos a enviarActionClient