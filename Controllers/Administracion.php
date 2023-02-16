<?php
    class Administracion extends Controller {
        public function __construct(){
            session_start();
            if(empty($_SESSION['activo'])){
                header('Location: '.base_url);
            }
            parent::__construct();
        }

        public function index(){
            $data = $this->model->getEmpresa();
            $this->views->getView($this, "index", $data);
        }

        public function modificarEmpresa() {
            $id = $_POST['id'];
            $nombre = $_POST['nombre'];
            $ruc = $_POST['ruc'];
            $telefono = $_POST['telefono'];
            $direccion = $_POST['direccion'];
            $mensaje = $_POST['mensaje'];
            if (empty($id) ||
                empty($nombre) ||
                empty($ruc) ||
                empty($telefono) ||
                empty($direccion) ||
                empty($mensaje)) {
                $res = "Todos los campos son obligatorios";
            } else {
                $data = $this->model->modificarEmpresa($id, $nombre, $ruc, $telefono, $direccion, $mensaje);
                if($data == "modificado"){
                    $res = array('msj' => "modificado", 'icono' => 'success');
                }else{
                    $res = array('msj' => "Error al modificar los datos de la empresa", 'icono' => 'warning');
                }
            }
            echo json_encode($res, JSON_UNESCAPED_UNICODE);
            die();
        }
    }

?>