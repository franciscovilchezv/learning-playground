kubectl rollout restart deployment hello-world-sleep-deployment &&
kubectl rollout status deployment hello-world-sleep-deployment &&
echo "Deployment finalizado\n"