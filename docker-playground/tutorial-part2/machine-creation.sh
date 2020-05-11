docker-machine create --driver virtualbox myvm1
docker-machine create --driver virtualbox myvm2


docker-machine ssh myvm1 "docker swarm init --advertise-addr <myvm1 ip>"
docker-machine ssh myvm1 "docker swarm init --advertise-addr 192.168.99.100"

docker-machine ssh myvm2 "docker swarm join \
--token <token> \
<ip>:2377"
docker-machine ssh myvm2 "docker swarm join --token SWMTKN-1-4f0c399jgktk8fl4qd5kv8b392mjnewhc1h5glt82dl6q691oa-e10exqx3o2ee6atzko6ykhjb1 192.168.99.100:2377"

docker-machine env myvm1
# Run this command to configure your shell:
# eval $(docker-machine env myvm1)

docker stack deploy -c docker-compose.yml getstartedlab

docker stack rm getstartedlab

docker-machine stop $(docker-machine ls -q)               # Stop all running VMs

docker-machine rm $(docker-machine ls -q) # Delete all VMs and their disk images