[helper resource](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

### Setup
1. Install [the Docker desktop app](https://www.docker.com/products/docker-desktop/).
2. In your terminal, `brew install minikube`.
    - `kubectl` should display [kubectl](https://kubernetes.io/docs/reference/kubectl/kubectl/) menu.
        - See `kubectl --help` for usage. Find more information [here](https://kubernetes.io/docs/reference/kubectl/).
    -  `minikube` should display minikube menu.
3. Open your desktop Docker app.
    1. Click on the settings icon in the top right.
    2. Select "Kubernetes" on the left.
    3. Check the box for “Enable Kubernetes”.
    4. Click "Apply and Restart". [Ex](/public/setupExs/apply-restart.png).
    5. Return to the Docker dashboard by clicking on the X icon in the upper right corner.
4. In your terminal, `minikube start -p [custom cluster name here]`.
    - A container for the cluster you labeled should appear.. [Ex](/public/setupExs/minikube-start.jpg).
        - The dashboard in your Docker app should show [this](/public/setupExs/containers.png).
    - `kubectl get nodes` displays created node. [Ex](/public/setupExs/kubectl-get-nodes.png).
        - Note: the "ROLES" column could say "master" instead of “control-plane”.
    - `kubectl version` shows your client and server version. [Ex](/public/setupExs/kubectl-version.png).
    - `kubectl get pods` currently shouldn't have anything. [Ex](/public/setupExs/kubectl-get-pods.png).
    - `kubectl get services` should have one entry. [Ex](/public/setupExs/kubectl-get-services.png).
5. Navigate to your desired directory.
    1. `brew install prometheus` installs Prometheus. [Ex](/public/setupExs/brew-install-prometheus.png).
    2. `brew install helm` installs Helm. [Ex](/public/setupExs/brew-install-helm.png).
    3. `helm repo add prometheus-community https://prometheus-community.github.io/helm-charts` adds [the Helm repository](https://prometheus-community.github.io/helm-charts/). [Ex](/public/setupExs/helm-repo-add.png).
        - Then `helm repo update`. [Ex](/public/setupExs/helm-repo-update.png).
    4. `helm install [named cluster here] prometheus-community/kube-prometheus-stack`. [Ex](/public/setupExs/helm-install-cluster.png).
        - Visit [here](https://github.com/prometheus-operator/kube-prometheus) for instructions on how to create & configure Alertmanager and Prometheus instances using the Operator.
    5. `kubectl get pod` displays all the pods. [Ex](/public/setupExs/kubectl-get-pod.png).
        1. From the results of the above command, copy the last "NAME" entry except for the starting "prometheus-" and trailling "-0" part.
        2. Then `kubectl port-forward svc/[paste it here] 9090`. [Ex](/public/setupExs/kubectl-port-forward.png).
        3. Visit http://localhost:9090 in the browser, to see the Prometheus web interface. [Ex](/public/setupExs/visit-9090.png).
            - Select "Status" from the above navigation bar then "Targets", to see a list of pre-configured scrape targets. [Ex](/public/setupExs/status-targets.png).
6. ...TO BE CONTINUED.