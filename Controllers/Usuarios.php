<?php
    class Usuarios extends Controller{
        public function __construct(){
            session_start();
            parent::__construct();
        }

        public function index(){
            $this->views->getView($this, "index");
        }

        public function validar(){
            if(empty($_POST['usuario']) || empty($_POST['clave'])){
                $msj = "Los campos estan vacios";
            }else{
                $usuario = $_POST['usuario'];
                $clave = $_POST['clave'];
                $data = $this->model->getUsuario($usuario,$clave);
                if($data){
                    $_SESSION['id_usuario'] = $data['id'];
                    $_SESSION['usuario'] = $data['usuario'];
                    $_SESSION['nombre'] = $data['nombre'];
                    $msj = "OK";
                }else{
                    $msj = "Usuario o contraseña incorrecta";
                }
            }
            echo json_encode($msj);
            die();
        }
    }
?>