#!/bin/bash
#bash /home/niryo/catkin_ws/devel/setup.bash
#export PYTHONPATH=/home/niryo/catkin_ws/devel/lib/python2.7/dist-packages:/opt/ros/kinetic/lib/python2.7/dist-packages:/home/niryo/catkin_ws/src/niryo_one_python_api/src/niryo_one_python_api
#python /home/niryo/catkin_ws/src/niryo_one_ros/niryo_one_python_api/examples/CXN2_rutina1.py  
whoami
exec su niryo --command 'sshpass -p "robotics" ssh niryo@169.254.200.200 "source ~/catkin_ws/devel/setup.bash && export PYTHONPATH=${PYTHONPATH}:/home/niryo/catkin_ws/src/niryo_one_python_api/src/niryo_python_api && python /home/niryo/catkin_ws/src/niryo_one_ros/niryo_one_python_api/examples/CXN2_rutina1.py"'
