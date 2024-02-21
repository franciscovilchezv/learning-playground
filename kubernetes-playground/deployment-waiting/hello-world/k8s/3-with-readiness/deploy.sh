kubectl rollout restart deployment hello-world-sleep-readi-deployment &&
kubectl rollout status deployment hello-world-sleep-readi-deployment &&
echo "Deployment finalizado\n"