<?php
    if(isset($_POST['BotonLeer']))
    {
        //$texto = file_get_contents("/home/elio/catkin_ws/src/niryo_one_ros/ejemploComandos.txt"); 
        //$texto = nl2br($texto); 
        //echo "<p>$texto</p>"; 
        
        $fp = fopen("/home/elio/catkin_ws/src/niryo_one_ros/niryo_one_python_api/examples/rpi_example_python_api.py", "r");
        
        $numlineas = 0;

        while(!feof($fp)){
           $linea = fgets($fp);
           $array_linea[] = $linea;
           $numlineas++;
            
           $contenido = $contenido . $linea . chr(13) . chr(10);

           //if ($linea == ""){
            //   echo "linea vacia";
           //}else {
            //   echo nl2br($linea);
           //}
           
        }
        //echo '<br/>'."numero de lineas: $numlineas";
        fclose($fp);
    }

    if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['BotonEjecutar']))
    {
        //$salida = shell_exec('source ~/.bashrc && export PYTHONPATH=${PYTHONPATH}:/home/elio/catkin_ws/src/niryo_one_ros/niryo_one_python_api/src/niryo_one_python_api && python /home/elio/catkin_ws/src/niryo_one_ros/niryo_one_python_api/examples/rpi_example_python_api.py 2>&1');
        //$salida = shell_exec('export PYTHONPATH=/home/elio/catkin_ws/devel/lib/python2.7/dist-packages:/opt/ros/kinetic/lib/python2.7/dist-packages:/home/elio/catkin_ws/src/niryo_one_ros/niryo_one_python_api/src/niryo_one_python_api && python /home/elio/catkin_ws/src/niryo_one_ros/CXNiryo.py -a /home/elio/catkin_ws/src/niryo_one_ros/ejemploComandos.txt 2>&1');
        //$salida = shell_exec("python /home/elio/catkin_ws/src/niryo_one_ros/niryo_one_python_api/examples/rpi_example_python_api.py 2>&1");
        
        $salida = shell_exec('sh ejecutarRutina.sh 2>&1');
        echo "<p>$salida</p>";
        

        // $cmd = 'ejecutarRutina.sh 2>&1';

        // $ret = shell_exec($cmd);

        // if (empty(ret)) {

        //     print_r("---success---\n");
        //     print_r(ret)

        // } else {

        //     print_r("---failed---\n");

        // }

        // print_r("---the end---\n");
        
    }

?> 