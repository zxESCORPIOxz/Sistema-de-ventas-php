<?php
    class Usuarios extends Controller{
        public function __construct(){
            session_start();
            parent::__construct();
        }

        public function index(){
            if(empty($_SESSION['activo'])){
                header('Location: '.base_url);
            }
            $data['cajas'] = $this->model->getCajas();
            $this->views->getView($this, "index", $data);
        }

        public function validar(){
            if(empty($_POST['usuario']) || empty($_POST['clave'])){
                $msj = "Los campos estan vacios";
            }else{
                $usuario = $_POST['usuario'];
                $clave = $_POST['clave'];
                $hash = hash("SHA256", $clave);
                $data = $this->model->getUsuario($usuario,$hash);
                if($data){
                    $_SESSION['id_usuario'] = $data['id'];
                    $_SESSION['usuario'] = $data['usuario'];
                    $_SESSION['nombre'] = $data['nombre'];
                    $_SESSION['activo'] = true;
                    $msj = "OK";
                }else{
                    $msj = "Usuario o contraseña incorrecta";
                }
            }
            echo json_encode($msj);
            die();
        }

        public function listar(){
            $data = $this->model->getUsuarios();
            for ($i=0; $i < count($data); $i++) { 
                if($data[$i]['estado'] == 1){
                    $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditaruser('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger" type="button" onclick="btnEliminaruser('.$data[$i]['id'].');"><i class="fas fa-user-alt-slash"></i></button>
                    </div>';
                }else{
                    $data[$i]['estado'] = '<span class="badge badge-danger">Inactivo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditaruser('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-success" type="button" onclick="btnReingresaruser('.$data[$i]['id'].');"><i class="fas fa-user-check"></i></button>
                    </div>';
                }
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function registrar() {
            $usuario = $_POST['usuario'];
            $nombre = $_POST['nombre'];
            $clave = $_POST['clave'];
            $confirmar = $_POST['confirmar'];
            $caja = $_POST['caja'];
            $id = $_POST['id'];
            $hash = hash('sha256', $clave);
            if( empty($usuario) || empty($nombre) || empty($caja)){
                $msj = array('msj' => "Todos los campos son obligatorios", 'icono' => 'warning');
            }else{
                if($id == ""){
                    if($clave != $confirmar){
                        $msj = array('msj' => "Las contraseñas no coinciden", 'icono' => 'warning');
                    }else{
                        $data = $this->model->registrarUsuario($usuario, $nombre, $hash, $caja);
                        if($data == "ok"){
                            $msj = array('msj' => "ok", 'icono' => 'success');
                        }else if($data == "existe"){
                            $msj = array('msj' => "El usuario ya existe", 'icono' => 'warning');
                        }else{
                            $msj = array('msj' => "Error al registrar el usuario", 'icono' => 'warning');
                        }
                    }
                }else{
                    $data = $this->model->modificarUsuario($usuario, $nombre, $caja, $id);
                    if($data == "modificado"){
                        $msj = array('msj' => "modificado", 'icono' => 'success');
                    }else{
                        $msj = array('msj' => "Error al modificar el usuario", 'icono' => 'warning');
                    }
                }
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function editar(int $id){
            $data = $this->model->editarUser($id);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function eliminar(int $id){
            $data = $this->model->accionUsuario(0, $id);
            if ($data == 1){
                $msj = array('msj' => "ok", 'icono' => 'success');
            }else{
                $msj = array('msj' => "Error no se pudo eliminar el usuario", 'icono' => 'warning');
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function reingresar(int $id){
            $data = $this->model->accionUsuario(1, $id);
            if ($data == 1){
                $msj = array('msj' => "ok", 'icono' => 'success');
            }else{
                $msj = array('msj' => "Error no se pudo reingresar el usuario", 'icono' => 'warning');
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function salir(){
            session_destroy();
            header('Location: '.base_url);
        }
    }
    
?>