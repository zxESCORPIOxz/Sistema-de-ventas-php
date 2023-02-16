<?php
    class Cajas extends Controller{
        public function __construct(){
            session_start();
            if(empty($_SESSION['activo'])){
                header('Location: '.base_url);
            }
            parent::__construct();
        }

        public function index(){
            $this->views->getView($this, "index");
        }

        public function listar(){
            $data = $this->model->getCajas();
            for ($i=0; $i < count($data); $i++) { 
                if($data[$i]['estado'] == 1){
                    $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditarcaja('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger" type="button" onclick="btnEliminarcaja('.$data[$i]['id'].');"><i class="fas fa-user-alt-slash"></i></button>
                    </div>';
                }else{
                    $data[$i]['estado'] = '<span class="badge badge-danger">Inactivo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditarcaja('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-success" type="button" onclick="btnReingresarcaja('.$data[$i]['id'].');"><i class="fas fa-user-check"></i></button>
                    </div>';
                }
                
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function registrar() {
            $caja = $_POST['caja'];
            $id = $_POST['id'];
            if( empty($caja) ){
                $msj = array('msj' => "Todos los campos son obligatorios", 'icono' => 'warning');
            }else{
                if($id == ""){
                    $data = $this->model->registrarCaja($caja);
                    if($data == "ok"){
                        $msj = array('msj' => "ok", 'icono' => 'success');
                    }else if($data == "existe"){
                        $msj = array('msj' => "La caja ya esta registrado", 'icono' => 'warning');
                    }else{
                        $msj = array('msj' => "Error al registrar la caja", 'icono' => 'warning');
                    }
                }else{
                    $data = $this->model->modificarCaja($caja, $id);
                    if($data == "modificado"){
                        $msj = array('msj' => "modificado", 'icono' => 'success');
                    }else{
                        $msj = array('msj' => "Error al modificar la caja", 'icono' => 'warning');
                    }
                }
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function editar(int $id){
            $data = $this->model->editarCaja($id);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function eliminar(int $id){
            $data = $this->model->accionCaja(0, $id);
            if ($data == 1){
                $msj = array('msj' => "ok", 'icono' => 'success');
            }else{
                $msj = array('msj' => "Error al eliminar la caja", 'icono' => 'warning');
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function reingresar(int $id){
            $data = $this->model->accionCaja(1, $id);
            if ($data == 1){
                $msj = array('msj' => "ok", 'icono' => 'success');
            }else{
                $msj = array('msj' => "Error al reingresar la caja", 'icono' => 'warning');
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
    }
?>